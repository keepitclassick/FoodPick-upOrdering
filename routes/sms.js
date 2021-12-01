const express = require('express');
const MessagingResponse = require('twilio/lib/twiml/MessagingResponse');
const router  = express.Router();


module.exports = (db) => {
  router.post("/sms", (req, res) => {
    const twiml = new MessagingResponse();

    twiml.message('Your order is confirmed!')

    res.writeHead(200, { 'Content-Type': 'text/xml'})
    res.end(twiml.toString());
  });
  return router;
};
