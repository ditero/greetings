var message = function(languages, firstName) {
  if (firstName.match(letters)) {
    if (languages === 'IsiXhosa') {
      return 'Molo, ' + firstName;
    } else if (languages === 'Afrikaans') {
      return 'Goie more, '+firstName;
    } else if (languages === 'English') {
      return 'Hello, ' + firstName;
    }
  } else {
    return "PLEASE GREET SOMEONE!";
  }
}
