import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Work from './components/Work';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Header from './components/Header'
import Front from './components/Front'

export default class App extends Component {
  render() {
      return (
          <Router>
                    <div>
                         <Header />
                         
                          <Switch>
                          <Route path="/" exact><Front /></Route>
                           <Route path="/work"><Work /></Route>
                           <Route path="/contact"><Contact /></Route>
                           <Route path="/intro"><Intro /></Route>
                         
                           </Switch> 
                     </div> 
                           
                    </Router> 
      )
  }
}
