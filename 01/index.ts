export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  // Your code here!
  return humanYears === 1
    ? [humanYears, 15, 15]
    : humanYears === 2
    ? [humanYears, 24, 24]
    : [humanYears, 24 + 4 * (humanYears - 2), 24 + 5 * (humanYears - 2)];
}

export function generateHashtag(str: string) {
  let arryStr = str.split(' ');
  let upperCase = arryStr.map(a => a.charAt(0).toUpperCase() + a.substr(1));
  let result = '#' + upperCase.join('');
  return str.trim().length === 0 || result.length > 140 ? false : result;
}
