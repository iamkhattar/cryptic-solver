const splitWords = require("../../modules/format/split-words");

/**
 * Test to check expected value when "" is provided
 */
test("Empty Test", () => {
  var expectedResult = new Array();
  expect(splitWords("")).toEqual(expectedResult);
});

/**
 * Test to check expected value when "dry in the kalahari desert" is provided
 */
test("Normal Split Test", () => {
  var expectedResult = new Array();
  expectedResult.push("dry");
  expectedResult.push("in");
  expectedResult.push("the");
  expectedResult.push("kalahari");
  expectedResult.push("desert");
  expect(splitWords("dry in the kalahari desert")).toEqual(expectedResult);
});

/**
 * Test to check expected value when "dry      in    the      kalahari desert" is provided
 */
test("Multiple Space Split Test", () => {
  var expectedResult = new Array();
  expectedResult.push("dry");
  expectedResult.push("in");
  expectedResult.push("the");
  expectedResult.push("kalahari");
  expectedResult.push("desert");
  expect(splitWords("dry      in    the      kalahari desert")).toEqual(
    expectedResult
  );
});
