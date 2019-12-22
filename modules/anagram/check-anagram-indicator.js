var fs = require("fs");

/**
 *
 * @param currentCombination : Combination to be checked
 * @return flag : if there is an anagram indicator flag is the idicator else flag is false
 *
 * checkIfCombinationHasAnagramIndicator() checks if the combination ahs an anagram indicator and returns it else returns false
 */
function checkIfCombinationHasAnagramIndicator(currentCombination) {
  var flag = false;
  currentCombination.forEach(currentPhrase => {
    if (isPhraseIndicator(currentPhrase)) {
      flag = currentPhrase;
    }
  });
  return flag;
}

/**
 *
 * @param phrase : current phrase to be checked
 * @return : true if phrase is indicator, false if not
 *
 * isPhraseIndicator() is a helper function to check whether a given phrase is an anagram indicator or not
 */
function isPhraseIndicator(phrase) {
  var array = fs
    .readFileSync("util/indicators/anagram-indicators.txt")
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

module.exports = checkIfCombinationHasAnagramIndicator;
