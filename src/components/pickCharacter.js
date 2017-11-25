/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';

import {knight} from '../StartGame.js';
import {druid} from '../StartGame.js';
import {rogue} from '../StartGame.js';
import {monk} from '../StartGame.js';
import {jock} from '../StartGame.js';
import {teacher} from '../StartGame.js';
import {superhero} from '../StartGame.js';
import {seventies} from '../StartGame.js';


let multiPlayer = false, backClicked = false, choseKnight = false, choseDruid = false, choseMonk = false, choseRogue = false,
choseJock = false, choseSuperhero = false, choseTeacher = false, choseSeventies = false,
computerKnight = false, computerDruid = false, computerMonk = false, computerRogue = false,
computerJock = false, computerSuperhero = false, computerTeacher = false, computerSeventies = false,
playerHero = "";

let singlePlayerOponents = [];

let currentPlayerAvatar = "", opponentOne = "", opponentTwo = "", opponentThree = "";

class PickCharacter extends Component {

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

//Choose non player Characters at random --turn into a return statment and move it to own file
singlePlayerChooseOpponents(){
    let randomNumber = Math.floor(Math.random() * 9);
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
    render() {
        return (
            <div className="gameBox__board__pickCharacter">
                <span className="body_altFont">Choose Character<br /></span>
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
        );
    
    }

}

render(<PickCharacter />, document.getElementById('root'));

export default PickCharacter;
export {currentPlayerAvatar};

export {choseKnight};
export {choseMonk};
export {choseRogue};
export {choseDruid};
export {choseJock};
export {choseSuperhero};
export {choseTeacher};
export {choseSeventies};

export {playerHero};
export {opponentOne};
export {opponentTwo};
export {opponentThree};