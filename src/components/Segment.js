import React from 'react'

const Segment = props =>
{
  const x = props.x * 10
  const y = props.y * 10
  return(
    <div  className="snake segment"
              style={{left: x,top: y}}>
              
        </div>
  )
}

export default Segment;