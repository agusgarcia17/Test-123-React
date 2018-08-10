import React, { Component } from 'react';
import './../css/App.css';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert(`Gracias ${this.state.value} tu mensaje fue enviado correctamente`);
        event.preventDefault();
      }

    render() {
    return (

        <div className = 'inTouch'>

        <h1> Get in touch! </h1>

        <form onSubmit={this.handleSubmit}>
            <div className='fix'> 
                <input className='short' type="text" placeholder='Name' value={this.state.value} onChange={this.handleChange} />
                <input className='short' type="email" placeholder='Email'/>
            </div>
            <input className='big' type="text" name="text" placeholder='How can I help you?'/>

            <div className='msj'>
            <input className='enviar' type="submit" value="Submit" disabled={this.state.value===''} />
            <span className="tooltiptext">Complete form</span>
            </div>
            
        </form>

        </div>
    );
  }
}

export default Contact;