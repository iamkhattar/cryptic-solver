/**
 * getSynonyms() returns all synonyms for a given word
 * @param {Query} query Query Class
 * @param {String} word Word for which synonyms have to be found
 */
function getSynonyms(query, word) {
  var solution = [];
  for (const currentSynonym of query.synonymList) {
    if (currentSynonym["word"] == word) {
      solution = currentSynonym["synonyms"];
    }
  }
  return solution;
}
module.exports = getSynonyms;
