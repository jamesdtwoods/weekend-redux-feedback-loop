import React from 'react';
import axios from 'axios';
import './App.css';
import Feedback from '../Feedback/Feedback';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Feedback />
    </div>
  );
}

export default App;
