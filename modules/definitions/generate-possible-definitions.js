/**
 * @param word : Word for which possible definitions have to be generated
 * @param definitionLength : Length of definitions
 * @param synonymList : List of Synonyms
 *
 * generatePossibleDefinitions() genereates all possible definitions of a given word considering its length constraint
 */

function generatePossibleDefinitions(word, definitionLength, synonymList) {
  var definitions = new Array();
  if (word.length == definitionLength) {
    definitions.push(word);
  }
  for (const currentSynonym of synonymList) {
    if (currentSynonym["word"] == word) {
      var possibleSynonyms = currentSynonym["synonyms"];
      possibleSynonyms.forEach(currentSynonym => {
        if (currentSynonym.length == definitionLength) {
          definitions.push(currentSynonym);
        }
      });
    }
  }

  return definitions;
}

module.exports = generatePossibleDefinitions;
