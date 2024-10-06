import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>

      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name" style={{ marginBottom: '10px' }}>
          Name:
          <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </label>

        <label htmlFor="email" style={{ marginBottom: '10px' }}>
          Email:
          <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </label>

        <label htmlFor="message" style={{ marginBottom: '10px' }}>
          Message:
          <textarea id="message" name="message" rows="5" style={{ width: '100%', padding: '8px', marginTop: '5px' }}></textarea>
        </label>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      <p style={{ marginTop: '20px' }}>
        Alternatively, you can reach us at: <strong>support@elekt.com</strong> or call us at <strong>(123) 456-7890</strong>.
      </p>
    </div>
  );
};

export default Contact;
