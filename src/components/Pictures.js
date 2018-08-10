import React, { Component } from 'react';
import './../css/App.css';
import Lupita from './../img/9.png';
import Buda from './../img/2.jpg';
import Horizonte from './../img/10.jpg';
import Flor from './../img/6.jpg';
import Mesa from './../img/3.jpg';

import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

class Pictures extends Component {
  render() {
    return (

        <div className = 'pictures'>
            <div className="galeria">
                <figure> 
                    <img className='pic' src={Buda} alt = 'buda'/>
                    <figcaption> <span> Lorem ipsum dolor sit </span> <br/> amet, consetetur sadipscing elitr</figcaption>
                    <a href={Buda}> <img className='lupa' src={Lupita} alt = ''/> </a>
                </figure>
                <figure> 
                    <img className='pic'  src={Horizonte} alt = 'horizonte'/>
                    <figcaption> <span> Lorem ipsum dolor sit </span> <br/> amet, consetetur sadipscing elitr </figcaption>
                    <a href = {Horizonte} ><img className='lupa'  src={Lupita} alt = ''/> </a>
                </figure>
                <figure> 
                    <img className='pic'  src={Flor} alt = 'flor'/>
                    <figcaption> <span> Lorem ipsum dolor sit </span> <br/> amet, consetetur sadipscing elitr</figcaption>
                    <a href={Flor} ><img className='lupa'  src={Lupita} alt = ''/> </a>
                </figure>
                <figure> 
                    <img className='pic'  src={Mesa} alt = 'mesa'/>
                    <figcaption> <span> Lorem ipsum dolor sit </span> <br/>amet, consetetur sadipscing elitr </figcaption>
                    <a href={Mesa}><img className='lupa'  src={Lupita} alt = ''/></a>
                </figure>
            </div>
            <Router>
                <Link  className='more' onClick={this.forceUpdate} to='/more'> VIEW MORE &#x21E8;</Link>
            </Router>

      </div>
    );
  }
}

export default Pictures;