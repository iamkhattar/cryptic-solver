const generatePossibleDefintions = require("../../modules/definitions/generate-possible-definitions");
const generateSynonyms = require("../../modules/thesaurus/generate-synonyms");

/**
 * Test to check expected value when "",0 and an empty array is provided
 */
test("Empty Test", () => {
  var expectedResult = [""];
  expect(generatePossibleDefintions("", 0, new Array())).toEqual(
    expectedResult
  );
});

/**
 * Test to check report with solution length 4 gives NEWS
 */
test("Report - NEWS Check", async () => {
  var uniquePhrases = new Array();
  uniquePhrases.push("report");
  uniquePhrases.push("account");
  var synonymList = await generateSynonyms(uniquePhrases);
  var possibleSolutions = generatePossibleDefintions("report", 4, synonymList);
  expect(possibleSolutions).toContain("news");
});
