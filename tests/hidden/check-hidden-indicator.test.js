const checkHiddenIndicator = require("../../modules/hidden/check-hidden-indicator");

/**
 * Test to check if combination with hidden indicator returns it
 */
test("Spin concealed shingle Test", () => {
  var indicator = ["spin", "concealed", "shingle"];
  var final = checkHiddenIndicator(indicator);
  expect(final).not.toBeFalsy();
  expect(final).toEqual("concealed");
});

/**
 * Test to check if combination without hidden indicator returns false
 */
test("Spin shingle Test", () => {
  var indicator = ["spin", "shingle"];
  var final = checkHiddenIndicator(indicator);
  expect(final).toBeFalsy();
});
