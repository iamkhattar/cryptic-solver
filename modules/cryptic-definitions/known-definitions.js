const fs = require("fs");

/**
 * getKnownDefinitions checks if any known definitions are available and returns them
 * @param {String} word : Word to be checked
 */
function getKnownDefinitions(word) {
  const stringBuffer = fs
    .readFileSync("./util/cryptic-definitions/definitions.json")
    .toString();
  const parsedBuffer = JSON.parse(stringBuffer);
  //Filter out definitions
  const obj = parsedBuffer.filter(currentObj => currentObj.word == word);
  //If definition not found return false
  if (obj.length != 1) {
    return false;
  }
  //Return synonyms if definition are found
  return obj[0].synonyms;
}

module.exports = getKnownDefinitions;
