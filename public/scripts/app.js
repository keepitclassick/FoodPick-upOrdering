document.addEventListener('DOMContentLoaded', init, false);


function init(){
  function message () {
    alert("Hello!");
  }
  let button = document.getElementById('confirm');
  button.addEventListener('click', message, true);
};
