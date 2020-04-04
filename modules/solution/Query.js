const validateClue = require("../format/validate-clue");
const splitWords = require("../format/split-words");
const generateCombinations = require("../format/generate-combinations");
const getUniquePhrases = require("../thesaurus/unique-phrases");
const generateSynonyms = require("../thesaurus/generate-synonyms");
const CurrentSolution = require("./CurrentSolution");
const Ranking = require("../ranking/Ranking");
const GeneralSolutions = require("./GeneralSolution");
const CompoundSolution = require("./CompoundSolution");

/**
 * The Solution class generates the Solution for any given clue and length
 */
class Query {
  constructor(clue, length) {
    this.clue = clue;
    this.length = length;
    //Remove Illegal Characters from clue
    this.formattedClue = validateClue(this.clue);
    //Split Clue using " "
    this.clueArray = splitWords(this.formattedClue);
    //Generate All Possible Combinations for a given clue
    this.combinations = generateCombinations(this.clueArray);
    //Generate All Unique Phrases from Combinations
    this.uniquePhrases = getUniquePhrases(this.combinations);
    //Max length of phrase when querying datamuse
    if (this.clueArray.length < 7) {
      this.allowedPhraseLength = 4;
    } else if (this.clueArray.length >= 7 && this.clueArray.length < 10) {
      this.allowedPhraseLength = 3;
    } else {
      this.allowedPhraseLength = 1;
    }
  }

  //Get all synonyms for the unique phrases
  async fillSynonymList() {
    var synonymList = await generateSynonyms(this);
    this.synonymList = synonymList;
  }

  //Solve Clue and return solution
  async solveClue() {
    //Query Thesaurus
    console.time("Total Time");
    console.time("Query Time");
    await this.fillSynonymList();
    console.timeEnd("Query Time");
    var solutionList = new Array();

    console.time("Current Solution");
    //Generate Indicator Solutions For Each Combination
    this.combinations.forEach(currentCombination => {
      var currentSolution = new CurrentSolution(this, currentCombination);
      var currentSolutionResponse = currentSolution.getCurrentSolution();
      currentSolutionResponse.forEach(currentElement => {
        if (!this.doesListContainSolution(solutionList, currentElement)) {
          solutionList.push(currentElement);
        }
      });
    });
    console.timeEnd("Current Solution");

    console.time("Compound Solution");
    //Generate Compound Solutions for each combination
    this.combinations.forEach(currentCombination => {
      if (currentCombination.length < 6) {
        var compoundSolution = new CompoundSolution(this, currentCombination);
        var compoundSolution = compoundSolution.generateSolutions();
        compoundSolution.forEach(currentElement => {
          if (!this.doesListContainSolution(solutionList, currentElement)) {
            solutionList.push(currentElement);
          }
        });
      }
    });
    console.timeEnd("Compound Solution");

    console.time("General Solution");
    //Generate General Solutions for each combination
    if (this.clueArray.length < 9) {
      this.combinations.forEach(currentCombination => {
        if (currentCombination.length < 5 && this.length < 10) {
          var general = new GeneralSolutions(this, currentCombination);
          var generalSolution = general.generateSolutions();
          generalSolution.forEach(currentGeneralSolution => {
            if (
              !this.doesListContainSolution(
                solutionList,
                currentGeneralSolution
              )
            ) {
              solutionList.push(currentGeneralSolution);
            }
          });
        }
      });
      var general = new GeneralSolutions(this, this.clueArray);
      var generalSolution = general.generateSolutions();
      generalSolution.forEach(currentGeneralSolution => {
        if (
          !this.doesListContainSolution(solutionList, currentGeneralSolution)
        ) {
          solutionList.push(currentGeneralSolution);
        }
      });
    }
    console.timeEnd("General Solution");

    //Rank Solutions
    var ranking = new Ranking(solutionList);
    solutionList = ranking.rankSolutions();

    //Prepare data accoring to response Schema
    var response = this.prepareResponse(solutionList);
    console.timeEnd("Total Time");
    return response;
  }

  /**
   * prepareResponse() formats the data according to the reponse Schema
   * @param {Array} solutionList : Current array of solutions
   */
  prepareResponse(solutionList) {
    var response = [];
    //Only Keep elements that have to be sent
    solutionList.forEach(element => {
      const { solution, reason, percentage } = element;
      response.push({ solution, reason, percentage });
    });
    //Sort by percentage
    return response.sort(
      (a, b) => parseInt(b.percentage) - parseInt(a.percentage)
    );
  }

  /**
   * doesListContainSolution() checks whether a given list contains a solution
   * @param {Array} solutionList : Array in which solution has to be searched
   * @param {Object} currentSolution : Solution to be searched
   */
  doesListContainSolution(solutionList, currentSolution) {
    var flag = false;
    solutionList.forEach(element => {
      if (
        element.solution.toUpperCase() == currentSolution.solution.toUpperCase()
      ) {
        flag = true;
      }
    });
    return flag;
  }
}

module.exports = Query;
