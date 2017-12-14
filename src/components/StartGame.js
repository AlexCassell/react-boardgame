/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import logo from '../images/logos/logo.png';

import '../css/App.css';
import '../css/slotPopUps.css';
import '../css/die.css';
import '../css/card.css';

import ChatRoom from '../components/chatroom/index.js';
import InventoryIndex from '../components/inventory.js';
import CardCollectionIndex from '../components/cardCollection/index.js';
import CreditsInstructionsIndex from '../components/creditsInstructions/index.js';
import PickCharacter from '../components/pickCharacter.js';
import InSearchOf from '../components/inSearchOf.js';
import UnforseenEvent from '../components/unforseenEvent.js';

import {currentPlayerAvatar} from '../components/pickCharacter.js';
import {choseKnight}from '../components/pickCharacter.js';
import {choseMonk}from '../components/pickCharacter.js';
import {choseRogue}from '../components/pickCharacter.js';
import {choseDruid}from '../components/pickCharacter.js';
import {choseJock}from '../components/pickCharacter.js';
import {choseSuperhero}from '../components/pickCharacter.js';
import {choseTeacher}from '../components/pickCharacter.js';
import {choseSeventies}from '../components/pickCharacter.js';
import {playerHero}from '../components/pickCharacter.js';
import {opponentOne}from '../components/pickCharacter.js';
import {opponentTwo}from '../components/pickCharacter.js';
import {opponentThree}from '../components/pickCharacter.js';



import {opponentsGameLogString}from '../components/pickCharacter.js';
import {chosenCharacterGameLogString}from '../components/pickCharacter.js';


import knight from '../images/characters/knight.png';
import druid from '../images/characters/druid.png';
import monk from '../images/characters/monk.png';
import rogue from '../images/characters/rogue.png';
import jock from '../images/characters/jock.png';
import superhero from '../images/characters/superhero.png';
import teacher from '../images/characters/teacher.png';
import seventies from '../images/characters/seventies.png';

import goldicon from '../images/gold/market.png';
import woodicon from '../images/wood/market.png';
import foodicon from '../images/food/market.png';

import purchase from '../images/misc/purchaseButton.png';

import {resourceType} from '../components/inSearchOf.js';
import {howManyResource} from '../components/inSearchOf.js';

import {resourceTypeUE} from '../components/unforseenEvent.js';
import {howManyResourceUE} from '../components/unforseenEvent.js';

//sounds
const uiClick = new Audio("../sounds/click_04.wav");

//gameOfChance
let gameOfChancePrizeAmount = 1000, gameOfChanceRollArrayIndex = 0, gameOfChanceJackPotNumber = 1000;
let gameOfChancePlayerRollsArray = [];

let gamePosition = 0;

let undoAvailable = false, justStarted = true;

let playerBoardSlotArray = [""];

let playerCurrentSlot = 1, playerNewSlot = 0, playerOverRoll = 0, opponentOneCurrentSlot = 1, opponentTwoCurrentSlot = 1,opponentThreeCurrentSlot = 1, opponentFourCurrentSlot = 1;
let dieRoll = [""];
let currentPlayer = 1;
//stats
let coins = 500, gold = 0, wood = 0, food = 50;
let opponentsCoins = [500, 500, 500], opponentsGold = [0, 0, 0], opponentsWood = [0, 0, 0], opponentsFood = [50, 50, 50];

let gameLogArray =["Welcome to Merchants of Calliope!"], gameLogString = "Welcome to Merchants of Calliope!!",gameLogShowOnce = false,
date, hour, minutes, currentTime;

//market
let goldCurrentPrice = 75, woodCurrentPrice = 25, foodCurrentPrice = 15;
let goldSold = 0, woodSold = 0, foodSold = 0, soldTotalProfit = 0;

//realestate
let realEstateStatus = [];
let realEstateTitle = "", realEstateInfo = "", propertyName = "";
let realEstateCost = 0, realEstateCurrentProperty = 0;

//inSearchOf
let inSearchOfString = "", inSearchOfCount = 0;

