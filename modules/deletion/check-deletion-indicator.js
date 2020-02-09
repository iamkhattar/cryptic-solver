var fs = require("fs");

/**
 * checkIfCombinationHasDeletionIndicator() checks if the combination has a deletion indicator and returns it else returns false
 * @param currentCombination : Combination to be checked
 * @return flag : if there is an deletion indicator flag is the idicator else flag is false
 */
function checkIfCombinationHasDeletionIndicator(currentCombination) {
  var flag = false;
  currentCombination.forEach(currentPhrase => {
    if (isPhraseIndicator(currentPhrase)) {
      flag = currentPhrase;
    }
  });
  return flag;
}

/**
 * isPhraseIndicator() is a helper function to check whether a given phrase is an deletion indicator or not
 * @param phrase : current phrase to be checked
 * @return : true if phrase is indicator, false if not
 */
function isPhraseIndicator(phrase) {
  var array = fs
    .readFileSync("util/indicators/deletion-indicators.txt")
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

module.exports = checkIfCombinationHasDeletionIndicator;
