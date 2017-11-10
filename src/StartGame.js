/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import logo from './logo.png';
import './App.css';

import Sound from 'react-sound';



import './css/slotPopUps.css';
import './css/inventoryCSS.css';
import './css/die.css';
import ChatRoom from './chatroom/index.js';
import InventoryIndex from './inventory/index.js';


import knight from './images/knight.png';
import druid from './images/druid.png';
import monk from './images/monk.png';
import rogue from './images/rogue.png';

import jock from './images/jock.png';
import superhero from './images/superhero.png';
import teacher from './images/teacher.png';
import seventies from './images/seventies.png';

import coinicon from './images/coin/large.png';
import goldicon from './images/gold/large.png';
import woodicon from './images/wood/large.png';
import foodicon from './images/food/large.png';

let gamePosition = 0;
let singlePlayerOponents = [];
let undoAvailable = false, multiPlayer = false, backClicked = false, choseKnight = false, choseDruid = false, choseMonk = false, choseRogue = false,
choseJock = false, choseSuperhero = false, choseTeacher = false, choseSeventies = false,
computerKnight = false, computerDruid = false, computerMonk = false, computerRogue = false,
computerJock = false, computerSuperhero = false, computerTeacher = false, computerSeventies = false;

const clickSound = new Audio("./sounds/click.wav");

 let playerHero = "", currentPlayerAvatar = "", opponentOne = "", opponentTwo = "", opponentThree = "";

//  let slotOne = "", slotTwo = "", slotThree = "", slotFour = "", slotFive = "", slotSix = "",
//  slotSeven = "", slotEight = "", slotNine = "", slotTen = "", slotEleven = "", slotTwelve = "", slotThirteen = "",
//  slotFourteen = "", slotFifthteen = "", slotSixteen = "", slotSeventeen = "", slotEighteen = "", slotNineteen = "",
//  slotTwenty = "", slotTwentyOne = "", slotTwentyTwo = "",slotTwentyThree = "", slotTwentyFour = "", slotTwentyFive = "",
//  slotTwentySix = "", slotTwentySeven = "", slotTwentyEight = ""; 

let playerBoardSlotArray = [""];

 let playerCurrentSlot = 1, playerNewSlot = 0, playerOverRoll = 0, opponentOneCurrentSlot = 1, opponentTwoCurrentSlot = 1,opponentThreeCurrentSlot = 1, opponentFourCurrentSlot = 1;
 let dieRoll = [""];
 let whosTurn = 1;
 //stats
 let coins = 1282, gold = 546, wood = 1313, food = 790;


class StartGame extends Component {
   constructor(props) {
        super(props);
        this.state = {'playerPositionOnBoard': ''};
        this.state = {'playButton': ''};
        this.state = {'playButtonText': 'Click here to begin your journey.'};
      }
      //Choose Character Functions
      resetChosenCharacter () {
        choseKnight = false, choseDruid = false, choseMonk = false, choseRogue = false,
        choseJock = false, choseSuperhero = false, choseTeacher = false, choseSeventies = false,
        computerKnight = false, computerDruid = false, computerMonk = false, computerRogue = false,
        computerJock = false, computerSuperhero = false, computerTeacher = false, computerSeventies = false;
      }

