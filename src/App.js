import React , {Component, useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/chart1/Navbar';
import FirstGraph from './components/chart1/FirstGraph';
import Barchart from './components/chart1/SecondGraph';

function App() {
  return (
    <div>
      <Navbar/>
      <br></br>

    
    <div className="App">
    
      <FirstGraph/>
      <Barchart/>
    </div>
    </div>
  );
}

export default App;