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
        <div className="gameBox">
        <StartGame />
          <div className="gameBox__chatroom">
            <ChatRoom />
          </div>
          <div className="gameBox__playerStats">
          <InventoryIndex />
          </div>
          <div className="gameBox__board">
            <div className="gameBox__board__topRow">
              <div className="gameBox__board__town">
                <div className="slot1">
                  <div className="slot1PopUp"></div>
                </div>
              {slotOne}
              </div>
              <div className="gameBox__board__spaceTwo">
              <div className="slot2">
                  <div className="slot2PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceThree">
              <div className="slot3">
                  <div className="slot3PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceFour">
              <div className="slot4">
                  <div className="slot4PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceFive">
              <div className="slot5">
                  <div className="slot5PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceSix">
              <div className="slot6">
                  <div className="slot6PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceSeven">
              <div className="slot7">
                  <div className="slot7PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceEight">
              <div className="slot8">
                  <div className="slot8PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceNine">
              <div className="slot9">
                  <div className="slot9PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceTen">
              <div className="slot10">
                  <div className="slot10PopUp"></div>
                </div>
              </div>
            </div>
            <div className="gameBox__board__bottomRow">
              <div className="gameBox__board__bottomRow__leftCorner">
              <div className="slot24">
                  <div className="slot24PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceTwentyThree">
                <div className="slot23">
                  <div className="slot23PopUp"></div>
                </div>              
              </div>
              <div className="gameBox__board__spaceTwentyTwo">
                <div className="slot22">
                  <div className="slot22PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceTwentyOne">
              <div className="slot21">
                  <div className="slot21PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceTwenty">
              <div className="slot20">
                  <div className="slot20PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceNineteen">
              <div className="slot19">
                  <div className="slot19PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceEighteen">
              <div className="slot18">
                  <div className="slot18PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceSeventeen">
              <div className="slot17">
                  <div className="slot17PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceSixteen">
              <div className="slot16">
                  <div className="slot16PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__spaceFifthteen">
              <div className="slot15">
                  <div className="slot15PopUp"></div>
                </div>
              </div>
            </div>
            <div className="gamebox__board__leftRow">
              <div className="gameBox__board__SideSpaceTwentyEight">
              <div className="slot28">
                  <div className="slot28PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__SideSpaceTwentySeven">
              <div className="slot27">
                  <div className="slot27PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__SideSpaceTwentySix">
              <div className="slot26">
                  <div className="slot26PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__SideSpaceTwentyFive">
              <div className="slot25">
                  <div className="slot25PopUp"></div>
                </div>
              </div>
            </div>
            <div className="gamebox__board__rightRow">
              <div className="gameBox__board__SideSpaceEleven">
              <div className="slot11">
                  <div className="slot11PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__SideSpaceTwelve">
              <div className="slot12">
                  <div className="slot12PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__SideSpaceThirteen">
              <div className="slot13">
                  <div className="slot13PopUp"></div>
                </div>
              </div>
              <div className="gameBox__board__SideSpaceFourteen">
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