      characterChosenKnight () {
        if(multiPlayer){

        }
        else{
          playerHero = <img src={knight} alt={"Knight"}/>;
          singlePlayerOponents = [];
          this.resetChosenCharacter();
          choseKnight = true;     
          this.singlePlayerChooseOpponents();
        }
      }
      characterChosenDruid () {
        if(multiPlayer){
          
        }
        else{
          playerHero = <img src={druid} alt={"Druid"}/>;
          singlePlayerOponents = [];
          this.resetChosenCharacter(); 
          choseDruid = true; 
          this.singlePlayerChooseOpponents();
        }
      }
      characterChosenMonk () {
        if(multiPlayer){
          
        }
        else{
          playerHero = <img src={monk} alt={"Monk"}/>;
          singlePlayerOponents = [];
          this.resetChosenCharacter(); 
          choseMonk = true; 
          this.singlePlayerChooseOpponents();          
        }
      }
      characterChosenRogue () {
        if(multiPlayer){
          
        }
        else{
          playerHero = <img src={rogue} alt={"Rogue"}/>;
          singlePlayerOponents = [];
          this.resetChosenCharacter(); 
          choseRogue = true; 
          this.singlePlayerChooseOpponents();          
        }
      }
      characterChosenJock () {
        if(multiPlayer){
          
        }
        else{
          playerHero = <img src={jock} alt={"Jock"}/>;
          singlePlayerOponents = [];
          this.resetChosenCharacter();  
          choseJock = true;
          this.singlePlayerChooseOpponents();          
        }
      }
      characterChosenSuperhero () {
        if(multiPlayer){
          
        }
        else{
          playerHero = <img src={superhero} alt={"Superhero"}/>;
          singlePlayerOponents = [];
          this.resetChosenCharacter();
          choseSuperhero = true; 
          this.singlePlayerChooseOpponents();          
        }
      }
      characterChosenTeacher () {
        if(multiPlayer){
          
        }
        else{
          playerHero = <img src={teacher} alt={"Teacher"}/>;
          singlePlayerOponents = [];
          this.resetChosenCharacter(); 
          choseTeacher = true; 
          this.singlePlayerChooseOpponents();          
        }
      }
      characterChosenSeventies () {
       //console.log(choseSeventies);
        if(multiPlayer){
          
        }
        else{
          playerHero = <img src={seventies} alt={"Seventies"}/>;
          singlePlayerOponents = [];
          this.resetChosenCharacter(); 
          choseSeventies = true; 
          this.singlePlayerChooseOpponents();         
        }
      }

      startingResources(){
        coins = 500;
        gold = 25;
        wood = 50;
        food = 100;
      }

      //Choose non player Characters at random --turn into a return statment and move it to own file
      singlePlayerChooseOpponents(){
        let randomNumber = Math.floor(Math.random() * 9);
       //console.log(randomNumber);
       //console.log(singlePlayerOponents);
        while(singlePlayerOponents.length < 3){
          if(randomNumber === 0 && computerKnight === false && choseKnight === false){
            singlePlayerOponents.push(randomNumber);
            computerKnight = true;
          }
          if(randomNumber === 1 && computerDruid === false && choseDruid === false){
            singlePlayerOponents.push(randomNumber);
            computerDruid = true;
          }
          if(randomNumber === 2 && computerMonk === false && choseMonk === false){
            singlePlayerOponents.push(randomNumber);
            computerMonk = true;
          }
          if(randomNumber === 3 && computerRogue === false && choseRogue === false){
            singlePlayerOponents.push(randomNumber);
            computerRogue = true;
          }
          if(randomNumber === 4 && computerJock === false && choseJock === false){
            singlePlayerOponents.push(randomNumber);
            computerJock = true;
          }
          if(randomNumber === 5 && computerSuperhero === false && choseSuperhero === false){
            singlePlayerOponents.push(randomNumber);
            computerSuperhero = true;
          }
          if(randomNumber === 6 && computerTeacher === false && choseTeacher === false){
            singlePlayerOponents.push(randomNumber);
            computerTeacher = true;
          }
          if(randomNumber === 7 && computerSeventies === false && choseSeventies === false){
            singlePlayerOponents.push(randomNumber);
            computerSeventies = true;
          }
          this.singlePlayerChooseOpponents();
          this.opponents();
        }
      }

