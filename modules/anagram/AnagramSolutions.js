const getSynonyms = require("../thesaurus/get-synonyms");
const checkAnagrams = require("./check-anagram");

class AnagramSolutions {
  constructor(CurrentSolution, anagramIndicator) {
    this.CurrentSolution = CurrentSolution;
    this.anagramIndicator = anagramIndicator;
    this.query = CurrentSolution.query;
  }

  /**
   * generateSolution() generates all possible anagram solutions for a given combination
   */
  generateSolution() {
    var solutionList = [];

    const currentCombination = this.CurrentSolution.currentCombination;
    const firstDefinitions = this.CurrentSolution.firstDefinitions;
    const lastDefinitions = this.CurrentSolution.lastDefinitions;

    var firstSolutions = this.generateSolutionsHelper(firstDefinitions, 0);
    var lastSolutions = this.generateSolutionsHelper(
      lastDefinitions,
      currentCombination.length - 1
    );

    solutionList = solutionList.concat(firstSolutions);
    solutionList = solutionList.concat(lastSolutions);

    return solutionList;
  }

  /**
   * generateSolutionsHelper() generates anagram solutions for a given combination
   * @param {Array} definitions List of defintions
   * @param {Integer} definitionIndex Index of definition in phrase
   */
  generateSolutionsHelper(definitions, definitionIndex) {
    //Define start and end phrase according to definitionIndex
    var currentCombination = this.CurrentSolution.currentCombination;
    var start, end;
    if (definitionIndex == 0) {
      start = 1;
      end = currentCombination.length;
    } else {
      start = 0;
      end = definitionIndex;
    }

    var solutionList = [];

    //Run Loop From Start Phrase to End Phrase
    for (var i = start; i < end; i++) {
      var currentPhrase = currentCombination[i];
      var anagramLength = currentPhrase.replace(/\s+/g, "").length;
      //Check only those phrases for which direct anagrams are possible
      if (anagramLength == this.query.length) {
        //Generate All possible direct anagrams. i.e. anagrams of a phrase
        var solutions = definitions.map((currentDefinition) =>
          currentPhrase != currentDefinition &&
          checkAnagrams(currentPhrase, currentDefinition)
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getDirectReason(
                  currentCombination[definitionIndex],
                  currentDefinition,
                  currentPhrase
                ),
                def: currentCombination[definitionIndex],
                int: "anagram-clue",
                percentage: 0,
              }
            : ""
        );
        //Add Solutions to Final List
        solutions = solutions.filter((element) => element != "");
        solutionList = solutionList.concat(solutions);
      }

      //Get Synonyms of Current Phrase
      var currentSynonyms = getSynonyms(this.query, currentPhrase);

      //Filter out synonyms whose length dont match solution length
      currentSynonyms = currentSynonyms.filter(
        (current) => current.length == this.query.length
      );

      //Generate all possible indirect anagrams. i.e. anagram of a synonym
      var indirectSolutions = currentSynonyms.map((currentSynonym) =>
        definitions.map((currentDefinition) =>
          currentSynonym != currentDefinition &&
          checkAnagrams(currentSynonym, currentDefinition)
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getIndirectReason(
                  currentCombination[definitionIndex],
                  currentDefinition,
                  currentPhrase,
                  currentSynonym
                ),
                def: currentCombination[definitionIndex],
                int: "anagram-clue",
                percentage: 0,
              }
            : ""
        )
      );
      //Remove Redundant Data
      indirectSolutions = indirectSolutions.map((currentArray) =>
        currentArray.filter((currentArrayElement) => currentArrayElement != "")
      );

      //Add Solution to Solution to Solution List
      indirectSolutions.forEach((indirectSolution) => {
        if (indirectSolution.length > 0) {
          solutionList = solutionList.concat(indirectSolution);
        }
      });
    }

    return solutionList;
  }

  /**
   * getDirectReason() generates reason string for direct anagram clues
   * @param definition Definition in combination
   * @param definitionSyn Synonym of definition
   * @param phrase Anagrammed phrase
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
   * @param definition Definition in combination
   * @param definitionSyn Synonym of definition
   * @param phrase Phrase for which synonym is anagrammed
   * @param phraseSyn Anagrammed phrase
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
