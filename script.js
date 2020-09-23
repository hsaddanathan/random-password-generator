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


// Psuedocode Stream of Conscience

1. When user pushes the generate password button: 
    2. The character quantity prompt will appear.
        2a. If the characters are below defined minimum
              alert the minimum character requirements
              prompt character quantity
        2b else if password larger than maximum character limit
              alert the maximum character limit
              prompt character quantity
    3. 




// Variables
var minPasswordChar = 8;
var maxPasswordChar = 128;
var characterConfirmArray = []

// Function Declaration
function characterConfirm(arr){
  for (var i=0; i<arr.length;i++);{
    confirm(arr[i]);
    console.log(arr[i]);
  }
}

///////Prompts //////

var passwordCharacterQty = prompt("How many characters would you like your password to be?"); 
//////Conditionals

if(passwordCharacterQty.length<minPasswordChar){
    alert("Your password must be at least " + minPasswordChar + " characters!");
    prompt("How many characters would you like your password to be?");
}
else if (passwordCharacterQty>maxPasswordChar){
  alert("Your password can't be longer than " + maxPasswordChar + " characters");
  prompt("How many characters would you like your password to be?");
}

var allowUpperCase = confirm("Click OK to confirm "+ characterConfirmArray[i] )