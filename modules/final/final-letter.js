/**
 *
 * @param word : word for which final letter has to be generated
 * @return : final letter
 *
 * getFinalLetter() returns the last letter of the given word
 */
function getFinalLetter(word) {
  return word[word.length - 1].toLowerCase();
}

module.exports = getFinalLetter;
