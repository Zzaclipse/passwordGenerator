// creates an array of special characters
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "[", "]", ";", "{", "}", "<", ">", "?", "/"];
// creates an array of numeric charecters
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// creates an array of uppercase characters
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// creates an array of lowercase characters
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function getInput(){

  //prompts user for desired password length and converts to an int and returns int. if password is <8 or >128 it will alert with error message and start again.
  function getPasswordLength(){  
    var passLength = prompt("How many characters should the password be?");
    passLength = parseInt(passLength);

    if(passLength<8 || passLength>128){
      alert("Password length must be greater than 8 and less than 128. Restarting prompt.");
      passLength=getPasswordLength();
      return passLength;
    } 
    else{
      return passLength;
    }
  }
  var PL=getPasswordLength();
  
  //prompts user if they want to include special, number, uppercase and lowercase characters. if none are selected it will alert with error message and start again. returns an array of 4 booleans 
  function includeWhatChars(){
    var includeWhatCharsArray = [false, false, false, false];
    includeWhatCharsArray[0] = confirm("Include special characters?");
    includeWhatCharsArray[1] = confirm("Include number characters?");
    includeWhatCharsArray[2] = confirm("Include uppercase characters?");
    includeWhatCharsArray[3] = confirm("Include lowercase characters?");
    
    if(includeWhatCharsArray[0]==false && includeWhatCharsArray[1]==false && includeWhatCharsArray[2]==false && includeWhatCharsArray[3]==false){
      alert("At least one character type must be selected. Restarting prompts.");
      includeWhatCharsArray = includeWhatChars();
      return includeWhatCharsArray;
    }
    else{
      return includeWhatCharsArray;
    }
  }
  var IWC = includeWhatChars();


// creates an object to store all the values of user input
  var inputInclude = {
      includeSpec: IWC[0],
      includeNum:  IWC[1],
      includeUpper: IWC[2],
      includeLower: IWC[3],
      pLength: PL
  }
  return inputInclude;
}

function generatePassword(){
  var include = getInput();
  console.log(include);

  // two empty arrays declared to be populated below
  var possibleChars = [];
  var passwordArray = [];

  // if user wants special characters this will be true and add all special characters to the possibleChar array
  if(include.includeSpec){
    possibleChars = possibleChars.concat(specChar);
  }

  // if user wants number characters this will be true and add all number characters to the possibleChar array
  if(include.includeNum){
    possibleChars = possibleChars.concat(numChar);
  }

  // if user wants uppercase characters this will be true and add all uppercase characters to the possibleChar array
  if(include.includeUpper){
    possibleChars = possibleChars.concat(upperChar);
  }

  // if user wants lowercase characters this will be true and add all lowercase characters to the possibleChar array
  if(include.includeLower){
    possibleChars = possibleChars.concat(lowerChar);
  }
  
  //for loop that will end when password reaches desired length from the user. will populate passwordArray with random character from created possibleChars array
  for(var i=0; i<include.pLength; i++){
    passwordArray[i]=possibleChars[Math.floor(Math.random() * possibleChars.length)]
  }

  // converts array in to a string with no commas
  var passwordString = passwordArray.join("");

  // returns password string
  return passwordString;
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
