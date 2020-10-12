import React,{useState} from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './aboutme'
import Aboutme from './aboutme';
import Home from './home.js'
import Resume from './resume'
import Projects from './projects'
function App() {
  return (
   <BrowserRouter>
   <Route exact path={'/'} component={Home}/>
   <Route path='/aboutme' component={Aboutme}/>
   <Route path='/resume' component={Resume}/>
   <Route path='/projects' component={Projects}/>
   </BrowserRouter>
  );
}

export default App;
