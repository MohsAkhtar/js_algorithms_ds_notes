function proCategorization(
  pros: string[],
  preferences: string[][]
): string[][][] {
  let prefs = {};

  for (let i = 1; i < preferences.length; i++) {
    for (let j = 0; j < preferences[i].length; j++) {
      let pref = preferences[i][j];
      if (!prefs.hasOwnProperty(pref)) {
        prefs[pref];
      }
    }
  }

  return prefs;
}

console.log(
  proCategorization(
    ['Jack', 'Leon', 'Maria'],
    [
      ['Computer repair', 'Handyman', 'House cleaning'],
      ['Computer lessons', 'Computer repair', 'Data recovery service'],
      ['Computer lessons', 'House cleaning']
    ]
  )
);

[
  [['Computer lessons'], ['Leon', 'Maria']],
  [['Computer repair'], ['Jack', 'Leon']],
  [['Data recovery service'], ['Leon']],
  [['Handyman'], ['Jack']],
  [['House cleaning'], ['Jack', 'Maria']]
];
