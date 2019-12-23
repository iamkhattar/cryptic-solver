const checkAnagramIndicator = require("../../modules/anagram/check-anagram-indicator");

/**
 * Test to check if combination with anagram indicator returns it
 */
test("Spin broken shingle Test", () => {
  var indicator = ["spin", "broken", "shingle"];
  var anag = checkAnagramIndicator(indicator);
  expect(anag).not.toBeFalsy();
  expect(anag).toEqual("broken");
});

/**
 * Test to check if combination without anagram indicator returns false
 */
test("Spin shingle Test", () => {
  var indicator = ["spin", "shingle"];
  var anag = checkAnagramIndicator(indicator);
  expect(anag).toBeFalsy();
});
