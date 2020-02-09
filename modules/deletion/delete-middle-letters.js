/**
 * deleteMiddleLetters() removes the middle letters and returns the word
 * @param word : Word for which middle letters has to be removed
 */
function deleteMiddleLetters(word) {
  word = word.toLowerCase();
  var result = "";
  result += word[0];
  result += word[word.length - 1];
  return result;
}

module.exports = deleteMiddleLetters;
