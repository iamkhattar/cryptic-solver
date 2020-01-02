const reversePhrase = require("../../modules/reversal/reverse-phrase");

/**
 * Test to check if diva returns avid
 */
test("diva : avid", () => {
  var reversedPhrase = reversePhrase("diva");
  expect(reversedPhrase).toEqual("avid");
});

/**
 * Test to check if diva diva returns avidavid
 */
test("diva diva : avidavid", () => {
  var reversedPhrase = reversePhrase("diva diva");
  expect(reversedPhrase).toEqual("avidavid");
});
