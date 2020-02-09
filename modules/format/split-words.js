/**
 * splitClue() splits the clue using " " and returns an array of tokens
 * @param {String} clue : Clue String
 * @return : Clue split up in an array
 */
function splitClue(clue) {
  var arr = clue.split(" ").map(item => item.trim());
  var ret = new Array();
  arr.forEach(element => {
    if (element !== "") {
      ret.push(element);
    }
  });
  return ret;
}

module.exports = splitClue;
