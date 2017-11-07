import React, { Component } from 'react';
import StartGame from './StartGame';
import {singlePlayerOponents} from './StartGame.js';


const opponentsOrder = singlePlayerOponents;

class Opponents extends Component {
    render() {
      return (
          {String(singlePlayerOponents)}
    );
    }
}


export default Opponents;