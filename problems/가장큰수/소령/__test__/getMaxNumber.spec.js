const getMaxNumber = require("../solution");
const compareNumbers = require("../compareStringNumbers");

describe("compare function", () => {
  test("'6' > '10'", () => {
    const inputA = 6;
    const inputB = 10;

    expect(compareNumbers(inputA, inputB)) > 0;
  });
});

describe("compare function", () => {
  test("'2' > '10'", () => {
    const inputA = 2;
    const inputB = 10;

    expect(compareNumbers(inputA, inputB)) > 0;
  });
});

describe("getMaxNumber function", () => {
  test("2, 6, 10 => 6210", () => {
    const input = [2, 6, 10];
    const output = "6210";

    expect(getMaxNumber(input)).toEqual(output);
  });
});

describe("getMaxNumber function", () => {
  test("3, 30, 34, 5, 9 => 9534330", () => {
    const input = [3, 30, 34, 5, 9];
    const output = "9534330";

    expect(getMaxNumber(input)).toEqual(output);
  });
});

describe("getMaxNumber function", () => {
  test("0, 0, 0 =>  0", () => {
    const input = [0, 0, 0];
    const output = "0";

    expect(getMaxNumber(input)).toEqual(output);
  });
});