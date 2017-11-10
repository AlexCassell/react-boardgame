// /*eslint no-unused-vars: "off"*/
// import React, { Component } from 'react';
// import { render } from 'react-dom';

// import StartGame from '../StartGame.js';
// import './css/inventoryCSS.css';

// import {coins} from '../StartGame.js';
// import {gold} from '../StartGame.js';
// import {wood} from '../StartGame.js';
// import {food} from '../StartGame.js';

// import coinicon from './images/coin/large.png';
// import goldicon from './images/gold/large.png';
// import woodicon from './images/wood/large.png';
// import foodicon from './images/food/large.png';

// let coinsLocale = coins.toLocaleString();
// let goldLocale = gold.toLocaleString();
// let woodLocale = wood.toLocaleString();
// let foodLocale = food.toLocaleString();


// class InventoryIndex extends Component {
//   constructor() {
//     super();
//     this.state = {
//       coins: {coins},
//       anotherstate: ''

//     };

//   }

// render() {
//     return (
//         <div className="gameBox__playerStats__wrapper">
//             <div className="gameBox__playerStats__wrapper__title">Inventory</div>
//         <div className="gameBox__playerStats__inventoryWrapper__coinsWrapper">
//             <div className="gameBox__playerStats__inventoryWrapper__coinsWrapper__coin">
//                 <img src={coinicon} alt={"Coin"}/></div>
//                 <div className="gameBox__playerStats__inventoryWrapper__coinsWrapper__text">={coinsLocale}
//                 </div>
//                 </div>
//                 <div className="gameBox__playerStats__inventoryWrapper__goldWrapper">
//             <div className="gameBox__playerStats__inventoryWrapper__goldWrapper__goldbar">
//                 <img src={goldicon} alt={"Gold"}/></div>
//                 <div className="gameBox__playerStats__inventoryWrapper__goldWrapper__text">={goldLocale}
//                 </div>
//                 </div>
//                 <div className="gameBox__playerStats__inventoryWrapper__woodWrapper">
//             <div className="gameBox__playerStats__inventoryWrapper__woodWrapper__logs">
//                 <img src={woodicon} alt={"Wood"}/></div>
//                 <div className="gameBox__playerStats__inventoryWrapper__woodWrapper__text">={woodLocale}
//                 </div>
//                 </div>
//                 <div className="gameBox__playerStats__inventoryWrapper__foodWrapper">
//             <div className="gameBox__playerStats__inventoryWrapper__foodWrapper__meat">
//                 <img src={foodicon} alt={"Food"}/></div>
//                 <div className="gameBox__playerStats__inventoryWrapper__foodWrapper__text">={foodLocale}
//                 </div>
//                 </div>
//                 </div>
//                 );
//             }
//         }
    

// render(<InventoryIndex />, document.getElementById('root'));

// export default InventoryIndex;