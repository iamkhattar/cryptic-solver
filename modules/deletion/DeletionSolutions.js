const getAllDeletions = require("./possible-deletions");
const getSynonyms = require("../thesaurus/get-synonyms");

class DeletionSolutions {
  constructor(CurrentSolution, deletionIndicator) {
    this.CurrentSolution = CurrentSolution;
    this.deletionIndicator = deletionIndicator;
    this.query = CurrentSolution.query;
  }

  generateSolution() {
    var solutionList = [];

    const currentCombination = this.CurrentSolution.currentCombination;
    const firstDefinitions = this.CurrentSolution.firstDefinitions;
    const lastDefinitions = this.CurrentSolution.lastDefinitions;

    var firstSolutions = this.getFirstSolutions(
      currentCombination,
      firstDefinitions
    );

    var lastSolutions = this.getLastSolutions(
      currentCombination,
      lastDefinitions
    );

    solutionList = solutionList.concat(firstSolutions);
    solutionList = solutionList.concat(lastSolutions);

    return solutionList;
  }

  /**
   * getFirstSolutions() generates all possible solutions when the first phrase is the definition
   * @param {Array} currentCombination : Combination to be checked
   * @param {Array} firstDefinitions : Array of definitions for first phrase
   */
  getFirstSolutions(currentCombination, firstDefinitions) {
    var solutionList = [];
    //Run Loop From Second Phrase to Last Phrase
    for (var i = 1; i < currentCombination.length; i++) {
      var currentPhrase = currentCombination[i];
      //Generate All Possible Deletions
      var possibleDeletions = getAllDeletions(currentPhrase);

      //If phrase is the deletion indicator we can discard it
      if (currentPhrase != this.deletionIndicator) {
        var solutions = firstDefinitions.map(currentDefinition =>
          possibleDeletions.includes(currentDefinition)
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getDirectReason(
                  currentCombination[0],
                  currentDefinition,
                  currentPhrase,
                  this.determineWhatDeletionTookPlace(
                    currentDefinition,
                    possibleDeletions
                  )
                ),
                def: currentCombination[0],
                int: "deletion-clue",
                percentage: 0
              }
            : ""
        );

        //Add Solutions to Final List
        solutions = solutions.filter(element => element != "");
        solutionList = solutionList.concat(solutions);
      }
      //Get Synonyms of Current Phrase
      var currentSynonyms = getSynonyms(this.query, currentPhrase);

      //Generate all possible indirect deletions. i.e. deletion of a synonym
      var indirectSolutions = currentSynonyms.map(currentSynonym =>
        firstDefinitions.map(currentDefinition =>
          currentPhrase != this.deletionIndicator &&
          getAllDeletions(currentSynonym).includes(currentDefinition)
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getIndirectReason(
                  currentCombination[0],
                  currentDefinition,
                  currentPhrase,
                  currentSynonym,
                  this.determineWhatDeletionTookPlace(
                    currentDefinition,
                    getAllDeletions(currentSynonym)
                  )
                ),
                def: currentCombination[0],
                int: "deletion-clue",
                percentage: 0
              }
            : ""
        )
      );

      //Remove Redundant Data
      indirectSolutions = indirectSolutions.map(currentArray =>
        currentArray.filter(currentArrayElement => currentArrayElement != "")
      );

