/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import logo from './images/logos/logo.png';

import './css/App.css';
import './css/slotPopUps.css';
import './css/die.css';

import ChatRoom from './chatroom/index.js';
import InventoryIndex from './inventory/index.js';
import CardCollectionIndex from './cardCollection/index.js';
import CreditsInstructionsIndex from './creditsInstructions/index.js';


import knight from './images/characters/knight.png';
import druid from './images/characters/druid.png';
import monk from './images/characters/monk.png';
import rogue from './images/characters/rogue.png';
import jock from './images/characters/jock.png';
import superhero from './images/characters/superhero.png';
import teacher from './images/characters/teacher.png';
import seventies from './images/characters/seventies.png';

//sounds
const uiClick = new Audio("./sounds/click_04.wav");

//gameOfChance
let gameOfChancePrizeAmount = 1000, gameOfChanceRollArrayIndex = 0, gameOfChanceJackPotNumber = 1000;
let gameOfChancePlayerRollsArray = [];


let gamePosition = 0;
let singlePlayerOponents = [];
let undoAvailable = false, multiPlayer = false, backClicked = false, choseKnight = false, choseDruid = false, choseMonk = false, choseRogue = false,
choseJock = false, choseSuperhero = false, choseTeacher = false, choseSeventies = false,
computerKnight = false, computerDruid = false, computerMonk = false, computerRogue = false,
computerJock = false, computerSuperhero = false, computerTeacher = false, computerSeventies = false;

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
    // replace the bulk of this with nested loops and current opponent array
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
// dieRoll = [""];
// for(let i = 0; i < 4; i++){
//   dieRoll[i] =+ Math.floor(Math.random()*12+1);
// }
// playerNewSlot = playerCurrentSlot + dieRoll[0];
// if(playerNewSlot > 28){
//   playerOverRoll =  playerNewSlot - 28;
//   return this.movePlayerOnBoardOverRoll();
// }
playerNewSlot = 24;
this.movePlayerOnBoard();
}
//finish setting ai's turn -----------------------------test------------------------------------------------------------<
movePlayerOnBoard(){
  if(playerCurrentSlot === playerNewSlot){
    this.checkCurrentGameSlotForPlayer();
    // gamePosition = 4;
    // this.moveForward ();
  }
if(playerCurrentSlot < playerNewSlot) {
  delete playerBoardSlotArray[playerCurrentSlot - 1];
  this.setState({
    playerPositionOnBoard: playerBoardSlotArray[playerCurrentSlot] = currentPlayerAvatar            
  });
  // uiClick.play(); //not working
  playerCurrentSlot ++
  ReactDOM.render(<StartGame />, document.getElementById('root'));
  setTimeout(this.movePlayerOnBoard.bind(this), 200);
}
}

movePlayerOnBoardOverRoll(){
  if(playerCurrentSlot === playerNewSlot){
    // this.checkCurrentGameSlotForPlayer();
    // gamePosition = 4;
    // this.moveForward ();
  }
  if(playerCurrentSlot < 28) {
    delete playerBoardSlotArray[playerCurrentSlot - 1];
    this.setState({
      playerPositionOnBoard: playerBoardSlotArray[playerCurrentSlot] = currentPlayerAvatar            
    });
    // uiClick.play();
    playerCurrentSlot ++
    ReactDOM.render(<StartGame />, document.getElementById('root'));
    setTimeout(this.movePlayerOnBoardOverRoll.bind(this), 200);
  }
  else if (playerCurrentSlot === 28){
    delete playerBoardSlotArray[27];
    this.setState({
    playerPositionOnBoard: playerBoardSlotArray[0] = currentPlayerAvatar
  });
  // uiClick.play();
  playerCurrentSlot = 0;
  playerNewSlot = playerOverRoll;
  ReactDOM.render(<StartGame />, document.getElementById('root'));
  setTimeout(this.movePlayerOnBoard.bind(this), 200);
}
}
// Opponents turn------------------------------------------------------------<<<<<<<<<<<<<
//get current opponent
//keep track of who has gone
//reference  dieRoll to get opponent's die roll

