document.addEventListener('DOMContentLoaded', init, false);

function init(){
  function message () {
    alert("Hello!");
  }
  let button = document.getElementById('confirm');
  button.addEventListener('click', message, true);

  let button2 = document.getElementById('complete');
  button2.addEventListener('click', message, true);

};
