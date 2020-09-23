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
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numChar = "0123456789";
var specChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Sets length of password
var passwordCharTotal = "0";

// Prompts Function
function userPrompt() {
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
    return userPrompt();
  } else if (passLength < minChar || passLength > maxChar) {
    alert(
      "You must pick a whole number between " + minChar + " & " + maxChar + "."
    );
    return userPrompt();
  } else{
    return passwordCharTotal = parseInt(passwordCharTotal) + parseInt(passLength)
  }
    
}

// Call Function
userPrompt();
console.log(passwordCharTotal);