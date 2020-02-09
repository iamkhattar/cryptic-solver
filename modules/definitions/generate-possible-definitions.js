/**
 * generatePossibleDefinitions() genereates all possible definitions of a given word considering its length constraint
 * @param {Query} query : Query Class
 * @param {String} word : Word for which definitions have to be generated
 * @return {Array} : Array of possible definitions
 */
function generatePossibleDefinitions(query, word) {
  var definitions = new Array();

  //If the length of the word itself is the length of the solution then it is one of the possible definitions
  if (word.length == query.length) {
    definitions.push(word);
  }

  //Get All Possible Synonyms for the given word
  var currentSynonyms = query.synonymList.filter(
    element => element.word == word
  )[0];

  //Remove Synonyms greater than the solution length
  definitions = currentSynonyms.synonyms.filter(
    element => element.length == query.length
  );

  return definitions;
}

module.exports = generatePossibleDefinitions;
