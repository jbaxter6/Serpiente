import React from 'react';
import logo from './logo.svg';
import './App.css';
import SnakeGame from './containers/SnakeGame'
import NavBar from './components/NavBar'

const App = () => {  
  return (
    <div className="App">
      <NavBar />
      <SnakeGame />
    </div>
  );
}

export default App;
