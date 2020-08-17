import React from 'react'

const Segment = props =>
{
  const x = props.x * 10
  const y = props.y * 10
  return(
    <img className="cell image" src={require('../images/snake_head.png')} alt=""/>
  )
}

export default Segment;