function addBorder(picture: string[]): string[] {
  const borderLength = picture[0].length + 2;
  let border = "";

  for (let i = 0; i < borderLength; i++) {
    border = border.concat("*");
  }

  for (let i = 0; i < borderLength - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }

  picture.unshift(border);
  picture.push(border);

  return picture;
}

console.log(addBorder(["abc", "ded"]));
