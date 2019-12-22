function getSynonyms(synonymList, word) {
  var solution;
  for (const currentSynonym of synonymList) {
    if (currentSynonym["word"] == word) {
      solution = currentSynonym["synonyms"];
    }
  }
  return solution;
}
module.exports = getSynonyms;
