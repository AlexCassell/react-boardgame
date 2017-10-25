import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <img src={logo} className="App__logo" alt="logo" />
          <h1 className="App__title">Welcome to Code Name: I do not know yet.</h1>
          <div className="App__header__login">
            <a className="login" href="somescript">Login<div className="loginPopUp">Login</div></a>/
            <a className="register" href="somescript">Register<div className="registerPopUp">Register</div></a>
          </div>
          
          {/* <div class="" */}
        </header>
        <div className="gameBox">
          <div className="gameBox__chatroom"></div>
          <div className="gameBox__playerStats"></div>
          <div className="gameBox__board">
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
              <div className="gameBox__board__leftCorner">
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
