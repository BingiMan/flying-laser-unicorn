import {Link} from "react-router-dom";
import React from 'react';
import './style.css';
import NavBarSide from "./NavBarSide";
import LoginUser from "../main/LoginUser";
import RegisterUser from "../main/RegisterUser";

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLogin: false,
            showRegister: false,
        };

        this.tabs = [
            // {
            //   link: '/',
            //   label: 'Home',
            // },
            // {
            //   link: '/introduction',
            //   label: 'Introduction'
            // },
            // {
            //   link: '/addEatery',
            //   label: 'Eatery',
            // },
            // {
            //   link: '/eateries-list',
            //   label: 'Eatery List',
            // },
            // {
            //   link: '/login',
            //   label: 'Login',
            // },
            // {
            //   link: '/register',
            //   label: 'Register',
            // }
        ]
    }

    //
    // linkOrButton(tab) {
    //   if (tab.link) {
    //     return <Link to={tab.link}>{tab.label}</Link>
    //   } else {
    //     return <button>{tab.label}</button>
    //   }
    // }
    // this.tabs.map(tab => this.linkOrButton(tab))

    showRegister = () => {
        this.setState({
            showRegister: true,
            showLogin: false
        })
    };

    hideRegister = () => {
        this.setState({
            showRegister: false
        })
    };

    showLogin = () => {
        this.setState(
            {
                showLogin: true,
                showRegister: false
            }
        )
    };

    hideLogin = () => {
        this.setState(
            {
                showLogin: false
            }
        )
    };


    render() {

        let prevScrollpos = window.pageYOffset;
        window.onload = function(){
            document.querySelector(".nav-wrapper-left").style.visibility = "hidden";
        };
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos < 200) {
                document.querySelector(".nav-wrapper-left").style.visibility = "hidden";
            } else {
                document.querySelector(".nav-wrapper-left").style.visibility = "visible";
            }
            prevScrollpos = currentScrollPos;
        };

        console.log(window.pageYOffset);
        return (
            <>
                <NavBarSide/>
                <div className="nav-wrapper">
                    <div className="nav-opts">
                        <div className="nav-wrapper-left">
                            <Link to="/"> Home </Link>
                            <Link to="/introduction"> Introduction </Link>
                            <Link to="/addEatery"> Add Eatery </Link>
                            <Link to="/eateries-list"> Eateries </Link>
                        </div>
                        {this.props.currentUser === null &&
                        (<div className="nav-wrapper-right">
                            <button className="btn btn1" onClick={this.showLogin}> Login</button>
                            <button className="btn btn2" onClick={this.showRegister}> Register</button>
                        </div>)}
                        {this.props.currentUser !== null &&
                        <div>Hi, {this.props.currentUser.charAt(0).toUpperCase() + this.props.currentUser.slice(1)} ❤ </div>
                        }
                        {this.props.currentUser !== null &&
                        <div id="logout" onClick={this.props.handleLogOut}> Log Out</div>
                        }

                    </div>
                </div>

                {this.state.showLogin ? <LoginUser handleChange={this.props.handleLoginChange}
                                                   handleSubmit={this.props.handleLoginSubmit}
                                                   formData={this.props.loginFormData}
                                                   hideLogin={this.hideLogin}
                /> : ''}
                {this.state.showRegister ? <RegisterUser formData={this.props.registerFormData}
                                                         handleChange={this.props.handleRegisterChange}
                                                         handleSubmit={this.props.handleRegisterSubmit}
                                                         hideRegister={this.hideRegister}
                                                         showLogin={this.showLogin}

                /> : ''}

            </>
        );
    }
}