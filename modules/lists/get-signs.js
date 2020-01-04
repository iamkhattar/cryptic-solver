var fs = require("fs");

/**
 * getSigns() reads the sign.txt file in util/lists and returns the contents of it in an array
 */
function getSigns() {
  var array = fs
    .readFileSync("util/lists/sign.txt")
    .toString()
    .split("\n");

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].replace(/[\r\n]+/gm, "").toLowerCase();
  }

  return array;
}

module.exports = getSigns;
