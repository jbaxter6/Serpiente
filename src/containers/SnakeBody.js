import Segment from '../components/Segment'
import {Fragment,React} from 'react'

const SnakeBody = props =>
{
  return(
    <>
      {props.moves.forEach(move => <Segment move={move} />)}
    </>
  )
}

export default SnakeBody;