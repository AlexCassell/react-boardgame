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
import PickCharacter from './components/pickCharacter.js';

import {currentPlayerAvatar} from './components/pickCharacter.js';
import {choseKnight}from './components/pickCharacter.js';
import {choseMonk}from './components/pickCharacter.js';
import {choseRogue}from './components/pickCharacter.js';
import {choseDruid}from './components/pickCharacter.js';
import {choseJock}from './components/pickCharacter.js';
import {choseSuperhero}from './components/pickCharacter.js';
import {choseTeacher}from './components/pickCharacter.js';
import {choseSeventies}from './components/pickCharacter.js';
import {playerHero}from './components/pickCharacter.js';
import {opponentOne}from './components/pickCharacter.js';
import {opponentTwo}from './components/pickCharacter.js';
import {opponentThree}from './components/pickCharacter.js';

import {opponentsGameLogString}from './components/pickCharacter.js';
import {chosenCharacterGameLogString}from './components/pickCharacter.js';


import knight from './images/characters/knight.png';
import druid from './images/characters/druid.png';
import monk from './images/characters/monk.png';
import rogue from './images/characters/rogue.png';
import jock from './images/characters/jock.png';
import superhero from './images/characters/superhero.png';
import teacher from './images/characters/teacher.png';
import seventies from './images/characters/seventies.png';

import goldicon from './images/gold/market.png';
import woodicon from './images/wood/market.png';
import foodicon from './images/food/market.png';

import purchase from './images/misc/purchaseButton.png';


//sounds
const uiClick = new Audio("./sounds/click_04.wav");

//gameOfChance
let gameOfChancePrizeAmount = 1000, gameOfChanceRollArrayIndex = 0, gameOfChanceJackPotNumber = 1000;
let gameOfChancePlayerRollsArray = [];

let gamePosition = 0;

let undoAvailable = false, justStarted = true;

let playerBoardSlotArray = [""];

let playerCurrentSlot = 1, playerNewSlot = 0, playerOverRoll = 0, opponentOneCurrentSlot = 1, opponentTwoCurrentSlot = 1,opponentThreeCurrentSlot = 1, opponentFourCurrentSlot = 1;
let dieRoll = [""];
let whosTurn = 1;
//stats
let coins = 500, gold = 0, wood = 0, food = 50;

let gameLogArray =["Welcome to Merchants of Calliope!"], gameLogString = "Welcome to Merchants of Calliope!!",gameLogShowOnce = false,
date, hour, minutes, currentTime;

//market
let goldCurrentPrice = 75, woodCurrentPrice = 25, foodCurrentPrice = 15;
let goldSold = 0, woodSold = 0, foodSold = 0, soldTotalProfit = 0;

//realestate
let realEstateStatus = [];
let realEstateTitle = "", realEstateInfo = "";
let realEstateCost = 0, realEstateCurrentProperty = 0;

class StartGame extends Component {
  constructor(props) {
    super(props);
    this.state = {'playerPositionOnBoard': ''};
    this.state = {'playButton': ''};
    this.state = {'playButtonText': 'Click here to begin your journey.'};
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
playerNewSlot = 2;//dev only
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
  
  playerCurrentSlot ++
  if(playerCurrentSlot === 1){
    this.getTime();
    gameLogArray.push(currentTime + "You made it back to town.");
    gamePosition = 10;
    this.gameLog();
    this.moveForward();
  }
  ReactDOM.render(<StartGame />, document.getElementById('root'));
  setTimeout(this.movePlayerOnBoard.bind(this), 200);
}
}

