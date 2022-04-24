export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  // Your code here!
  return humanYears === 1
    ? [humanYears, 15, 15]
    : humanYears === 2
    ? [humanYears, 24, 24]
    : [humanYears, 24 + 4 * (humanYears - 2), 24 + 5 * (humanYears - 2)];
}
