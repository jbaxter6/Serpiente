import React from 'react';
import logo from './logo.svg';
import './App.css';
import SnakeGame from './containers/SnakeGame'
import NavBar from './components/NavBar'
import Login from './components/Login'

const App = () => {  
  return (
    <div className="App">
      {/* {<NavBar />} */}
      {/* {<Login />} */}
      <div id="game-container" className="ui container game">
        <SnakeGame />
        <div id="game-menu"></div>
      </div>
      
    </div>
  );
}

export default App;
