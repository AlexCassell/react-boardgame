/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import './css/slotPopUps.css';

import StartGame from './StartGame';
// import Opponents from './Opponents';
import {slotOne} from './StartGame.js';
import ChatRoom from './chatroom/index.js';
import InventoryIndex from './inventory/index.js';

class App extends Component {

  updateComponent () {
    this.setState(this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <img src={logo} className="App__logo" alt="logo" />
          <h1 className="App__title">Merchants of Calliope</h1>
          <div className="App__header__login">
            <a className="login" href="somescript">Login<div className="loginPopUp">
              Login<br />
              <div className="login">Name: <input className="login__inputField" type='text'/></div>
              <div className="login">Password: <input className="login__inputField" type='text'/></div>
              </div></a><span className="body_altFont">/</span>
            <a className="register" href="somescript">Register<div className="registerPopUp">
              Register<br />
              <div className="register">Name: <input className="register__inputField" type='text'/></div>
              <div className="register">Email: <input className="register__inputField" type='text'/></div>
              
              </div></a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
