import React, { Component } from 'react'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default class LoginStatus extends Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn:false,
        };
    }

    loginClick = () => {
        this.setState({isLoggedIn: !this.state.isLoggedIn});        
    }

    logoutClick = () => {
        this.setState({isLoggedIn: !this.state.isLoggedIn});
    }
    render() {
        return (
            <div>

                {this.state.isLoggedIn ? (
                    <div>
                        <h1>Welcome</h1>
                        <p>User</p>
                    </div>
                ) : (
                    <h1>Please Login First</h1>
                ) } 

                {this.state.isLoggedIn ? (
                    <LogoutButton logoutmsg={this.logoutClick}/>
                ) : (
                    <LoginButton loginmsg={this.loginClick}/>
                )}


                
            </div>
        );
    }
}
