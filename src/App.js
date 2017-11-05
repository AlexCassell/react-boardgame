/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import './css/slotPopUps.css';

import StartGame from './StartGame';
import {slotOne} from './StartGame.js';
import ChatRoom from './chatroom/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <img src={logo} className="App__logo" alt="logo" />
          <h1 className="App__title">Kings of Calliope.</h1>
          <div className="App__header__login">
            <a className="login" href="somescript">Login<div className="loginPopUp">Login</div></a><span className="body_altFont">/</span>
            <a className="register" href="somescript">Register<div className="registerPopUp">Register</div></a>
          </div>
        </header>
        <div className="gameBox">
        <StartGame />
        {/* <Next />
          {playButton} */}
          <div className="gameBox__chatroom">
            <ChatRoom />
          </div>
          <div className="gameBox__playerStats"></div>
          <div className="gameBox__board">
            <div className="gameBox__board__topRow">
              <div className="gameBox__board__town">
                <div className="slot1">
                  <div className="slot1PopUp"></div>
                </div>
              {slotOne}
              </div>
              <div className="gameBox__board__space">
              <div className="slot2">
                  <div className="slot2PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__space">
              <div className="slot3">
                  <div className="slot3PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__space">
              <div className="slot4">
                  <div className="slot4PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__space">
              <div className="slot5">
                  <div className="slot5PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__space">
              <div className="slot6">
                  <div className="slot6PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__space">
              <div className="slot7">
                  <div className="slot7PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__space">
              <div className="slot8">
                  <div className="slot8PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__space">
              <div className="slot9">
                  <div className="slot9PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__space">
              <div className="slot10">
                  <div className="slot10PopUp"></div>
                </div>
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
              <div className="slot15">
                  <div className="slot15PopUp"></div>
                </div>
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
              <div className="slot11">
                  <div className="slot11PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__SideSpace">
              <div className="slot12">
                  <div className="slot12PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__SideSpace">
              <div className="slot13">
                  <div className="slot13PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__SideSpace">
              <div className="slot14">
                  <div className="slot14PopUp"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
