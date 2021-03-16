// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const numbersArray = [1,2,3,4,5,6,7,8,9,0]
const specialCharactersArray = ['!','£','%','^','&','*','(',')','_','+']
const optionsArray = []

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
    
   
    if(isLowercase) {
      optionsArray.push(lowerCaseArray)
    } 
    if (isUppercase) {
      optionsArray.push(upperCaseArray)
    }
    if (isNumbers) {
      optionsArray.push(numbersArray)
    } 
    if (isSpecialCharacters)
      optionsArray.push(specialCharactersArray)
    }
    
    // for(var i = 0; i < passwordLength; i++) {
     //     //how to concat two strings together ??
    //      how to generate random elements from optionsArray??
    }


     return optionsArray

  }





// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

