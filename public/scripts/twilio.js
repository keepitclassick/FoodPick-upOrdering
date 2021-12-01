require('dotenv').config();

//  Responsible for sending SMS
const { endianness } = require('os');

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const user = {
  userName: 'Old Man Jenkins',
  orderId: 3,
  pickUpTime: 20,
  cost: '$20'
}

  const orderConfirmed = function (user) {

    client.messages
      .create({
        body: `Hello ${user.userName}, thank you for your order! The total is ${user.cost}.`,
        from: process.env.TWILIO_PHONE,
        to: process.env.TO_PHONE
      })
      .then(message => console.log(message.sid));
  }

  const timeConfirmed = function (time_est) {
    client.messages
    .create({
      body: `Your order will be ready in approximately ${time_est} minutes.`,
      from: process.env.TWILIO_PHONE,
      to: process.env.TO_PHONE
    })
    .then(message => console.log(message.sid));
  }

  const orderCompleted = function () {
    client.messages
    .create({
      body: `Your order is completed! 😊`,
      from: process.env.TWILIO_PHONE,
      to: process.env.TO_PHONE
    })
    .then(message => console.log(message.sid));
  }


  orderConfirmed(user);
  timeConfirmed(5);
  orderCompleted();

  module.exports = { orderConfirmed, timeConfirmed, orderCompleted };
