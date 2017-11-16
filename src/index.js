import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import StartGame from './StartGame';

ReactDOM.render(<StartGame />, document.getElementById('root'));

registerServiceWorker();
