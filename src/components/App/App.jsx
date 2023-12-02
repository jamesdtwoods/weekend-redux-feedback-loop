import React from 'react';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Feeling />
      <Understanding />
      <Support />
      <Comment />
      <br></br>
      <Review />
      <br />
      <SubmissionSuccess />
    </div>
  );
}

export default App;
