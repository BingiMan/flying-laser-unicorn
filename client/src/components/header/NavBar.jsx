import { Link } from "react-router-dom";
import React from 'react';
import './style.css';
import NavBarSide from "./NavBarSide";

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

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
              <Link to="/Login"> Login </Link>
              <Link to="/Register"> Register </Link>
            </div>)}
          {this.props.currentUser !== null &&
            <div>Hi, {this.props.currentUser.charAt(0).toUpperCase() + this.props.currentUser.slice(1)} ❤ </div>
          }
          {this.props.currentUser !== null &&
            <div id="logout" onClick={this.props.handleLogOut}>Log Out</div>
          }

        </div>

      </nav>
    );
  }
}