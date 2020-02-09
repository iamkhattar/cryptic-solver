/**
 * getFinalLetter() returns the last letter of the given word
 * @param {String} word : word for which final letter has to be generated
 * @return : final letter
 */
function getFinalLetter(word) {
  return word[word.length - 1].toLowerCase();
}

module.exports = getFinalLetter;
