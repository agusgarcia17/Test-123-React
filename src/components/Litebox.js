import React, { Component } from 'react';
import './../css/App.css';
import Pencil from './../img/8.jpeg';
import Radar from './../img/4.jpeg';
import Lupa from './../img/11.jpeg';

class Litebox extends Component {
  render() {
    return (
      <div className="liteBox">
        
        <section className='mainText'>
            <h1>LITEBOX TEST</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </section>

        <section className='littleBoxes'>
                 <figure>
                    <img src={Pencil} alt='pencil'/>
                    <figcaption> Sketching is fun </figcaption>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, </p>
                </figure>
                <figure>
                    <img src={Radar} alt='radar'/>
                    <figcaption> Desing afterwards </figcaption>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, </p>
                </figure>
                <figure>
                    <img src={Lupa} alt='lupa'/>
                    <figcaption> Finalize </figcaption>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, </p>
                </figure>
        </section>
        
      </div>
    );
  }
}

export default Litebox;