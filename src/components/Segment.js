import React from 'react'

const Segment = ({move}) =>
{
  return(
    <img className="cell image" 
    src={require(`../images/snake_${move.snakePart}.png`)} alt=""
    style={{transform: `rotate(${move.angle}deg)`}}
    />//
  )
}

export default Segment;