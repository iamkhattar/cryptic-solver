const checkReversalIndicator = require("../../modules/reversal/check-reversal-indicator");

/**
 * Test to check if combination with reversal indicator returns it
 */
test("tin reversed shingle Test", () => {
  var indicator = ["tin", "reversed", "shingle"];
  var reverse = checkReversalIndicator(indicator);
  expect(reverse).not.toBeFalsy();
  expect(reverse).toEqual("reversed");
});

/**
 * Test to check if combination without reversal indicator returns false
 */
test("tin shingle Test", () => {
  var indicator = ["tin", "shingle"];
  var reverse = checkReversalIndicator(indicator);
  expect(reverse).toBeFalsy();
});
