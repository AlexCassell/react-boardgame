/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';

import StartGame from '../StartGame.js';
import './css/cardCollection.css';

import left from './images/leftbutton.png';
import right from './images/rightbutton.png';




class CardCollectionIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {'changeCardPage': ''};
    }

    nextCardLeft(){
        console.log("Fruit Snack!!");
    }

    nextCardRight(){

    }



render() {
    return (
        <div className="gameBox__playerStats__wrapper__cardCollectionWrapper">
            <div className="gameBox__playerStats__wrapper__cardCollectionWrapper__title">Cards</div>
            <div className="gameBox__playerStats__wrapper__cardCollectionWrapper__arrowsWrapper">
            <button className="gameBox__playerStats__wrapper__cardCollectionWrapper__arrows" onClick={this.nextCardLeft.bind(this)}><img src={left} alt={"Left Arrow"}/></button>
            <button className="gameBox__playerStats__wrapper__cardCollectionWrapper__arrows" onClick={this.nextCardRight.bind(this)}><img src={right} alt={"Right Arrow"}/></button>
            </div>
            <div className="gameBox__playerStats__wrapper__cardCollectionWrapper__cards"></div>
        </div>
        );
    }
}

render(<CardCollectionIndex />, document.getElementById('root'));

export default CardCollectionIndex;