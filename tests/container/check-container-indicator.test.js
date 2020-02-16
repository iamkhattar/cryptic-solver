const checkContainerIndicator = require("../../modules/container/check-container-indicator");

/**
 * Test to check if combination with container indicator returns it
 */
test("Spin aboard shingle Test", () => {
  var indicator = ["spin", "aboard", "shingle"];
  var contain = checkContainerIndicator(indicator);
  expect(contain).not.toBeFalsy();
  expect(contain).toEqual("aboard");
});

/**
 * Test to check if combination without container indicator returns false
 */
test("Spin shingle Test", () => {
  var indicator = ["spin", "shingle"];
  var contain = checkContainerIndicator(indicator);
  expect(contain).toBeFalsy();
});
