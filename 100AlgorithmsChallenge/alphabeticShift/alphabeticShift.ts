function alphabeticShift(inputString: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArr = alphabet.split("");
  let result = "";

  for (let char of inputString) {
    let index = 0;
    if (char !== "z") {
      index = alphabetArr.indexOf(char) + 1;
    }
    result = result + alphabetArr[index];
  }

  return result;
}

console.log(alphabeticShift("crazy"));

function alphabeticShift2(inputString: string): string {
  const alphabet: object = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "k",
    k: "l",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "w",
    w: "x",
    x: "y",
    y: "z",
    z: "a"
  };

  let inputShifted = inputString.split("");
  let result = "";

  for (let char of inputShifted) {
    result = result + alphabet[char];
    console.log(result);
  }

  return result;
}

console.log(alphabeticShift2("crazy"));
