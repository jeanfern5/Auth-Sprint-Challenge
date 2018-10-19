import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';

import './App.css';
import Signup from './signup/SignUp.js';
import Signin from './signin/SignIn.js';
import Jokes from './jokes/Jokes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to='/signup' color=''>Sign Up</NavLink>
            &nbsp; | &nbsp;
            <NavLink to='/signin'>Sign In</NavLink>
            &nbsp; | &nbsp;
            <NavLink to='/jokes'>Jokes List:</NavLink>
          </nav>
          <main>
            <Route path='/signup' component={Signup} />
            <Route path='/signin' component={Signin} />
            <Route path='/jokes' component={Jokes} />
          </main>
        </header>
      </div>
    );
  }
}

export default App;
