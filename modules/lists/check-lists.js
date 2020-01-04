const getStates = require("./get-states");
const getCountrys = require("./get-countrys");
const getSigns = require("./get-signs");

/**
 *
 * @param phrase : Current Phrase to be checked
 *
 * getSynonymsFromLists() checks whether there are synonyms in any of the lists present in util/list
 */
function getSynonymsFromLists(phrase) {
  if (phrase == "state" || phrase == "states") {
    return getStates();
  } else if (phrase == "country" || phrase == "countrys") {
    return getCountrys();
  } else if (phrase == "sign" || phrase == "signs") {
    return getSigns();
  }
  return false;
}

module.exports = getSynonymsFromLists;
