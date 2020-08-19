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
    const score = segments * (segments/6)
    this.setState({score},() => console.log(segments,this.state.score))
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
        <MenuPanel score={this.state.score}/>
      </div>
    )
  }
}

export default SnakeGameContainer;
