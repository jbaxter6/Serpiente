import Segment from '../components/Segment'
import React, {Fragment} from 'react'

const SnakeBody = props =>
{
  return(
    <div>{props.moves.map(move => <Segment x={move[0]} y={move[1]} />)}</div>
      
    
  )
}

export default SnakeBody;