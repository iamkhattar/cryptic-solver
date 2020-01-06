const getContainers = require("./get-containers");
const getSynonyms = require("../thesaurus/get-synonyms");

/**
 *
 * @param currentCombination : current combination to be checked
 * @param synonymList : list of synonyms
 * @param firstDefinitions : possible definitions for first phrase
 * @param lastDefinitions : possible definitions for last phrase
 * @param containerIndicator : anagram indicator
 *
 * getContainerSolutions() generates all possible container solutions for a given combination
 */
function getContainerSolutions(
  currentCombination,
  synonymList,
  firstDefinitions,
  lastDefinitions,
  containerIndicator
) {
  var solutionList = new Array();

  //Index of containerIndicator
  var index = currentCombination.indexOf(containerIndicator);

  var length = currentCombination.length;

  //Check for Index out of bounds
  if (index != 0 && index != length - 1) {
    //Check if its only first definition
    if (index != 1) {
      //Direct Container
      var directContainer = getContainers(
        currentCombination[index - 1],
        currentCombination[index + 1]
      );
      firstDefinitions.forEach(currentDefinition => {
        if (directContainer.includes(currentDefinition)) {
          var currentSolution = new Array();
          currentSolution["solution"] = currentDefinition.toUpperCase();
          var reason = getDirectReason(
            currentCombination[0],
            currentDefinition,
            currentCombination[index - 1],
            currentCombination[index + 1],
            containerIndicator
          );
          currentSolution["reason"] = reason;
          currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
          solutionList.push(currentSolution);
        }
        //First Word Synonyms
        var firstWordSynonyms = getSynonyms(
          synonymList,
          currentCombination[index - 1]
        );
        //Second Word Synonyms
        var secondWordSynonyms = getSynonyms(
          synonymList,
          currentCombination[index + 1]
        );

        firstWordSynonyms.forEach(currentFirstWordSynonym => {
          var firstWordSynCont = getContainers(
            currentFirstWordSynonym,
            currentCombination[index + 1]
          );
          if (firstWordSynCont.includes(currentDefinition)) {
            var currentSolution = new Array();
            currentSolution["solution"] = currentDefinition.toUpperCase();
            currentSolution["reason"] =
              "This clue is a Container Clue. The container indicator is " +
              containerIndicator.toUpperCase() +
              ". The definition is " +
              currentCombination[0].toUpperCase() +
              ". " +
              currentDefinition.toUpperCase() +
              " is a synonym of " +
              currentCombination[0].toUpperCase() +
              ". " +
              currentFirstWordSynonym.toUpperCase() +
              " is a synonym of " +
              currentCombination[index - 1].toUpperCase() +
              ". If we put " +
              currentFirstWordSynonym.toUpperCase() +
              " in " +
              currentCombination[index + 1].toUpperCase() +
              " we get " +
              currentDefinition.toUpperCase();
            currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
            solutionList.push(currentSolution);
          }

          secondWordSynonyms.forEach(currentSecondWordSynonym => {
            var firstLength = currentFirstWordSynonym.length;
            var allowedLength = firstDefinitions[0].length - firstLength;

            if (currentSecondWordSynonym.length == allowedLength) {
              var bothSynCont = getContainers(
                currentFirstWordSynonym,
                currentSecondWordSynonym
              );

              if (bothSynCont.includes(currentDefinition)) {
                var currentSolution = new Array();
                currentSolution["solution"] = currentDefinition.toUpperCase();
                currentSolution["reason"] =
                  "This clue is a Container Clue. The container indicator is " +
                  containerIndicator.toUpperCase() +
                  ". The definition is " +
                  currentCombination[0].toUpperCase() +
                  ". " +
                  currentDefinition.toUpperCase() +
                  " is a synonym of " +
                  currentCombination[0].toUpperCase() +
                  ". " +
                  currentFirstWordSynonym.toUpperCase() +
                  " is a synonym of " +
                  currentCombination[index - 1].toUpperCase() +
                  ". " +
                  currentSecondWordSynonym.toUpperCase() +
                  " is a synonym of " +
                  currentCombination[index + 1].toUpperCase() +
                  ". If we put " +
                  currentFirstWordSynonym.toUpperCase() +
                  " in " +
                  currentSecondWordSynonym.toUpperCase() +
                  " we get " +
                  currentDefinition.toUpperCase();
                currentSolution["percentage"] =
                  Math.floor(Math.random() * 100) + 1;
                solutionList.push(currentSolution);
              }
            }
          });
        });

        secondWordSynonyms.forEach(currentSecondWordSynonym => {
          var secondWordSynCont = getContainers(
            currentCombination[index - 1],
            currentSecondWordSynonym
          );

          if (secondWordSynCont.includes(currentDefinition)) {
            var currentSolution = new Array();
            currentSolution["solution"] = currentDefinition.toUpperCase();
            currentSolution["reason"] =
              "This clue is a Container Clue. The container indicator is " +
              containerIndicator.toUpperCase() +
              ". The definition is " +
              currentCombination[0].toUpperCase() +
              ". " +
              currentDefinition.toUpperCase() +
              " is a synonym of " +
              currentCombination[0].toUpperCase() +
              ". " +
              currentSecondWordSynonym.toUpperCase() +
              " is a synonym of " +
              currentCombination[index + 1].toUpperCase() +
              ". If we put " +
              currentCombination[index - 1].toUpperCase() +
              " in " +
              currentSecondWordSynonym.toUpperCase() +
              " we get " +
              currentDefinition.toUpperCase();
            currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
            solutionList.push(currentSolution);
          }
        });
      });
    }

    //Check if its only last definiton
    if (index != length - 2) {
      //Direct Container
      var directContainer = getContainers(
        currentCombination[index - 1],
        currentCombination[index + 1]
      );
      lastDefinitions.forEach(currentDefinition => {
        if (directContainer.includes(currentDefinition)) {
          var currentSolution = new Array();
          currentSolution["solution"] = currentDefinition.toUpperCase();
          var reason = getDirectReason(
            currentCombination[currentCombination.length - 1],
            currentDefinition,
            currentCombination[index - 1],
            currentCombination[index + 1],
            containerIndicator
          );
          currentSolution["reason"] = reason;
          currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
          solutionList.push(currentSolution);
        }
        //First Word Synonyms
        var firstWordSynonyms = getSynonyms(
          synonymList,
          currentCombination[index - 1]
        );
        //Second Word Synonyms
        var secondWordSynonyms = getSynonyms(
          synonymList,
          currentCombination[index + 1]
        );

        firstWordSynonyms.forEach(currentFirstWordSynonym => {
          var firstWordSynCont = getContainers(
            currentFirstWordSynonym,
            currentCombination[index + 1]
          );
          if (firstWordSynCont.includes(currentDefinition)) {
            var currentSolution = new Array();
            currentSolution["solution"] = currentDefinition.toUpperCase();
            currentSolution["reason"] =
              "This clue is a Container Clue. The container indicator is " +
              containerIndicator.toUpperCase() +
              ". The definition is " +
              currentCombination[currentCombination.length - 1].toUpperCase() +
              ". " +
              currentDefinition.toUpperCase() +
              " is a synonym of " +
              currentCombination[currentCombination.length - 1].toUpperCase() +
              ". " +
              currentFirstWordSynonym.toUpperCase() +
              " is a synonym of " +
              currentCombination[index - 1].toUpperCase() +
              ". If we put " +
              currentFirstWordSynonym.toUpperCase() +
              " in " +
              currentCombination[index + 1].toUpperCase() +
              " we get " +
              currentDefinition.toUpperCase();
            currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
            solutionList.push(currentSolution);
          }

          secondWordSynonyms.forEach(currentSecondWordSynonym => {
            var firstLength = currentFirstWordSynonym.length;
            var allowedLength = firstDefinitions[0].length - firstLength;

            if (currentSecondWordSynonym.length == allowedLength) {
              var bothSynCont = getContainers(
                currentFirstWordSynonym,
                currentSecondWordSynonym
              );

              if (bothSynCont.includes(currentDefinition)) {
                var currentSolution = new Array();
                currentSolution["solution"] = currentDefinition.toUpperCase();
                currentSolution["reason"] =
                  "This clue is a Container Clue. The container indicator is " +
                  containerIndicator.toUpperCase() +
                  ". The definition is " +
                  currentCombination[
                    currentCombination.length - 1
                  ].toUpperCase() +
                  ". " +
                  currentDefinition.toUpperCase() +
                  " is a synonym of " +
                  currentCombination[
                    currentCombination.length - 1
                  ].toUpperCase() +
                  ". " +
                  currentFirstWordSynonym.toUpperCase() +
                  " is a synonym of " +
                  currentCombination[index - 1].toUpperCase() +
                  ". " +
                  currentSecondWordSynonym.toUpperCase() +
                  " is a synonym of " +
                  currentCombination[index + 1].toUpperCase() +
                  ". If we put " +
                  currentSecondWordSynonym.toUpperCase() +
                  " in " +
                  currentFirstWordSynonym.toUpperCase() +
                  " we get " +
                  currentDefinition.toUpperCase();
                currentSolution["percentage"] =
                  Math.floor(Math.random() * 100) + 1;
                solutionList.push(currentSolution);
              }
            }
          });
        });

        secondWordSynonyms.forEach(currentSecondWordSynonym => {
          var secondWordSynCont = getContainers(
            currentCombination[index - 1],
            currentSecondWordSynonym
          );

          if (secondWordSynCont.includes(currentDefinition)) {
            var currentSolution = new Array();
            currentSolution["solution"] = currentDefinition.toUpperCase();
            currentSolution["reason"] =
              "This clue is a Container Clue. The container indicator is " +
              containerIndicator.toUpperCase() +
              ". The definition is " +
              currentCombination[currentCombination.length - 1].toUpperCase() +
              ". " +
              currentDefinition.toUpperCase() +
              " is a synonym of " +
              currentCombination[currentCombination.length - 1].toUpperCase() +
              ". " +
              currentSecondWordSynonym.toUpperCase() +
              " is a synonym of " +
              currentCombination[index + 1].toUpperCase() +
              ". If we put " +
              currentCombination[index - 1].toUpperCase() +
              " in " +
              currentSecondWordSynonym.toUpperCase() +
              " we get " +
              currentDefinition.toUpperCase();
            currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
            solutionList.push(currentSolution);
          }
        });
      });
    }
  }
  return solutionList;
}

/**
 *
 * @param definition : Definition in combination
 * @param definitionSyn : Synonym of Definition
 * @param firstWord : First Word
 * @param secondWord : Second word
 * @param indicator : Container Indicator
 */
function getDirectReason(
  definition,
  definitionSyn,
  firstWord,
  secondWord,
  indicator
) {
  return (
    "This clue is a Container Clue. The container indicator is " +
    indicator.toUpperCase() +
    ". The definition is " +
    definition.toUpperCase() +
    ". " +
    definitionSyn.toUpperCase() +
    " is a synonym of " +
    definition.toUpperCase() +
    ". If we put " +
    firstWord.toUpperCase() +
    " in " +
    secondWord.toUpperCase() +
    " we get " +
    definitionSyn.toUpperCase()
  );
}

module.exports = getContainerSolutions;
