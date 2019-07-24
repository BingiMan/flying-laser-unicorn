import { Link } from "react-router-dom";
import React from 'react';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.tabs = [
      {
        link: '/',
        label: 'Home',
      },
      {
        link: '/introduction',
        label: 'Introduction'
      },
      {
        link: '/addEatery',
        label: 'Eatery',
      },
      {
        link: '/eateries-list',
        label: 'Eatery List',
      },
      {
        link: '/login',
        label: 'Login',
      },
      {
        link: '/register',
        label: 'Register',
      },
      {
        link: '/comments',
        label: 'Comments'
      }
    ]
  }

  linkOrButton(tab) {
    if (tab.link) {
      return <Link to={tab.link}>{tab.label}</Link>
    } else {
      return <button>{tab.label}</button>
    }
  }

  render() {
    return (
      <nav>
        {
          this.tabs.map(tab => this.linkOrButton(tab))
        }
      </nav>
    );
  }
}