      opponents(){
        this.startingResources(); //Gives starting resources
        currentPlayerAvatar = playerHero;
        if(singlePlayerOponents[0] === 0){
          opponentOne= <img src={knight} alt={"Knight"}/>;
        }
        else if (singlePlayerOponents[1] === 0){
          opponentTwo= <img src={knight} alt={"Knight"}/>;
        }
        else if (singlePlayerOponents[2] === 0){
          opponentThree= <img src={knight} alt={"Knight"}/>;
        }
        //check if the druid is an opponent
        if(singlePlayerOponents[0] === 1){
          opponentOne= <img src={druid} alt={"Druid"}/>;
        }
        else if (singlePlayerOponents[1] === 1){
          opponentTwo= <img src={druid} alt={"Druid"}/>;
        }
        else if (singlePlayerOponents[2] === 1){
          opponentThree= <img src={druid} alt={"Druid"}/>;
        }
        //check if the monk is an opponent
        if(singlePlayerOponents[0] === 2){
          opponentOne= <img src={monk} alt={"Monk"}/>;
        }
        else if (singlePlayerOponents[1] === 2){
          opponentTwo= <img src={monk} alt={"Monk"}/>;
        }
        else if (singlePlayerOponents[2] === 2){
          opponentThree= <img src={monk} alt={"Monk"}/>;
        }
        //check if the rogue is an opponent
        if(singlePlayerOponents[0] === 3){
          opponentOne= <img src={rogue} alt={"Rogue"}/>;
        }
        else if (singlePlayerOponents[1] === 3){
          opponentTwo= <img src={rogue} alt={"Rogue"}/>;
        }
        else if (singlePlayerOponents[2] === 3){
          opponentThree= <img src={rogue} alt={"Rogue"}/>;
        }
        //check if the jock is an opponent
        if(singlePlayerOponents[0] === 4){
          opponentOne= <img src={jock} alt={"Jock"}/>;
        }
        else if (singlePlayerOponents[1] === 4){
          opponentTwo= <img src={jock} alt={"Jock"}/>;
        }
        else if (singlePlayerOponents[2] === 4){
          opponentThree= <img src={jock} alt={"Jock"}/>;
        }
        //check if the superhero is an opponent
        if(singlePlayerOponents[0] === 5){
          opponentOne= <img src={superhero} alt={"Superhero"}/>;
        }
        else if (singlePlayerOponents[1] === 5){
          opponentTwo= <img src={superhero} alt={"Superhero"}/>;
        }
        else if (singlePlayerOponents[2] === 5){
          opponentThree= <img src={superhero} alt={"Superhero"}/>;
        }
        //check if the teacher is an opponent
        if(singlePlayerOponents[0] === 6){
          opponentOne= <img src={teacher} alt={"Teacher"}/>;
        }
        else if (singlePlayerOponents[1] === 6){
          opponentTwo= <img src={teacher} alt={"Teacher"}/>;
        }
        else if (singlePlayerOponents[2] === 6){
          opponentThree= <img src={teacher} alt={"Teacher"}/>;
        }
        //check if the seventies is an opponent
        if(singlePlayerOponents[0] === 7){
          opponentOne= <img src={seventies} alt={"Seventies"}/>;
        }
        else if (singlePlayerOponents[1] === 7){
          opponentTwo= <img src={seventies} alt={"Seventies"}/>;
        }
        else if (singlePlayerOponents[2] === 7){
          opponentThree= <img src={seventies} alt={"Seventies"}/>;
        }


      }

      rollDie() {
        dieRoll = [""];
        for(let i = 0; i < 4; i++){
          dieRoll[i] =+ Math.floor(Math.random()*12+1);
        }
        playerNewSlot = playerCurrentSlot + dieRoll[0];
        if(playerNewSlot > 28){
          playerOverRoll =  playerNewSlot - 28;
          console.log("Hit");
          return this.movePlayerOnBoardOverRoll();
        }
        this.movePlayerOnBoard();
      }
//finish setting ai's turn --------------------------------------------------------------------------------------------------------<
      movePlayerOnBoard(){
        if(playerCurrentSlot < playerNewSlot) {
          delete playerBoardSlotArray[playerCurrentSlot - 1];
          this.setState({
            playerPositionOnBoard: playerBoardSlotArray[playerCurrentSlot] = currentPlayerAvatar            
          });
          playerCurrentSlot ++
          ReactDOM.render(<StartGame />, document.getElementById('root'));
          if(playerCurrentSlot === playerNewSlot){
            whosTurn = whosTurn + 1
            if(whosTurn > 4){
              whosTurn = 1;
            }
            if(whosTurn === 1){
              currentPlayerAvatar = playerHero;
            }
            else if(whosTurn === 2){
              currentPlayerAvatar = opponentOne;
            }
            else if(whosTurn === 3){
              currentPlayerAvatar = opponentTwo;
            }
            else if(whosTurn === 4){
              currentPlayerAvatar = opponentThree;              
            }
          }
          setTimeout(this.movePlayerOnBoard.bind(this), 200);
        }
      }

