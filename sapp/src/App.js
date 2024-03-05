import React from 'react';
import './App.css';
import RoundedRectangle from './all.js';
import animals from './images/animals.png';
import alphabet from './images/alphabet.png';
import fruits from './images/fruits.png';
import transport from './images/transport.png';
import pays from './images/pays.png';
import nombres from './images/nombres.png';
import study from './images/study.png';
import couleur from './images/couleur.png';
import soundEffect from './sounds/animals.mp3';

function App() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <RoundedRectangle imageUrl={animals} soundEffect={soundEffect} />
        </div>
        <div className="col-sm-6 col-md-3">
          <RoundedRectangle imageUrl={alphabet} />
        </div>
        <div className="col-sm-6 col-md-3">
          <RoundedRectangle imageUrl={fruits} />
        </div>
        <div className="col-sm-6 col-md-3">
          <RoundedRectangle imageUrl={transport} />
        </div>
        <div className="col-sm-6 col-md-3">
          <RoundedRectangle imageUrl={pays} />
        </div>
        <div className="col-sm-6 col-md-3">
          <RoundedRectangle imageUrl={nombres} />
        </div>
        <div className="col-sm-6 col-md-3">
          <RoundedRectangle imageUrl={study} />
        </div>
        <div className="col-sm-6 col-md-3">
          <RoundedRectangle imageUrl={couleur} />
        </div>
      </div>
    </div>
  );
}

export default App;
