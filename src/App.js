import React from 'react';
import './assets/css/App.css';
import {Switch, Route} from 'react-router-dom'
import Nav from './components/Navigation';
import MyComponent from './components/MyComponent';
import Home from './components/Home';


function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home2">
          nada por ahora
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
