var fs = require("fs");
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
