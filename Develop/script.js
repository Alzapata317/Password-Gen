// Assignment Code
var generateBtn = document.querySelector("#generate");
var Form = document.querySelector(".form")
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const SC = ["@", "(", "~", "!", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "`", "|", ")", "{", "}", "[","]", ":", ";", "<", ">", ".", "?", "/"]
const all = []
var N = document.querySelector("input[name=Numeric]")
var LC = document.querySelector("input[name=Lowercase]");
var UC = document.querySelector("input[name=Uppercase]");
var SpecialC = document.querySelector("input[name=SC]");

//var maxC = 128;
//var minC = 8;

// Write password to the #password input
/*function generatePassword () {
  var passwordLength = prompt("Between 8-128 characters how long do you want your password to be?");
    if (parseInt(passwordLength) >= minC && parseInt(passwordLength) <= maxC)
      var Ctypes = prompt("What character types do you want in your passsword?")
    else
      var passwordLength = prompt("What you inputed did not fit the parameters. Please pick between 8-128 for how long you want your password to be.")
}*/

function generatePassword () {
  if (LC.checked){
    all.push (...lowercase)
  }
  if (UC.checked) {
    all.push (...uppercase)
  }
  if (SpecialC.checked) {
    all.push (...SC)
  }
  if (N.checked) {
    all.push (...numeric)
  }
  var passwordLength = document.querySelector("input[name=Number1]");
      var password = "";
    for (var i = 0; i <= passwordLength; i++) {
    var randomItem = Math.floor(Math.random() * all.length);
    password = all.substring(randomItem, randomItem +1);
    }
          document.getElementById("password").value = password;
      console.log(password)
  }
function writePassword() {
  Form.setAttribute("style","display: block");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
