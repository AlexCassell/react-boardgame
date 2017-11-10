import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import StartGame from './StartGame';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<StartGame />, document.getElementById('root'));

registerServiceWorker();
