import React, { Component } from 'react';
import './../css/App.css';
import Facebook from './../img/5.png';
import Twitter from './../img/12.png';
import Dribbble from './../img/1.png';



class Footer extends Component {
  
  myPrint (){
    window.print();
  }
  
  render() {
    

    return (

        <footer> 
        <div>
          <section className='redes'>
                 <a href='http://twitter.com/123seguro' target="_blank" rel="noopener noreferrer" className='red'> <img src ={Twitter} alt='twitter'/> </a> 
                 <a href='https://dribbble.com/search?q=123seguro' rel="noopener noreferrer" target="_blank" className='red'> <img src= {Dribbble} alt='dribbble'/></a> 
                 <a href='https://www.facebook.com/123seguro/' target="_blank" rel="noopener noreferrer" className='red'> <img src= {Facebook} alt='facebook'/> </a> 
          </section>
        </div>

        <div className='align'>
        <button onClick={this.myPrint} > Imprint </button> </div>

        </footer>

    );
  }
}

export default Footer;