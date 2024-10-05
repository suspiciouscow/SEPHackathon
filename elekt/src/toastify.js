// frontend/src/App.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Example function to trigger a toast notification
  const notify = () => toast("Reminder: Time for medication!");

  return (
    <div className="App">
      <h1>Welcome to Caretaker Matching App</h1>

      {/* Trigger the notification on button click */}
      <button onClick={notify}>Show Reminder</button>

      {/* ToastContainer is required to display toasts */}
      <ToastContainer />
    </div>
  );
}

export default App;
