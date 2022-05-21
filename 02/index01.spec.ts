import {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
  sumPairs,
} from "./index01";

describe("test test test", function () {
  test("7 * 5", () => {
    expect(seven(times(five()))).toBe(35);
  });
  test("9 / 3", () => {
    expect(nine(dividedBy(three()))).toBe(3);
  });
  test("0 + 8", () => {
    expect(zero(plus(eight()))).toBe(8);
  });
  test("4 - 6", () => {
    expect(four(minus(six()))).toBe(-2);
  });
  test("1 * 2", () => {
    expect(one(times(two()))).toBe(2);
  });
});

describe("sum pairs", () => {
  test("[1, 7]", () => {
    expect(sumPairs([1, 4, 8, 7, 3, 15], 8)).toStrictEqual([1, 7]);
  });
  test("undefined", () => {
    expect(sumPairs([20, -13, 40], -7)).toStrictEqual(undefined);
  });
  test("[0, -6]", () => {
    expect(sumPairs([1, -2, 3, 0, -6, 1], -6)).toStrictEqual([0, -6]);
  });
  test("[0, 0]", () => {
    expect(sumPairs([0, 2, 0], 0)).toStrictEqual([0, 0]);
  });
});
