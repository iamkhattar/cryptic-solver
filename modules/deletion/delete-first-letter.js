/**
 *
 * @param word : Word for which first letter has to be removed
 *
 * deleteFirstLetter() removes the first letter and returns the word
 */
function deleteFirstLetter(word) {
  word = word.toLowerCase();
  return word.substring(1);
}

module.exports = deleteFirstLetter;
