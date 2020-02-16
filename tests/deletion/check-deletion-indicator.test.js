const checkDeletionIndicator = require("../../modules/deletion/check-deletion-indicator");

/**
 * Test to check if combination with deletion indicator returns it
 */
test("Spin cut shingle Test", () => {
  var indicator = ["spin", "cut", "shingle"];
  var deletion = checkDeletionIndicator(indicator);
  expect(deletion).not.toBeFalsy();
  expect(deletion).toEqual("cut");
});

/**
 * Test to check if combination without deletion indicator returns false
 */
test("Spin shingle Test", () => {
  var indicator = ["spin", "shingle"];
  var deletion = checkDeletionIndicator(indicator);
  expect(deletion).toBeFalsy();
});
