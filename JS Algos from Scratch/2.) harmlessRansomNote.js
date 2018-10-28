function harmlessRansomNote(noteText, magazineText) {
  const noteArr = noteText.split(" ");
  const magazineArr = magazineText.split(" ");
  let magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }

    magazineObj[word]++;
  });

  let noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) {
        noteIsPossible = false;
      }
    } else {
      noteIsPossible = false;
    }
  });

  console.log(noteIsPossible);
  return noteIsPossible;
}

harmlessRansomNote("this is not", "this is all the text the all");
