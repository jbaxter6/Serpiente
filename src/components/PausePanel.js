import React from 'react'

const PausePanel = ({paused}) =>
{
  return (
    <div id="pause-menu" class="game panel" onClick={paused}>
      {paused ? "Resume" : "Serpiente"}
    </div>
    )
}

export default PausePanel;