var fs = require("fs");

/**
 * checkIfCombinationHasAnagramIndicator() checks if the combination has an final letter indicator and returns it else returns false
 * @param {Array} currentCombination : Combination to be checked
 * @return flag : if there is a final letter indicator flag is the idicator else flag is false
 *
 */
function checkIfCombinationHasFinalIndicator(currentCombination) {
  var flag = false;
  currentCombination.forEach(currentPhrase => {
    if (isPhraseIndicator(currentPhrase)) {
      flag = currentPhrase;
    }
  });
  return flag;
}

/**
 * isPhraseIndicator() is a helper function to check whether a given phrase is an final indicator or not
 * @param {String} phrase : current phrase to be checked
 * @return : true if phrase is indicator, false if not
 *
 */
function isPhraseIndicator(phrase) {
  var array = fs
    .readFileSync("util/indicators/final-indicators.txt")
    .toString()
    .split("\n");

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].replace(/[\r\n]+/gm, "");
  }

  if (array.includes(phrase)) {
    return true;
  }
  return false;
}

module.exports = checkIfCombinationHasFinalIndicator;
