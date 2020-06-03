import React from 'react';
import './assets/css/App.css';
import Saluda from './components/MyComponent'

function App() {
  return (
    <div className="App">
      <Saluda name={"Juan"} />
      <Saluda name={"Mundo"} />
      <Saluda />
    </div>
  );
}

export default App;