//unforseenEvent
let unforseenEventString = "", unforseenEventCount = 0;

class StartGame extends Component {
  constructor(props) {
    super(props);
    this.state = {'playerPositionOnBoard': ''};
    this.state = {'middleContent': ''};
    this.state = {'playButtonText': 'Click here to begin your journey.'};
  }

rollDie() {
// dieRoll = [""];
// gamePosition = -1;
// for(let i = 0; i < 4; i++){
//   dieRoll[i] =+ Math.floor(Math.random()*12+1);
// }
// playerNewSlot = playerCurrentSlot + dieRoll[0];
// if(playerNewSlot > 28){
//   playerOverRoll =  playerNewSlot - 28;
//   return this.movePlayerOnBoardOverRoll();
// }
playerNewSlot = 4;//dev only
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

    return; //write break here so that player stops in town no matter what they rolled.. unless return works (cant test until AI is working)
  }
  // ReactDOM.render(<StartGame />, document.getElementById('root'));
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
    // ReactDOM.render(<StartGame />, document.getElementById('root'));
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
  // ReactDOM.render(<StartGame />, document.getElementById('root'));
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
    if(realEstateStatus[2] !== undefined){
      if(currentPlayer !== realEstateStatus[playerCurrentSlot]){
        gamePosition = 111;

        this.moveForward();
      }
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      realEstateCurrentProperty = 2;
      propertyName = "Slums of Painswick";
      realEstateTitle = "Would you like to buy Slums of Painswick?"
      realEstateInfo = "Slums of Painswick costs 100 coins.  If another player lands on this property they would owe you 15 coins for each visit.";
      realEstateCost = 100;
      this.moveForward();
    }
  }
  else if(playerCurrentSlot === 3) {
      if(realEstateStatus[3] !== undefined){ 
        
      }
      else {
        //console.log("Not Purchased");
        gamePosition = 11;
        propertyName = "Bradbury Dump";
        realEstateCurrentProperty = 3;
        realEstateTitle = "Would you like to buy Bradbury Dump?"
        realEstateInfo = "Bradbury Dump costs 200 coins.  If another player lands on this property they would owe you 30 coins for each visit.";
        realEstateCost = 200;
        this.moveForward();
      }
  }
  else if(playerCurrentSlot === 4) {
    this.unforseenEvent();
      }
  else if(playerCurrentSlot === 5) {
    if(realEstateStatus[5] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      realEstateCurrentProperty = 5;
      propertyName = "Ballintoy Prairie";
      realEstateTitle = "Would you like to buy Ballintoy Prairie?"
      realEstateInfo = "Ballintoy Prairie costs 300 coins.  This property generates 25 food items everytime you pass through town.";
      realEstateCost = 300;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 6) {
    if(realEstateStatus[6] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "Plains of Derrymore";
      realEstateCurrentProperty = 6;
      realEstateTitle = "Would you like to buy Plains of Derrymore?"
      realEstateInfo = "Plains of Derrymore costs 300 coins.  If another player lands on this property they would owe you 60 coins for each visit.";
      realEstateCost = 300;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 7) {
    this.inSearchOf();
      }
  else if(playerCurrentSlot === 8) {
    if(realEstateStatus[8] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "Tamnamore Gold Mine";
      realEstateCurrentProperty = 8;
      realEstateTitle = "Would you like to buy Tamnamore Gold Mine?"
      realEstateInfo = "Tamnamore Gold Mine costs 350 coins.  This property generates 15 gold bars everytime you pass through town.";
      realEstateCost = 350;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 9) {
        if(realEstateStatus[9] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "Whitehead Forest";
      realEstateCurrentProperty = 9;
      realEstateTitle = "Would you like to buy Whitehead Forest?"
      realEstateInfo = "Whitehead Forest costs 375 coins.  This property generates 30 wood bundles everytime you pass through town.";
      realEstateCost = 375;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 10) {
    this.applecrossSlaveMines();
      }
  else if(playerCurrentSlot === 11) {
    if(realEstateStatus[11] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      realEstateCurrentProperty = 11;
      propertyName = "Whaligoe Mountains";
      realEstateTitle = "Would you like to buy Whaligoe Mountains?"
      realEstateInfo = "Whaligoe Mountains costs 500 coins.  If another player lands on this property they would owe you 80 coins for each visit.";
      realEstateCost = 500;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 12) {
    if(realEstateStatus[12] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "Ainsley Park";
      realEstateCurrentProperty = 12;
      realEstateTitle = "Would you like to buy Ainsley Park?"
      realEstateInfo = "Ainsley Park costs 600 coins.  If another player lands on this property they would owe you 100 coins for each visit.";
      realEstateCost = 600;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 13) {
    if(realEstateStatus[13] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "The hill at Dorset";
      realEstateCurrentProperty = 13;
      realEstateTitle = "Would you like to buy The hill at Dorset?"
      realEstateInfo = "The hill at Dorset costs 700 coins.  This property generates 30 gold bars everytime you pass through town.";
      realEstateCost = 700;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 14) {
    if(realEstateStatus[14] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "Whitehead Forest";
      realEstateCurrentProperty = 14;
      realEstateTitle = "Would you like to buy Whitehead Forest?"
      realEstateInfo = "Whitehead Forest costs 800 coins.  This property generates 50 food items everytime you pass through town.";
      realEstateCost = 800;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 15) {
    
    this.yarmouthPortal();
      }
  else if(playerCurrentSlot === 16) {
    if(realEstateStatus[16] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "Caleb's Hunting Lodge";
      realEstateCurrentProperty = 16;
      realEstateTitle = "Would you like to buy Caleb's Hunting Lodge?"
      realEstateInfo = "Caleb's Hunting Lodge costs 1000 coins.  If another player lands on this property they would owe you 150 coins for each visit.";
      realEstateCost = 1000;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 17) {
    if(realEstateStatus[17] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "Carter's Cottage";
      realEstateCurrentProperty = 17;
      realEstateTitle = "Would you like to buy Carter's Cottage?"
      realEstateInfo = "Carter's Cottage costs 1200 coins.  If another player lands on this property they would owe you 200 coins for each visit.";
      realEstateCost = 1200;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 18) {
    if(realEstateStatus[18] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "The Old Lilian Farm";
      realEstateCurrentProperty = 18;
      realEstateTitle = "Would you like to buy The Old Lilian Farm?"
      realEstateInfo = "The Old Lilian Farm costs 1300 coins.  This property generates 100 food items everytime you pass through town.";
      realEstateCost = 1300;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 19) {
    
    this.unforseenEvent();
      }
  else if(playerCurrentSlot === 20) {
    if(realEstateStatus[20] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "Clovelly Inn";
      realEstateCurrentProperty = 20;
      realEstateTitle = "Would you like to buy Clovelly Inn?"
      realEstateInfo = "Carter's Cottage costs 1500 coins.  If another player lands on this property they would owe you 350 coins for each visit.";
      realEstateCost = 1500;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 21) {
    if(realEstateStatus[21] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "The Rosewood Hinterlands";
      realEstateCurrentProperty = 21;
      realEstateTitle = "Would you like to buy the The Rosewood Hinterlands?"
      realEstateInfo = "The Rosewood Hinterlands costs 1600 coins.  This property generates 50 wood bundles everytime you pass through town.";
      realEstateCost = 1600;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 22) {
    
    this.inSearchOf();
      }
  else if(playerCurrentSlot === 23) {
    if(realEstateStatus[23] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "Fazeley Caves";
      realEstateCurrentProperty = 23;
      realEstateTitle = "Would you like to buy Fazeley Caves?"
      realEstateInfo = "Fazeley Caves costs 2100 coins.  This property generates 45 gold bars everytime you pass through town.";
      realEstateCost = 2100;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 24) {
    
    this.gameOfChance();
      }
  else if(playerCurrentSlot === 25) {
    if(realEstateStatus[25] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "Shanvey Tavern";
      realEstateCurrentProperty = 25;
      realEstateTitle = "Would you like to buy Shanvey Tavern?"
      realEstateInfo = "Shanvey Tavern costs 2500 coins.  If another player lands on this property they would owe you 500 coins for each visit.";
      realEstateCost = 2500;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 26) {
    if(realEstateStatus[26] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "Woodlands of Judith";
      realEstateCurrentProperty = 26;
      realEstateTitle = "Would you like to buy Woodlands of Judith?"
      realEstateInfo = "Woodlands of Judith costs 2900 coins.  This property generates 60 gold bars everytime you pass through town.";
      realEstateCost = 2900;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 27) {
    if(realEstateStatus[27] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "The Aureate Pass";
      realEstateCurrentProperty = 27;
      realEstateTitle = "Would you like to buy The Aureate Pass?"
      realEstateInfo = "The Aureate Pass costs 3200 coins.  This property generates 75 wood bundles items everytime you pass through town.";
      realEstateCost = 3200;
      this.moveForward();
    }
      }
  else if(playerCurrentSlot === 28) {
    if(realEstateStatus[28] !== undefined){ 
      
    }
    else {
      //console.log("Not Purchased");
      gamePosition = 11;
      propertyName = "Shanvey Tavern";
      realEstateCurrentProperty = 28;
      realEstateTitle = "Would you like to buy Shanvey Tavern?"
      realEstateInfo = "Shanvey Tavern costs 3500 coins.  If another player lands on this property they would owe you 650 coins for each visit.";
      realEstateCost = 3500;
      this.moveForward();
    }
      }
}

purchaseRealEstate(){
  if(coins >= realEstateCost){
    coins -= realEstateCost;
    //console.log(realEstateStatus[realEstateCurrentProperty]);
    realEstateStatus[realEstateCurrentProperty] = currentPlayer;
    if(currentPlayer === 1){
      gameLogArray.push(currentTime + "You bought " + propertyName + " for " + realEstateCost + " coins.");
    }
    else{
      gameLogArray.push(currentTime + "Opponent " + currentPlayer + " bought " + propertyName + " for " + realEstateCost + " coins.");
    }
    this.gameLog();
    
    //console.log(realEstateStatus[realEstateCurrentProperty]);
    //change slot graphic to show who owns slot-------------------------------------------------------------------
    gamePosition = 4;
    this.moveForward();
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
    // ReactDOM.render(<StartGame />, document.getElementById('root'));
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
      //console.log(gameOfChancePlayerRollsArray[i]);
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
    // ReactDOM.render(<StartGame />, document.getElementById('root'));
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
    // ReactDOM.render(<StartGame />, document.getElementById('root'));
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
    // ReactDOM.render(<StartGame />, document.getElementById('root'));
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
      //console.log(priceChange);
      goldCurrentPrice += priceChange;
      //console.log(goldCurrentPrice);
    }
  }
}

  woodMarketIncrease(){
    if(woodCurrentPrice < 94){
      let fiddyFiddy = Math.round(Math.random() * (3 - 1) + 1);
      if(fiddyFiddy === 1){
        let priceChange = Math.round(Math.random() * (2 - 1) + 1);
        //console.log(priceChange);
        woodCurrentPrice += priceChange;
        //console.log(woodCurrentPrice);
      }
    }
  }

  foodMarketIncrease(){
    if(foodCurrentPrice < 96){
      let fiddyFiddy = Math.round(Math.random() * (4 - 1) + 1);
      if(fiddyFiddy === 1){
        let priceChange = Math.round(Math.random() * (1 - 0) + 0);
        //console.log(priceChange);
        foodCurrentPrice += priceChange;
        //console.log(foodCurrentPrice);
      }
    }
  }

  goldMarketDecrease(){
    if(goldCurrentPrice > 10){
      let priceChange = Math.round(Math.random() * (5 - 0) + 0);
      //console.log(priceChange);
      goldCurrentPrice -= priceChange;
      //console.log(goldCurrentPrice);
    }
    gamePosition = 10;
    this.woodMarketIncrease();
    this.foodMarketIncrease();
    this.moveForward();
  }

  woodMarketDecrease(){
    if(woodCurrentPrice > 10){
      let priceChange = Math.round(Math.random() * (5 - 0) + 0);
      //console.log(priceChange);
      woodCurrentPrice -= priceChange;
      //console.log(woodCurrentPrice);
    }
    gamePosition = 10;
    this.goldMarketIncrease();
    this.foodMarketIncrease();
    this.moveForward();
  }


  foodMarketDecrease(){
    if(foodCurrentPrice > 10){
      let priceChange = Math.round(Math.random() * (5 - 0) + 0);
      //console.log(priceChange);
      foodCurrentPrice -= priceChange;
      //console.log(foodCurrentPrice);
    }
    gamePosition = 10;
    this.goldMarketIncrease();
    this.woodMarketIncrease();
    this.moveForward();
  }

  inSearchOfCalculated(){
    let tmpString = "";
    if(resourceType === 0){
      coins += howManyResource;
      tmpString = "coins."
      // console.log(coins);
    }
    else if(resourceType === 1){
      gold += howManyResource;
      // console.log(gold);
      tmpString = "gold bars.";
    }
    else if(resourceType === 2){
      wood += howManyResource;
      // console.log(wood);
      tmpString = "wood bundles.";
    }
    else if(resourceType === 3){
      food += howManyResource;
      console.log(food);
      tmpString = "food items.";
    }
    gameLogArray.push(currentTime + "You found " + howManyResource + " " + tmpString);
    this.gameLog();
    this.moveForward();
  }

  unForseenEventsCalculated(){
    let tmpString = "";
    if(resourceTypeUE === 0){
      if(coins > howManyResourceUE){
        coins -= howManyResourceUE;
      }
      else {
        coins = 0;
      }  
      tmpString = "coins."
    }
    else if(resourceTypeUE === 1){
        if(gold > howManyResourceUE){
          gold -= howManyResourceUE;
        }
        else {
          gold = 0;
        }
        tmpString = "gold bars.";
      }

    else if(resourceTypeUE === 2){
        if(wood > howManyResourceUE){
          wood -= howManyResourceUE;
        }
        else {
          wood = 0;
        }
      tmpString = "wood bundles.";
    }
    else if(resourceTypeUE === 3){
        if(food > howManyResourceUE){
          food -= howManyResourceUE;
        }
        else {
          food = 0;
        }
      tmpString = "food items.";
    }
    gameLogArray.push(currentTime + "You lost " + howManyResourceUE + " " + tmpString);
    this.gameLog();
    this.moveForward();
  }


  //Main Game Function
moveForward () {
  //console.log(gamePosition);
  if(gamePosition === 0){//add if logged in after login is added
    gamePosition = 1;
    this.setState({
      playButtonText: "Click here once you have chosen your hero.",
      middleContent:<PickCharacter />
        });
  }
  else if (gamePosition === 1){
    if(choseKnight === true || choseDruid === true || choseMonk === true || choseRogue === true || choseJock === true || choseSuperhero === true || choseTeacher === true || choseSeventies === true){
      this.getTime();
      gameLogArray.push(currentTime + "You chose to play the " + chosenCharacterGameLogString +".");
      this.gameLog();
    gamePosition = 2;
    currentPlayer = 1; //1 is human player
    this.setState({
      playerPositionOnBoard: playerBoardSlotArray[playerCurrentSlot - 1] = playerHero,
      playButtonText: "Click here when you are ready to begin.",
      middleContent: <div className="gameBox__board__opponents"><span className="gameBox__board__opponents__text"><h3>Your opponents have been chosen.</h3></span>{opponentOne}{opponentTwo}{opponentThree}</div>
    });
}

}
else if (gamePosition === 2){
  gamePosition = 3;
  this.setState({
    playButtonText: "Roll Die",
    middleContent: <div className="dieWrapper"><div id="pentagon"></div></div>
  });
}
else if (gamePosition === 3){
    gamePosition = -1;
    this.rollDie();
    this.getTime();
    gameLogArray.push(currentTime + "You rolled " + dieRoll[0]);
    this.gameLog();
    this.setState({
    playButtonText: "Player moving...",
    middleContent: <div className="dieWrapper">{dieRoll[0]}</div>
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
    middleContent: ""
  });
  if(currentPlayer < 4){
    currentPlayer += 1;
  }
  else{
    currentPlayer = 1;
  }
  console.log("current player:" + currentPlayer);
}
else if (gamePosition === 5){
  if(unforseenEventCount === 0){
    unforseenEventString = < UnforseenEvent />;
    unforseenEventCount = 1;
    gamePosition = 5;
  }
  else {
    unforseenEventCount = 0;
    gamePosition = 4;
  }
  this.setState({
    playButtonText: "Click here to end your turn.",
    middleContent: <div className="cardWrapper">
    <div className="cardWrapper__topText">
      <h1>Oh no! You have suffered an Unforseen Event.</h1>
    </div>
    <div className="cardWrapper__info">
    {unforseenEventString}
    </div>
  </div>
  });
  if(unforseenEventCount === 1){
    this.unForseenEventsCalculated();
  }
}
else if (gamePosition === 6){
  if(inSearchOfCount === 0){
    inSearchOfString = < InSearchOf />;
    inSearchOfCount = 1;
    gamePosition = 6;
  }
  else {
    inSearchOfCount = 0;
    gamePosition = 4;
  }
  this.setState({
    playButtonText: "Click here to end your turn.",
    middleContent: <div className="cardWrapper">
    <div className="cardWrapper__topText">
      <h1>You found something of value.</h1>
    </div>
    <div className="cardWrapper__info">
    {inSearchOfString}
    </div>
  </div>
  });
  if(inSearchOfCount === 1){
    this.inSearchOfCalculated();
  }
}
else if (gamePosition === 7){
  gamePosition = -1;
  gameLogArray.push(currentTime + "You have been captured!");
  this.gameLog();
  this.setState({
    playButtonText: "You have been captured!",
    middleContent: ""
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
    middleContent: ""
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
    middleContent: <div className="gamebox__gameofChanceWrapper">
      <div className="gamebox__gameofChanceWrapper__topText">
        <h1>Click above when you are ready to try your luck.</h1>
      </div>
      {/* add an image or animation here after game is done */}
      <div className="gamebox__gameofChanceWrapper__bottomText">
      <h1>You need to roll {gameOfChanceJackPotNumber} to win the jackpot!</h1>
      </div>
    </div>
  });
  // //console.log(gamePosition);
}
else if (gamePosition === 90){
  gamePosition = 901;
  this.gameOfChanceRoll();
  this.setState({
    playButtonText: "Please wait ",
    middleContent:  <div className="gamebox__gameofChanceWrapper">
    <div className="gamebox__gameofChanceWrapper__topText">
      {/* <h1></h1> */}
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
    middleContent:  <div className="gamebox__gameofChanceWrapper">
    <div className="gamebox__gameofChanceWrapper__topText">
      {/* <h1></h1> */}
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
    middleContent:  <div className="gamebox__gameofChanceWrapper">
    <div className="gamebox__gameofChanceWrapper__topText">
      {/* <h1></h1> */}
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
  // //console.log(gamePosition);
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
    middleContent: <div className="gamebox__gameofChanceWrapper">
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
  // //console.log(gamePosition);
  this.setState({
    playButtonText: "Click to end your turn.",
    middleContent: <div className="gamebox__gameofChanceWrapper">
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
    middleContent: 
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
    middleContent: <div className="gamebox__realEstateWrapper">
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
//           middleContent: "You cannot undo this action."
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
      {this.state.middleContent}
    </div>
    <div className="gameBox__chatroom">
      <h2><span className="body_altFont">Game Log</span></h2>
      <div className="gameBox__chatroom__text">
          {gameLogString.split("\n").map(i => {
            return <div>{i}<hr /></div>;
          })}
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