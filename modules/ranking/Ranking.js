const loadCache = require("../cache/load-cache");
const getKnownDefinitions = require("../cryptic-definitions/known-definitions");
const inLists = require("../lists/lists-percentage");

class Ranking {
  constructor(solutionList) {
    this.solutionList = solutionList;
  }

  //rankSolutions() generates a percentage for every solution in the solutions array
  rankSolutions() {
    //Generate Percentage for each solution
    this.solutionList.forEach(currentSolution => {
      var currentPercentage = this.getPercentage(
        currentSolution.def,
        currentSolution.solution
      );

      //Round of the percentage
      currentSolution.percentage = Math.round(currentPercentage) + "%";
    });

    return this.solutionList;
  }

  /**
   * getPercentage() calculates the relative percentage of plausibility and returns it
   * @param {String} definition : Definition of the combination
   * @param {String} solution : Solution Calculated
   * @return {Integer} : Returns percentage of plausibility for a given solution
   */
  getPercentage(definition, solution) {
    var knownDefinition = getKnownDefinitions(definition, solution);
    //If the definition is known then percentage is 100%
    if (knownDefinition) {
      if (knownDefinition.includes(solution.toLowerCase())) {
        return 100;
      }
    }

    //If the definition is from one the lists return 100%
    if (inLists(solution)) {
      return 100;
    }

    var percentage = 0;
    const cache = loadCache();

    //Get the Word for which we need synonyms
    const cacheElement = cache.filter(
      currentEl => currentEl.word == definition
    )[0];

    //Retreive Synonyms
    var solutionElement = cacheElement.synonyms;

    var max = 0;
    var current = 0;

    //Get Maximum Score and Score of Solution
    solutionElement.forEach(currentSolutionElement => {
      if (currentSolutionElement.score > max) {
        max = currentSolutionElement.score;
      }
      if (currentSolutionElement.word == solution.toLowerCase()) {
        current = currentSolutionElement.score;
      }
    });

    //Calculate Relative Percentage
    percentage = (current / max) * 100;

    //If score wasnt found give it score of 1%
    percentage = percentage == 0 || isNaN(percentage) ? "1" : percentage;

    return percentage;
  }
}

module.exports = Ranking;
