const getInitialLetter = require("../../modules/initial/initial-letter");

/**
 * Test to check if apple returns a
 */
test("Apple : a test", () => {
  var result = getInitialLetter("Apple");
  expect(result).toBe("a");
});

/**
 * Test to check if test returns t
 */
test("test : t test", () => {
  var result = getInitialLetter("test");
  expect(result).toBe("t");
});
