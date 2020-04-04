/**
 * getPossibleCombinations() generates all possible combinations of a given clue and returns it
 * @param {Array} words Clue Split up using " "
 * @param {String} clue Clue itself
 * @return all possible combinations of the given clue
 */
function getPossibleCombinations(words, clue) {
  var solutionArr = new Array();
  var combinations = combinationRecursionHelper(words, [clue]);
  for (const iterator of combinations) {
    solutionArr.push(iterator);
  }

  return solutionArr.splice(1);
}

/**
 * combinationRecursionHelper() is a helper function for getPossibleCombinations()
 * @param {Array} array words array
 * @param {Array} result result array
 * @param {Array} start recursion start
 */
function combinationRecursionHelper(array, result, start = []) {
  for (let i = 1; i < array.length; i++) {
    let rest = array.slice();
    let head = rest.splice(0, i).join(" ");
    result.push([...start, head, rest.join(" ")]);
    combinationRecursionHelper(rest, result, [...start, head]);
  }
  return result;
}

module.exports = getPossibleCombinations;
