// -----------------------------------------------------------------------------
//    PART 1
// -----------------------------------------------------------------------------

// Add form / input validation to the registrationform div with Javascript.
// Please do not use a JavaScript library to do form validation.

// geoglocation: currently no input validation is used as the input validation would be different for US and non-US locations

var submitBtn = document.getElementById('submit_btn');
var usernameEl = document.getElementById('username');
var passwordEl = document.getElementById('password');
var usernumberEl = document.getElementById('usernumber');
var geo = document.getElementById('geoglocation');
var feedback = document.getElementById('feedback');

// main validation event
submitBtn.onclick = validateForm;
// username validation event
usernameEl.onchange = checkUsername;
// password validation event
passwordEl.onchange = checkPassword;
// usernumber validation event
usernumberEl.onchange = checkUserNumber;

function checkUsername (event) {
  var usernameEl = event.target;
  var username = event.target.value;

  if (isValidUsername(username)) {
    usernameEl.classList.remove('invalid');
    feedback.innerHTML = '';
  } else {
    usernameEl.classList.add('invalid');
    feedback.innerHTML = 'User Name must contain a lower and upper case letter and at least 1 number (no special characters)';
  }
}

// username must contain a lower and upper case letter and at least 1 number. Cannot contain special characters
function isValidUsername (name) {
  if (hasUpperCase(name) && hasLowerCase(name) && hasNumber(name) && !hasSpecialChar(name)) {
    return true;
  }
  return false;
}

function checkPassword (event) {
  var passwordEl = event.target;
  var password = event.target.value;

  if (isValidPassword(password)) {
    passwordEl.classList.remove('invalid');
    feedback.innerHTML = '';
  } else {
    passwordEl.classList.add('invalid');
    feedback.innerHTML = 'Password must contain at least 2 numbers and be 8 to 15 characters';
  }
}

// password must contain at least 2 numbers and be 8 to 15 characters in length
function isValidPassword (pass) {
  if (pass.length >= 8 && pass.length <= 15 && hasTwoNumbers(pass) && !hasWhiteSpace(pass)) {
    return true;
  }
  return false;
}

function checkUserNumber (event) {
  var usernumberEl = event.target;
  var usernumber = event.target.value;

  if (isValidUserNumber(usernumber)) {
    usernumberEl.classList.remove('invalid');
    feedback.innerHTML = '';
  } else {
    usernumberEl.classList.add('invalid');
    feedback.innerHTML = 'User number must be 36 digits';
  }
}

// usernumber must be 36 digits and have no non-numeral characters
function isValidUserNumber (number) {
  if (hasOnlyNumbers(number) && number.length === 36) {
    return true;
  }
  return false;
}

function geoSuccess (pos) {
  var crd = pos.coords;
  var lat = crd.latitude;
  var lng = crd.longitude;

  geo.value = 'Lat:' + lat + ', Lng: ' + lng;
}

function geoError (err) {
  console.warn(err);
  geo.innerHTML = 'Geolocation is not supported.';
}

function getPosition () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  } else {
    geo.innerHTML = 'Geolocation is not supported.';
  }
}
getPosition();

function validateForm (event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var usernumber = document.getElementById('usernumber').value;

  // TODO: validate
  console.log('validate', username, password, usernumber);
}

// RegExp
function hasWhiteSpace (str) {
  return /\s/.test(str);
}

function hasTwoNumbers (str) {
  return /(.*[0-9]){2}/.test(str);
}

function hasUpperCase (str) {
  return /[A-Z]/.test(str);
}

function hasLowerCase (str) {
  return /[a-z]/.test(str);
}

function hasNumber (str) {
  return /[0-9]/.test(str);
}

function hasSpecialChar (str) {
  return /[^a-zA-Z0-9]+/.test(str);
}

function hasOnlyNumbers (str) {
  return /^\d+$/.test(str);
}

// -----------------------------------------------------------------------------
//    PART 2
// -----------------------------------------------------------------------------

// Create a javascript based pop up container using the YUI library that
// displays the contents of http://www.cpanel.net when the
// Find out More button is activated.




// -----------------------------------------------------------------------------
//    PART 3
// -----------------------------------------------------------------------------

// Remove every third element from the array listed below using
// Javascript and without creating a new array.




// -----------------------------------------------------------------------------
//    PART 4
// -----------------------------------------------------------------------------

// Parse this Flickr JSON feed without using eval() and output a picture and
// description for the each photo in the feed into a div when
// the show pictures button is clicked
