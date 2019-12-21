/**
 * @param clue : Clue String
 * @return : Clue string with only A-Z, a-z, -, ' '
 *
 * validateClue() formats a clue and returns the formatted clue
 */

function validateClue(clue) {
  const validatedClue = clue.replace(/[^A-Za-z- ]+/g, "").toLowerCase();
  return validatedClue;
}

module.exports = validateClue;
