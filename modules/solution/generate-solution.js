const validateClue = require("../format/validate-clue");
const splitClue = require("../format/split-words");
const possibleCombinations = require("../format/possible-combinations");
const uniquePhrases = require("../thesaurus/unique-phrases");
const generateSynonyms = require("../thesaurus/generate-synonyms");
const generateCurrentSolution = require("../solution/generate-current-solution");
const rankSolutions = require("../ranking/rank-solutions");
const doesSolutionExist = require("./does-solution-exist");

//List of Synonyms
var synonymList;

//List of all possible combinations
var combinations;

/**
 * @param  clue : Clue String
 * @param  length : Length of Solution
 * @return solution to the clue
 *
 * generateSolutions() generates the solution for a given clue
 */
async function generateSolution(clue, solutionLength) {
  await fillLists(clue);
  var solutionList = new Array();
  for (const currentCombination of combinations) {
    var currentSolution = generateCurrentSolution(
      currentCombination,
      solutionLength,
      synonymList
    );
    currentSolution.forEach(element => {
      if (!doesSolutionExist(solutionList, element)) {
        solutionList.push(element);
      }
    });
  }

  //Change Percentage
  solutionList = rankSolutions(solutionList);

  return solutionList;
}

/**
 *
 * @param clue : Clue String
 *
 * fillLists() does the following things:
 * 1. Formats the Clue to remove invalid characters
 * 2. Splits the formated clue using spaces
 * 3. Generates all possible combinations and fills combinations
 * 4. Generates Unique Phrases that need to be queried
 * 5. Queries API and fills synonymList
 */
async function fillLists(clue) {
  var formattedClue = validateClue(clue);
  var words = splitClue(formattedClue);
  combinations = possibleCombinations(words, clue);
  var unique = uniquePhrases(combinations);
  synonymList = await generateSynonyms(unique);
}

module.exports = generateSolution;
