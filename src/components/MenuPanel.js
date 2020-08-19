import React from 'react'


const MenuPanel = (props) =>
{
  const score = Math.round(props.score)
  return(
    <div id="game-menu" className="game panel">{`Score: ${score}`}</div>
  )
}

export default MenuPanel