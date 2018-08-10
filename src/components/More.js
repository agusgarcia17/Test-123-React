import React, { Component } from 'react';
import './../css/App.css';

import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

class More extends Component {

    constructor(props){
        super(props)

        this.state =({
            dogs:[]
        })
    }

    componentDidMount(){
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => data.message)
            .then(dogs => {
                this.setState ({dogs})
                console.log(this.state.dogs)
            })
    }

    render() {
      return (
  
          <div className = 'mensaje'>
              <h1> More is coming soon...</h1>
              <h1> Meanwhile here you have a random cat </h1>

            <a href="http://thecatapi.com">
               <img src="http://thecatapi.com/api/images/get?format=src&type=gif" alt ='cat'/>
            </a>

            <h1> And here is a random dog using fetch ;) </h1>

            <a href='https://dog.ceo/dog-api/'>
                <img className='dog' src={this.state.dogs} alt='dog'/>
            </a>

                <Router>
                    <Link to='/' onClick={this.forceUpdate}> Go Back!</Link>
                </Router>

  
        </div>
      );
    }
  }
  
  export default More;