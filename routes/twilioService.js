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

module.exports = twilioService;
