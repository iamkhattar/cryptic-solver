const generateDoubleDefinitionSolution = require("../../modules/double-definition/double-definition-solutions");
const generateSynonyms = require("../../modules/thesaurus/generate-synonyms");
const generatePossibleDefinitions = require("../../modules/definitions/generate-possible-definitions");

/**
 * Test to check report with solution length 4 gives NEWS
 */
test("Report - NEWS Check", async () => {
  var currentCombination = ["report", "account"];
  var uniquePhrases = new Array();
  uniquePhrases.push("report");
  uniquePhrases.push("account");
  var synonymList = await generateSynonyms(uniquePhrases);
  var firstDefinitions = generatePossibleDefinitions(
    currentCombination[0],
    4,
    synonymList
  );
  var lastDefinitions = generatePossibleDefinitions(
    currentCombination[1],
    4,
    synonymList
  );
  var doubleDefinitionSolutions = generateDoubleDefinitionSolution(
    firstDefinitions,
    lastDefinitions
  );
  var flag = false;
  doubleDefinitionSolutions.forEach(element => {
    if (element.solution == "NEWS") {
      flag = true;
    }
  });

  expect(flag).toBeTruthy();
});