      movePlayerOnBoardOverRoll(){
        if(playerCurrentSlot < 28) {
          delete playerBoardSlotArray[playerCurrentSlot - 1];
          this.setState({
            playerPositionOnBoard: playerBoardSlotArray[playerCurrentSlot] = currentPlayerAvatar            
          });
          playerCurrentSlot ++
          ReactDOM.render(<StartGame />, document.getElementById('root'));
          if(playerCurrentSlot === playerNewSlot){
            whosTurn = whosTurn + 1
            if(whosTurn > 4){
              whosTurn = 1;
            }
            if(whosTurn === 1){
              currentPlayerAvatar = playerHero;
            }
            else if(whosTurn === 2){
              currentPlayerAvatar = opponentOne;
            }
            else if(whosTurn === 3){
              currentPlayerAvatar = opponentTwo;
            }
            else if(whosTurn === 4){
              currentPlayerAvatar = opponentThree;              
            }
          }
          setTimeout(this.movePlayerOnBoardOverRoll.bind(this), 200);
        }
        else if (playerCurrentSlot === 28){
          delete playerBoardSlotArray[27];
          this.setState({
            playerPositionOnBoard: playerBoardSlotArray[0] = currentPlayerAvatar            
          });
          playerCurrentSlot = 0;
          playerNewSlot = playerOverRoll;
          ReactDOM.render(<StartGame />, document.getElementById('root'));
          if(playerCurrentSlot === playerNewSlot){
            whosTurn = whosTurn + 1
            if(whosTurn > 4){
              whosTurn = 1;
            }
            if(whosTurn === 1){
              currentPlayerAvatar = playerHero;
            }
            else if(whosTurn === 2){
              currentPlayerAvatar = opponentOne;
            }
            else if(whosTurn === 3){
              currentPlayerAvatar = opponentTwo;
            }
            else if(whosTurn === 4){
              currentPlayerAvatar = opponentThree;              
            }
          }
          setTimeout(this.movePlayerOnBoard.bind(this), 200);
        }


      }



    //Main Game Function
      moveForward () {
        backClicked = false;
        if(gamePosition === 0){//add if logged in after login is added
          gamePosition = 1;
          this.setState({
            playButtonText: "Click here once you have chosen your hero.",
            playButton: <div className="gameBox__board__pickCharacter"><span className="body_altFont">Choose Character<br /></span>
            <div className = "gameBox__board__pickCharacter__holder">
              <div className="gameBox__board__pickCharacter__holder__characters"><button className="gameBox__board__pickCharacter__holder__characters__button" onClick={this.characterChosenKnight.bind(this)}><img src={knight} alt={"Knight"}/></button>
              </div>
              <div className="gameBox__board__pickCharacter__holder__characters"><button className="gameBox__board__pickCharacter__holder__characters__button" onClick={this.characterChosenDruid.bind(this)}><img src={druid} alt={"Druid"}/></button>
              </div>
              <div className="gameBox__board__pickCharacter__holder__characters"><button className="gameBox__board__pickCharacter__holder__characters__button" onClick={this.characterChosenMonk.bind(this)}><img src={monk} alt={"Monk"}/></button>
              </div>
              <div className="gameBox__board__pickCharacter__holder__characters"><button className="gameBox__board__pickCharacter__holder__characters__button" onClick={this.characterChosenRogue.bind(this)}><img src={rogue} alt={"Rogue"}/></button>
              </div>
              </div>
            <div className = "gameBox__board__pickCharacter__holder">
              <div className="gameBox__board__pickCharacter__holder__characters"><button className="gameBox__board__pickCharacter__holder__characters__button" onClick={this.characterChosenJock.bind(this)}><img src={jock} alt={"Jock"}/></button>
              </div>
              <div className="gameBox__board__pickCharacter__holder__characters"><button className="gameBox__board__pickCharacter__holder__characters__button" onClick={this.characterChosenSuperhero.bind(this)}><img src={superhero} alt={"Superhero"}/></button>
              </div>
              <div className="gameBox__board__pickCharacter__holder__characters"><button className="gameBox__board__pickCharacter__holder__characters__button" onClick={this.characterChosenTeacher.bind(this)}><img src={teacher} alt={"Teacher"}/></button>
              </div>
              <div className="gameBox__board__pickCharacter__holder__characters"><button className="gameBox__board__pickCharacter__holder__characters__button" onClick={this.characterChosenSeventies.bind(this)}><img src={seventies} alt={"Seventies"}/></button>
              </div>
              </div>
              </div>
              });
            }
        else if (gamePosition === 1){
          if(choseKnight === true || choseDruid === true || choseMonk === true || choseRogue === true || choseJock === true || choseSuperhero === true || choseTeacher === true || choseSeventies === true){
            gamePosition = 2;
            this.setState({
              playerPositionOnBoard: playerBoardSlotArray[playerCurrentSlot - 1] = playerHero,
              playButtonText: "Click here when you are ready to begin.",
              playButton: <div className="gameBox__board__opponents"><span className="gameBox__board__opponents__text"><h3>Your opponents have been chosen.</h3></span>{opponentOne}{opponentTwo}{opponentThree}</div>
            });
          }

        }
        else if (gamePosition === 2){
          gamePosition = 3;
          this.setState({
            playButtonText: "Roll Die",
            playButton: <div className="dieWrapper"><div id="pentagon"></div></div>
          });
        }
        else if (gamePosition === 3){
          // gamePosition = 4;
          this.rollDie();
          this.setState({
            playButtonText: "Die Rolled",
            playButton: <div className="dieWrapper">{dieRoll[0]}</div>
          });
        }
      }

