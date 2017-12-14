/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';
// import PropTypes from 'prop-types';

import StartGame from '../components/StartGame.js';
import '../css/inventoryCSS.css';

import {coins} from '../components/StartGame.js';
import {gold} from '../components/StartGame.js';
import {wood} from '../components/StartGame.js';
import {food} from '../components/StartGame.js';

import coinicon from '../images/coin/large.png';
import goldicon from '../images/gold/large.png';
import woodicon from '../images/wood/large.png';
import foodicon from '../images/food/large.png';

class InventoryIndex extends Component {
render() {
    return (
        <div className="gameBox__playerStats__wrapper">
            <div className="gameBox__playerStats__wrapper__title">Inventory</div>
        <div className="gameBox__playerStats__inventoryWrapper__coinsWrapper">
            <div className="gameBox__playerStats__inventoryWrapper__coinsWrapper__coin">
                <img src={coinicon} alt={"Coin"}/></div>
                <div className="gameBox__playerStats__inventoryWrapper__coinsWrapper__text">={coins}
                </div>
                </div>
                <div className="gameBox__playerStats__inventoryWrapper__goldWrapper">
            <div className="gameBox__playerStats__inventoryWrapper__goldWrapper__goldbar">
                <img src={goldicon} alt={"Gold"}/></div>
                <div className="gameBox__playerStats__inventoryWrapper__goldWrapper__text">={gold}
                </div>
                </div>
                <div className="gameBox__playerStats__inventoryWrapper__woodWrapper">
            <div className="gameBox__playerStats__inventoryWrapper__woodWrapper__logs">
                <img src={woodicon} alt={"Wood"}/></div>
                <div className="gameBox__playerStats__inventoryWrapper__woodWrapper__text">={wood}
                </div>
                </div>
                <div className="gameBox__playerStats__inventoryWrapper__foodWrapper">
            <div className="gameBox__playerStats__inventoryWrapper__foodWrapper__meat">
                <img src={foodicon} alt={"Food"}/></div>
                <div className="gameBox__playerStats__inventoryWrapper__foodWrapper__text">={food}
                </div>
                </div>
                </div>
                );
            }
        }
    

render(<InventoryIndex />, document.getElementById('root'));

export default InventoryIndex;
