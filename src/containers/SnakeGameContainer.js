import React, {Component} from 'react'
import SnakeGame from './SnakeGame'
import PausePanel from '../components/PausePanel'
import MenuPanel from '../components/MenuPanel'
import {APIBASE,USERFIND} from '../constants/apiBase'


//----------------------------------------
// Purpose: holds game, pause panel, menu panel
//-----------------------------------------
class SnakeGameContainer extends Component
{
  state = {
    score: 0,
    paused: false,
    userHighScore: 0,
    segments: 1
  }

componentDidMount()
{
  this.setHighScore()
}

setHighScore()
{
  fetch("http://localhost:3000/api/v1/find_user",this.configObj("Get",true))
  .then(r => r.json())
  .then(json => this.setState({userHighScore: json.high_score}))  
}
  
 setScore = (segments) =>
  {
    const score = Math.round(segments * (segments/6))
    this.setState({score,segments})
  }
  pause = () =>
  {
    this.setState({paused: !this.state.paused})
  }

  postScore = () =>
  {
    const data = {score: this.state.score}
    const cfg = this.configObj("POST",true,data)
    fetch('http://localhost:3000/api/v1/records/',cfg)
    .then(r => r.json())
    .then((json) => 
    {
      this.setHighScore()
      console.log(json)
    })
    
  }

  configObj = (method,authenticate,data) =>
  {
    const cfg =
    {
      method,
      headers:
      {
        "Content-Type": 'application/json',
        "accept": 'application/json'
      }
    };
    data && (cfg.body = JSON.stringify(data))
    authenticate && (cfg.headers.Authorization = `Bearer ${localStorage.token}`)
    return cfg
  }

  
  render(){
    const highScore = this.state.userHighScore
    return(
    <div id="game-border">
      <div id="game-container" className="ui container game">
        <PausePanel paused={this.state.paused}/>
        <SnakeGame  setScore={this.setScore} pause={this.pause} 
                    isPaused={this.state.paused} postScore={this.postScore}/>
        <MenuPanel score={this.state.score} segments={this.state.segments}
        highScore={highScore}/>
      </div>
    </div>
    )
  }
}

export default SnakeGameContainer;
