const getFinalLetter = require("../../modules/final/final-letter");

/**
 * Test to check if apple returns e
 */
test("Apple : e test", () => {
  var result = getFinalLetter("Apple");
  expect(result).toBe("e");
});

/**
 * Test to check if test returns t
 */
test("test : t test", () => {
  var result = getFinalLetter("test");
  expect(result).toBe("t");
});
