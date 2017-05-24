//Declare varibles and assing HTML references
var greetBtn = document.getElementById('myBtn');
var rstBtn = document.getElementById('resetBtn');
var txtName = document.getElementById('myText');
var dsplName = document.getElementById('displayName');
var dsplCount = document.getElementById('keepTrk');
var radioBtn = document.getElementsByName('glan');


//Declaring Global varibles
var namesGreeted = {};
var countGreet = 0;
var letters = /^[A-Za-z]+$/;

var getChoice = function(languages){
  for (var i = 0; i < radioBtn.length; i++) {
    if (radioBtn[i].checked) {
      // greetMe = radioBtn[i].value + ", " + txtName.value;
      return radioBtn[i].value;
      dsplName.innerHTML = greetMe;
    }
  }

};

var getUser = function(passName) {
  countGreet++;
  var greetMe = null;
   var userName = passName;
  if (userName.match(letters)) {
    return userName;
  } else {
    return "PLEASE GREET SOMEONE!";
  }
};

function checkGreet() {
  var state = false;

  if (namesGreeted[txtName.value] !== undefined) {

    state = true;
  } else {
    state = false;
  }
  return state;
};

var resetAll = function reset() {

  localStorage.clear();
  dsplCount.innerHTML = 0;
  txtName.value = '';

};
//greetBtn.addEventListener('click',getInputs);
greetBtn.addEventListener('click', function() {
  getInputs();
  var ifGreeted = checkGreet();
  if (inpt.match(letters)) {
    if (ifGreeted === false) {
      namesGreeted[txtName.value] = 1;
      if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
          localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
          localStorage.clickcount = 1;
        }
        dsplCount.innerHTML = localStorage.clickcount;
      }
    }
  }
  checkGreet();
});
rstBtn.addEventListener('click', resetAll);
