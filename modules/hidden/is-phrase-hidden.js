/**
 * isPhraseHidden() checks whether a given definition is hidden in a phrase
 * @param {String} phrase : Phrase where definition is going to be searched
 * @param {String} definition : Definition to be checked
 */
function isPhraseHidden(phrase, definition) {
  phrase = phrase.replace(/\s/g, "");
  return phrase.includes(definition);
}

module.exports = isPhraseHidden;
