// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Declaration of character sets and password limits
var passwordChar = "";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numChar = "0123456789";
var specChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Sets length of password
var passwordCharTotal = "0";

// Prompts Function
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
  console.log(passLength);
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

function generatePassword() {
  lengthPrompt();
  
  // Character Confirmation
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
    return userConfirm();
  } 
  if
  if (lowerCaseKey === true) {
    passwordChar += lowerCaseLetters;
  } if (upperCaseKey === true) {
    passwordChar += upperCaseLetters;
  } if (numValuesKey === true) {
    passwordChar += numChar;
  } if (specCharKey === true) {
    passwordChar += specChar;
  }
  console.log(passwordChar);
  
}


// Call Function
console.log(passwordCharTotal);
generatePassword();

