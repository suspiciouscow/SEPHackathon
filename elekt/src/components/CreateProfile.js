import React from 'react';

const CreateProfile = () => {
  return (
    <div>
      <h1>Create Your Profile</h1>
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
  );
};

export default CreateProfile;
