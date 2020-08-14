import React from 'react'

const Apple = (props) =>
{
  return (
    <div className="apple" style={{left: props.x*10,top: props.y*10}}></div>
  )
}

export default Apple;