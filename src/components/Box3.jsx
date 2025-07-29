import React, { useState } from 'react';
import './App.css'; // Make sure to create this file

function App() {
  const [guiltyVotes, setGuiltyVotes] = useState(0);
  const [notGuiltyVotes, setNotGuiltyVotes] = useState(0);

  const totalVotes = guiltyVotes + notGuiltyVotes;
  const guiltyPercent = totalVotes ? Math.round((guiltyVotes / totalVotes) * 100) : 0;
  const notGuiltyPercent = totalVotes ? Math.round((notGuiltyVotes / totalVotes) * 100) : 0;

  return (
    <div className="vote-container">
      <div className="button-group">
        <button className="not-guilty-btn" onClick={() => setNotGuiltyVotes(notGuiltyVotes + 1)}>NOT GUILTY</button>
        <button className="guilty-btn" onClick={() => setGuiltyVotes(guiltyVotes + 1)}>GUILTY</button>
      </div>

      <div className="result-bar">
        <span>Guilty</span>
        <div className="bar">
          <div className="guilty-fill" style={{ width: `${guiltyPercent}%` }}></div>
        </div>
        <span>{guiltyPercent}%</span>
      </div>

      <div className="result-bar">
        <span>Not Guilty</span>
        <div className="bar">
          <div className="not-guilty-fill" style={{ width: `${notGuiltyPercent}%` }}></div>
        </div>
        <span>{notGuiltyPercent}%</span>
      </div>
    </div>
  );
}

export default App;