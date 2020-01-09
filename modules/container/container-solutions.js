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
            var reason = getFirstSynReason(
              currentCombination[0],
              currentDefinition,
              currentCombination[index - 1],
              currentFirstWordSynonym,
              currentCombination[index + 1],
              containerIndicator
            );
            currentSolution["reason"] = reason;
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
                var reason = getBothSynReason(
                  currentCombination[0],
                  currentDefinition,
                  currentCombination[index - 1],
                  currentFirstWordSynonym,
                  currentCombination[index + 1],
                  currentSecondWordSynonym,
                  containerIndicator
                );
                currentSolution["reason"] = reason;
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
            var reason = getSecondSynReason(
              currentCombination[0],
              currentDefinition,
              currentCombination[index - 1],
              currentCombination[index + 1],
              currentSecondWordSynonym,
              containerIndicator
            );
            currentSolution["reason"] = reason;
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
            var reason = getFirstSynReason(
              currentCombination[currentCombination.length - 1],
              currentDefinition,
              currentCombination[index - 1],
              currentFirstWordSynonym,
              currentCombination[index + 1],
              containerIndicator
            );
            currentSolution["reason"] = reason;
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
                var reason = getBothSynReason(
                  currentCombination[currentCombination.length - 1],
                  currentDefinition,
                  currentCombination[index - 1],
                  currentFirstWordSynonym,
                  currentCombination[index + 1],
                  currentSecondWordSynonym,
                  containerIndicator
                );
                currentSolution["reason"] = reason;
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
            var reason = getSecondSynReason(
              currentCombination[currentCombination.length - 1],
              currentDefinition,
              currentCombination[index - 1],
              currentCombination[index + 1],
              currentSecondWordSynonym,
              containerIndicator
            );
            currentSolution["reason"] = reason;
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
 *
 * getDirectReason() generates the reason if there is a direct container
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

/**
 *
 * @param definition : Definition in combination
 * @param definitionSyn : Synonym of Definition
 * @param firstWord : First Word
 * @param firstWordSyn : Synonym of First word
 * @param secondWord : Second word
 * @param indicator : Container Indicator
 *
 * getFirstSynReason() generates the reason if there is a container with synonym of first word
 */
function getFirstSynReason(
  definiton,
  definitionSyn,
  firstWord,
  firstWordSyn,
  secondWord,
  indicator
) {
  return (
    "This clue is a Container Clue. The container indicator is " +
    indicator.toUpperCase() +
    ". The definition is " +
    definiton.toUpperCase() +
    ". " +
    definitionSyn.toUpperCase() +
    " is a synonym of " +
    definiton.toUpperCase() +
    ". " +
    firstWordSyn.toUpperCase() +
    " is a synonym of " +
    firstWord.toUpperCase() +
    ". If we put " +
    firstWordSyn.toUpperCase() +
    " in " +
    secondWord.toUpperCase() +
    " we get " +
    definitionSyn.toUpperCase()
  );
}

/**
 *
 * @param definition : Definition in combination
 * @param definitionSyn : Synonym of Definition
 * @param firstWord : First Word
 * @param secondWord : Second word
 * @param secondWordSyn : Synonym of Second Word
 * @param indicator : Container Indicator
 *
 * getSecondSynReason() generates the reason if there is a container with synonym of second word
 */
function getSecondSynReason(
  definition,
  definitionSyn,
  firstWord,
  secondWord,
  secondWordSyn,
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
    ". " +
    secondWordSyn.toUpperCase() +
    " is a synonym of " +
    secondWord.toUpperCase() +
    ". If we put " +
    firstWord.toUpperCase() +
    " in " +
    secondWordSyn.toUpperCase() +
    " we get " +
    definitionSyn.toUpperCase()
  );
}

/**
 *
 * @param definition : Definition in combination
 * @param definitionSyn : Synonym of Definition
 * @param firstWord : First Word
 * @param firstWordSyn : Synonym of First Word
 * @param secondWord : Second word
 * @param secondWordSyn : Synonym of Second Word
 * @param indicator : Container Indicator
 *
 * getBothSynReason() generates the reason when there is a container with synonyms of both words
 */
function getBothSynReason(
  definition,
  definitionSyn,
  firstWord,
  firstWordSyn,
  secondWord,
  secondWordSyn,
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
    ". " +
    firstWordSyn.toUpperCase() +
    " is a synonym of " +
    firstWord.toUpperCase() +
    ". " +
    secondWordSyn.toUpperCase() +
    " is a synonym of " +
    secondWord.toUpperCase() +
    ". If we put " +
    firstWordSyn.toUpperCase() +
    " in " +
    secondWordSyn.toUpperCase() +
    " we get " +
    definitionSyn.toUpperCase()
  );
}

module.exports = getContainerSolutions;
