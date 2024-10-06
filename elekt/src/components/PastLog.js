import React, { useState, useEffect } from 'react';

const PastLog = () => {
  const [logs, setLogs] = useState([]);

  // Fetch logs from LocalStorage when the component is mounted
  useEffect(() => {
    try {
      const savedLogs = JSON.parse(localStorage.getItem('dailyLogs')) || [];
      console.log("Fetched logs from localStorage:", savedLogs); // Add this to log the fetched logs
      setLogs(savedLogs);
    } catch (error) {
      console.error("Error retrieving logs from localStorage:", error);
    }
  }, []); // Empty dependency array to run only on component mount

  return (
    <div>
      <h1>Past Logs</h1>
      {logs.length === 0 ? (
        <p>No logs found.</p>
      ) : (
        logs.map((log, index) => (
          <div key={index} className="log-section">
            <h3>Log Date: {log.date}</h3>
            <p>
              <strong>Medication:</strong> Morning - {log.medicationLog.morning ? 'Yes' : 'No'}, 
              Afternoon - {log.medicationLog.afternoon ? 'Yes' : 'No'}, 
              Evening - {log.medicationLog.evening ? 'Yes' : 'No'}
            </p>
            <p><strong>Sleep Hours:</strong> {log.sleepHours}</p>
            <p><strong>Comments:</strong> {log.comments}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PastLog;
