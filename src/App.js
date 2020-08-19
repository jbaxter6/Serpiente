import React from 'react';
import logo from './logo.svg';
import './App.css';
import SnakeGameContainer from './containers/SnakeGameContainer'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


const App = () => {  
  return (
    <BrowserRouter>
      <div className="App">      
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
          </Switch>
        <NavBar /> 
        <SnakeGameContainer />      
      </div>
    </BrowserRouter>
  );
}

export default App;
