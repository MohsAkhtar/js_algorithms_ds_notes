// method without regex
// ignore all punctuation and special chars that are not letters

function isPalindrome(str) {
  str = str.toLowerCase();
  const charArr = str.split("");
  const validChars = "abcdefghijklmnopqrstuvwxyz".split(""); // the array to compare for valid chars

  let lettersArr = []; // array we will push chars on
  // so if a char in charArr is valid it will be pushed onto lettersArr
  charArr.forEach(char => {
    if (validChars.indexOf(char) > -1) {
      lettersArr.push(char);
    }
  });

  const newStr = lettersArr.join(""); // convert arr back to str
  const reversed = lettersArr.reverse().join(""); // convert arr back to str and reverse

  console.log(newStr === reversed);
  return newStr === reversed;
}

isPalindrome("Madam I'm Adam");
isPalindrome("Madam I'm ");
isPalindrome("Racecar ");
