import React from 'react';
import logo from './logo.svg';
import './App.css';
import SnakeGameContainer from './containers/SnakeGameContainer'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Leader from './containers/Leader'
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
    .then(records => this.setState({records}))
  }
  
  render() {
    return (
      <BrowserRouter>

    <div className="App">
      <NavBar logged={this.state.logged} toggle={this.toggleLogged} /> 
      <Switch>
        <Route path='/login' render = {(routeProps) => <Login {...routeProps} toggle={this.toggleLogged} /> } />
        <Route path='/signup' render = {(routeProps) => <Signup {...routeProps} toggle={this.toggleLogged} /> } />
        <Route path='/play'         render={(routeProps) => <SnakeGameContainer {...routeProps} loggedIn={this.state.logged} />} />
        <Route path='/leaderboard'  render={(routeProps) => <Leader {...routeProps} records={this.state.records} />} />
        <Route path='/' component={Home}/>
      </Switch> 
      </div>

      </BrowserRouter>
    )
  }
}




