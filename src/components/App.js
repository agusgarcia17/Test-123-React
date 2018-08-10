import React, { Component } from 'react';
import './../css/App.css';
import Main from './Main';
import More from './More';

import{
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          
          <Switch>
              <Route exact path ='/' component={Main}/>
              <Route exact path = '/more' component={More}/>
            </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
