import React from 'react';
import './profile.css';

const CreateProfile = () => {
  return (
    <div>
      <h1>Daily Log</h1>
      <div className="log-section">
        <h2>Medication Log</h2>
        <ul>
          <li>Morning: <input type="checkbox" /></li>
          <li>Afternoon: <input type="checkbox" /></li>
          <li>Evening: <input type="checkbox" /></li>
        </ul>
      </div>
      
      <div className="log-section">
        <h2>Sleep Log</h2>
        <label htmlFor="sleep-hours">Hours slept:</label>
        <input type="number" id="sleep-hours" name="sleep-hours" min="0" max="24" />
      </div>
      
      <div className="log-section">
        <h2>Comments</h2>
        <textarea id="comments" name="comments" rows="4" placeholder="Any other thoughts for today..."></textarea>
      </div>

        <button type="submit" className="log-button">Save Log</button>
    </div>
  );
};



export default CreateProfile;
