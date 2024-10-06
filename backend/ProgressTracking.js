import React, { useState } from 'react';

const ProgressTracking = () => {
  const [log, setLog] = useState('');
  const [logs, setLogs] = useState([]);

  const handleLogChange = (e) => {
    setLog(e.target.value);
  };

  const handleLogSubmit = (e) => {
    e.preventDefault();
    setLogs([...logs, log]);
    setLog('');
  };

  return (
    <div>
      <form onSubmit={handleLogSubmit}>
        <textarea value={log} onChange={handleLogChange} />
        <button type="submit">Log Activity</button>
      </form>
      <ul>
        {logs.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressTracking;
