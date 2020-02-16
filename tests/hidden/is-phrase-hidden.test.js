const isSolutionHidden = require("../../modules/hidden/is-phrase-hidden");

/**
 * Test to check whether A nice place contains nice
 */
test("A nice place : nice", () => {
  var phrase = "A nice place";
  var solution = "nice";
  expect(isSolutionHidden(phrase, solution)).toBeTruthy();
});

/**
 * Test to check whether A nic e place contains nice
 */
test("A nic e place : nice", () => {
  var phrase = "A nic e place";
  var solution = "nice";
  expect(isSolutionHidden(phrase, solution)).toBeTruthy();
});

/**
 * Test to check whether A nicp e place does not contains nice
 */
test("A nicp e place : nice", () => {
  var phrase = "A nicp e place";
  var solution = "nice";
  expect(isSolutionHidden(phrase, solution)).toBeFalsy();
});
