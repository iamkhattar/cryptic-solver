const splitWords = require("../format/split-words");
const getFinalLetter = require("./final-letter");

/**
 *
 * @param phrase : phrase for which final letters have to be generated
 * @return : all final letters of the phrase combined
 *
 * getFinalLetters() combines all final letters of a phrase and returns it
 */
function getFinalLetters(phrase) {
  phrase = phrase.toLowerCase();
  var words = splitWords(phrase);
  var result = "";
  words.forEach(currentWord => {
    result += getFinalLetter(currentWord);
  });
  return result;
}

module.exports = getFinalLetters;
