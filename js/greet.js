//Declare varibles and assing HTML references
var greetBtn = document.getElementById('myBtn');
var rstBtn = document.getElementById('resetBtn');
var txtName = document.getElementById('myText');
var dsplName = document.getElementById('displayName');
var dsplCount = document.getElementById('keepTrk');
var radioBtn = document.getElementsByName('glan');


//Declaring Global varibles
var namesGreeted = {};
var letters = /^[A-Za-z]+$/;

//Checking which Greeting language has been selected
var checkLanguages = function() {
  if (document.getElementById('English').checked === true) {
    return 'English';
  } else if (document.getElementById('Afrikaans').checked === true) {
    return 'Afrikaans'
  } else if (document.getElementById('IsiXhosa').checked === true) {
    return 'IsiXhosa';
  }

};


// Displays the greeting message
var greetMessage = function(languages, userName) {
  //var message = message(checkLanguages, txtName.value);
  dsplName.innerHTML = message(languages, userName);
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
var saveCounterToStorage = function() {
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

// Reset count
var resetAll = function reset() {

  localStorage.clear();
  dsplCount.innerHTML = 0;
  txtName.value = '';

};

//greetBtn.addEventListener('click',getInputs);
greetBtn.addEventListener('click', function() {
  greetMessage(checkLanguages(), txtName.value);
  saveCounterToStorage();
});

rstBtn.addEventListener('click', resetAll);
