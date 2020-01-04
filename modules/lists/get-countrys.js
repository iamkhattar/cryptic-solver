var fs = require("fs");

/**
 * getCountrys() reads the country.txt file in util/lists and returns the contents of it in an array
 */
function getCountrys() {
  var array = fs
    .readFileSync("util/lists/country.txt")
    .toString()
    .split("\n");

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].replace(/[\r\n]+/gm, "").toLowerCase();
  }

  return array;
}

module.exports = getCountrys;
