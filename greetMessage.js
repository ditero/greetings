// Displays the greeting message
var greetMessage = function(langs, choice, userName){
  var message = getChoice(langs, choice)+", "+getUser(userName);

     return message;
};
