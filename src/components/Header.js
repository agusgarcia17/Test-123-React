import React, { Component } from 'react';
import './../css/App.css';
import Logo from './../img/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav>
            <a href='https://www.123seguro.com' target="_blank" rel="noopener noreferrer"> <img src={Logo} alt='logo' className='logo'/> </a>

            <ul>
                <li> <a href='/' className='navLink'> <u> START </u> </a> </li>
                <li> <a href='#litebox' className='navLink'> LITEBOX </a> </li>
                <li> <a href ='#galeria' className='navLink'> GALERIA </a> </li>
                <li> <a href='#contact' className='navLink'> CONTACT </a> </li>
            </ul>
        </nav>

        <div className='title'>
            <h1> May I introduce myself? </h1>
            <hr className='line'/>
            <h2>Frontend Design | UX/UI Design </h2>
        </div>
        
      </div>
    );
  }
}

export default Header;
