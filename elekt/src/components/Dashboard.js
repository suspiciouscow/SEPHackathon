import React, { useState } from 'react';
import '../index.css';
import Caretaker1 from "../pages/images/caretaker1.jpg";
import Caretaker2 from "../pages/images/caretaker2.jpg";
import Caretaker3 from "../pages/images/caretaker3.jpg";
import Caretaker4 from "../pages/images/caretaker4.jpg";
import Caretaker5 from "../pages/images/caretaker5.jpg";
import { db } from '../firebase'; // Import Firestore database instance
import { collection, addDoc } from 'firebase/firestore'; // Firestore functions

const Dashboard = () => {
  // State to capture form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  // Function to handle profile creation form submission
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add user profile data to the "profiles" collection in Firestore
      await addDoc(collection(db, 'profiles'), {
        name: name,
        email: email,
        password: password, // Note: Store passwords securely in a real app, e.g., hashed
        profilePicture: profilePicture ? profilePicture.name : null, // Profile picture name
      });

      // Clear form fields after submission
      setName('');
      setEmail('');
      setPassword('');
      setProfilePicture(null);

      alert('Profile created successfully!');
    } catch (error) {
      console.error('Error creating profile:', error);
      alert('Error creating profile');
    }
  };

  return (
    <div>
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
          <form onSubmit={handleProfileSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label htmlFor="profile-picture">Profile Picture:</label>
            <input
              type="file"
              id="profile-picture"
              name="profile-picture"
              onChange={(e) => setProfilePicture(e.target.files[0])}
            />

            <button type="submit">Create Profile</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
