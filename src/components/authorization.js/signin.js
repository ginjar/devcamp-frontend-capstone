import React, { Component } from "react";
import axios from "axios";
// import { connect } from "react-redux";



export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            err: ''
        };
        this.handleSuccessAuth = this.handleSuccessAuth.bind(this);
        this.handleFailedAuth = this.handleFailedAuth.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    };



    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            err: ""
        });

    }
    handleSuccessAuth() {
        window.sessionStorage.getItem("username")
        
        this.setState({
            loggedIn: "LOGGED_IN",
            
            

        })

    
        location.replace('/chore/get')

    }
    handleFailedAuth() {
        this.setState({
            loggedIn: "NOT_LOGGED_IN",
            err: "Login Failed! Please Try Again or Register to Use Chore Generator"
        });
      
    }

    handleSubmit(event) {
        event.preventDefault();
        
        console.log(this.state.username)
        axios.post("https://chore-backend-gina.herokuapp.com/login",
            {

                username: this.state.username,
                password: this.state.password

            },


        ).then(response => {
            
            if (response.status === 200) {
                window.sessionStorage.setItem("username", response.data.user_info);
              
                return this.handleSuccessAuth()
                
            } else {
                this.setState({
                    err: " not valid login"
                });
                this.handleFailedAuth();
            }
            console.log(user_info)
        }).catch(err => {
            console.log("an error has occured", err);
            this.setState({
                err: "An error has occurred"
            });
            this.handleFailedAuth();
        });
        event.preventDefault();
    }
    render() {

        return (
            <div className="sign-in">
               
               <div className="title"> <h1>Sign-In Here To See Your Chores</h1></div>
                  <div className="title">  {this.state.err && <h2 className="error">{this.state.err}</h2>}</div>
                    
                <form onSubmit={this.handleSubmit} className="sign-form">
                    <div className="form-fields">
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            onChange={this.handleOnChange}


                            value={this.state.username}
                        />
                    </div>
                    <div className="form-fields">
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={this.handleOnChange}

                            value={this.state.password}
                        />
                    </div>

                    <div className="button">
                    <button type="submit" className="btn">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
