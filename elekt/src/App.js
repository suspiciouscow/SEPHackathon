import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Import the LandingPage component
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import CreateProfile from './components/CreateProfile';
import elekt from './components/elekt.png'; 
// import photo from 

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <ul className="navbar">
            <li>
              {/* Logo link to the landing page */}
              <Link to="/">
                <img src= {elekt} alt="ELEKT Logo" style={{fontFamily: 'Arial, sans-serif', width: 'auto', height: '50px' }} /> {/* Add your logo image */}
              </Link>
            </li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/create-profile">Log</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Set LandingPage as the root route */}
          <Route path="/home" element={<Dashboard />} /> {/* Dashboard is now under "/home" */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-profile" element={<CreateProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
