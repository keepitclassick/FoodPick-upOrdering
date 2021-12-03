const express = require('express');
const router = express.Router();
// refactor below code later
const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const db = new Pool(dbParams);

const twilioClient = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

const twilioService = {
  sendMessage: function (to, message) {
    twilioClient.messages.create({
      to: process.env.TO_PHONE,
      from: '+13656507506',
      body: message
    }, function (err, message) {
      if (err) {
        console.error(err.message);
      }
    });
  }
}

db.connect();

router.get("/", (req, res) => {
  res.render("cart");
})

router.get('/order', (req) => {
  twilioService.sendMessage(process.env.T0_PHONE, 'Thank you for your order. Please pick up within the next 20 minutes or your cupcakes will get eaten.')
})

module.exports = router;


