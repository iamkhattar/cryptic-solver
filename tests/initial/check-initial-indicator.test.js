const checkInitialIndicator = require("../../modules/initial/check-initial-indicator");

/**
 * Test to check if combination with initial indicator returns it
 */
test("Initially amiable person eats primate Test", () => {
  var indicator = ["initially", "amiable", "person", "eats", "primate"];
  var init = checkInitialIndicator(indicator);
  expect(init).not.toBeFalsy();
  expect(init).toEqual("initially");
});

/**
 * Test to check if combination without initial indicator returns false
 */
test("Spin shingle Test", () => {
  var indicator = ["spin", "shingle"];
  var init = checkInitialIndicator(indicator);
  expect(init).toBeFalsy();
});
