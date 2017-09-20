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
  var submit = document.getElementById('submit_btn');

  if (isValidUsername(username) && isValidPassword(password) && isValidUserNumber(usernumber)) {
    // loops all inputs and add validated class
    var allInputs = document.querySelectorAll('form li input');
    allInputs.forEach(function (input) {
      input.classList.add('validated');
    });

    submit.disabled = true;

    return true;
  }
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



// create popup
YUI().use('transition', function (Y) {
  var textContent = "The cPanel & WHM ecosystem spans hundreds of developers, thousands of hosting providers, and millions of domains around the world, powered by a two-pronged web hosting and automation dashboard. cPanel® is not just a tool, it's software that empowers an industry.";

  // Access DOM nodes.
  var container = Y.one('#popupContainer');

  // Create DOM nodes.
  var popup = Y.Node.create('<div>');
  popup.append(textContent);
  popup.addClass('popup');
  container.append(popup);

  var popupBack = Y.Node.create('<div>');
  popupBack.addClass('popup-background');
  container.append(popupBack);

  container.hide();

  Y.one('#findoutmore').on('click', function () {
    container.show();
    container.transition({
      duration: 1, // seconds
      easing: 'ease-in',
      opacity: 1
    });
  });

  Y.one('.popup-background').on('click', function () {
    container.transition({
      duration: 1, // seconds
      easing: 'ease-out',
      opacity: 0
    }, function () {
      container.hide();
    });
  });
});

// -----------------------------------------------------------------------------
//    PART 3
// -----------------------------------------------------------------------------

// Remove every third element from the array listed below using
// Javascript and without creating a new array.

var filteredArray = thisArray.filter(isNotThird).join('');

function isNotThird (item, index) {
  if ((index + 1) % 3 !== 0) return true;
}

document.getElementById('filteredArray').innerHTML = filteredArray;

// -----------------------------------------------------------------------------
//    PART 4
// -----------------------------------------------------------------------------

// Parse this Flickr JSON feed without using eval() and output a picture and
// description for the each photo in the feed into a div when
// the show pictures button is clicked

var script = document.createElement('script');
var apiURL = 'http://www.flickr.com/services/feeds/photos_public.gne?tags=punctuation,atsign&format=json';
script.src = apiURL;
document.getElementsByTagName('head')[0].appendChild(script);

var imagesBtn = document.getElementById('flickrpics');
var allImages;
imagesBtn.onclick = renderFlickrPics;

function jsonFlickrFeed (data) {
  var pictures = data.items.reduce(function (total, item, index, array) {
    total += '<div class="picture">';
    total += '<h4>' + item.title + '</h4>';
    total += '<img src="' + item.media.m + '" />';
    total += '<a href="' + item.link + '">Link</a>';
    total += '</div>';

    // this close the div wrapper at the last item
    if (array.length - 1 === index) total += '</div>';

    return total;
  }, '<div class="pictures-wrapper">');

  allImages = pictures;
}

function renderFlickrPics () {
  document.getElementById('flickr').innerHTML = allImages;
}
