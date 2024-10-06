import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CaretakerCaring from '../pages/images/CaretakerCaring.png';

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle form submission
  const handleFindCaregiver = (e) => {
    e.preventDefault(); // Prevent the default form submission
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Inline CSS for the banner */}
      <style>
        {`
          .custom-banner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: auto; /* Adjust height for responsiveness */
            min-height: 400px; /* Set a minimum height */
            background-color: orange; /* Background color for the text side */
            color: black;
            padding: 20px;
          }

          .banner-text {
            flex: 1;
            padding: 20px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .main-text {
            font-size: 3rem; /* Slightly smaller for better balance */
            font-weight: bold;
            margin: 0;
          }

          .sub-text {
            font-size: 1.5rem;
            margin: 10px 0 0;
          }

          .banner-image {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .banner-image img {
            max-width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 10px;
          }

          /* For smaller screens */
          @media (max-width: 768px) {
            .custom-banner {
              flex-direction: column; /* Stack the text and image vertically on small screens */
              text-align: center;
            }

            .banner-text {
              padding: 10px;
            }

            .main-text {
              font-size: 2.5rem;
            }

            .banner-image {
              margin-top: 20px;
            }
          }
        `}
      </style>

      {/* Custom Banner Section */}
      <div className="custom-banner">
        <div className="banner-text">
          <p className="main-text">WE LOVE HELPING PEOPLE HELP PEOPLE</p>
          <p className="sub-text">CONNECTING FAMILIES ACROSS THE GLOBE</p>
        </div>
        <div className="banner-image">
          <img src={CaretakerCaring} alt="Caretaker caring for elderly" />
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#eef2f5', padding: '50px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '20px 0' }}>Find the Perfect Caregiver</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Connecting you with compassionate, skilled caregivers to meet your unique needs.
        </p>
        <form
          style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', gap: '10px' }}
          onSubmit={handleFindCaregiver} // Attach the handleFindCaregiver function
        >
          <input
            type="text"
            placeholder="Enter your location"
            style={{ flex: 1, padding: '10px', fontSize: '1rem' }}
          />
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Find a Caregiver
          </button>
        </form>
      </section>

      {/* Features Section */}
      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2>Why Choose ELEKT?</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
          <div style={{ maxWidth: '250px' }}>
            <h3>Compassionate Care</h3>
            <p>Our caregivers are trained to provide personalized and empathetic support.</p>
          </div>
          <div style={{ maxWidth: '250px' }}>
            <h3>Easy Matching</h3>
            <p>Find the right caregiver with our simple and user-friendly search feature.</p>
          </div>
          <div style={{ maxWidth: '250px' }}>
            <h3>Flexible Options</h3>
            <p>Choose from a variety of care plans to meet your specific needs.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ backgroundColor: '#eef2f5', padding: '50px 20px', textAlign: 'center' }}>
        <h2>Ready to Get Started?</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Sign up today to find the perfect caregiver for your loved ones.
        </p>
        <a
          href="/create-profile"
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#007BFF',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          Create Your Profile
        </a>
      </section>

      {/* Footer */}
      <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f8f8f8', marginTop: '30px' }}>
        <p>© 2024 ELEKT. All Rights Reserved.</p>
        <a href="/contact" style={{ margin: '0 10px' }}>Contact Us</a>
        <a href="/about" style={{ margin: '0 10px' }}>About</a>
        <a href="/privacy-policy" style={{ margin: '0 10px' }}>Privacy Policy</a>
      </footer>
    </div>
  );
};

export default LandingPage;
