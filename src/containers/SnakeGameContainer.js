import React, {Component} from 'react'
import SnakeGame from './SnakeGame'
import PausePanel from '../components/PausePanel'
import MenuPanel from '../components/MenuPanel'

class SnakeGameContainer extends Component
{
  state = {
    score: 0,
    paused: false,
  }

 setScore = (segments,time) =>
  {
    const score = segments * (segments/3) - (time/20)
    this.setState({score})
  }
  pause = () =>
  {
    this.setState({paused: !this.state.paused})
  }

  
  render(){
    return(
      <div id="game-container" className="ui container game">
        <PausePanel paused={this.state.paused}/>
        <SnakeGame setScore={this.setScore} pause={this.pause}/>
        <MenuPanel />
      </div>
    )
  }
}

export default SnakeGameContainer;