checkCurrentGameSlotForPlayer() {//will try to refactor this and opponent functions into one in the future
  if(playerCurrentSlot === 1) {
    
  }
  else if(playerCurrentSlot === 2) {
    
      }
  else if(playerCurrentSlot === 3) {
    
      }
  else if(playerCurrentSlot === 4) {
    
    this.unforseenEvent();
      }
  else if(playerCurrentSlot === 5) {
    
      }
  else if(playerCurrentSlot === 6) {
    
      }
  else if(playerCurrentSlot === 7) {
    
    this.inSearchOf();
      }
  else if(playerCurrentSlot === 8) {
    
      }
  else if(playerCurrentSlot === 9) {
    
      }
  else if(playerCurrentSlot === 10) {
    
    this.applecrossSlaveMines();
      }
  else if(playerCurrentSlot === 11) {
    
      }
  else if(playerCurrentSlot === 12) {
    
      }
  else if(playerCurrentSlot === 13) {
    
      }
  else if(playerCurrentSlot === 14) {
    
      }
  else if(playerCurrentSlot === 15) {
    
    this.yarmouthPortal();
      }
  else if(playerCurrentSlot === 16) {
    
      }
  else if(playerCurrentSlot === 17) {
    
      }
  else if(playerCurrentSlot === 18) {
    
      }
  else if(playerCurrentSlot === 19) {
    
    this.unforseenEvent();
      }
  else if(playerCurrentSlot === 20) {
    
      }
  else if(playerCurrentSlot === 21) {
    
      }
  else if(playerCurrentSlot === 22) {
    
    this.inSearchOf();
      }
  else if(playerCurrentSlot === 23) {
    
      }
  else if(playerCurrentSlot === 24) {
    
    this.gameOfChance();
      }
  else if(playerCurrentSlot === 25) {
    
      }
  else if(playerCurrentSlot === 26) {
    
      }
  else if(playerCurrentSlot === 27) {
    
      }
  else if(playerCurrentSlot === 28) {
    
      }
}

unforseenEvent(){
  gamePosition = 5;
  this.moveForward ();
}

inSearchOf(){
  gamePosition = 6;
  this.moveForward ();
}

applecrossSlaveMines(){
  gamePosition = 7;
  this.moveForward ();
}

yarmouthPortal(){
  gamePosition = 8;
  this.moveForward ();
  delete playerBoardSlotArray[14];
  playerCurrentSlot = 0;
  playerNewSlot = 0;
  //play sound
  this.setState({
    playerPositionOnBoard: playerBoardSlotArray[0] = currentPlayerAvatar            
  });
  
}

gameOfChance(){
  gamePosition = 9;
  gameOfChanceJackPotNumber = Math.floor(Math.random()*12+1)
  this.moveForward ();
}
// gameOfChance
// gameOfChanceprize gets bigger with every loser and every sell to the bank
// no choice but to play if you land on space
// immediately takes 500 coins even if this makes player negative
// the number to get pops up
// click to roll, rolls three numbers
// 25% chance to hit jackpot and take all money
// the game adds 1000 back to the jackpot after turn is over
// arr to hold all three turns and jackpot number
// 
gameOfChanceRoll(){
  if(gameOfChancePlayerRollsArray.length < 3){
    gameOfChancePlayerRollsArray.push(Math.floor(Math.random()*12+1));
    ReactDOM.render(<StartGame />, document.getElementById('root'));
    this.moveForward();
    return setTimeout(this.gameOfChanceRoll.bind(this), 50);
    }
    gameOfChanceRollArrayIndex = 0;
    this.gameOfChanceCheckNumbers();
  }

gameOfChanceCheckNumbers(){
  let i = 0;
  while(gameOfChancePlayerRollsArray.length > i){
    if(gameOfChancePlayerRollsArray[i] === gameOfChanceJackPotNumber){
      gamePosition = 91;
      return this.moveForward();
    }
    console.log(gameOfChancePlayerRollsArray[i]);
    i++;
  }
    gamePosition = 92;
    return this.moveForward();
}

