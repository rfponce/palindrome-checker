let input = document.getElementById("textInput");
let button = document.getElementById("checkButton");
let resultText = document.getElementById("resultText");

const isPalindrome = function(text) {
  let pattern = /([a-z]|[0-9])/gi;
  let joinedString = text.match(pattern).join("").toLowerCase();
  let reverseString = joinedString.split("").reverse().join("").toLowerCase();
  
  if (joinedString === reverseString) return true;
  else return false
}

const checkText = function() {
  let sentence = input.value;
  
  if (sentence === "") {
    resultText.textContent = "You need to enter text to check";
  }
  else if (isPalindrome(sentence)) {
    resultText.textContent = "The sentence is a palindrome";
    resultText.style = "color: green; margin-left: 1vw;"
  }
  else {
    resultText.textContent = "The sentence is a not palindrome";
    resultText.style = "color: red; margin-left: 1vw;"
  }
}

button.addEventListener("click", checkText);