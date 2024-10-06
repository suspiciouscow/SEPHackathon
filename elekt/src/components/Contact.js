import React from 'react';
import './contact.css'; // External CSS file for better styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>

      <form className="contact-form">
        <label htmlFor="name" className="form-label">
          Name:
          <input type="text" id="name" name="name" className="form-input" />
        </label>

        <label htmlFor="email" className="form-label">
          Email:
          <input type="email" id="email" name="email" className="form-input" />
        </label>

        <label htmlFor="message" className="form-label">
          Message:
          <textarea id="message" name="message" rows="5" className="form-textarea"></textarea>
        </label>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      <p className="contact-info">
        Alternatively, you can reach us at: <strong>support@elekt.com</strong> or call us at <strong>(123) 456-7890</strong>.
      </p>
    </div>
  );
};

export default Contact;
