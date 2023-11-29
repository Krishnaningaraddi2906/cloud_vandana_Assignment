var userInput = prompt("Enter a string to reverse:");

function reverseString(inputString) {
  var reversedString = '';
  for (var i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}


var reversedString = reverseString(userInput);

document.getElementById('outputScreen1').innerHTML="Original String is: "+userInput;
document.getElementById('outputScreen2').innerHTML="Reversed String is: "+reversedString;

console.log("Original string: " + userInput);
console.log("Reversed string: " + reversedString);
