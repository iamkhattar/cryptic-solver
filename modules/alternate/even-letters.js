/**
 * getEvenLetters() combines all even letters in the phrase and returns it
 * @param {String} phrase phrase for which even letters have to be generated
 * @return even letters of phrase
 */
function getEvenLetters(phrase) {
  phrase = phrase.replace(/\s+/g, "");
  phrase = phrase.replace("-", "");
  phrase = phrase.toLowerCase();
  var result = "";
  for (var i = 1; i < phrase.length; i += 2) {
    result += phrase[i];
  }
  return result;
}

module.exports = getEvenLetters;
