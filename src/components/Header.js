import React from 'react';
import '../css/header.css';
import Nav from './Nav';
import Logo from './Logo';

class Header extends React.Component {
    render() {
      return (
        <header className='header'>
           <div className='container'>
             <div className='header_content'>
              <Logo />
              <Nav />
             </div>
           </div>
        </header>
      )
    }
}

export default Header;
