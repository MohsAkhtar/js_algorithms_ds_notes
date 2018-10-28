// shift chars by num

function caesarCipher(str, num) {
  num = num % 26; // for really large numbers will return num in range between 0-25
  const lowerCaseString = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newString = "";

  for (let i = 0; i < lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i];

    // simply add space to the str
    if (currentLetter === " ") {
      newString += currentLetter;
      continue; // continue simply moves loop to next iteration without doing any more func for curr iteration
    }

    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;

    // check if the index goes past 'z'
    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }

    // work for negative numbers (go backwards)
    if (newIndex < 0) {
      newIndex = newIndex + 26;
    }

    // if char was originally uppercase
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }
  }

  console.log(newString);
  return newString;
}

caesarCipher("Zoo Keeper", 2); // Bqq Mggrt
caesarCipher("Big Car", -16); // Lsq Mkb
caesarCipher("JavaScript", -900); // Tkfkcmbszd
