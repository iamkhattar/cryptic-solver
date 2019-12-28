const getInitialLetters = require("../../modules/initial/initial-letters");

/**
 * Test to check if apple returns a
 */
test("Apple : a test", () => {
  var result = getInitialLetters("Apple");
  expect(result).toBe("a");
});

/**
 * Test to check if amiable person eats returns ape
 */
test("amiable person eat : ape test", () => {
  var result = getInitialLetters("amiable person eat");
  expect(result).toBe("ape");
});
