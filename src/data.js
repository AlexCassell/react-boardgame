import {coins} from '../components/StartGame.js';
import {gold} from '../components/StartGame.js';
import {wood} from '../components/StartGame.js';
import {food} from '../components/StartGame.js';

import {opponentsCoins} from '../components/StartGame.js';
import {opponentsGold} from '../components/StartGame.js';
import {opponentsWood} from '../components/StartGame.js';
import {opponentsFood} from '../components/StartGame.js';

import {realEstateStatus} from '../components/StartGame.js';
import {gameOfChancePrizeAmount} from '../components/StartGame.js';
import {playerCurrentSlot} from '../components/StartGame.js';
import {opponentOneCurrentSlot} from '../components/StartGame.js';
import {opponentTwoCurrentSlot} from '../components/StartGame.js';
import {opponentThreeCurrentSlot} from '../components/StartGame.js';


let currentGame = {
    "playerCoins": coins,
    "playerGold": gold,
    "playerWood": wood,
    "playerFood": food,
    //opponents
    "opponentsCoins": opponentsCoins,
    "opponentsGold": opponentsGold,
    "opponentsWood": opponentsWood,
    "opponentsFood": opponentsFood,
    //board info
    "realEstateStatus": realEstateStatus,
    "gameOfChancePrizeAmount": gameOfChancePrizeAmount,
    "playerCurrentSlot": playerCurrentSlot,
    "opponentOneCurrentSlot": opponentOneCurrentSlot,
    "opponentTwoCurrentSlot": opponentTwoCurrentSlot,
    "opponentThreeCurrentSlot": opponentThreeCurrentSlot,
    "currentPlayer": currentPlayer,
    "gamePosition": gamePosition,
}

