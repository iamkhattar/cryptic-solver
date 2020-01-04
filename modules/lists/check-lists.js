const getStates = require("./get-states");

/**
 *
 * @param phrase : Current Phrase to be checked
 *
 * getSynonymsFromLists() checks whether there are synonyms in any of the lists present in util/list
 */
function getSynonymsFromLists(phrase) {
  if (phrase == "state" || phrase == "states") {
    return getStates();
  }

  return false;
}

module.exports = getSynonymsFromLists;
