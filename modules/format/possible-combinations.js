/**
 *
 * @param words : Clue Split up using " "
 * @param clue : Clue itself
 * @return : all possible combinations of the given clue
 *
 * getPossibleCombinations() generates all possible combinations of a given clue and returns it
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
 *
 * @param array : words array
 * @param result : result array
 * @param start : recursion start
 *
 * combinationRecursionHelper() is a helper function for getPossibleCombinations()
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
