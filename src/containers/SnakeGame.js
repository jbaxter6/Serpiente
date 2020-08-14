import React, {Component} from 'react'
import { setInterval, setTimeout, clearInterval, clearTimeout } from 'requestanimationframe-timer';
import {player1keyMap as keys} from '../constants/player1keyMap'
import vectorMap from '../constants/vectorMap'
import Apple from '../components/Apple'
import SnakeBody from './SnakeBody'

let intervalID;

class SnakeGame extends Component
{
  state = {
    moves: [[1,1]],
    vector: [1,0],
    apple: [randomCoordinate(), randomCoordinate()]
  }
  
  componentDidMount()
  {
    intervalID = setInterval(() => this.nextMove(), 200)
    document.addEventListener("keydown",e => this.handleKeyDown(e.keyCode))
    
  }
  
  handleKeyDown = (keyCode) =>
  {    
    const key = keys[`${keyCode}`]
    if(key === 'esc')
      return clearInterval(intervalID)
    this.setState({vector: vectorMap(key)})
  }

  // moveSnake = () => {
  //   let moves = [];
  //   const {vector} = this.state
    
  //   for (let i = 0; i < this.state.moves.length; i++)
  //   {
  //     moves[i] = [this.state.moves[i][0] + vector[0],this.state.moves[i][1] + vector[1]]
  //   }
    
  //   this.setState({moves})


    
  // }

  //front of array = head of snake
  nextMove = () => {
    const {moves,vector,apple} = this.state.moves
    const newMoves = moves.map(move => [move[0],move[1]])
    newMoves.unshift([moves[0][0] + vector[0],moves[1][0] + vector[1]])
    
    
    if(equalCoordinates(newMoves[0],apple))
      this.eatApple(newMoves)
    else
      this.noApple(newMoves)


  }

  eatApple = (newMoves) =>
  {
    const moves = newMoves.map(move => [move[0],move[1]])
    this.setState({moves})
    this.newApple()
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

  render()
  {
    const {moves} = this.state.moves
    const [appleX,appleY] = this.state.apple
    return(
      <div  className="snake game container">
        <SnakeBody moves={moves} />
        <Apple x={appleX} y={appleY} />
      </div>
    )
  }

}

const randomCoordinate = () =>
{
  return Math.floor(Math.random()*101)
}

const equalCoordinates = (array1,array2) =>
{
  return array1[0] === array2[0] && array1[1] === array2[1]
}


export default SnakeGame;