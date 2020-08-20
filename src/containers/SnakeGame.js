import React, {Component} from 'react'
import { setInterval, clearInterval } from 'requestanimationframe-timer';
import {player1keyMap as keys} from '../constants/player1keyMap'
import vectorMap from '../constants/vectorMap'
import Row from './Row'
import compareCoords from '../constants/compareCoords'
import negateVec from '../constants/negateVec'

import hitSound from '../sounds/hitSound'
import growSound from '../sounds/growSound'
import eatSound from '../sounds/eatSound'
import startSound from '../sounds/startSound'
import deathSound from '../sounds/deathSound'

import movesAtRow from '../constants/movesAtRow';
import vecDiff2d from '../constants/vecDiff2d';
import addVectors from '../constants/addVectors'

import terrain from '../constants/terrain'

let intervalID;
const TABLE_SIZE = 20;
const SPEED = 140;
class SnakeGame extends Component
{
  state = {
    moves: [[10,0]],
    vector: [1,0],
    apple: [10,9],
    paused: true,
    alive: true
  }
  
  componentDidMount()
  {
    //intervalID = setInterval(() => this.nextMove(), SPEED)
    document.addEventListener("keydown",e => this.handleKeyDown(e))
    startSound.play();
  }
  
  //game ended
  endGame = () =>
  {
    this.props.postScore()
    this.setState({alive: false})
    deathSound.play()
    clearInterval(intervalID)
    intervalID = setInterval(() => this.killSnake(),SPEED)
  }
  
  killSnake = () =>
  {
    const {moves} = this.state
    if(moves && moves[0])
    this.setState({moves: moves.slice(1)})
  }
  
  handleKeyDown = (e) =>
  {  
    if(keys[`${e.keyCode}`])
    {
      e.preventDefault()
      const key = keys[`${e.keyCode}`]
      if(key === 'esc')
      {
        const {paused} = this.state
        
        if(paused)
        intervalID = setInterval(() => this.nextMove(), SPEED)
        else
        clearInterval(intervalID)
        this.setState({paused: !paused})
      }
      else
      {
        hitSound.play()
        
        const vector = vectorMap(key)
        if(!compareCoords(vector,negateVec(this.state.vector)) || !this.state.moves[1])
          this.setState({vector})
      }
    }
    
  }
  
  //front of array = head of snake
  nextMove = () => {
    let {moves,vector,apple} = this.state
    let newMoves = (moves.map(move => [move[0],move[1]]))
    
    
    //add vector to first move to get new move
    let newMove = addVectors(moves[0],vector)
    //is user trying to double back snake?
    if(moves[1] && compareCoords(moves[1],newMove))
    {
      vector = negateVec(vector)
      newMove = addVectors(moves[0],vector)
      console.log("Snake was doubling-back, and its direction was corrected")
    }
    
    
    newMoves.unshift(newMove)    
    
    //is next move hitting the snake?
    let dead = false;
    for(let i = 1; i < newMoves.length ; i++)
    { 
      if (compareCoords(newMoves[0],newMoves[i]))
      {
        console.log(`2 segments collided at ${newMoves[0]}` )
        dead = true;
      }
    }
    //is snake out of bounds? bad snake
    const [x,y] = newMove
    if(x < 0 || y < 0 || x >= TABLE_SIZE || y >= TABLE_SIZE || dead)
    return this.endGame()
    
    if(compareCoords(newMoves[0],apple))
      this.eatApple(newMoves,vector)
    else
      this.noApple(newMoves,vector)
  }
  
  eatApple = (newMoves,vector) =>
  {
    const moves = newMoves.map(move => [move[0],move[1]])
    this.newApple()
    this.setState({moves,vector},() => {this.props.setScore(this.state.moves.length)})
    if(Math.floor(Math.random()*3)+1 === 1)
    growSound.play()
    eatSound.play()
  }
  noApple = (newMoves,vector) =>
  {
    const moves = newMoves.map(move => [move[0],move[1]])
    moves.pop()
    this.setState({moves,vector})
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
        (move[0] === apple[0] && move[1] === apple[1]) && (taken = true)
      })
      terrain.forEach((coord) => (compareCoords(coord,apple)) && (taken = true))      
    }
    this.setState({apple})
  }
  
  generateRows = (n) =>
  {
    const {moves,vector,alive} = this.state
    const moveMap = movesAtRow(moves,vector,alive)
    const {apple} = this.state
    const rows = [];
    for(let i = 0; i < n ; i++)
    {
      rows.push(<Row rows={n} rowId={i} 
                     moves={moveMap[i] ? moveMap[i] : null} 
                     apple={apple[1] === i ? apple : null}
                     /> )
    }
    return rows;
  }
  
  render()
  {
    const {moves} = this.state
    const [appleX,appleY] = this.state.apple
    return(
      <div id="snake-game-box">
        <table className="snake game" border="0" cellspacing="0" cellpadding="0">
          {this.generateRows(TABLE_SIZE)}
        </table>
      </div>
    )
  }
  
}

const randomCoordinate = () =>
{
  return Math.floor(Math.random()*(TABLE_SIZE))
}





export default SnakeGame;