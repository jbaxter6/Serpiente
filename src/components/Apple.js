import React from 'react'

//-------------------------------------------------------=
//Purpose: display an eyeball
//       --in snake, this is called the apple usually
//-------------------------------------------------------=


class Apple extends React.Component
{
  state = {
    angle: 0
  }

  componentDidMount()
  {
    this.setState({angle: Math.floor(Math.random()*360)+1})
  }

  render()
  {
    return(
    <img className="cell image" 
    src={require(`../images/eye.png`)} alt=""
    style={{transform: `rotate(${this.state.angle}deg)`}}
    />
    )
  }  
}

export default Apple;