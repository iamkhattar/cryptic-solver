const deleteFirstLetter = require("../../modules/deletion/delete-first-letter");

/**
 * Test to check whether Shivam returns hivam
 */
test("Shivam : hivam Test", () => {
  expect(deleteFirstLetter("Shivam")).toEqual("hivam");
});
