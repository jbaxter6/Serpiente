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
      <div id={"menu-col-eyeballs"} className={"four wide column menu" }>
        <div id="segment-count">{props.segments}</div>
        <div id="eyeball-icon">
          <img id="eyeball-img" src={require(`../images/eye.png`)} alt="" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default MenuPanel