//Main Game Function
moveForward () {
  // if(gameOfChancePrizeAmount === 0){
  //   gameOfChancePrizeAmount = 1000;
  // }
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
    // gamePosition = -1;
    this.rollDie();
    this.setState({
    playButtonText: "Player moving...",
    playButton: <div className="dieWrapper">{dieRoll[0]}</div>
  });
}
else if (gamePosition === 4){
  gamePosition = -1;
  // console.log(gamePosition);
  this.setState({
    playButtonText: "Please wait while your opponents take their turn.",
    playButton: ""
  });
}
else if (gamePosition === 5){
  gamePosition = -1;
  this.setState({
    playButtonText: "Oh no! You have suffered an Unforseen Event.",
    playButton: ""
  });
}
else if (gamePosition === 6){
  gamePosition = -1;
  this.setState({
    playButtonText: "What good fortune, you have found something!",
    playButton: ""
  });
}
else if (gamePosition === 7){
  gamePosition = -1;
  this.setState({
    playButtonText: "You have been captured!",
    playButton: ""
  });
}
else if (gamePosition === 8){
  gamePosition = 4;
  this.setState({
    playButtonText: "You have teleported to relative safety.",
    playButton: ""
  });
}
else if (gamePosition === 9){
  coins -= 500;
  gameOfChancePrizeAmount += 500;
  gamePosition = 90;
  this.setState({
    playButtonText: "Time for a game of chance.",
    playButton: <div className="gamebox__gameofChanceWrapper">
      <div className="gamebox__gameofChanceWrapper__topText">
        <h1>Click above when you are ready to try your luck.</h1>
      </div>
      {/* add an image or animation here after game is done */}
      <div className="gamebox__gameofChanceWrapper__bottomText">
      <h1>You need to roll {gameOfChanceJackPotNumber} to win the jackpot!</h1>
      </div>
    </div>
  });
  // console.log(gamePosition);
}
else if (gamePosition === 90){
  gamePosition = 901;
  this.gameOfChanceRoll();
  this.setState({
    playButtonText: "Please wait ",
    playButton:  <div className="gamebox__gameofChanceWrapper">
    <div className="gamebox__gameofChanceWrapper__topText">
      <h1></h1>
    </div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapper">
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[0]}</div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[1]}</div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[2]}</div>
    </div>
    {/* add an image or animation here after game is done */}
    <div className="gamebox__gameofChanceWrapper__bottomText">
    <h1>You need to roll {gameOfChanceJackPotNumber} to win the jackpot!</h1>
    </div>
  </div>
  });
}
else if (gamePosition === 901){
  gamePosition = 902;
  this.gameOfChanceRoll();
  this.setState({
    playButtonText: "Please wait ",
    playButton:  <div className="gamebox__gameofChanceWrapper">
    <div className="gamebox__gameofChanceWrapper__topText">
      <h1></h1>
    </div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapper">
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[0]}</div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[1]}</div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[2]}</div>
    </div>
    {/* add an image or animation here after game is done */}
    <div className="gamebox__gameofChanceWrapper__bottomText">
    <h1>You need to roll {gameOfChanceJackPotNumber} to win the jackpot!</h1>
    </div>
  </div>
  });
}
else if (gamePosition === 902){
  // gamePosition = 912;
  this.gameOfChanceRoll();
  this.setState({
    playButtonText: "Please wait ",
    playButton:  <div className="gamebox__gameofChanceWrapper">
    <div className="gamebox__gameofChanceWrapper__topText">
      <h1></h1>
    </div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapper">
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[0]}</div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[1]}</div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[2]}</div>
    </div>
    {/* add an image or animation here after game is done */}
    <div className="gamebox__gameofChanceWrapper__bottomText">
    <h1>You need to roll {gameOfChanceJackPotNumber} to win the jackpot!</h1>
    </div>
  </div>
  });
}
else if (gamePosition === 91){
  gamePosition = 4;
  // console.log(gamePosition);
  coins =+ gameOfChancePrizeAmount;
  this.setState({
    playButtonText: "Click to end your turn.",
    playButton: <div className="gamebox__gameofChanceWrapper">
    <div className="gamebox__gameofChanceWrapper__topText">
      <h1>Congratulations you have won {gameOfChancePrizeAmount.toLocaleString()} coins!</h1>
    </div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapper">
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[0]}</div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[1]}</div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[2]}</div>
    </div>
    {/* add an image or animation here after game is done */}
    <div className="gamebox__gameofChanceWrapper__bottomText">
    <h1>You needed to roll {gameOfChanceJackPotNumber} to win the jackpot.</h1>
    </div>
  </div>
  });
  // gameOfChancePrizeAmount = 0;
}
else if (gamePosition === 92){
  gamePosition = 4;
  // console.log(gamePosition);
  this.setState({
    playButtonText: "Click to end your turn.",
    playButton: <div className="gamebox__gameofChanceWrapper">
    <div className="gamebox__gameofChanceWrapper__topText">
      <h1>You did not win.</h1>
    </div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapper">
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[0]}</div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[1]}</div>
    <div className="gamebox__gameofChanceWrapper__numbersWrapperNumber">{gameOfChancePlayerRollsArray[2]}</div>
    </div>
    {/* add an image or animation here after game is done */}
    <div className="gamebox__gameofChanceWrapper__bottomText">
    <h1>You needed to roll {gameOfChanceJackPotNumber} to win the jackpot.</h1>
    </div>
  </div>
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
  {/* <CreditsInstructionsIndex /> */}
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
        <InventoryIndex />
        <CardCollectionIndex />
        </div>
    </div>
    <div className="gameBox__board">
      <div className="gameBox__board__topRow">
        <div className="gameBox__board__town">
          <div className="slot1">
            <div className="slot1PopUp"></div>
          </div>
        <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[0]}</div>
        </div>
        <div className="gameBox__board__spaceTwo">
        <div className="slot2">
            <div className="slot2PopUp"></div>
          </div>
          <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[1]}</div>
        </div>
        <div className="gameBox__board__spaceThree">
        <div className="slot3">
            <div className="slot3PopUp"></div>
          </div>
          <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[2]}</div>
        </div>
        <div className="gameBox__board__spaceFour">
        <div className="slot4">
            <div className="slot4PopUp"></div>
          </div>
          <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[3]}</div>
        </div>
        <div className="gameBox__board__spaceFive">
        <div className="slot5">
            <div className="slot5PopUp"></div>
          </div>
          <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[4]}</div>
        </div>
        <div className="gameBox__board__spaceSix">
        <div className="slot6">
            <div className="slot6PopUp"></div>
          </div>
          <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[5]}</div>
        </div>
        <div className="gameBox__board__spaceSeven">
        <div className="slot7">
            <div className="slot7PopUp"></div>
          </div>
          <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[6]}</div>
        </div>
        <div className="gameBox__board__spaceEight">
        <div className="slot8">
            <div className="slot8PopUp"></div>
          </div>
          <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[7]}</div>
        </div>
        <div className="gameBox__board__spaceNine">
        <div className="slot9">
            <div className="slot9PopUp"></div>
          </div>
          <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[8]}</div>
        </div>
        <div className="gameBox__board__spaceTen">
        <div className="slot10">
            <div className="slot10PopUp"></div>
          </div>
          <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[9]}</div>
        </div>
      </div>
      <div className="gameBox__board__bottomRow">
        <div className="gameBox__board__bottomRow__leftCorner">
        <div className="slot24">
            <div className="slot24PopUp"></div>
            <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[23]}</div>
          </div>
        </div>
        <div className="gameBox__board__spaceTwentyThree">
          <div className="slot23">
            <div className="slot23PopUp"></div>
            <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[22]}</div>
          </div>              
        </div>
        <div className="gameBox__board__spaceTwentyTwo">
          <div className="slot22">
            <div className="slot22PopUp"></div>
            <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[21]}</div>
          </div>
        </div>
        <div className="gameBox__board__spaceTwentyOne">
        <div className="slot21">
            <div className="slot21PopUp"></div>
            <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[20]}</div>
          </div>
        </div>
        <div className="gameBox__board__spaceTwenty">
        <div className="slot20">
            <div className="slot20PopUp"></div>
            <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[19]}</div>
          </div>
        </div>
        <div className="gameBox__board__spaceNineteen">
        <div className="slot19">
            <div className="slot19PopUp"></div>
            <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[18]}</div>
          </div>
        </div>
        <div className="gameBox__board__spaceEighteen">
        <div className="slot18">
            <div className="slot18PopUp"></div>
          </div>
          <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[17]}</div>
        </div>
        <div className="gameBox__board__spaceSeventeen">
        <div className="slot17">
            <div className="slot17PopUp"></div>
            <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[16]}</div>
          </div>
        </div>
        <div className="gameBox__board__spaceSixteen">
        <div className="slot16">
            <div className="slot16PopUp"></div>
            <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[15]}</div>
          </div>
        </div>
        <div className="gameBox__board__spaceFifthteen">
        <div className="slot15">
            <div className="slot15PopUp"></div>
            <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[14]}</div>
          </div>
        </div>
      </div>
      <div className="gamebox__board__leftRow">
        <div className="gameBox__board__SideSpaceTwentyEight">
        <div className="slot28">
            <div className="slot28PopUp"></div>
            <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[27]}</div>
          </div>
        </div>
        <div className="gameBox__board__SideSpaceTwentySeven">
        <div className="slot27">
            <div className="slot27PopUp"></div>
            <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[26]}</div>
          </div>
        </div>
        <div className="gameBox__board__SideSpaceTwentySix">
        <div className="slot26">
            <div className="slot26PopUp"></div>
            <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[25]}</div>
          </div>
        </div>
        <div className="gameBox__board__SideSpaceTwentyFive">
        <div className="slot25">
            <div className="slot25PopUp"></div>
            <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[24]}</div>
          </div>
        </div>
      </div>
      <div className="gamebox__board__rightRow">
        <div className="gameBox__board__SideSpaceEleven">
        <div className="slot11">
            <div className="slot11PopUp"></div>
          </div>
          <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[10]}</div>
        </div>
        <div className="gameBox__board__SideSpaceTwelve">
        <div className="slot12">
            <div className="slot12PopUp"></div>
          </div>
          <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[11]}</div>
        </div>
        <div className="gameBox__board__SideSpaceThirteen">
        <div className="slot13">
            <div className="slot13PopUp"></div>
          </div>
          <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[12]}</div>
        </div>
        <div className="gameBox__board__SideSpaceFourteen">
        <div className="slot14">
            <div className="slot14PopUp"></div>
            <div className="gameBox__board__avatarPadding">{playerBoardSlotArray[13]}</div>
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