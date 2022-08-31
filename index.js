function isPalindrome(word) {
  reversed  = [...word].reverse().join("");
  return word === reversed;
   let word1="abba";
   let word2="racecar";
   let word3="madam";

   console.log(isPalindrome(word1));
   console.log(isPalindrome(word2));
   console.log(isPalindrome(word3));
 
}

/* 
reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
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
