/**
 * reversePhrase() reverses a phrase ignoring its spaces and returns it
 * @param {String} phrase : Phrase to be reversed
 */
function reversePhrase(phrase) {
  phrase = phrase.toLowerCase();
  var reversedPhrase = "";
  for (var i = phrase.length - 1; i >= 0; i--) {
    if (phrase[i] != " ") {
      reversedPhrase += phrase[i];
    }
  }
  return reversedPhrase;
}

module.exports = reversePhrase;
