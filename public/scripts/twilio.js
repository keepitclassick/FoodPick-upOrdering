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

 orderConfirmed = function () {
  client.messages
    .create({
      body: `Hello, thank you for your order! You will receive an update closer to your pickup time.`,
      from: process.env.TWILIO_PHONE,
      to: process.env.TO_PHONE
    })
    .then(message => console.log(message.sid));
    document.getElementById('confirm.btn btn-primary').addEventListener('click', orderConfirmed)
};

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


