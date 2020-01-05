const getOddLetters = require("../../modules/alternate/odd-letters");

/**
 * Test to check if spin broken shingle returns siboesige
 */
test("spin broken shingle : siboesige Test", () => {
  var phrase = "spin broken shingle";
  var result = getOddLetters(phrase);
  expect(result).toEqual("siboesige");
});

/**
 * Test to check if spin returns si
 */
test("spin : si Test", () => {
  var phrase = "spin";
  var result = getOddLetters(phrase);
  expect(result).toEqual("si");
});
