const deleteMiddleLetters = require("../../modules/deletion/delete-middle-letters");

/**
 * Test to check whether Shivam returns sm
 */
test("Shivam : hiva Test", () => {
  expect(deleteMiddleLetters("Shivam")).toEqual("sm");
});

/**
 * Test to check whether ape returns ae
 */
test("ape : ae Test", () => {
  expect(deleteMiddleLetters("ape")).toEqual("ae");
});
