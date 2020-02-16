const checkFinalIndicator = require("../../modules/final/check-final-indicator");

/**
 * Test to check if combination with final indicator returns it
 */
test("Spin finally shingle Test", () => {
  var indicator = ["spin", "finally", "shingle"];
  var final = checkFinalIndicator(indicator);
  expect(final).not.toBeFalsy();
  expect(final).toEqual("finally");
});

/**
 * Test to check if combination without final indicator returns false
 */
test("Spin shingle Test", () => {
  var indicator = ["spin", "shingle"];
  var final = checkFinalIndicator(indicator);
  expect(final).toBeFalsy();
});
