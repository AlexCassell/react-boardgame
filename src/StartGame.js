import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import knight from './images/knight.png';
import druid from './images/druid.png';
import monk from './images/monk.png';
import rogue from './images/rogue.png';

import jock from './images/jock.png';
import superhero from './images/superhero.png';
import teacher from './images/teacher.png';
import seventies from './images/seventies.png';

let gamePosition = 0;
let singlePlayerOponents = [];
let undoAvailable = false, multiPlayer = false, backClicked = false, choseKnight = false, choseDruid = false, choseMonk = false, choseRogue = false,
choseJock = false, choseSuperhero = false, choseTeacher = false, choseSeventies = false,
computerKnight = false, computerDruid = false, computerMonk = false, computerRogue = false,
computerJock = false, computerSuperhero = false, computerTeacher = false, computerSeventies = false;

class StartGame extends Component {
    constructor(props) {
        super(props);
        this.state = {'playButton': ''};
        this.state = {'playButtonText': 'Click to Start'}; 
      }
      //Choose Character Functions
      resetChosenCharacter () {
        choseKnight = false, choseDruid = false, choseMonk = false, choseRogue = false,
        choseJock = false, choseSuperhero = false, choseTeacher = false, choseSeventies = false,
        computerKnight = false, computerDruid = false, computerMonk = false, computerRogue = false,
        computerJock = false, computerSuperhero = false, computerTeacher = false, computerSeventies = false;
      }

      characterChosenKnight () {
        console.log(choseKnight);
        if(multiPlayer){

        }
        else{
          singlePlayerOponents = [];
          this.resetChosenCharacter();
          choseKnight = true;     
          this.singlePlayerChooseOpponents();
        }
      }
      characterChosenDruid () {
        console.log(choseDruid);
        if(multiPlayer){
          
        }
        else{
          singlePlayerOponents = [];
          this.resetChosenCharacter(); 
          choseDruid = true; 
          this.singlePlayerChooseOpponents();
        }
      }
      characterChosenMonk () {
        console.log(choseMonk);
        if(multiPlayer){
          
        }
        else{
          singlePlayerOponents = [];
          this.resetChosenCharacter(); 
          choseMonk = true; 
          this.singlePlayerChooseOpponents();
        }
      }
      characterChosenRogue () {
        console.log(choseRogue);
        if(multiPlayer){
          
        }
        else{
          singlePlayerOponents = [];
          this.resetChosenCharacter(); 
          choseRogue = true; 
          this.singlePlayerChooseOpponents();
        }
      }
      characterChosenJock () {
        console.log(choseJock);
        if(multiPlayer){
          
        }
        else{
          singlePlayerOponents = [];
          this.resetChosenCharacter();  
          choseJock = true;
          this.singlePlayerChooseOpponents();
        }
      }
      characterChosenSuperhero () {
        console.log(choseSuperhero);
        if(multiPlayer){
          
        }
        else{
          singlePlayerOponents = [];
          this.resetChosenCharacter();
          choseSuperhero = true; 
          this.singlePlayerChooseOpponents();
        }
      }
      characterChosenTeacher () {
        console.log(choseTeacher);
        if(multiPlayer){
          
        }
        else{
          singlePlayerOponents = [];
          this.resetChosenCharacter(); 
          choseTeacher = true; 
          this.singlePlayerChooseOpponents();
        }
      }
      characterChosenSeventies () {
        console.log(choseSeventies);
        if(multiPlayer){
          
        }
        else{
          singlePlayerOponents = [];
          this.resetChosenCharacter(); 
          choseSeventies = true; 
          this.singlePlayerChooseOpponents();
        }
      }

      
      singlePlayerChooseOpponents(){
        let randomNumber = Math.floor(Math.random() * 9);
        console.log(randomNumber);
        console.log(singlePlayerOponents);
        while(singlePlayerOponents.length < 4){
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
        }
      }
  

    //Main Game Function --so far, might be split into seperate functions in the future
      moveForward () {
        backClicked = false;
        if(gamePosition === 0){//add if logged in after login is added
          gamePosition = gamePosition + 1;
          this.setState({
            playButtonText: "Click here once you have chosen.",
            playButton: <div className="gameBox__board__pickCharacter">Choose Character<br />
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
        else if (gamePosition === 1 && choseKnight === true || choseDruid === true || choseMonk === true || choseRogue === true || choseJock === true || choseSuperhero === true || choseTeacher === true || choseSeventies === true){
          gamePosition = gamePosition + 1;
          this.setState({
            playButton: "Game Still Going",
            playButtonText: "Position is decided.",
          });
        }
      }

      moveBack() {
        if(backClicked){
          //not sure if anything will go here or not
        }
        else{
          backClicked = true;
          if(gamePosition > 0){
            gamePosition = gamePosition - 1;
            this.setState({
              playButton: "You cannot undo this action."
            });
          }
        }
    }
      
      render() {
        return (
            <div className="advanceGame">
              <button className="advanceGame__decrement" onClick={this.moveForward.bind(this)}> {this.state.playButtonText} </button>
              {/* <button className="advanceGame__increment" onClick={this.moveBack.bind(this)}> Back </button> */}
              {this.state.playButton}
            </div>
        );
      }

      
    }

    ReactDOM.render(<StartGame />, document.getElementById('root'));

export default StartGame;