import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore'; // Firestore functions
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Storage functions
import { db, storage } from '../firebase'; // Import Firestore and Storage instances
import '../index.css';

const Dashboard = () => {
  // State to capture form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [message, setMessage] = useState('');
  const [profiles, setProfiles] = useState([]);  // Store all profiles here

  // Function to handle profile creation form submission
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setMessage('Uploading...');

    try {
      // Upload the profile picture to Firebase Storage
      let imageUrl = null;
      if (profilePicture) {
        const storageRef = ref(storage, `profile_pictures/${profilePicture.name}`);
        const uploadTask = uploadBytesResumable(storageRef, profilePicture);

        // Use a promise to track the state of the upload
        imageUrl = await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Track upload progress here if needed
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload is ${progress}% done`);
            },
            (error) => {
              // Handle unsuccessful uploads
              console.error('Upload failed:', error);
              setMessage('Error uploading the profile picture.');
              reject(error);
            },
            async () => {
              // Handle successful uploads
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              console.log('File available at', downloadURL);
              resolve(downloadURL);
            }
          );
        });
      }

      // Add user profile data to Firestore
      await addDoc(collection(db, 'profiles'), {
        name: name,
        email: email,
        password: password,  // Consider hashing passwords in production
        profilePictureUrl: imageUrl
      });

      // Clear the form fields
      setName('');
      setEmail('');
      setPassword('');
      setProfilePicture(null);
      setMessage('Profile created successfully!');

      // Fetch the latest profiles after successful creation
      fetchProfiles();
    } catch (error) {
      console.error('Error creating profile:', error);
      setMessage('Error creating profile. Please try again.');
    }
  };

  // Function to fetch profiles from Firestore
  const fetchProfiles = async () => {
    const querySnapshot = await getDocs(collection(db, 'profiles'));
    const profilesData = querySnapshot.docs.map(doc => doc.data());
    setProfiles(profilesData);
  };

  // Fetch profiles on initial load
  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div>
      {/* Display Profiles with Images ABOVE the form */}
      <div className="profile-list">
        <h2>Existing Profiles</h2>
        {profiles.map((profile, index) => (
          <div key={index} className="profile-item">
            {profile.profilePictureUrl && (
              <img src={profile.profilePictureUrl} alt="Profile" width="100" height="100" />
            )}
            <h3>{profile.name}</h3>
            <p>{profile.email}</p>
          </div>
        ))}
      </div>

      {/* Profile creation form */}
      <h2>Create Your Profile</h2>
      <form onSubmit={handleProfileSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Profile Picture:</label>
        <input
          type="file"
          onChange={(e) => setProfilePicture(e.target.files[0])}
        />

        <button type="submit">Create Profile</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Dashboard;
