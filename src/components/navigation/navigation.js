import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
// import SignIn from '../signin';
// import SignUp from '../signup';
// import { withRouter } from "react-router";
// import axios from "axios";



class NavBar extends Component {
    constructor() {
        super();


    }
    handleLogOut = () => {
        this.setState(
            {
                username:''
            }
        )
        sessionStorage.clear('username');
    }


    render() {

        return (
            <div className='navigation'>

                {/* <div className='link-wrapper'>
                    <NavLink exact to="/"></NavLink>
                </div> */}
                {sessionStorage.getItem('username') == null && <div className='link-wrapper'>
                    <NavLink to="/login">Sign In</NavLink>
                </div>}
                {sessionStorage.getItem('username') == null && <div className='link-wrapper'>
                    <NavLink to="/user/add"> Register </NavLink>
                </div>}
                {sessionStorage.getItem('username') != null && <div className='link-wrapper'>
                    <NavLink to="/chore/get"> Chores </NavLink></div>}
                {sessionStorage.getItem('username') != null && <div className='link-wrapper' >
                    <NavLink to="/" onClick ={this.handleLogOut} >Log Out</NavLink></div>}
            </div>
        )
    }
}

export default NavBar
// onClick={sessionStorage.clear('username')}