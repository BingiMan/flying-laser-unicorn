import { Link } from "react-router-dom";
import React from 'react';
import './style.css';
import NavBarSide from "./NavBarSide";
import LoginUser from "../main/LoginUser";

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      showLogin: false
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

  showLogin= () =>{
    this.setState((prevState, props) => (
        {
          showLogin: true
        }
    ), () => {

    });
  };

  hideLogin = () =>{
    this.setState((prevState, props) => (
        {
          showLogin: false
        }
    ), () => {

    });
  };

  render() {
    return (
      <nav>
        <NavBarSide />
        <div className="nav-wrapper">
          <div className="nav-wrapper-left">
            <Link to="/"> Home </Link>
            <Link to="/introduction"> Introduction </Link>
            <Link to="/addEatery"> Add Eatery </Link>
            <Link to="/eateries-list"> Eateries </Link>
          </div>
          {this.props.currentUser === null &&
            (<div className="nav-wrapper-right">
              <button className="btn" onClick={this.showLogin}> Login </button>
              <button className="btn"> Register </button>
            </div>)}

          { this.state.showLogin ? <LoginUser handleChange={this.props.handleChange}
                                              handleSubmit={this.props.handleSubmit}
                                              formData={this.props.formData}
                                              hideLogin={this.hideLogin}
          /> : ''}
          {this.props.currentUser !== null &&
            <div>Hi, {this.props.currentUser.charAt(0).toUpperCase() + this.props.currentUser.slice(1)} ❤ </div>
          }
          {this.props.currentUser !== null &&
            <div onClick={this.props.handleLogOut}>Log Out</div>
          }

        </div>

      </nav>
    );
  }
}