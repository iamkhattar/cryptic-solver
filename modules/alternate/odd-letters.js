/**
 * getOddLetters() combines all odd letters in the phrase and returns it
 * @param {String} phrase : phrase for which odd letters have to be generated
 */
function getOddLetters(phrase) {
  phrase = phrase.replace(/\s+/g, "");
  phrase = phrase.toLowerCase();
  var result = "";
  for (var i = 0; i < phrase.length; i += 2) {
    result += phrase[i];
  }
  return result;
}

module.exports = getOddLetters;
