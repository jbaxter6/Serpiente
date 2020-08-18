import React from 'react';
import logo from './logo.svg';
import './App.css';
import SnakeGame from './containers/SnakeGame'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => {  
  return (
      <BrowserRouter>

    <div className="App">
        <NavBar />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch>
        <SnakeGame />
    </div>

      </BrowserRouter>
  );
}

export default App;
