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

// Get the name of the user from the inout Area.
var getUser = function(passName) {

  var userName = passName;
  if (userName.match(letters)) {
    return userName;
  } else {
    return "PLEASE GREET SOMEONE!";
  }
};

//Checking which Greeting language has been selected
var getChoice = function(languages) {
  for (var i = 0; i < languages.length; i++) {
    if (languages[i].checked) {

      return languages[i].value;
    }
  }

};

// Displays the greeting message
var greetMessage = function(choice, userName) {
  var message = getChoice(choice) + ", " + getUser(userName);
  countGreet++;
  dsplName.innerHTML = message;
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

//Save to localStorage
var saveToStorage = function() {
  var ifGreeted = checkGreet();
  if (txtName.value.match(letters)) {
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
};

// Reset All inputs and output of count
var resetAll = function reset() {

  localStorage.clear();
  //namesGreeted = {};
  dsplCount.innerHTML = 0;
  txtName.value = '';

};

//greetBtn.addEventListener('click',getInputs);
greetBtn.addEventListener('click', function() {
  greetMessage(radioBtn, txtName.value);
  saveToStorage();
});

rstBtn.addEventListener('click', resetAll);
