/**
 * getUniquePhrases() returns all unique phrases from possibleCombinations
 * @param possibleCombinations : List of Possible ways a solutions can be formed
 * @return : Unique phrases in possibleCombinations
 */
function getUniquePhrases(possibleCombinations) {
  var sol = new Array();
  possibleCombinations.forEach(element => {
    element.forEach(arrEl => {
      if (!sol.includes(arrEl)) {
        sol.push(arrEl);
      }
    });
  });

  return sol;
}

module.exports = getUniquePhrases;
