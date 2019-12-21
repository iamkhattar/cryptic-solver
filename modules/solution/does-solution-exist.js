function doesSolutionExist(solutionList, currentSolution) {
  var flag = false;
  solutionList.forEach(element => {
    if (
      element.solution.toUpperCase() == currentSolution.solution.toUpperCase()
    ) {
      flag = true;
    }
  });
  return flag;
}

module.exports = doesSolutionExist;
