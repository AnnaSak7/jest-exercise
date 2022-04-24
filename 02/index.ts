// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

export function findOutlier(integers: number[]): number {
  // your code here
  let evenOrOdd = integers.map((integer: any) =>
    integer % 2 === -1 ? 1 : integer % 2
  );
  return evenOrOdd.reduce((a: number, b: number) => a + b) === 1
    ? integers[evenOrOdd.findIndex((x) => x === 1)]
    : integers[evenOrOdd.findIndex((x) => x === 0)];
}

export function reverseWords(str: string): string {
  // your code here
  const reverse = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));

  return reverse.join(" ");
}
