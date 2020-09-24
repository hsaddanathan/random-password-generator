// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Declaration of character sets and password limits
var passwordChar = "";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

//Cycled through numbers 3 times in order to make the numbers have a more equal chance of being selected
var numChar = "012345678901234567890123456789";
var specChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Sets length of password
var passwordCharTotal = "0";

// Character quantity prompt function
function lengthPrompt() {
  var minChar = 8;
  var maxChar = 128;
  var passLength = prompt(
    "How many characters would you like your password to be? \n(Please choose between " +
      minChar +
      " and " +
      maxChar +
      " characters.)"
  );
  if (passLength === "null") {
  } else if (isNaN(passLength) === true) {
    alert("You must pick a number.");
    return lengthPrompt();
  } else if (passLength < minChar || passLength > maxChar) {
    alert(
      "You must pick a whole number between " + minChar + " & " + maxChar + "."
    );
    return lengthPrompt();
  } else {
    return (passwordCharTotal =
      parseInt(passwordCharTotal) + parseInt(passLength));
  }
}

//Generate Password Function
function generatePassword() {
  //Resets all values to 0
  computedPassword = "";
  passwordChar = "";
  passwordCharTotal = "0";

  // Character Length Function Call
  lengthPrompt();

  // Character Boolean Confirmation
  var lowerCaseKey = confirm("Would you like to use lower case letters?");
  var upperCaseKey = confirm("Would you like to use upper case letters?");
  var numValuesKey = confirm("Would you like to use numbers?");
  var specCharKey = confirm("Would you like to use special characters?");

  //If none are selected you must select one!
  if (
    lowerCaseKey === false &&
    upperCaseKey === false &&
    numValuesKey === false &&
    specCharKey === false
  ) {
    alert("You must select at least one!");
    return generatePassword();
  }
  // If these Booleans are true, each set of characters are added to total set of available characters
  if (lowerCaseKey === true) {
    passwordChar += lowerCaseLetters;
  }
  if (upperCaseKey === true) {
    passwordChar += upperCaseLetters;
  }
  if (numValuesKey === true) {
    passwordChar += numChar;
  }
  if (specCharKey === true) {
    passwordChar += specChar;
  }

  // Upper Limit of Math Functions
  var totalAvailableCharacters = passwordChar.length;

  var passCharInd;

  // Loop this function until the total number of characters is met
  for (var i = 0; i < passwordCharTotal; i++) {
    passCharInd = Math.floor(Math.random() * totalAvailableCharacters);

    computedPassword += passwordChar[passCharInd];
  }
  return computedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
