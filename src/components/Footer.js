import React from 'react';
import '../css/footer.css'
import Nav from './Nav';
import Logo from './Logo';

class Footer extends React.Component {
    render() {
      return (
        <footer className='footer'>
          <div className='container'>
           <div className='footer_content'>
           <Logo />
            <Nav />
           </div>
          </div>
        </footer>
      )
    }
  }
  export default Footer