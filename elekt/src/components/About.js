import React from 'react';

const About = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
      {/* Header Section */}
      <section style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#ff6600', color: '#fff' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About ELEKT</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Empowering lives through compassionate care, ELEKT is on a mission to provide dignity, independence, and joy to elderly individuals and those living with disabilities.
        </p>
      </section>

      {/* Vision Section */}
      <section style={{ padding: '40px 20px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Vision</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
          ELEKT was born from a spark of inspiration: to revolutionize caregiving in our rapidly changing world. We recognized a growing need for a modern, efficient, yet deeply human approach to caregiving.
        </p>
        <p style={{ maxWidth: '700px', margin: '20px auto' }}>
          Our name, ELEKT, embodies our core philosophy:
        </p>
        <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.2rem' }}>
          <li><strong>E</strong>mpowerment</li>
          <li><strong>L</strong>ove</li>
          <li><strong>E</strong>xperience</li>
          <li><strong>K</strong>indness</li>
          <li><strong>T</strong>rust</li>
        </ul>
      </section>

      {/* Why We're Here Section */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Why We're Here</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
          Every day, we're energized by the transformations we witness:
        </p>
        <ul style={{ textAlign: 'left', maxWidth: '700px', margin: '20px auto', lineHeight: '1.8' }}>
          <li>An elderly artist rediscovering her passion with the encouragement of a caregiver who shares her love for painting.</li>
          <li>A young man with a disability achieving new levels of independence through personalized, tech-savvy care.</li>
          <li>A family finding renewed connection with their aging parent, freed from the stress of full-time caregiving.</li>
        </ul>
        <p style={{ maxWidth: '700px', margin: '20px auto' }}>
          These moments drive us forward, reminding us of the profound impact that the right care can have on individuals and families.
        </p>
      </section>

      {/* Commitment Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Commitment</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
          ELEKT is more than a caregiving platform; we're a community dedicated to illuminating lives. Using cutting-edge technology, we create connections, but our heart lies in the human touch our caregivers provide.
        </p>
        <p style={{ maxWidth: '700px', margin: '20px auto' }}>
          Our rigorous vetting process ensures that our caregivers are not only qualified but also embody empathy, respect, and dedication.
        </p>
      </section>

      {/* Join Us Section */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Join the ELEKT Community</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
          Whether you're seeking support for a loved one or looking to share your caregiving gifts, ELEKT is more than a service – it's a movement. We’re redefining what it means to age and live with dignity.
        </p>
        <p style={{ maxWidth: '700px', margin: '20px auto' }}>
          Together, we can create a world where everyone, regardless of age or ability, can live a life full of purpose and joy.
        </p>
        <p style={{ maxWidth: '700px', margin: '20px auto' }}>
          Be part of the change. Be ELEKT.
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
