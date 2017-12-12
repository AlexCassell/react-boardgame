import React from 'react';
import './css/App.css';
import { Route } from 'react-router-dom';


import StartGame from './components/StartGame.js';
// import Admin from './administration'

const App = () => (
    <div>
        <Route exact path="/" component={ StartGame }/>
        {/* <Route path="/blog" component={ Blog }/>
        <Route path="/admin" component={ Admin }/> */}
        {/* <Route path="/contact" component={ Contact }/> */}
    </div>
);
export default App;