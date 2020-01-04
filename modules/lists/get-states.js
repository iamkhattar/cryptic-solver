var fs = require("fs");

/**
 * getStates() reads the state.txt file in util/lists and returns the contents of it in an array
 */
function getStates() {
  var array = fs
    .readFileSync("util/lists/state.txt")
    .toString()
    .split("\n");

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].replace(/[\r\n]+/gm, "").toLowerCase();
  }

  return array;
}

module.exports = getStates;
