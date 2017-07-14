var greetBtn = document.getElementById('myBtn');
var rstBtn = document.getElementById('resetBtn');
var txtName = document.getElementById('myText');
var dsplName = document.getElementById('displayName');
var dsplCount = document.getElementById('keepTrk');
var radioBtn = document.getElementsByName('glan');

var name = txtName.value;

var namesGreeted = {};
var x = 0;
var countGreet = 0;
var inpt = null;
var letters = /^[A-Za-z]+$/;
var clickMe = function(){
  countGreet++;
  var greetMe = null;
  inpt = txtName.value;
if(inpt.match(letters)){

    for(var i = 0; i<radioBtn.length; i++){
      if(radioBtn[i].checked){
          greetMe = radioBtn[i].value +", "+ txtName.value;
          dsplName.innerHTML = greetMe;
      }
}

}
else{
    dsplName.innerHTML = "PLEASE GREET SOMEONE!";
}
};

function checkGreet(){
  var state = false;

  if (namesGreeted[txtName.value] !== undefined) {

     state = true;
  }
  else {
    state = false;
  }
return state;
};

var resetAll = function reset(){

            localStorage.clear();
            dsplCount.innerHTML = 0;
             txtName.value = '';

};
//greetBtn.addEventListener('click',clickMe);
greetBtn.addEventListener('click', function(){
    clickMe();
    var ifGreeted = checkGreet();
    if(inpt.match(letters)){
        if (ifGreeted === false) {
      //namesGreeted.push(txtName.value);
      namesGreeted[txtName.value] = 1;
      if(typeof(Storage) !== "undefined") {
           if (localStorage.clickcount) {
               localStorage.clickcount = Number(localStorage.clickcount)+1;
           } else {
               localStorage.clickcount = 1;
           }
           dsplCount.innerHTML = localStorage.clickcount;
       }
    }
    }
   checkGreet();
} );
rstBtn.addEventListener('click',resetAll);
