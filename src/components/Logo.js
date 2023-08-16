import React from 'react';
import logo from '../images/React-icon.png'
import { Link } from 'react-router-dom';
import '../css/logo.css'

class Logo extends React.Component {
    render() {
      return (
        <div className='logo_wrapper'>
            <Link to="/"><img src={logo} alt='logo'/></Link>
        </div>
      )
    }
  }
  export default Logo