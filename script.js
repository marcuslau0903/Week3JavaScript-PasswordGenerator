// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const numbersArray = [1,2,3,4,5,6,7,8,9,0]
const specialCharactersArray = ['!','£','%','^','&','*','(',')','_','+']
let optionsArray = []
let password =""

const generatePassword = function() {

  const passwordLength = prompt("Enter your desired password length") 
  if (isNaN(passwordLength))  {
    alert("Please enter a valid password length between 8 to 128")
  } 
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 to 128")
  } 
  else {
    const isLowercase = confirm("Do you want Lower case?")
    const isUppercase = confirm("Do you want Upper case?")
    const isNumbers = confirm("Do you want Numbers?")
    const isSpecialCharacters = confirm("Do you want Special Characters?")
    
   // push and apply arrays into new variable "optionsArray" 
    if(isLowercase) {
      optionsArray.push.apply(optionsArray,lowerCaseArray)
    } 
    if (isUppercase) {
      optionsArray.push.apply(optionsArray,upperCaseArray)
    }
    if (isNumbers) {
      optionsArray.push.apply(optionsArray,numbersArray)
    } 
    if (isSpecialCharacters)
      optionsArray.push.apply(optionsArray,specialCharactersArray)
    }
    
    // Durstenfeld shuffle algorithm (googled)
    //function declaration 
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
  }
    // how to generate random elements from optionsArray??
    for(let i = 0; i < passwordLength; i++) {
    shuffleArray(optionsArray)
    //selects a random index based on length of the options array
    let randomIndex = Math.floor(Math.random()*(optionsArray.length)) 
    //push randomly generated values based on user options into password.
    //addition assignment operator (adding random characters to the password string)
    password += (optionsArray[randomIndex])
    shuffleArray(password)
    }

     return password

  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

