/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';

import StartGame from '../StartGame.js';
import './css/creditsInstructions.css';






class CreditsInstructionsIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {'instructions': ''};
        this.state = {'credits': ''};
    }




render() {
    return (
        <div className="gameBox__creditsInstructionsWrapper"><div className="gameBox__creditsInstructionsWrapper__instructions">qqqqqq</div>
        </div>
        );
    }
}

render(<CreditsInstructionsIndex />, document.getElementById('root'));

export default CreditsInstructionsIndex;