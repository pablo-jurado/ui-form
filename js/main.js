// -----------------------------------------------------------------------------
//    PART 1
// -----------------------------------------------------------------------------

// Add form / input validation to the registrationform div with Javascript.
// Please do not use a JavaScript library to do form validation.

function addButtonsEvents () {
  var submitBtn = document.getElementById('submit_btn');
  var usernameEl = document.getElementById('username');
  var passwordEl = document.getElementById('password');
  var usernumberEl = document.getElementById('usernumber');

  // main validation event
  submitBtn.onclick = validateForm;
  // username validation event
  usernameEl.onchange = checkUsername;
  // password validation event
  passwordEl.onchange = checkPassword;
  // usernumber validation event
  usernumberEl.onchange = checkUserNumber;
}

function checkUsername (event) {
  var domElement = event.target;
  var username = event.target.value;
  var feedback = 'User Name must contain a lower and upper case letter and at least 1 number (no special characters)';

  if (isValidUsername(username)) removeFeedback(domElement);
  else renderFeedback(domElement, feedback);
}

// username must contain a lower and upper case letter and at least 1 number. Cannot contain special characters
function isValidUsername (name) {
  if (hasUpperCase(name) && hasLowerCase(name) && hasNumber(name) && !hasSpecialChar(name)) {
    return true;
  }
  return false;
}

function checkPassword (event) {
  var domElement = event.target;
  var password = event.target.value;
  var feedback = 'Password must contain at least 2 numbers and be 8 to 15 characters';

  if (isValidPassword(password)) removeFeedback(domElement);
  else renderFeedback(domElement, feedback);
}

// password must contain at least 2 numbers and be 8 to 15 characters in length
function isValidPassword (pass) {
  if (pass.length >= 8 && pass.length <= 15 && hasTwoNumbers(pass) && !hasWhiteSpace(pass)) {
    return true;
  }
  return false;
}

function checkUserNumber (event) {
  var domElement = event.target;
  var usernumber = event.target.value;
  var feedback = 'User number must be 36 digits';

  if (isValidUserNumber(usernumber)) removeFeedback(domElement);
  else renderFeedback(domElement, feedback);
}

// usernumber must be 36 digits and have no non-numeral characters
function isValidUserNumber (number) {
  if (hasOnlyNumbers(number) && number.length === 36) {
    return true;
  }
  return false;
}

var geoEl = document.getElementById('geoglocation');

function geoSuccess (pos) {
  var crd = pos.coords;
  var lat = crd.latitude;
  var lng = crd.longitude;

  geoEl.value = 'Lat:' + lat + ', Lng: ' + lng;
}

function geoError (err) {
  console.warn(err);
  geoEl.value = 'Geolocation is not supported.';
}

function getPosition () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  } else {
    geoEl.value = 'Geolocation is not supported.';
  }
}

function validateForm (event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var usernumber = document.getElementById('usernumber').value;

  // TODO: validate
  console.log('validate', username, password, usernumber);
}

function renderFeedback (element, string) {
  var feedback = document.getElementById('feedback');

  element.classList.add('invalid');
  feedback.innerHTML = string;
}

function removeFeedback (element) {
  var feedback = document.getElementById('feedback');

  element.classList.remove('invalid');
  feedback.innerHTML = '';
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

addButtonsEvents();
getPosition();


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
