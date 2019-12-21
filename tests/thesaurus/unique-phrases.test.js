const uniquePhrases = require("../../modules/thesaurus/unique-phrases");

/**
 * Test to check expected value when an empty array is provided
 */
test("Empty Test", () => {
  var arr = new Array();
  var arr1 = new Array();
  arr.push(arr1);
  var expectedResult = new Array();
  expect(uniquePhrases(arr)).toEqual(expectedResult);
});

/**
 * Test to check expected value when [['a','b','c'],['a','b c'],['a b','c']] is provided
 */
test("[['a','b','c'],['a','b c'],['a b','c']] Test", () => {
  var words = new Array();
  words.push(["a", "b", "c"]);
  words.push(["a", "b c"]);
  words.push(["a b", "c"]);

  var expectedResult = new Array();
  expectedResult.push("a");
  expectedResult.push("b");
  expectedResult.push("c");
  expectedResult.push("b c");
  expectedResult.push("a b");

  expect(uniquePhrases(words)).toEqual(expectedResult);
});
