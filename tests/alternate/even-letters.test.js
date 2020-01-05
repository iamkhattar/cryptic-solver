const getEvenLetters = require("../../modules/alternate/even-letters");

/**
 * Test to check if spin broken shingle returns pnrknhnl
 */
test("spin broken shingle : pnrknhnl Test", () => {
  var phrase = "spin broken shingle";
  var result = getEvenLetters(phrase);
  expect(result).toEqual("pnrknhnl");
});

/**
 * Test to check if spin returns pn
 */
test("spin : pn Test", () => {
  var phrase = "spin";
  var result = getEvenLetters(phrase);
  expect(result).toEqual("pn");
});
