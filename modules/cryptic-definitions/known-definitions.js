const fs = require("fs");

/**
 * @param word : Word to be checked
 *
 * getKnownDefinitions checks if any known definitions are available and returns them
 */
function getKnownDefinitions(word) {
  const stringBuffer = fs
    .readFileSync("./util/cryptic-definitions/definitions.json")
    .toString();
  const parsedBuffer = JSON.parse(stringBuffer);
  const obj = parsedBuffer.filter(currentObj => currentObj.word == word);
  if (obj.length != 1) {
    return false;
  }
  return obj[0].synonyms;
}

module.exports = getKnownDefinitions;
