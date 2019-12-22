const checkAnagram = require("./check-anagram");
const getSynonyms = require("../thesaurus/get-synonyms");

function getAnagramSolution(
  currentCombination,
  synonymList,
  firstDefinitions,
  lastDefinitions,
  anagramIndicator
) {
  var solutionList = new Array();
  //First Definitions
  for (var i = 1; i < currentCombination.length; i++) {
    var currentPhrase = currentCombination[i];
    firstDefinitions.forEach(currentDefinition => {
      //Direct Anagram
      if (checkAnagram(currentPhrase, currentDefinition)) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] = "Anagram";
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
        solutionList.push(currentSolution);
      }

      //Indirect Anagram
      var currentSynonyms = getSynonyms(synonymList, currentPhrase);
      currentSynonyms.forEach(currentSynonym => {
        if (checkAnagram(currentSynonym, currentDefinition)) {
          var currentSolution = new Array();
          currentSolution["solution"] = currentDefinition.toUpperCase();
          currentSolution["reason"] = "Anagram";
          currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
          solutionList.push(currentSolution);
        }
      });
    });
  }

  //Last Definitions
  for (var i = 0; i < currentCombination.length - 1; i++) {
    var currentPhrase = currentCombination[i];
    lastDefinitions.forEach(currentDefinition => {
      //Direct Anagram
      if (checkAnagram(currentPhrase, currentDefinition)) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] = "Anagram";
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
        solutionList.push(currentSolution);
      }
      //Indirect Anagram
      var currentSynonyms = getSynonyms(synonymList, currentPhrase);
      currentSynonyms.forEach(currentSynonym => {
        if (checkAnagram(currentSynonym, currentDefinition)) {
          var currentSolution = new Array();
          currentSolution["solution"] = currentDefinition.toUpperCase();
          currentSolution["reason"] = "Anagram";
          currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
          solutionList.push(currentSolution);
        }
      });
    });
  }

  return solutionList;
}

module.exports = getAnagramSolution;
