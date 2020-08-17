import React, {Component} from 'react'
import { setInterval, setTimeout, clearInterval, clearTimeout } from 'requestanimationframe-timer';
import {player1keyMap as keys} from '../constants/player1keyMap'
import vectorMap from '../constants/vectorMap'
import Row from './Row'
import compareCoords from '../constants/compareCoords'
import hitSound from '../constants/hitSound'

import movesAtRow from '../constants/movesAtRow';



let intervalID;
const TABLE_SIZE = 20;
const SPEED = 200;

class SnakeGame extends Component
{
  state = {
    moves: [[10,0]],
    vector: [1,0],
    apple: [randomCoordinate(), randomCoordinate()]
  }
  
  componentDidMount()
  {
    intervalID = setInterval(() => this.nextMove(), SPEED)
    document.addEventListener("keydown",e => this.handleKeyDown(e.keyCode))
    
  }
  
  handleKeyDown = (keyCode) =>
  {  
    if(keys[`${keyCode}`])  
    {
      const key = keys[`${keyCode}`]
      if(key === 'esc')
        return clearInterval(intervalID)
      else
        hitSound.play()
      this.setState({vector: vectorMap(key)})
    }
      
  }

  //front of array = head of snake
  nextMove = () => {
    const {moves,vector,apple} = this.state
    const newMoves = (moves.map(move => [move[0],move[1]]))
    //add vector to first move to get new move
    newMoves.unshift([moves[0][0] + vector[0],moves[0][1] + vector[1]])    
    
    if(compareCoords(newMoves[0],apple))
      this.eatApple(newMoves)
    else
      this.noApple(newMoves)
  }

  eatApple = (newMoves) =>
  {
    const moves = newMoves.map(move => [move[0],move[1]])
    this.newApple()
    this.setState({moves})
    console.log(`Ate apple`,`move: ${moves[0]}`, `apple: ${this.state.apple}`)
  }
  noApple = (newMoves) =>
  {
    const moves = newMoves.map(move => [move[0],move[1]])
    moves.pop()
    this.setState({moves})
  }
  //generate new apple location, being sure to never put it on the snake
  newApple = () =>
  {
    let apple = [];
    let taken = true;
    while(taken)
    {
      apple = [randomCoordinate(),randomCoordinate()]
      taken = false;
      const {moves} = this.state
      
      moves.forEach(move => {
        taken = (move[0] === apple[0] && move[1] === apple[1])
      })      
    }
    this.setState({apple})
  }

  generateRows = (n) =>
  {
    const moveMap = movesAtRow(this.state.moves,this.state.vector)
    console.log(moveMap)
    const rows = [];
    for(let i = 0; i < n ; i++)
    {
      rows.push(<Row rows={n} rowId={i} 
                     moves={this.state.moves} 
                     apple={this.state.apple}
                     vector={this.state.vector}
                     /> )
    }
    return rows;
  }

  render()
  {
    const {moves} = this.state
    const [appleX,appleY] = this.state.apple
    return(      
        <table className="snake game" border="0" cellspacing="0" cellpadding="0">
          {this.generateRows(TABLE_SIZE)}
        </table>
    )
  }

}

const randomCoordinate = () =>
{
  return Math.floor(Math.random()*(TABLE_SIZE))
}




export default SnakeGame;