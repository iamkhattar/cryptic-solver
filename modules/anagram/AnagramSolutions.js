const getSynonyms = require("../thesaurus/get-synonyms");
const checkAnagrams = require("./check-anagram");

class AnagramSolutions {
  constructor(CurrentSolution, anagramIndicator) {
    this.CurrentSolution = CurrentSolution;
    this.anagramIndicator = anagramIndicator;
    this.query = CurrentSolution.query;
  }

  //generateSolution() generates all possible anagram solutions for a given combination
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
      var anagramLength = currentPhrase.replace(/\s+/g, "").length;
      //Check only those phrases for which direct anagrams are possible
      if (anagramLength == this.query.length) {
        //Generate All possible direct anagrams. i.e. anagrams of a phrase
        var solutions = firstDefinitions.map(currentDefinition =>
          currentPhrase != currentDefinition &&
          checkAnagrams(currentPhrase, currentDefinition)
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getDirectReason(
                  currentCombination[0],
                  currentDefinition,
                  currentPhrase
                ),
                def: currentCombination[0],
                int: "anagram-clue",
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

      //Filter out synonyms whose length dont match solution length
      currentSynonyms = currentSynonyms.filter(
        current => current.length == this.query.length
      );

      //Generate all possible indirect anagrams. i.e. anagram of a synonym
      var indirectSolutions = currentSynonyms.map(currentSynonym =>
        firstDefinitions.map(currentDefinition =>
          currentSynonym != currentDefinition &&
          checkAnagrams(currentSynonym, currentDefinition)
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getIndirectReason(
                  currentCombination[0],
                  currentDefinition,
                  currentPhrase,
                  currentSynonym
                ),
                def: currentCombination[0],
                int: "anagram-clue",
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
      var anagramLength = currentPhrase.replace(/\s+/g, "").length;
      //Check only those phrases for which direct anagrams are possible
      if (anagramLength == this.query.length) {
        //Generate All possible direct anagrams. i.e. anagrams of a phrase
        var solutions = lastDefinitions.map(currentDefinition =>
          currentPhrase != currentDefinition &&
          checkAnagrams(currentPhrase, currentDefinition)
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getDirectReason(
                  currentCombination[currentCombination.length - 1],
                  currentDefinition,
                  currentPhrase
                ),
                def: currentCombination[currentCombination.length - 1],
                int: "anagram-clue",
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

      //Filter out synonyms whose length dont match solution length
      currentSynonyms = currentSynonyms.filter(
        current => current.length == this.query.length
      );

      //Generate all possible indirect anagrams. i.e. anagram of a synonym
      var indirectSolutions = currentSynonyms.map(currentSynonym =>
        lastDefinitions.map(currentDefinition =>
          currentSynonym != currentDefinition &&
          checkAnagrams(currentSynonym, currentDefinition)
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getIndirectReason(
                  currentCombination[currentCombination.length - 1],
                  currentDefinition,
                  currentPhrase,
                  currentSynonym
                ),
                def: currentCombination[currentCombination.length - 1],
                int: "anagram-clue",
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
   * getDirectReason() generates reason string for direct anagram clues
   * @param definition : Definition in combination
   * @param definitionSyn : Synonym of definition
   * @param phrase : Anagrammed phrase
   */
  getDirectReason(definition, definitionSyn, phrase) {
    return (
      "This clue is an Anagram Clue. The anagram indicator is " +
      this.anagramIndicator.toUpperCase() +
      ". The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". If we anagram " +
      phrase.toUpperCase() +
      " we get " +
      definitionSyn.toUpperCase()
    );
  }

  /**
   * getIndirectReason() generates reason string for indirect anagram clues
   * @param definition : Definition in combination
   * @param definitionSyn : Synonym of definition
   * @param phrase : Phrase for which synonym is anagrammed
   * @param phraseSyn : Anagrammed phrase
   */
  getIndirectReason(definition, definitionSyn, phrase, phraseSyn) {
    return (
      "This clue is an Anagram Clue. The anagram indicator is " +
      this.anagramIndicator.toUpperCase() +
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
      ". If we anagram " +
      phraseSyn.toUpperCase() +
      " we get " +
      definitionSyn.toUpperCase()
    );
  }
}

module.exports = AnagramSolutions;
