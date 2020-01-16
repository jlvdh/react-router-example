import React from 'react';
import './App.css';

import Home from './components/home';
import OurClass from './components/class';
import Cat from './components/cat';

import {Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/class' component={OurClass}/>
        <Route path='/cat/:name' component={Cat}/>
      </Switch>

    </div>
  );
}

export default App;
