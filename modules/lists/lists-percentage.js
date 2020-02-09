const getStates = require("./get-states");
const getCountrys = require("./get-countrys");
const getSigns = require("./get-signs");

/**
 * Checks if the given word is present in any of the lists
 * @param {String} word : word to be checked
 */
function isInLists(word) {
  var country = getCountrys();
  var states = getStates();
  var signs = getSigns();
  word = word.toLowerCase();
  if (country.includes(word) || states.includes(word) || signs.includes(word)) {
    return true;
  }
  return false;
}

module.exports = isInLists;
