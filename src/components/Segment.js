import React from 'react'

const Segment = props =>
{
  return(
    <div  className="snake segment"
              style={{left: props.x*10,top: props.y*10}}>
              
        </div>
  )
}

export default Segment;