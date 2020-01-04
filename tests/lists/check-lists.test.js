const checkLists = require("../../modules/lists/check-lists");

/**
 * Test to check whether something which dosent have a list returns false
 */
test("False Test", () => {
  var check = checkLists("indicator");
  expect(check).toBeFalsy();
});

/**
 * Test to check whether state returns IOWA
 */
test("State : IOWA Test", () => {
  var check = checkLists("state");
  expect(check).toContain("iowa");
});
