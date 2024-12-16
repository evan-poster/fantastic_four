import React from 'react';
import './App.css';
import Uploader from './Uploader';
import Gallery from './Gallery';

function App() {

  return (
    <div className="container">
      <div className="header">Welcome to Lab 4</div>

      <div className="team-info">
        <div><span className="role">Project Director:</span> Evan</div>
        <div><span className="role">Assistant Managers:</span> Victor, James, Marcus</div>
      </div>

      <div className="date">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>

      <Uploader />
      <hr />
      <Gallery />

    </div>
  );
}

export default App;
