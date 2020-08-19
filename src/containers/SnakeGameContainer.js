import React, {Component} from 'react'
import SnakeGame from './SnakeGame'
import PausePanel from '../components/PausePanel'
import MenuPanel from '../components/MenuPanel'


//----------------------------------------
// Purpose: holds game, pause panel, menu panel
//-----------------------------------------
class SnakeGameContainer extends Component
{
  state = {
    score: 0,
    paused: false,
  }

 setScore = (segments) =>
  {
    const score = Math.round(segments * (segments/6))
    this.setState({score},() => console.log(segments,this.state.score))
  }
  pause = () =>
  {
    this.setState({paused: !this.state.paused})
  }

  postScore = () =>
  {
    const data = {score: this.state.score}
    const cfg = this.configObj("POST",data,true)
    fetch('http://localhost:3000/api/v1/records/',cfg)
    .then(r => r.json())
    .then(json => console.log(json))
  }

  configObj = (method,data,authenticate) =>
  {
    const cfg =
    {
      method,
      headers:
      {
        "Content-Type": 'application/json',
        "accept": 'application/json'
      },
      body: JSON.stringify(data)
    }
    authenticate && (cfg.headers.Authorization = `Bearer ${localStorage.token}`)
    console.log(cfg)
    return cfg
  }

  
  render(){
    return(
      <div id="game-container" className="ui container game">
        <PausePanel paused={this.state.paused}/>
        <SnakeGame setScore={this.setScore} pause={this.pause} postScore={this.postScore}/>
        <MenuPanel score={this.state.score}/>
      </div>
    )
  }
}

export default SnakeGameContainer;
