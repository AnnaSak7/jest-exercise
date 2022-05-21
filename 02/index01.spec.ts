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
