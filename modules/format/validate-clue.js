/**
 * validateClue() formats a clue and returns the formatted clue
 * @param {String} clue : Clue String
 * @return : Clue string with only A-Z, a-z, -, ' '
 */

function validateClue(clue) {
  const validatedClue = clue.replace(/[^A-Za-z- ]+/g, "").toLowerCase();
  return validatedClue;
}

module.exports = validateClue;
