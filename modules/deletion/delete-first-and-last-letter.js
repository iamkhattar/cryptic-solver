/**
 *
 * @param word : Word for which first and last letter has to be removed
 *
 * deleteFirstAndLastLetter() removes the first and last letter and returns the word
 */
function deleteFirstAndLastLetter(word) {
  word = word.toLowerCase();
  return word.substring(1, word.length - 1);
}

module.exports = deleteFirstAndLastLetter;
