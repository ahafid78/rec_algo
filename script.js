function isPalindrome(word) {
  word = word.toLowerCase();  // Convert word to lowercase
  var reversedWord = word.split('').reverse().join('');  // Reverse the word
  return word === reversedWord;
}

var word = prompt("Enter a word:");
if (isPalindrome(word)) {
  console.log("The word is a palindrome!");
} else {
  console.log("The word is not a palindrome.");
}