import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Projet de datavisualisation</h2>
        </div>
        <p className="App-intro">
          Projet de Datavisualisation sur l'utilisation de données mobiles lors de déplacements en Europe. 
        </p>

        <div className = "Europe">
          




        </div>
      </div>
    );
  }
}

export default App;
