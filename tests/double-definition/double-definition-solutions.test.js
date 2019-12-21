const generateDoubleDefinitionSolution = require("../../modules/double-definition/double-definition-solutions");
const generateSynonyms = require("../../modules/thesaurus/generate-synonyms");

/**
 * Test to check report with solution length 4 gives NEWS
 */
test("Report - NEWS Check", async () => {
  var currentCombination = ["report", "account"];
  var uniquePhrases = new Array();
  uniquePhrases.push("report");
  uniquePhrases.push("account");
  var synonymList = await generateSynonyms(uniquePhrases);
  var doubleDefinitionSolutions = generateDoubleDefinitionSolution(
    currentCombination,
    4,
    synonymList
  );
  var flag = false;
  doubleDefinitionSolutions.forEach(element => {
    if (element.solution == "NEWS") {
      flag = true;
    }
  });

  expect(flag).toBeTruthy();
});
