import React from 'react';
import axios from 'axios';
import './App.css';
import Feedback from '../Feedback/Feedback';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Feedback />
      <Understanding />
      <Support />
      <Comment />
      <br></br>
      <Review />
    </div>
  );
}

export default App;
