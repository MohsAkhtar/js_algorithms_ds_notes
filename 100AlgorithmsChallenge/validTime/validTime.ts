function validTime(time: string): boolean {
  const inputSplit = time.split(':');
  const hours = parseInt(inputSplit[0]);
  const mins = parseInt(inputSplit[1]);
  if (hours > 23) {
    return false;
  } else if (mins > 59) {
    return false;
  }

  return true;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));
