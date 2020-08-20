import React from 'react';
import logo from './logo.svg';
import './App.css';
import SnakeGameContainer from './containers/SnakeGameContainer'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Leader from './components/Leader'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {APIBASE} from './constants/apiBase'


export default class App extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       logged: false,
       records: []
    }
  }

  toggleLogged = () => {
    this.setState({
      logged: !this.state.logged
    })
  }

  componentDidMount(){
    fetch(APIBASE + '/records')
    .then(resp => resp.json())
    .then(users => 
      this.setState({
        records: users
      }))
  }
  
  render() {
    return (
      <BrowserRouter>

    <div className="App">
      <NavBar logged={this.state.logged} toggle={this.toggleLogged} /> 
      <Switch>
        <Route path='/login' render = {(routeProps) => <Login {...routeProps} toggle={this.toggleLogged} /> } />
        <Route path='/signup' render = {(routeProps) => <Signup {...routeProps} toggle={this.toggleLogged} /> } />
        <Route path='/play' component={SnakeGameContainer} />
        <Route path='/leaderboard' render={(routeProps) => <Leader {...routeProps} records={this.state.records} />} />
        <Route path='/' component={Home}/>
      </Switch> 
      </div>

      </BrowserRouter>
    )
  }
}




