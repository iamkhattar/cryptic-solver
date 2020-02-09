const splitWords = require("../format/split-words");

/**
 * getInitialLetters() combines all initial letters of a phrase and returns it
 * @param phrase : phrase for which initial letters have to be generated
 * @return : all initial letters of the phrase combined
 */
function getInitialLetters(phrase) {
  phrase = phrase.toLowerCase();
  var words = splitWords(phrase);
  var result = "";
  words.forEach(currentWord => {
    result += currentWord[0];
  });
  return result;
}

module.exports = getInitialLetters;
