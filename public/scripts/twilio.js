require('dotenv').config();

//  Responsible of sending SMS
const { endianness } = require('os');

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const toPhone = process.env.TO_PHONE;
const client = require('twilio')(accountSid, authToken);
const user = {
  userName: 'Old Man Jenkins',
  orderId: 3,
  pickUpTime: 20,
  cost: '$20'
}

client.messages
  .create({
     body: `Hello ${user.userName}, thank you for your order! The total is ${user.cost}. Please pick up your order in ${user.pickUpTime} minutes.`,
     from: process.env.TWILIO_PHONE,
     to: process.env.TO_PHONE
  })
  .then(message => console.log(message.sid));
