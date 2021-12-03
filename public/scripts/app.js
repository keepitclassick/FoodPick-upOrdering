const orderCompleted = require = ('./twilio');

document.addEventListener('DOMContentLoaded', init, false);


function init(){
  function message () {
  }
  let button1 = document.getElementById('confirm');
  button1.addEventListener('click', message, true);
  let button2 = document.getElementById('complete');
  button2.addEventListener('click', message, true);
  console.log('message.sid')
};
