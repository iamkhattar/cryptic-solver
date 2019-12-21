const possibleCombinations = require("../../modules/format/possible-combinations");

/**
 * Test to check expected value when "" is provided
 */
test("Empty Test", () => {
  var expectedResult = new Array();
  expect(possibleCombinations("")).toEqual(expectedResult);
});

/**
 * Test to check expected value when ["a","b","c"] is provided
 */
test("['a','b','c'] Test", () => {
  var words = new Array();
  words.push("a");
  words.push("b");
  words.push("c");
  var expectedResult = new Array();

  expectedResult.push(["a", "b", "c"]);
  expectedResult.push(["a", "b c"]);
  expectedResult.push(["a b", "c"]);
  expect(possibleCombinations(words)).toEqual(expectedResult);
});

/**
 * Test to check expected value when ["dry","in","the","kalahari","desert"] is provided
 */
test("['dry','in','the','kalahari','desert'] Test", () => {
  var words = new Array();
  words.push("dry");
  words.push("in");
  words.push("the");
  words.push("kalahari");
  words.push("desert");
  var expectedResult = new Array();

  expectedResult.push(["dry", "in", "the", "kalahari", "desert"]);
  expectedResult.push(["dry", "in the", "kalahari", "desert"]);
  expectedResult.push(["dry", "in the kalahari", "desert"]);
  expectedResult.push(["dry", "in the kalahari desert"]);
  expectedResult.push(["dry in", "the", "kalahari", "desert"]);
  expectedResult.push(["dry in", "the kalahari", "desert"]);
  expectedResult.push(["dry in", "the kalahari desert"]);
  expectedResult.push(["dry in the", "kalahari", "desert"]);
  expectedResult.push(["dry in the", "kalahari desert"]);
  expectedResult.push(["dry in the kalahari", "desert"]);
  expectedResult.push(["dry", "in", "the", "kalahari desert"]);
  expectedResult.push(["dry in", "the", "kalahari desert"]);
  expectedResult.push(["dry", "in", "the kalahari desert"]);
  expect(possibleCombinations(words)).toEqual(expectedResult);
});
