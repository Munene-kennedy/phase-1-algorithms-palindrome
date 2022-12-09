

function reverseString(word) {

  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}
function isPalindrome(word) {
  // Write your algorithm here
}
    const reversedWord = reverseString(word);
    if (word === reversedWord) {
      return true;
    } else {
      return false;
    }
  

/* 
  Add your pseudocode here
*/
  // type input string
  // make a reverse of the input string
  // if the input string seems the same as the reverse one
  //   return true
  // else
  //   return false

/*
  Add written explanation of your solution here
  // create an array from the input string
  // reverse the array
  // create a string from the reversed array
  // return the reversed string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
module.exports = isPalindrome;

