import React from 'react'

//---------------------------------
// Purpose: Shows score
//-----------------------------------
const MenuPanel = (props) =>
{
  const {score} = props
  return(
    <div id="game-menu" className="game panel">{`Score: ${score}`}</div>
  )
}

export default MenuPanel