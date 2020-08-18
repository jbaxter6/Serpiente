import React from 'react';
import logo from './logo.svg';
import './App.css';
import SnakeGameContainer from './containers/SnakeGameContainer'
import NavBar from './components/NavBar'
import Login from './components/Login'


const App = () => {  
  return (
    <div className="App">
      {/* {<NavBar />} */}
      {/* {<Login />} */}
      <SnakeGameContainer />      
    </div>
  );
}

export default App;
