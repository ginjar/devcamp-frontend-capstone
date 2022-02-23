import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './navigation/navigation';
import Header from './navigation/header';
import SignIn from "./authorization.js/signin";
import SignUp from './authorization.js/signup';
import ChoreGenerator from "./generator";



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInValue: "NOT_LOGGED_IN",
      username: ''
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  //trying to pass user to another page changing the state of the username
  // renderUser = (username)=>{
  //   this.setState({
  //   username: username
  //   });
  // }
  handleLogin() {
    console.log("working")
    this.setState({
      loggedInValue: "LOGGED_IN",
      username: {username}
      
    })
  }
  handleUnsuccessfulLogin() {
    this.state({
      loggedInValue: "NOT_LOGGED_IN"
      
    })
  }
  handleLogout() {
    window.sessionStorage.clear('username');
    this.state({
      loggedInValue: "NOT_LOGGED_IN"
      
    })
  }
  loginToView() {

    /**
     * if session storage contains theusername key return loggef_in else return log out 
     */
    let userSession = window.sessionStorage.getItem('username');
    console.log(userSession)
    if (userSession != null) {
      this.setState({
        logInValue: "LOGGED_IN"
      });
    } else { 
      this.setState({
        loggedIn: "NOT_LOGGED_IN"
      });
    }


  }
  viewChoresAuthorized() {
    console.log("is this page authorized")
    return [
      <Route

        key="chore-generator"
        path="/chore/get"
        component={ChoreGenerator} />
    ];
  }

  componentDidMount() {
    this.loginToView();
  }

  render() {

    return (
      <div className='app'>

        <Header />
        <NavBar />

        <Switch >
          <Route exact path="/" component={SignIn} />
        
          <Route exact path="/login" handleLogin={this.handleLogin}component={SignIn} />
          <Route path="/user/add" component={SignUp} />
          
          <Route path="/chore/get"  render= {props => (
            <ChoreGenerator  {...props} loggedInValue={this.state.loggedInValue} username={this.state.username} />
          
          )
          }
          />
    
          {this.state.loggedInValue === "LOGGED_IN"
            ? this.viewChoresAuthorized()
            : null}
        </Switch>

      </div>
    );
  }
}
 //* <Route path="/login" render={() =>
//<SignIn handleLogin={this.handleLogin} />} />  */}