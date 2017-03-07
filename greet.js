var greetBtn = document.getElementById('myBtn');
var rstBtn = document.getElementById('resetBtn');
var txtName = document.getElementById('myText');
var dsplName = document.getElementById('displayName');
var dsplCount = document.getElementById('keepTrk');
var radioBtn = document.getElementsByName('glan');

var name = txtName.value;

var namesGreeted = [];
var x = 0;
var countGreet = 0;
var inpt = null;
var clickMe = function(){
  countGreet++;
  var greetMe = null;
  inpt = txtName.value;
if(inpt.length !== 0){

    for(var i = 0; i<radioBtn.length; i++){

      if(radioBtn[i].checked){
          if(radioBtn[i].value === "Hello"){
          greetMe = radioBtn[i].value +", "+ txtName.value;
          dsplName.innerHTML = greetMe;
      }
  else if(radioBtn[i].value === "Hallo"){
      greetMe = radioBtn[i].value +", "+ txtName.value;
      dsplName.innerHTML = greetMe;

  }
   else if(radioBtn[i].value === "Molo"){
      greetMe = radioBtn[i].value +", "+ txtName.value;
      dsplName.innerHTML = greetMe;
  }
      }

}

}
else{
    dsplName.innerHTML = "PLEASE GREET SOMEONE!";
}



};
function checkGreet(){
  var state = false;

for (var i = 0; i < namesGreeted.length; i++) {
  if (txtName.value === namesGreeted[i]) {
    //console.log("Found Name");
     state = true;


  }
  else {

    state = false;
  }
}
return state;
};
var resetAll = function resentCounter(){

            localStorage.clear();
            dsplCount.innerHTML = 0;
             txtName.value = '';

};
//greetBtn.addEventListener('click',clickMe);
greetBtn.addEventListener('click', function(){
    clickMe();
    var ifGreeted = checkGreet();
    if(inpt.length !== 0){
        if (ifGreeted === false) {
      namesGreeted.push(txtName.value);
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
