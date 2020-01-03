const getFinalLetters = require("../../modules/final/final-letters");

/**
 * Test to check if apple returns e
 */
test("Apple : e test", () => {
  var result = getFinalLetters("Apple");
  expect(result).toBe("e");
});

/**
 * Test to check if Reports on the extra cook returns sneak
 */
test("Reports on the extra cook : sneak test", () => {
  var result = getFinalLetters("Reports on the extra cook");
  expect(result).toBe("sneak");
});
