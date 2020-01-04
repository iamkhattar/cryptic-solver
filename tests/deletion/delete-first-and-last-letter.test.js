const deleteFirstAndLastLetter = require("../../modules/deletion/delete-first-and-last-letter");

/**
 * Test to check whether Shivam returns hiva
 */
test("Shivam : hiva Test", () => {
  expect(deleteFirstAndLastLetter("Shivam")).toEqual("hiva");
});

/**
 * Test to check whether ape returns p
 */
test("ape : p Test", () => {
  expect(deleteFirstAndLastLetter("ape")).toEqual("p");
});
