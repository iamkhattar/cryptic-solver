const checkAnagramIndicator = require("../anagram/check-anagram-indicator");
const checkContainerIndicator = require("../container/check-container-indicator");
const checkDeletionIndicator = require("../deletion/check-deletion-indicator");
const checkFinalIndicator = require("../final/check-final-indicator");
const checkHiddenIndicator = require("../hidden/check-hidden-indicator");
const checkInitialIndicator = require("../initial/check-initial-indicator");
const checkReversalIndicator = require("../reversal/check-reversal-indicator");

function checkIfIndicatorsOnIndex(indicators, index) {
  var bool = false;
  indicators.forEach((currentIndicator) => {
    if (currentIndicator.index == index) {
      bool = true;
    }
  });
  return bool;
}

/**
 * checkIfCombinationHasMultipleIndicators checks whether the given combination has multiple indicators
 * @param {Array} combination Current Combination
 */
function checkIfCombinationHasMultipleIndicators(combination) {
  var indicators = [];

  //Anagram Indicator Check
  const anagramIndicator = checkAnagramIndicator(combination);
  if (anagramIndicator) {
    var index = combination.indexOf(anagramIndicator);
    var currentIndicator = { indicator: anagramIndicator, type: "anagram" };
    if (checkIfIndicatorsOnIndex(indicators, index) == true) {
      indicators.map((ind) => {
        if (ind.index == index) {
          ind.indicators.push(currentIndicator);
        }
      });
    } else {
      indicators.push({ index: index, indicators: [currentIndicator] });
    }
  }

  //Container Indicator Check
  const containerIndicator = checkContainerIndicator(combination);
  if (containerIndicator) {
    var index = combination.indexOf(containerIndicator);
    var currentIndicator = { indicator: containerIndicator, type: "container" };
    if (checkIfIndicatorsOnIndex(indicators, index) == true) {
      indicators.map((ind) => {
        if (ind.index == index) {
          ind.indicators.push(currentIndicator);
        }
      });
    } else {
      indicators.push({ index: index, indicators: [currentIndicator] });
    }
  }

  //Hidden Word Indicator Check
  const hiddenIndicator = checkHiddenIndicator(combination);
  if (hiddenIndicator) {
    var index = combination.indexOf(hiddenIndicator);
    var currentIndicator = { indicator: hiddenIndicator, type: "hidden" };
    if (checkIfIndicatorsOnIndex(indicators, index) == true) {
      indicators.map((ind) => {
        if (ind.index == index) {
          ind.indicators.push(currentIndicator);
        }
      });
    } else {
      indicators.push({ index: index, indicators: [currentIndicator] });
    }
  }

  //Deletion Indicator Check
  const deletionIndicator = checkDeletionIndicator(combination);
  if (deletionIndicator) {
    var index = combination.indexOf(deletionIndicator);
    var currentIndicator = { indicator: deletionIndicator, type: "deletion" };
    if (checkIfIndicatorsOnIndex(indicators, index) == true) {
      indicators.map((ind) => {
        if (ind.index == index) {
          ind.indicators.push(currentIndicator);
        }
      });
    } else {
      indicators.push({ index: index, indicators: [currentIndicator] });
    }
  }

  //Final Indicator Check
  const finalIndicator = checkFinalIndicator(combination);
  if (finalIndicator) {
    var index = combination.indexOf(finalIndicator);
    var currentIndicator = { indicator: finalIndicator, type: "final" };
    if (checkIfIndicatorsOnIndex(indicators, index) == true) {
      indicators.map((ind) => {
        if (ind.index == index) {
          ind.indicators.push(currentIndicator);
        }
      });
    } else {
      indicators.push({ index: index, indicators: [currentIndicator] });
    }
  }

  //Intitial Indicator Check
  const initialIndicator = checkInitialIndicator(combination);
  if (initialIndicator) {
    var index = combination.indexOf(initialIndicator);
    var currentIndicator = { indicator: initialIndicator, type: "initial" };
    if (checkIfIndicatorsOnIndex(indicators, index) == true) {
      indicators.map((ind) => {
        if (ind.index == index) {
          ind.indicators.push(currentIndicator);
        }
      });
    } else {
      indicators.push({ index: index, indicators: [currentIndicator] });
    }
  }

  //Reversal Indicator Check
  const reversalIndicator = checkReversalIndicator(combination);
  if (reversalIndicator) {
    var index = combination.indexOf(reversalIndicator);
    var currentIndicator = { indicator: reversalIndicator, type: "reversal" };
    if (checkIfIndicatorsOnIndex(indicators, index) == true) {
      indicators.map((ind) => {
        if (ind.index == index) {
          ind.indicators.push(currentIndicator);
        }
      });
    } else {
      indicators.push({ index: index, indicators: [currentIndicator] });
    }
  }

  return indicators;
}

module.exports = checkIfCombinationHasMultipleIndicators;
