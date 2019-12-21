/**
 *
 * @param  solutionList : List of Solutions
 * @param  expectedSolution : Solution to be Checked
 *
 * checkIfSolutionContains() checks whether the solutionList contains expectedSolution
 */
function checkIfSolutionListContains(solutionList, expectedSolution) {
  var flag = false;
  solutionList.forEach(element => {
    if (element.solution == expectedSolution) {
      flag = true;
    }
  });

  return flag;
}

module.exports = checkIfSolutionListContains;
