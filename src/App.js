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
          <div className="App__header__Login"><a href="somescript">Login</a>/<a href="somescript">Register</a></div>
        </header>
        <div class="gameBox">
          <div class="gameBox__chatroom"></div>
          <div class="gameBox__playerStats"></div>
          <div class="gameBox__board">
            <div class="gameBox__board__topRow">
              <div class="gameBox__board__town">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
            </div>
            <div class="gameBox__board__bottomRow">
              <div class="gameBox__board__leftCorner">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
              <div class="gameBox__board__space">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
