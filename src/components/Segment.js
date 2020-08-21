import React from 'react'
//-------------------------------------------------------=
//Purpose: Display a snake part pic and rotate it
//        
//-------------------------------------------------------=

const Segment = ({move}) =>
{
  const [,y] = move.move
  const style = {
    transform: `rotate(${move.angle}deg)`,
    filter: `brightness(${60 + (20-y)*4}%)`
  }
  return(
    <img className="cell image" 
    src={require(`../images/snake_${move.snakePart}.png`)} alt=""
    style={style}
    />//
  )
}

export default Segment;