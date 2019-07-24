import { Link } from "react-router-dom";
import React from 'react';
import './style.css';

export default class NavBarSide extends React.Component {
  render() {
    return (
      <nav class='nav-container'>
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/eateries-list">
              <li>Eatery List</li>
            </Link>
            <Link to="/addEatery">
              <li>Add Eatery</li>
            </Link>
            <Link to="/introduction">
              <li>Team</li>
            </Link>

          </ul>
        </div>
      </nav>
    )
  }
}