const checkLists = require("../../modules/lists/check-lists");

/**
 * Test to check whether state returns IOWA
 */
test("State : IOWA Test", () => {
  var check = checkLists("state");
  expect(check).toContain("iowa");
});

/**
 * Test to check whether country returns India
 */
test("Country : India Test", () => {
  var check = checkLists("country");
  expect(check).toContain("india");
});

/**
 * Test to check whether sign returns cancer
 */
test("Sign : Cancer Test", () => {
  var check = checkLists("sign");
  expect(check).toContain("cancer");
});

/**
 * Test to check whether something which dosent have a list returns false
 */
test("False Test", () => {
  var check = checkLists("indicator");
  expect(check).toBeFalsy();
});
