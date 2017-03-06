var greetBtn = document.getElementById('myBtn');
var rstBtn = document.getElementById('resetBtn');
var txtName = document.getElementById('myText');
var dsplName = document.getElementById('displayName');
var dsplCount = document.getElementById('keepTrk');
var radioBtn = document.getElementsByName('glan');

var namesGreeted = [];
var x = 0;
var countGreet = 0;
var clickMe = function(){
  countGreet++;

  var greetMe = null;
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
  //LocalStorage: This part stores the number of times greeted
   if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        dsplCount.innerHTML = localStorage.clickcount;
    }
  //dsplCount.innerHTML = countGreet;
  //txtName.value = '';
      }
    //namesGreeted.push(txtName);
    /*  for(var j = 0; j < namesGreeted.length; j++){
          if(txtName.value !== namesGreeted[j]) {
              console.log(namesGreeted);
              if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        dsplCount.innerHTML = localStorage.clickcount;
          }

      }


  }*/

}


};
var haveIgreet = function checkGreet(){

  if ((txtName.value != namesGreeted[0]) || (txtName.value != namesGreeted[x])) {
    for (x = 0; i < namesGreeted.length; i++) {
      array[i]
    }
    namesGreeted.push(txtName.value);
    console.log(namesGreeted[x]);
    x++;
  }

};
var resetAll = function resentCounter(){

            localStorage.clear();
            dsplCount.innerHTML = 0;
             txtName.value = '';

};
greetBtn.addEventListener('click',clickMe);
greetBtn.addEventListener('click',haveIgreet);
rstBtn.addEventListener('click',resetAll);
