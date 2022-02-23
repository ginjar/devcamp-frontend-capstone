import React, { Component } from "react";
import axios from "axios";
// import { connect } from "react-redux";



export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            err: ""
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    };
    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            err: ""
        });

    }
    

//need to verify that it is working
    handleSubmit(event) {
        event.preventDefault();
        
        axios.post("https://chore-backend-gina.herokuapp.com/user/add",
 {
                
                    username: this.state.username,
                    password: this.state.password
                    
               
            },
        ).then(response => {
            if (response.status === 200) {
                console.log(response);
            
                this.props.history.push('/login')
               
                } else {
                this.setState({
                    err: " not valid login"
                    
                });
               
            }

        }).catch(err => {
            console.log("an error has occured", err);
            this.setState({
                err: "Not a Valid Login"
            });
           
        });
        
    }
    
    render() {
        return (
            <div className="sign-in">

                <div className="title"><h1>Sign Up To Use The Chore Generator</h1></div> 
                <div className="title">  {this.state.err && <h2 className="error">{this.state.err}</h2>}</div>
                  
                <form onSubmit={this.handleSubmit} className="sign-form">
                    <div className="form-fields">
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            onChange={this.handleOnChange}
                            //value={this.state.username}
                        />
                    </div>
                    <div className="form-fields">
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={this.handleOnChange}
                        //value={this.state.password}
                        />
                    </div>
                    <div className="button">
                    <button type="submit" className="btn">Sign Up</button>
                    </div>
                </form>
      
                       
            </div>
        )
    }
}