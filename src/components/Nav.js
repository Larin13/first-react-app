import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css'

class Nav extends React.Component {
    render() {
      return (
        <nav className='nav'>
             <div className='nav_link_wrapper'><NavLink to="/">Home</NavLink></div>
              <div className='nav_link_wrapper'><NavLink to="/news">News</NavLink></div>
              <div className='nav_link_wrapper'><NavLink to="/profile">Profile</NavLink></div>
        </nav>
      )
    }
  }
  export default Nav
