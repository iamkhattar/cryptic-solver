const deleteFirstLetter = require("./delete-first-letter");
const deleteLastLetter = require("./delete-last-letter");
const deleteFirstAndLastLetter = require("./delete-first-and-last-letter");
const deleteMiddleLetters = require("./delete-middle-letters");

/**
 * getPossibleDeletions() generates all possible deletions for a given word and returns it
 * @param {String} word : word for which deletions have to be generated
 */
function getPossibleDeletions(word) {
  var solutionArray = new Array();
  solutionArray.push(deleteFirstLetter(word));
  solutionArray.push(deleteLastLetter(word));
  solutionArray.push(deleteFirstAndLastLetter(word));
  solutionArray.push(deleteMiddleLetters(word));
  return solutionArray;
}

module.exports = getPossibleDeletions;
