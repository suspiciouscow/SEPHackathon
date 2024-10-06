import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import CreateProfile from './components/CreateProfile';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/create-profile">Create Profile</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Dashboard is the home page */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-profile" element={<CreateProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
