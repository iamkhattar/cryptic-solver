const deleteLastLetter = require("../../modules/deletion/delete-last-letter");

/**
 * Test to check whether Shivam returns shiva
 */
test("Shivam : shiva Test", () => {
  expect(deleteLastLetter("Shivam")).toEqual("shiva");
});

/**
 * Test to check whether ape returns ap
 */
test("ape : ap Test", () => {
  expect(deleteLastLetter("ape")).toEqual("ap");
});
