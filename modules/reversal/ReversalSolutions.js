const reversePhrase = require("./reverse-phrase");
const getSynonyms = require("../thesaurus/get-synonyms");

class ReversalSolutions {
  constructor(CurrentSolution, reversalIndicator) {
    this.CurrentSolution = CurrentSolution;
    this.reversalIndicator = reversalIndicator;
    this.query = CurrentSolution.query;
  }

  //generateSolution() generates all possible reversal solutions for a given combination
  generateSolution() {
    var solutionList = new Array();

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
      var reversedPhrase = reversePhrase(currentPhrase);

      //Check if Reverse phrase length is solution length. If ot discard it
      if (reversedPhrase.length == this.query.length) {
        //Check for Direct Reversals. i.e. Reversal of one of the phrases is the definition
        var directSolutions = firstDefinitions.map(currentDefinition =>
          reversedPhrase == currentDefinition
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getDirectReason(
                  currentCombination[0],
                  currentDefinition,
                  currentPhrase
                ),
                def: currentCombination[0],
                int: "reversal-clue",
                percentage: 0
              }
            : ""
        );

        //Add Direct Solutions to Final List
        directSolutions = directSolutions.filter(element => element != "");
        solutionList = solutionList.concat(directSolutions);
      }

      //Get Synonyms of Current Phrase
      var currentSynonyms = getSynonyms(this.query, currentPhrase);

      //Filter out synonyms whose length dont match solution length
      currentSynonyms = currentSynonyms.filter(
        current => current.length == this.query.length
      );

      //Generate all indirect solutions. i.e. Reversal of synonym of a phrase
      var indirectSolutions = currentSynonyms.map(currentSynonym =>
        firstDefinitions.map(currentDefinition =>
          reversePhrase(currentSynonym) == currentDefinition
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getIndirectReason(
                  currentCombination[0],
                  currentDefinition,
                  currentPhrase,
                  currentSynonym
                ),
                def: currentCombination[0],
                int: "reversal-clue",
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
      var reversedPhrase = reversePhrase(currentPhrase);

      //Check if Reverse phrase length is solution length. If ot discard it
      if (reversedPhrase.length == this.query.length) {
        //Check for Direct Reversals. i.e. Reversal of one of the phrases is the definition
        var directSolutions = lastDefinitions.map(currentDefinition =>
          reversedPhrase == currentDefinition
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getDirectReason(
                  currentCombination[currentCombination.length - 1],
                  currentDefinition,
                  currentPhrase
                ),
                def: currentCombination[currentCombination.length - 1],
                int: "reversal-clue",
                percentage: 0
              }
            : ""
        );

        //Add Direct Solutions to Final List
        directSolutions = directSolutions.filter(element => element != "");
        solutionList = solutionList.concat(directSolutions);
      }

      //Get Synonyms of Current Phrase
      var currentSynonyms = getSynonyms(this.query, currentPhrase);

      //Filter out synonyms whose length dont match solution length
      currentSynonyms = currentSynonyms.filter(
        current => current.length == this.query.length
      );

      //Generate all indirect solutions. i.e. Reversal of synonym of a phrase
      var indirectSolutions = currentSynonyms.map(currentSynonym =>
        lastDefinitions.map(currentDefinition =>
          reversePhrase(currentSynonym) == currentDefinition
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getIndirectReason(
                  currentCombination[currentCombination.length - 1],
                  currentDefinition,
                  currentPhrase,
                  currentSynonym
                ),
                def: currentCombination[currentCombination.length - 1],
                int: "reversal-clue",
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
   * getDirectReason() generates the reason string for a direct reversal and returns it
   * @param definition : Definition in combination
   * @param definitionSyn : Synonym of definition
   * @param phrase : Phrase for which reversal has taken place
   */
  getDirectReason(definition, definitionSyn, phrase) {
    return (
      "This clue is a Reversal Clue. The reversal indicator is " +
      this.reversalIndicator.toUpperCase() +
      ". The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". If we reverse " +
      phrase.toUpperCase() +
      " we get " +
      definitionSyn.toUpperCase()
    );
  }

  /**
   * getIndirectReason() generates string for indirect reversals and returns it
   * @param definition : Definition in combination
   * @param definitionSyn : Synonym for definition
   * @param phrase : Phrase whose synonym is reversed
   * @param phraseSyn : Reversal phrase
   *
   */
  getIndirectReason(definition, definitionSyn, phrase, phraseSyn) {
    return (
      "This clue is a Reversal Clue. The reversal indicator is " +
      this.reversalIndicator.toUpperCase() +
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
      ". If we reverse " +
      phraseSyn.toUpperCase() +
      " we get " +
      definitionSyn.toUpperCase()
    );
  }
}

module.exports = ReversalSolutions;
