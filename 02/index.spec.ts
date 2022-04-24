import { findOutlier, reverseWords } from "./index";

describe("Simple tests", function () {
  test("one", () => {
    expect(findOutlier([0, 1, 2])).toBe(1);
  });
  test("two", () => {
    expect(findOutlier([1, 2, 3])).toBe(2);
  });
  test("three", () => {
    expect(findOutlier([2, 6, 8, 10, 3])).toBe(3);
  });
  test("three type 2", () => {
    expect(findOutlier([0, 0, 3, 0, 0])).toBe(3);
  });
  test("zero", () => {
    expect(findOutlier([1, 1, 0, 1, 1])).toBe(0);
  });
});

describe("Sample Test Cases", function () {
  test("The quick brown fox jumps over the lazy dog.", () => {
    expect(reverseWords("The quick brown fox jumps over the lazy dog.")).toBe(
      "ehT kciuq nworb xof spmuj revo eht yzal .god"
    );
  });
  test("apple", () => {
    expect(reverseWords("apple")).toBe("elppa");
  });
  test("a b c d", () => {
    expect(reverseWords("a b c d")).toBe("a b c d");
  });
  test("double  spaced  words", () => {
    expect(reverseWords("double  spaced  words")).toBe("elbuod  decaps  sdrow");
  });
});