      //Add Solution to Solution to Solution List
      indirectSolutions.forEach(indirectSolution => {
        if (indirectSolution.length > 0) {
          solutionList = solutionList.concat(indirectSolution);
        }
      });
    }
    return solutionList;
  }

  /**
   * getLastSolutions() generates all possible solutions when the last phrase is the definition
   * @param {Array} currentCombination : Current Combination to be checked
   * @param {Array} lastDefinitions : Array of definitions for last phrase
   */
  getLastSolutions(currentCombination, lastDefinitions) {
    var solutionList = [];
    //Run Loop From First Phrase to Second Last Phrase
    for (var i = 0; i < currentCombination.length - 1; i++) {
      var currentPhrase = currentCombination[i];
      //Generate All Possible Deletions
      var possibleDeletions = getAllDeletions(currentPhrase);

      //If phrase is the deletion indicator we can discard it
      if (currentPhrase != this.deletionIndicator) {
        var solutions = lastDefinitions.map(currentDefinition =>
          possibleDeletions.includes(currentDefinition)
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getDirectReason(
                  currentCombination[currentCombination.length - 1],
                  currentDefinition,
                  currentPhrase,
                  this.determineWhatDeletionTookPlace(
                    currentDefinition,
                    possibleDeletions
                  )
                ),
                def: currentCombination[currentCombination.length - 1],
                int: "deletion-clue",
                percentage: 0
              }
            : ""
        );

        //Add Solutions to Final List
        solutions = solutions.filter(element => element != "");
        solutionList = solutionList.concat(solutions);
      }
      //Get Synonyms of Current Phrase
      var currentSynonyms = getSynonyms(this.query, currentPhrase);

      //Generate all possible indirect deletions. i.e. deletion of a synonym
      var indirectSolutions = currentSynonyms.map(currentSynonym =>
        lastDefinitions.map(currentDefinition =>
          currentPhrase != this.deletionIndicator &&
          getAllDeletions(currentSynonym).includes(currentDefinition)
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getIndirectReason(
                  currentCombination[currentCombination.length - 1],
                  currentDefinition,
                  currentPhrase,
                  currentSynonym,
                  this.determineWhatDeletionTookPlace(
                    currentDefinition,
                    getAllDeletions(currentSynonym)
                  )
                ),
                def: currentCombination[currentCombination.length - 1],
                int: "deletion-clue",
                percentage: 0
              }
            : ""
        )
      );

      //Remove Redundant Data
      indirectSolutions = indirectSolutions.map(currentArray =>
        currentArray.filter(currentArrayElement => currentArrayElement != "")
      );

      //Add Solution to Solution to Solution List
      indirectSolutions.forEach(indirectSolution => {
        if (indirectSolution.length > 0) {
          solutionList = solutionList.concat(indirectSolution);
        }
      });
    }
    return solutionList;
  }

  /**
   * getDirectReason() generates the reason for a direct deletion and returns it
   * @param definition : Definition in Combination
   * @param definitionSyn : Synonym of Definition
   * @param phrase : Phrase for which deletion has taken place
   * @param deletion : What sort of deletion has taken place
   */
  getDirectReason(definition, definitionSyn, phrase, deletion) {
    return (
      "This clue is a Deletion Clue. The deletion indicator is " +
      this.deletionIndicator.toUpperCase() +
      ". The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". If we remove the  " +
      deletion +
      " of " +
      phrase.toUpperCase() +
      " we get " +
      definitionSyn.toUpperCase()
    );
  }

  /**
   * getIndirectReason() generates the reason for an indirect deletion and returns it
   * @param definition : Definition in Combination
   * @param definitionSyn : Synonym of Definition
   * @param phrase : Phrase for which deletion has taken place
   * @param phraseSyn : Synonym of phrase for which deletion has taken place
   * @param deletion : What sort of deletion has taken place
   */
  getIndirectReason(definition, definitionSyn, phrase, phraseSyn, deletion) {
    return (
      "This clue is a Deletion Clue. The deletion indicator is " +
      this.deletionIndicator.toUpperCase() +
      ". The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". " +
      phraseSyn.toUpperCase() +
      " is a synonym of " +
      phrase.toUpperCase() +
      ". If we remove the " +
      deletion +
      " of " +
      phraseSyn.toUpperCase() +
      " we get " +
      definitionSyn.toUpperCase()
    );
  }

  /**
   * determineWhatDeletionTookPlace() returns what sort of deletion took place
   * @param currentDefinition : Definition to be searched
   * @param possibleDeletions : all possible deletion
   */
  determineWhatDeletionTookPlace(currentDefinition, possibleDeletions) {
    if (currentDefinition == possibleDeletions[0]) {
      return "first letter";
    } else if (currentDefinition == possibleDeletions[1]) {
      return "last letter";
    } else if (currentDefinition == possibleDeletions[2]) {
      return "first and last letters";
    } else if (currentDefinition == possibleDeletions[3]) {
      return "middle letters";
    }
  }
}

module.exports = DeletionSolutions;
