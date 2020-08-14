import React from 'react'
import Cell from './Cell'

const Row = (props) =>
{
  const {rows,rowId} = props

  
  return( <tr>{generateCells(rowId,rows,props)}</tr>  )
} 

const generateCells = (row,rows,props) =>
{
  const cells = [];

  for(let i = 0; i < rows; i++)
  {
    cells.push( <Cell key={`${i}-${row}`} position={`${i} ${row}`} moves={props.moves} apple={props.apple}/> )
  }

  return cells;
}

export default Row;