/**
 * deleteFirstLetter() removes the first letter and returns the word
 * @param word : Word for which first letter has to be removed
 */
function deleteFirstLetter(word) {
  word = word.toLowerCase();
  return word.substring(1);
}

module.exports = deleteFirstLetter;
