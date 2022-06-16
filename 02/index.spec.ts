import {
  findOutlier,
  reverseWords,
  convertToRoman,
  findUniq,
  multiplicationTable,
  twoSum,
  towerBuilder,
} from "./index";

// ----------------------------------------------
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

//------------------------------------------------------------------

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

// describe("Roman number test", function () {
//   test("2", () => {
//     expect(convertToRoman(2)).toBe("II");
//   });
//   test("3", () => {
//     expect(convertToRoman(3)).toBe("III");
//   });
//   test("4", () => {
//     expect(convertToRoman(4)).toBe("IV");
//   });
//   test("5", () => {
//     expect(convertToRoman(5)).toBe("V");
//   });
//   test("9", () => {
//     expect(convertToRoman(9)).toBe("IX");
//   });
//   test("10", () => {
//     expect(convertToRoman(10)).toBe("X");
//   });
//   test("12", () => {
//     expect(convertToRoman(12)).toBe("XII");
//   });
//   test("16", () => {
//     expect(convertToRoman(16)).toBe("XVI");
//   });
//   test("29", () => {
//     expect(convertToRoman(29)).toBe("XXIX");
//   });
//   test("44", () => {
//     expect(convertToRoman(44)).toBe("XLIV");
//   });
//   test("45", () => {
//     expect(convertToRoman(45)).toBe("XLV");
//   });
//   test("68", () => {
//     expect(convertToRoman(68)).toBe("LXVIII");
//   });
//   test("83", () => {
//     expect(convertToRoman(83)).toBe("LXXXIII");
//   });
//   test("97", () => {
//     expect(convertToRoman(97)).toBe("XCVII");
//   });
//   test("400", () => {
//     expect(convertToRoman(400)).toBe("CD");
//   });
//   test("500", () => {
//     expect(convertToRoman(500)).toBe("D");
//   });
//   test("501", () => {
//     expect(convertToRoman(501)).toBe("DI");
//   });
//   test("649", () => {
//     expect(convertToRoman(649)).toBe("DCXLIX");
//   });
//   test("798", () => {
//     expect(convertToRoman(798)).toBe("DCCXCVIII");
//   });
//   test("891", () => {
//     expect(convertToRoman(891)).toBe("DCCCXCI");
//   });
//   test("1000", () => {
//     expect(convertToRoman(1000)).toBe("M");
//   });
//   test("1004", () => {
//     expect(convertToRoman(1004)).toBe("MIV");
//   });
//   test("1006", () => {
//     expect(convertToRoman(1006)).toBe("MVI");
//   });
//   test("1023", () => {
//     expect(convertToRoman(1023)).toBe("MXXIII");
//   });
//   test("2014", () => {
//     expect(convertToRoman(2014)).toBe("MMXIV");
//   });
//   test("3999", () => {
//     expect(convertToRoman(3999)).toBe("MMMCMXCIX");
//   });
// });

//------------------------------------------------------------

describe("Find a unique number", function () {
  test("[1, 1, 1, 1, 2, 1]", () => {
    expect(findUniq([1, 1, 1, 1, 2, 1])).toBe(2);
  });
  test("[3, 1, 1, 1]", () => {
    expect(findUniq([3, 1, 1, 1])).toBe(3);
  });
  test("[0, 0, 0.5, 0, 0])", () => {
    expect(findUniq([0, 0, 0.5, 0, 0])).toBe(0.5);
  });
  test("[55, 55, 65, 55]", () => {
    expect(findUniq([55, 55, 65, 55])).toBe(65);
  });
});

//------------------------------------------------------------------

describe("Example Tests", function () {
  test("1", () => {
    expect(multiplicationTable(1)).toStrictEqual([[1]]);
  });
  test("2", () => {
    expect(multiplicationTable(2)).toStrictEqual([
      [1, 2],
      [2, 4],
    ]);
  });
  test("3", () => {
    expect(multiplicationTable(3)).toStrictEqual([
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
    ]);
  });
});

//------------------------------------------------------------------

describe("Simple test case", function () {
  test("", () => {
    expect(twoSum([1, 2, 3], 4)).toStrictEqual([0, 2]);
  });
  test("", () => {
    expect(twoSum([1234, 5678, 9012], 14690)).toStrictEqual([1, 2]);
  });
  test("", () => {
    expect(twoSum([2, 2, 3], 4)).toStrictEqual([0, 1]);
  });
});

//--------------------------------------------------------------------
describe("towerbilder test case", function () {
  test("one", () => {
    expect(towerBuilder(1)).toStrictEqual(["*"]);
  });
  test("two", () => {
    expect(towerBuilder(2)).toStrictEqual([" * ", "***"]);
  });
  test("three", () => {
    expect(towerBuilder(3)).toStrictEqual(["  *  ", " *** ", "*****"]);
  });
});
