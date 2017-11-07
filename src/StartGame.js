/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sound from 'react-sound';

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

const clickSound = new Audio("./sounds/click.wav");

 let playerHero = "", opponentOne, opponentTwo, opponentThree;

 let slotOne = "", slotTwo, slotThree, slotFour, slotFive, slotSix, slotSeven;


class StartGame extends Component {
    constructor(props) {
        super(props);
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
        console.log(choseKnight);
        // clickSound.play();
        slotOne === <div className="gameBox__board__space__portrait"><img src={knight} alt={'Knight'}/></div>
        // this.setState({
        //   slotOne: <div className="gameBox__board__space__portrait"><img src={knight} alt={'Knight'}/></div>,
        // });
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
        console.log(choseDruid);
        if(multiPlayer){
          
        }
        else{
          singlePlayerOponents = [];
          this.resetChosenCharacter(); 
          choseDruid = true; 
          this.singlePlayerChooseOpponents();
          playerHero = <img src={druid} alt={"Druid"}/>;
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
          playerHero = <img src={monk} alt={"Monk"}/>;
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
          playerHero = <img src={rogue} alt={"Rogue"}/>;
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
          playerHero = <img src={jock} alt={"Jock"}/>;
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
          playerHero = <img src={superhero} alt={"Superhero"}/>;
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
          playerHero = <img src={teacher} alt={"Teacher"}/>;
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
          playerHero = <img src={seventies} alt={"Seventies"}/>;
        }
      }

      //Choose non player Characters at random --turn into a return statment and move it to own file
      singlePlayerChooseOpponents(){
        let randomNumber = Math.floor(Math.random() * 9);
        console.log(randomNumber);
        console.log(singlePlayerOponents);
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
        //check if the knight is an opponent
        slotOne = playerHero;
        console.log(slotOne);
        console.log(playerHero);
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

      movePlayersOnBoard(){

      }

  

    //Main Game Function --so far, might be split into seperate functions in the future
      moveForward () {
        backClicked = false;
        if(gamePosition === 0){//add if logged in after login is added
          gamePosition = gamePosition + 1;
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
        else if (gamePosition === 1 && choseKnight === true || choseDruid === true || choseMonk === true || choseRogue === true || choseJock === true || choseSuperhero === true || choseTeacher === true || choseSeventies === true){
          gamePosition = gamePosition + 1;
          this.setState({
            playButtonText: "Click here when you are ready to begin.",
            playButton: <div className="gameBox__board__opponents"><span className="gameBox__board__opponents__text"><h3>Your opponents have been chosen.</h3></span>{opponentOne}{opponentTwo}{opponentThree}</div>
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
            <div className="gameBox__advanceGame">
              <button className="gameBox__advanceGame__increment" onClick={this.moveForward.bind(this)}> {this.state.playButtonText} </button>
              {/* <button className="advanceGame__decrement" onClick={this.moveBack.bind(this)}> Back </button> */}
              {this.state.playButton}
            </div>
        );
      }

      
    }

    ReactDOM.render(<StartGame />, document.getElementById('root'));

export default StartGame;
export {singlePlayerOponents};
export {slotOne};