import React from 'react'

const PausePanel = ({paused}) =>
{
  return (
    <div id="pause-menu" class="game panel">
      {paused ? "Paused" : "Pause"}
    </div>
    )
}

export default PausePanel;