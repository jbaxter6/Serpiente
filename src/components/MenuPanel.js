import React from 'react'

//---------------------------------
// Purpose: Shows score
//-----------------------------------
const MenuPanel = (props) =>
{
   
  const {score,highScore} = props
  return(
    <div id="game-menu" className="game panel ui grid">
      <div id={"menu-col-high"} className={"four wide column menu" }>{`Best: ${highScore}`}</div>
      <div id={"menu-col-score"} className={"eight wide column menu"}>{`Score: ${score}`}</div>
      <div id={"menu-col-best"} className={"four wide column menu" }>sdsds</div>
    </div>
  )
}

export default MenuPanel