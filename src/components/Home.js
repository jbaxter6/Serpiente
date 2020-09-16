import React, { Component } from 'react'

//-------------------------------------------------------=
//Purpose: Show a home page on route http://<base url>/
//-------------------------------------------------------=


export default class Home extends Component {
  render() {
    return (
      <div id="home-body">
        <div>
          <div id='home-screen'>
            <img id="home-img" src="https://i.ibb.co/QbHWG8K/home.png" alt="serpiente" />
          </div> <br/>
          <div id="home-text">
              At last, you can now be a worm eating eyeballs like you have always wanted. || Made by Junior Baxter and Steve Pesce
          </div>
        </div>
      </div>
      
    )
  }
}
