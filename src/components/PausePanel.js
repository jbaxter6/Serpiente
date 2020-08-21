import React from 'react'

//-------------------------------------------------------=
//Purpose: Display a panel above the game 
//         -- shows title or 'paused' 
//-------------------------------------------------------=

const PausePanel = ({paused}) =>
{
  return (
    <div id="pause-menu" class="game panel" onClick={paused}>
      {paused ? "Paused" : "Serpiente"}
    </div>
    )
}

export default PausePanel;