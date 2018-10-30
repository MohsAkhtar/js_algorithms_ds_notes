function ratingThreshold(threshold: number, ratings: number[][]): number[] {
  const means = [];

  for (let i = 0; i < ratings.length; i++) {
    let mean = 0;
    let sum = 0;

    for (let j = 0; j < ratings[i].length; j++) {
      sum += ratings[i][j];
    }

    mean = sum / ratings[i].length;

    if (mean < threshold) {
      means.push(i);
    }
  }

  return means;
}

console.log(ratingThreshold(3.5, [[3, 3], [3, 3, 3, 4], [4]]));
