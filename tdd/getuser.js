var letters = /^[A-Za-z]+$/;
var getUser = function(userName) {

  if (userName.match(letters)) {
    return userName;
  } else {
    return "PLEASE GREET SOMEONE!";
  }
};
