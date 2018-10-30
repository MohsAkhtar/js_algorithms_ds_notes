function htmlEndTagByStartTag(startTag: string): string {
  let splitStartTag = startTag.split(" ");
  // return "</" + splitStartTag[1] + ">";
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));
