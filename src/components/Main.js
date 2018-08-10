import React, { Component } from 'react';
import './../css/App.css';
import Header from './Header';
import Litebox from './Litebox';
import Pictures from './Pictures';
import Contact from './Contact';
import Footer from './Footer';
import ScrollableAnchor from 'react-scrollable-anchor';


class Main extends Component {
  render() {
    return (
      <div className="Main">
      <Header/>
              
              <div className='boton'>
                <a className='btn' href='#litebox'> GO AHEAD </a>  
              </div>
        <ScrollableAnchor id='litebox'>
          <Litebox/>
        </ScrollableAnchor>

        <hr/>
        <ScrollableAnchor id='galeria'>
        <Pictures/>
        </ScrollableAnchor>

        <hr/>
        <ScrollableAnchor id='contact'>
        <Contact/>
        </ScrollableAnchor>

        <Footer/>


      </div>
    );
  }
}

export default Main;