import React from 'react';
import '../index.css'; // Make sure you have your CSS file linked
import Caretaker1 from "../pages/images/caretaker1.jpg";
import Caretaker2 from "../pages/images/caretaker2.jpg";
import Caretaker3 from "../pages/images/caretaker3.jpg";
import Caretaker4 from "../pages/images/caretaker4.jpg";
import Caretaker5 from "../pages/images/caretaker5.jpg";

const Dashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#profile">Create Profile</a></li>
        </ul>
      </nav>

      {/* Caretaker Slider Section */}
      <section id="caretakers">
        <h2>Our Caretakers</h2>
        <div className="caretaker-slider">
          <button className="left-arrow">◀</button>
          <div className="caretaker-images">
            <img src={Caretaker1} alt="Caretaker 1" />
            <img src={Caretaker2} alt="Caretaker 2" />
            <img src={Caretaker3} alt="Caretaker 3" />
            <img src={Caretaker4} alt="Caretaker 4" />
            <img src={Caretaker5} alt="Caretaker 5" />
          </div>
          <button className="right-arrow">▶</button>
        </div>

        {/* Caretaker Info */}
        <div className="caretaker-info">
          <h3>Caretaker Name</h3>
          <p>Availability: Full-time</p>
          <p>Experience: 5 years</p>
          <p>Skills: Medication Management, Personal Care, Cooking</p>
        </div>
      </section>

      {/* Profile Creation Section */}
      <section id="profile">
        <h2>Create Your Profile</h2>
        <div className="profile-form">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="profile-picture">Profile Picture:</label>
            <input type="file" id="profile-picture" name="profile-picture" />

            <button type="submit">Create Profile</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
