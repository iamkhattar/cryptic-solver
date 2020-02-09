/**
 * deleteLastLetter() removes the last letter and returns the word
 * @param word : Word for which last letter has to be removed
 */
function deleteLastLetter(word) {
  word = word.toLowerCase();
  return word.substring(0, word.length - 1);
}
module.exports = deleteLastLetter;
