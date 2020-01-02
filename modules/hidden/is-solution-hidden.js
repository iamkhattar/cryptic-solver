/**
 *
 * @param phrase : Phrase to be checked
 * @param solution : Solution to be checked
 *
 * isSolutionHidden() checks wheteher solution is hidden in phrase
 */
function isSolutionHidden(phrase, solution) {
  phrase = phrase.replace(/\s/g, "");
  return phrase.includes(solution);
}

module.exports = isSolutionHidden;