movePlayerOnBoardOverRoll(){
  if(playerCurrentSlot === playerNewSlot){
    this.checkCurrentGameSlotForPlayer();
    gamePosition = 4;
    this.moveForward ();
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
    if(realEstateStatus[2] != undefined){ //change array should keep track of who owns it 0 for player 1 for npc1 etc
      
    }
    else {
      console.log("Not Purchased");
      gamePosition = 11;
      realEstateCurrentProperty = 2;
      realEstateTitle = "Would you like to buy the Slums of Painswick?"
      realEstateInfo = "Slums of Painswick costs 100 coins.  If another player lands on this property they would owe you 15 coins for each visit.";
      realEstateCost = 100;
      this.moveForward();

    }
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

purchaseRealEstate(){
  if(coins >= realEstateCost){
    coins -= realEstateCost;
    console.log(realEstateStatus[realEstateCurrentProperty]);
    realEstateStatus[realEstateCurrentProperty] = 0;
    console.log(realEstateStatus[realEstateCurrentProperty]);
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



gameLog(){
  gameLogString = "";
  for(let i = 0;i < gameLogArray.length;i++){
    gameLogString += gameLogArray[i] + '\n';
  }
}

getTime(){
  let date = new Date();
  let hour = date.getHours();
  let minutes = String(date.getMinutes());
  if(minutes.length === 1){
    minutes = '0' + minutes;
  }
  if(hour > 12){
    hour -= 12;
  }
  return currentTime = hour + ":" + minutes + " - ";
}

//Market
sellGold() {
  if(gold > 0){
    gold -= 1;
    goldSold += 1;
    coins += goldCurrentPrice;
    soldTotalProfit += goldCurrentPrice;
    this.goldMarketDecrease();
    ReactDOM.render(<StartGame />, document.getElementById('root'));
  }
  else{
    //play buzzer
  }
}

sellWood() {
  if(wood > 0){
    wood -= 1;
    woodSold += 1;
    coins += woodCurrentPrice;
    soldTotalProfit += woodCurrentPrice;
    this.woodMarketDecrease();
    ReactDOM.render(<StartGame />, document.getElementById('root'));
  }
  else{
    //play buzzer
  }
}

sellFood() {
  if(food > 0){
    food -= 1;
    foodSold += 1;
    coins += foodCurrentPrice;
    soldTotalProfit += foodCurrentPrice;
    this.foodMarketDecrease();
    ReactDOM.render(<StartGame />, document.getElementById('root'));
  }
  else{
    //play buzzer
  }
}

goldMarketIncrease(){
  if(goldCurrentPrice < 94){
    let fiddyFiddy = Math.round(Math.random() * (2 - 1) + 1);
    if(fiddyFiddy === 1){
      let priceChange = Math.round(Math.random() * (3 - 0) + 0);
      console.log(priceChange);
      goldCurrentPrice += priceChange;
      console.log(goldCurrentPrice);
    }
  }
}

  woodMarketIncrease(){
    if(woodCurrentPrice < 94){
      let fiddyFiddy = Math.round(Math.random() * (3 - 1) + 1);
      if(fiddyFiddy === 1){
        let priceChange = Math.round(Math.random() * (2 - 1) + 1);
        console.log(priceChange);
        woodCurrentPrice += priceChange;
        console.log(woodCurrentPrice);
      }
    }
  }

  foodMarketIncrease(){
    if(foodCurrentPrice < 96){
      let fiddyFiddy = Math.round(Math.random() * (4 - 1) + 1);
      if(fiddyFiddy === 1){
        let priceChange = Math.round(Math.random() * (1 - 0) + 0);
        console.log(priceChange);
        foodCurrentPrice += priceChange;
        console.log(foodCurrentPrice);
      }
    }
  }

  goldMarketDecrease(){
    if(goldCurrentPrice > 10){
      let priceChange = Math.round(Math.random() * (5 - 0) + 0);
      console.log(priceChange);
      goldCurrentPrice -= priceChange;
      console.log(goldCurrentPrice);
    }
    gamePosition = 10;
    this.woodMarketIncrease();
    this.foodMarketIncrease();
    this.moveForward();
  }

  woodMarketDecrease(){
    if(woodCurrentPrice > 10){
      let priceChange = Math.round(Math.random() * (5 - 0) + 0);
      console.log(priceChange);
      woodCurrentPrice -= priceChange;
      console.log(woodCurrentPrice);
    }
    gamePosition = 10;
    this.goldMarketIncrease();
    this.foodMarketIncrease();
    this.moveForward();
  }


  foodMarketDecrease(){
    if(foodCurrentPrice > 10){
      let priceChange = Math.round(Math.random() * (5 - 0) + 0);
      console.log(priceChange);
      foodCurrentPrice -= priceChange;
      console.log(foodCurrentPrice);
    }
    gamePosition = 10;
    this.goldMarketIncrease();
    this.woodMarketIncrease();
    this.moveForward();
  }


  //Main Game Function
moveForward () {
  //time - refactor into own file


  if(gamePosition === 0){//add if logged in after login is added
    gamePosition = 1;
    this.setState({
      playButtonText: "Click here once you have chosen your hero.",
      playButton:<PickCharacter />
        });
  }
  else if (gamePosition === 1){
    if(choseKnight === true || choseDruid === true || choseMonk === true || choseRogue === true || choseJock === true || choseSuperhero === true || choseTeacher === true || choseSeventies === true){
      this.getTime();
      gameLogArray.push(currentTime + "You chose to play the " + chosenCharacterGameLogString +".");
      this.gameLog();
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
    this.getTime();
    gameLogArray.push(currentTime + "You rolled " + dieRoll[0]);
    this.gameLog();
    this.setState({
    playButtonText: "Player moving...",
    playButton: <div className="dieWrapper">{dieRoll[0]}</div>
  });
}
else if (gamePosition === 4){
  if(soldTotalProfit > 0){
    this.getTime();
    gameLogArray.push(currentTime + "You sold " + goldSold.toLocaleString() + " gold bars, " + woodSold.toLocaleString() + " bundles of lumber, " + foodSold.toLocaleString() + " food items; for a total profit of " + soldTotalProfit.toLocaleString() + " coins." );
    this.gameLog();
    soldTotalProfit = 0;
    goldSold = 0;
    woodSold = 0;
    foodSold = 0;
  }
  gamePosition = -1;
  this.setState({
    playButtonText: "Please wait while your opponents take their turn.",
    playButton: ""
  });
}
else if (gamePosition === 5){
  gamePosition = -1;
  this.getTime();
  gameLogArray.push(currentTime + "You have suffered an Unforseen Event.");
  this.gameLog();
  this.setState({
    playButtonText: "Oh no! You have suffered an Unforseen Event.",
    playButton: ""
  });
}
else if (gamePosition === 6){
  gamePosition = -1;
  this.getTime();
  gameLogArray.push(currentTime + "You found something interesting.");
  this.gameLog();
  this.setState({
    playButtonText: "What good fortune, you have found something!",
    playButton: ""
  });
}
else if (gamePosition === 7){
  gamePosition = -1;
  gameLogArray.push(currentTime + "You have been captured!");
  this.gameLog();
  this.setState({
    playButtonText: "You have been captured!",
    playButton: ""
  });
}
else if (gamePosition === 8){
  gamePosition = 4;
  this.getTime();
  gameLogArray.push(currentTime + "You found a portal.");
  gameLogArray.push(currentTime + "You made it back to town.");
  gamePosition = 10;
  this.gameLog();
  this.setState({
    playButtonText: "You have teleported to relative safety.",
    playButton: ""
  });
  this.moveForward();
}
else if (gamePosition === 9){
  gameLogShowOnce = false;
  this.getTime();
  gameLogArray.push(currentTime + "You paid 500 coins to play a game of chance.");
  this.gameLog();
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
  coins = coins.toLocaleString();
  if(gameLogShowOnce === false){
    gameLogShowOnce = true;
    this.getTime();
    gameLogArray.push(currentTime + "You won " + gameOfChancePrizeAmount.toLocaleString() + " coins!");
    this.gameLog();
  }
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
  if(gameLogShowOnce === false){
    gameLogShowOnce = true;
    this.getTime();
    gameLogArray.push(currentTime + "You did not win the game of chance.");
    this.gameLog();
  }
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
else if (gamePosition === 10){
  gamePosition = 4;
  this.setState({
    playButtonText: "Click here to end your turn.",
    playButton: 
    <div className="gamebox__marketWrapper">
      <div className="gamebox__marketWrapper__topText">
        <h1>Would you like to sell any items?</h1>
      </div>
      <div className="gamebox__marketWrapper__imageWrapper">
        <div className="gamebox__marketWrapper__imageWrapper__goldBarsWrapper">
          <div className="gamebox__marketWrapper__imageWrapper__goldBarsWrapper__image"><button className="marketButtons" onClick={this.sellGold.bind(this)}><img src={goldicon} alt={"Gold"}/></button>
          </div>
          <div className="gamebox__marketWrapper__imageWrapper__goldBarsWrapper__price">{goldCurrentPrice} coins
          </div>
        </div>
        <div className="gamebox__marketWrapper__imageWrapper__woodWrapper">
          <div className="gamebox__marketWrapper__imageWrapper__woodWrapper__image"><button className="marketButtons" onClick={this.sellWood.bind(this)}><img src={woodicon} alt={"wood"}/></button>
          </div>
          <div className="gamebox__marketWrapper__imageWrapper__woodWrapper__price">{woodCurrentPrice} coins
          </div>
        </div>
        <div className="gamebox__marketWrapper__imageWrapper__foodWrapper">
          <div className="gamebox__marketWrapper__imageWrapper__foodWrapper__image"><button className="marketButtons" onClick={this.sellFood.bind(this)}><img src={foodicon} alt={"food"}/></button>
          </div>
          <div className="gamebox__marketWrapper__imageWrapper__foodWrapper__price">{foodCurrentPrice} coins
          </div>
        </div>
      </div>
    </div>
  });
}
else if (gamePosition === 11){
  gamePosition = 4;
  this.setState({
    playButtonText: "Click to end your turn.",
    playButton: <div className="gamebox__realEstateWrapper">
    <div className="gamebox__realEstateWrapper__topText">
      <h1>{realEstateTitle}</h1>
    </div>
    <div className="gamebox__realEstateWrapper__info">
    {realEstateInfo}
    </div>
    <div className="gamebox__realEstateWrapper__purchaseButton">
      <button className="realEstate__buttonActual" onClick={this.purchaseRealEstate.bind(this)}><img src={purchase} alt={"purchase"}/></button>
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
      {/* <ChatRoom /> */}
      <h2><span className="body_altFont">Game Log</span></h2>
      <div className="gameBox__chatroom__text">
          {gameLogString.split("\n").map(i => {
            return <div>{i}<hr /></div>;
          })}
      {/* {gameLogString} */}
      </div>
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
export {coins};
export {gold};
export {wood};
export {food};

export {knight};
export {druid};
export {monk};
export {rogue};
export {teacher};
export {superhero};
export {jock};
export {seventies};