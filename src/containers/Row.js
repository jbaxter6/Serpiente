import React from 'react'
import Cell from './Cell'

const Row = (props) =>
{
  return( <tr>{generateCells(props)}</tr>  )//
} 

const generateCells = ({rowId,rows,apple,moves}) =>
{
  const cells = [];

  for(let i = 0; i < rows; i++)
  {
    cells.push( <Cell key={`${i}-${rowId}`} 
                      position={`${i} ${rowId}`} 
                      move={moves ? moves[i] : null} 
                      apple={ apple ? (apple[0] === i ? apple : null) : null}/> )
  }

  return cells;
}

export default Row;