    //   moveBack() {
    //     if(backClicked){
    //       //not sure if anything will go here or not
    //     }
    //     else{
    //       backClicked = true;
    //       if(gamePosition > 0){
    //         gamePosition = gamePosition - 1;
    //         this.setState({
    //           playButton: "You cannot undo this action."
    //         });
    //       }
    //     }
    // }
      
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
            <div className="gameBox__advanceGame">
              <button className="gameBox__advanceGame__increment" onClick={this.moveForward.bind(this)}> {this.state.playButtonText} </button>
              {/* <button className="advanceGame__decrement" onClick={this.moveBack.bind(this)}> Back </button> */}
              {this.state.playButton}
            </div>
            <div className="gameBox__chatroom">
              <ChatRoom />
            </div>
            <div className="gameBox__playerStats">
            <div className="gameBox__playerStats__wrapper">
            <div className="gameBox__playerStats__wrapper__title">Inventory</div>
        <div className="gameBox__playerStats__inventoryWrapper__coinsWrapper">
            <div className="gameBox__playerStats__inventoryWrapper__coinsWrapper__coin">
                <img src={coinicon} alt={"Coin"}/></div>
                <div className="gameBox__playerStats__inventoryWrapper__coinsWrapper__text">={coins.toLocaleString()}
                </div>
                </div>
                <div className="gameBox__playerStats__inventoryWrapper__goldWrapper">
            <div className="gameBox__playerStats__inventoryWrapper__goldWrapper__goldbar">
                <img src={goldicon} alt={"Gold"}/></div>
                <div className="gameBox__playerStats__inventoryWrapper__goldWrapper__text">={gold.toLocaleString()}
                </div>
                </div>
                <div className="gameBox__playerStats__inventoryWrapper__woodWrapper">
            <div className="gameBox__playerStats__inventoryWrapper__woodWrapper__logs">
                <img src={woodicon} alt={"Wood"}/></div>
                <div className="gameBox__playerStats__inventoryWrapper__woodWrapper__text">={wood.toLocaleString()}
                </div>
                </div>
                <div className="gameBox__playerStats__inventoryWrapper__foodWrapper">
            <div className="gameBox__playerStats__inventoryWrapper__foodWrapper__meat">
                <img src={foodicon} alt={"Food"}/></div>
                <div className="gameBox__playerStats__inventoryWrapper__foodWrapper__text">={food.toLocaleString()}
                </div>
                </div>
                </div>
            </div>
            <div className="gameBox__board">
              <div className="gameBox__board__topRow">
                <div className="gameBox__board__town">
                  <div className="slot1">
                    <div className="slot1PopUp"></div>
                  </div>
                {playerBoardSlotArray[0]}
                </div>
                <div className="gameBox__board__spaceTwo">
                <div className="slot2">
                    <div className="slot2PopUp"></div>
                  </div>
                  {playerBoardSlotArray[1]}
                </div>
                <div className="gameBox__board__spaceThree">
                <div className="slot3">
                    <div className="slot3PopUp"></div>
                  </div>
                  {playerBoardSlotArray[2]}
                </div>
                <div className="gameBox__board__spaceFour">
                <div className="slot4">
                    <div className="slot4PopUp"></div>
                  </div>
                  {playerBoardSlotArray[3]}
                </div>
                <div className="gameBox__board__spaceFive">
                <div className="slot5">
                    <div className="slot5PopUp"></div>
                  </div>
                  {playerBoardSlotArray[4]}
                </div>
                <div className="gameBox__board__spaceSix">
                <div className="slot6">
                    <div className="slot6PopUp"></div>
                  </div>
                  {playerBoardSlotArray[5]}
                </div>
                <div className="gameBox__board__spaceSeven">
                <div className="slot7">
                    <div className="slot7PopUp"></div>
                  </div>
                  {playerBoardSlotArray[6]}
                </div>
                <div className="gameBox__board__spaceEight">
                <div className="slot8">
                    <div className="slot8PopUp"></div>
                  </div>
                  {playerBoardSlotArray[7]}
                </div>
                <div className="gameBox__board__spaceNine">
                <div className="slot9">
                    <div className="slot9PopUp"></div>
                  </div>
                  {playerBoardSlotArray[8]}
                </div>
                <div className="gameBox__board__spaceTen">
                <div className="slot10">
                    <div className="slot10PopUp"></div>
                  </div>
                  {playerBoardSlotArray[9]}
                </div>
              </div>
              <div className="gameBox__board__bottomRow">
                <div className="gameBox__board__bottomRow__leftCorner">
                <div className="slot24">
                    <div className="slot24PopUp"></div>
                    {playerBoardSlotArray[23]}
                  </div>
                </div>
                <div className="gameBox__board__spaceTwentyThree">
                  <div className="slot23">
                    <div className="slot23PopUp"></div>
                    {playerBoardSlotArray[22]}
                  </div>              
                </div>
                <div className="gameBox__board__spaceTwentyTwo">
                  <div className="slot22">
                    <div className="slot22PopUp"></div>
                    {playerBoardSlotArray[21]}
                  </div>
                </div>
                <div className="gameBox__board__spaceTwentyOne">
                <div className="slot21">
                    <div className="slot21PopUp"></div>
                    {playerBoardSlotArray[20]}
                  </div>
                </div>
                <div className="gameBox__board__spaceTwenty">
                <div className="slot20">
                    <div className="slot20PopUp"></div>
                    {playerBoardSlotArray[19]}
                  </div>
                </div>
                <div className="gameBox__board__spaceNineteen">
                <div className="slot19">
                    <div className="slot19PopUp"></div>
                    {playerBoardSlotArray[18]}
                  </div>
                </div>
                <div className="gameBox__board__spaceEighteen">
                <div className="slot18">
                    <div className="slot18PopUp"></div>
                  </div>
                  {playerBoardSlotArray[17]}
                </div>
                <div className="gameBox__board__spaceSeventeen">
                <div className="slot17">
                    <div className="slot17PopUp"></div>
                    {playerBoardSlotArray[16]}
                  </div>
                </div>
                <div className="gameBox__board__spaceSixteen">
                <div className="slot16">
                    <div className="slot16PopUp"></div>
                    {playerBoardSlotArray[15]}
                  </div>
                </div>
                <div className="gameBox__board__spaceFifthteen">
                <div className="slot15">
                    <div className="slot15PopUp"></div>
                    {playerBoardSlotArray[14]}
                  </div>
                </div>
              </div>
              <div className="gamebox__board__leftRow">
                <div className="gameBox__board__SideSpaceTwentyEight">
                <div className="slot28">
                    <div className="slot28PopUp"></div>
                    {playerBoardSlotArray[27]}
                  </div>
                </div>
                <div className="gameBox__board__SideSpaceTwentySeven">
                <div className="slot27">
                    <div className="slot27PopUp"></div>
                    {playerBoardSlotArray[26]}
                  </div>
                </div>
                <div className="gameBox__board__SideSpaceTwentySix">
                <div className="slot26">
                    <div className="slot26PopUp"></div>
                    {playerBoardSlotArray[25]}
                  </div>
                </div>
                <div className="gameBox__board__SideSpaceTwentyFive">
                <div className="slot25">
                    <div className="slot25PopUp"></div>
                    {playerBoardSlotArray[24]}
                  </div>
                </div>
              </div>
              <div className="gamebox__board__rightRow">
                <div className="gameBox__board__SideSpaceEleven">
                <div className="slot11">
                    <div className="slot11PopUp"></div>
                  </div>
                  {playerBoardSlotArray[10]}
                </div>
                <div className="gameBox__board__SideSpaceTwelve">
                <div className="slot12">
                    <div className="slot12PopUp"></div>
                  </div>
                  {playerBoardSlotArray[11]}
                </div>
                <div className="gameBox__board__SideSpaceThirteen">
                <div className="slot13">
                    <div className="slot13PopUp"></div>
                  </div>
                  {playerBoardSlotArray[12]}
                </div>
                <div className="gameBox__board__SideSpaceFourteen">
                <div className="slot14">
                    <div className="slot14PopUp"></div>
                    {playerBoardSlotArray[13]}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

        );
      }

      
    }

    ReactDOM.render(<StartGame />, document.getElementById('root'));

export default StartGame;
export {singlePlayerOponents};
export {coins};
export {gold};
export {wood};
export {food};