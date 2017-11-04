import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import StartGame from './StartGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <img src={logo} className="App__logo" alt="logo" />
          <h1 className="App__title">Welcome to Kings of Calliope.</h1>
          <div className="App__header__login">
            <a className="login" href="somescript">Login<div className="loginPopUp">Login</div></a>/
            <a className="register" href="somescript">Register<div className="registerPopUp">Register</div></a>
          </div>
        </header>
        <div className="gameBox">
        <StartGame />
        {/* <Next />
          {playButton} */}
          <div className="gameBox__chatroom"></div>
          <div className="gameBox__playerStats"></div>
          <div className="gameBox__board">
          <a src="/images/napoleon.png" alt="temp icon" />
            <div className="gameBox__board__topRow">
              <div className="gameBox__board__town">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
            </div>
            <div className="gameBox__board__bottomRow">
              <div className="gameBox__board__bottomRow__leftCorner">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
              <div className="gameBox__board__space">
              </div>
            </div>
            <div className="gamebox__board__leftRow">
              <div className="gameBox__board__SideSpace">
              </div>
              <div className="gameBox__board__SideSpace">
              </div>
              <div className="gameBox__board__SideSpace">
              </div>
              <div className="gameBox__board__SideSpace">
              </div>
            </div>
            <div className="gamebox__board__rightRow">
              <div className="gameBox__board__SideSpace">
              </div>
              <div className="gameBox__board__SideSpace">
              </div>
              <div className="gameBox__board__SideSpace">
              </div>
              <div className="gameBox__board__SideSpace">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
