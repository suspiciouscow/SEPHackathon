// src/components/UserProfile.js
import React, { useState } from 'react';
import { db } from '../firebase'; // Import your Firestore database instance
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

const UserProfile = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');

  // Function to handle profile creation
  const handleCreateProfile = async (e) => {
    e.preventDefault();

    try {
      // Add the new user profile to the "users" collection in Firestore
      await addDoc(collection(db, 'users'), {
        name: name,
        location: location,
        experience: experience
      });

      // Clear form fields after submission
      setName('');
      setLocation('');
      setExperience('');

      alert('User profile created successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error creating user profile');
    }
  };

  return (
    <form onSubmit={handleCreateProfile}>
      <h2>Create User Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Experience (Years)"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        required
      />
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default UserProfile;
