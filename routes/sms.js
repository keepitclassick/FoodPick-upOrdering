const express = require('express');
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const router  = express.Router();

router.use(function(req, res, next) {
  console.log('Time', Date.now());
  next ();
});

module.exports = (db) => {
  router.post("/sms", (req, res) => {
    const twiml = new MessagingResponse();
    twiml.message('Your order is confirmed!');
    res.writeHead(200, { 'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });
  return router;
};
