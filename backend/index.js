// backend/index.js
require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

const sendSMS = (to, message) => {
  client.messages
    .create({
      body: message,
      from: +18554497677,
      to: +14253013727,
    })
    .then((message) => console.log(`Message sent: ${message.sid}`))
    .catch((error) => console.error(error));
};

sendSMS('+18554497677', 'This is a test reminder from Caretaker Matching App!');
