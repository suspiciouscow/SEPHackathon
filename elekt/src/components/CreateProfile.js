import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import './profile.css';

const CreateProfile = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // State to capture user input
  const [medicationLog, setMedicationLog] = useState({ morning: false, afternoon: false, evening: false });
  const [sleepHours, setSleepHours] = useState(0);
  const [comments, setComments] = useState('');
  const [message, setMessage] = useState(''); // To display success message

  const handleSaveLog = () => {
    const newLog = {
      medicationLog,
      sleepHours,
      comments,
      date: new Date().toLocaleString(), // Save the current date/time for the log
    };

    // Get existing logs from LocalStorage
    const existingLogs = JSON.parse(localStorage.getItem('dailyLogs')) || [];

    // Add the new log to the existing logs
    existingLogs.push(newLog);

    // Save the updated logs array back to LocalStorage
    localStorage.setItem('dailyLogs', JSON.stringify(existingLogs));

    // Set a success message to let the user know the log was saved
    setMessage('Log saved successfully!');
  };
  
  return (
    <div className="log-container">
      <h1>Daily Log</h1>
      
      {message && <p className="success-message">{message}</p>} {/* Display success message */}

      <div className="log-section">
        <h2>Medication Log</h2>
        <ul className="medication-list">
          <li>
            <label htmlFor="morning">Morning:</label>
            <input type="checkbox" id="morning" onChange={() => setMedicationLog({ ...medicationLog, morning: !medicationLog.morning })} />
          </li>
          <li>
            <label htmlFor="afternoon">Afternoon:</label>
            <input type="checkbox" id="afternoon" onChange={() => setMedicationLog({ ...medicationLog, afternoon: !medicationLog.afternoon })} />
          </li>
          <li>
            <label htmlFor="evening">Evening:</label>
            <input type="checkbox" id="evening" onChange={() => setMedicationLog({ ...medicationLog, evening: !medicationLog.evening })} />
          </li>
        </ul>
      </div>
      
      <div className="log-section">
        <h2>Sleep Log</h2>
        <label htmlFor="sleep-hours">Hours slept:</label>
        <input 
          type="number" 
          id="sleep-hours" 
          name="sleep-hours" 
          min="0" 
          max="24" 
          value={sleepHours} 
          onChange={(e) => setSleepHours(e.target.value)} 
        />
      </div>
      
      <div className="log-section">
        <h2>Comments</h2>
        <textarea 
          id="comments" 
          name="comments" 
          rows="4" 
          placeholder="Any other thoughts for today..." 
          value={comments} 
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>

      <div className="log-button-container">
        <button 
          type="button" 
          className="log-button"
          onClick={handleSaveLog}  // Save the log and stay on the page
        >
          Save Log
        </button>
        <button 
          type="button" 
          className="log-button"
          onClick={() => navigate('/past-log')} // Navigate to past logs
        >
          Past Logs
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;
