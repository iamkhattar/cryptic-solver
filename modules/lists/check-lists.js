const getStates = require("./get-states");

function getSynonymsFromLists(phrase) {
  if (phrase == "state" || phrase == "states") {
    return getStates();
  }

  return false;
}

module.exports = getSynonymsFromLists;
