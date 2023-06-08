// Assignment Code
var generateBtn = document.querySelector("#generate");
var allCharacters = [];


var passLength = '';
var upperCase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Write password to the #password input

function writePassword() {
  var truePrompts = pagePrompts();
  var passwordText = document.querySelector("#password");

  if (truePrompts) {

  var password = generatePassword();
  passwordText.value = password; }
  
  else {
  passwordText.value = ""
  }


}

function generatePassword () {

var password = "";
for (var i = 0; i < passLength; i++) 
{var randomIndex = Math.floor(Math.random() * allCharacters.length);
password = password  + allCharacters [randomIndex];}
return password;
}
 


function pagePrompts (){
 
allCharacters = [];

passLength = (prompt("Please set the password length to be generated, between 8 and 128 characters"));

if (passLength < 8 || passLength > 128) {alert("Password length does meet criteria");
return false;
}

  

if (confirm ( "Do you want to include uppercase characters?"))
  {allCharacters = allCharacters.concat(upperCase);} 

if (confirm ( "Do you want to include lowercase characters?")) 
  {allCharacters = allCharacters.concat(lowerCase);}

  if (confirm ( "Do you want to include numeric characters?")) 
  {allCharacters = allCharacters.concat(numeric);}

  if (confirm ( "Do you want to include special characters?")) 
    {allCharacters = allCharacters.concat(specialCharacters);}    
   
    return true
}

generateBtn.addEventListener ("click", writePassword)