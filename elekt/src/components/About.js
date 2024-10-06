import React from 'react';

const About = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
      {/* Header Section */}
      <section style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#ff6600', color: '#fff' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About ELEKT</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          At ELEKT, we connect families with compassionate, skilled caretakers using advanced technology, making it easier to manage care and stay informed.
        </p>
      </section>

      {/* Caregiver Matching Section */}
      <section style={{ padding: '40px 20px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Caretaker Matching</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
          Our service uses AI algorithms to match families with local caregivers based on specific needs, preferences, and budgets. We simplify the process of finding reliable caretakers so you can focus on what matters most: the well-being of your loved ones.
        </p>
      </section>

      {/* Progress Tracking Section */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Real-Time Progress Tracking</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
          Caretakers can log daily activities, health updates, and any concerns through our platform. Families receive real-time updates, ensuring they are always informed about their loved ones’ well-being and care progress.
        </p>
        <ul style={{ textAlign: 'left', maxWidth: '700px', margin: '20px auto', lineHeight: '1.8' }}>
          <li>Stay connected to daily caregiving activities.</li>
          <li>Access health updates and raise concerns in real time.</li>
          <li>Strengthen your connection with your elderly relatives through consistent updates.</li>
        </ul>
      </section>

      {/* Alerts & Reminders Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Automated Alerts & Reminders</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
          We provide automated reminders for medication, appointments, and important family events through SMS or app notifications. Stay on top of your loved one’s care schedule and reduce the stress of managing appointments.
        </p>
      </section>

      {/* Our Commitment Section */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Commitment</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
          ELEKT is committed to helping families stay connected with their elderly parents and easing the stress of finding and managing caregivers. Our platform reduces the feeling of distance by providing real-time updates and simplifying the process of finding qualified, trustworthy caretakers.
        </p>
      </section>

      {/* Join Us Section */}
      <section style={{ backgroundColor: '#ff6600', color: '#fff', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Join the ELEKT Community</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
          Whether you're seeking support for a loved one or looking to provide care, ELEKT connects families and caregivers in meaningful, impactful ways. Together, we can ensure that everyone, regardless of age or ability, can live a life full of dignity and joy.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#ff6600', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <p>© 2024 ELEKT. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
