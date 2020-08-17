import React from 'react'
import compareCoords from '../constants/compareCoords'
import Apple from '../components/Apple'
import Segment from '../components/Segment'

const Cell = ({move,apple,position}) =>
{
  const pos = getPosInt(position.split(' '))

  return( 
    <td className={`${position} cell`}>
      {generateCellContent(move,apple)}
    </td>
  )
}

//render either an apple, segment, or nothing
const generateCellContent = (move,apple) =>
{
  if(move)
    return <Segment move={move} />
  if(apple) 
    return <Apple apple={apple} /> 
}

const getPosInt = (strArr) =>
{
  const pos = strArr
  return pos.map(coord => parseInt(coord))
}

export default Cell;