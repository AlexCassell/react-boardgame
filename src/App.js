import React from 'react';
import './css/App.css';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';


import StartGame from './components/StartGame.js';
// import Admin from './administration'

const App = () => (
    <div>
        <Navigation />
        <Route exact path="/" component={ StartGame }/>
        {/* <Route path="/blog" component={ Blog }/>
        <Route path="/admin" component={ Admin }/> */}
        {/* <Route path="/contact" component={ Contact }/> */}
    </div>
);
export default App;