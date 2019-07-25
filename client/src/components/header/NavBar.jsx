import { Link } from "react-router-dom";
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
    ]
  }

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
    const loggedIn = localStorage.getItem('clientId');

    return (
      <>
        <NavBarSide />
        <div className="nav-wrapper">
          <div className="nav-opts">
            <div className="nav-wrapper-left">
              <Link to="/"> Home </Link>
              <Link to="/addEatery"> Add Eatery </Link>
              <Link to="/eateries-list"> Eateries </Link>
            </div>
            {!loggedIn &&
              (<div className="nav-wrapper-right">
                <button className="btn btn1" onClick={this.showLogin}> Login</button>
                <button className="btn btn2" onClick={this.showRegister}> Register</button>
              </div>)}
            {loggedIn &&
           <div className="display-username">Hi, {this.props.currentUser} ❤ </div>
           }
            {loggedIn &&
              <button className="btn3" id="logout" onClick={this.props.handleLogOut}> Log Out</button>
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