import React from 'react'
import compareCoords from '../constants/compareCoords'
import Apple from '../components/Apple'
import Segment from '../components/Segment'

const Cell = (props) =>
{
  const pos = getPosInt(props.position.split(' '))
  let active_snake = false;
  let active_apple = compareCoords(pos, props.apple)
 
  props.moves.forEach((move) => {
    if(compareCoords(move,pos))
      active_snake = true;
  })

  return( 
    <td className={`${props.position} cell`} >
      {active_snake && <Segment />}
      {active_apple && <Apple />}
      {!active_apple && !active_snake && <div className="placeholder"></div>}
    </td>
  )  
}

const getPosInt = (strArr) =>
{
  const pos = strArr
  return pos.map(coord => parseInt(coord))  
}

export default Cell;