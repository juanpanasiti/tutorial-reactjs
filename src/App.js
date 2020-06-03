import React from 'react';
import './assets/css/App.css';
import {Switch, Route} from 'react-router-dom'
import Nav from './components/Navigation';
import MyComponent from './components/MyComponent';


function App() {
  return (
    <div>
      <Nav />
      Probando nav
      <Switch>
        <Route exact path="/f1" component={MyComponent} />
        <Route exact path="/f2">
          <MyComponent />
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
