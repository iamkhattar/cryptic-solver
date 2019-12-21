const doesSolutionExist = require("../../modules/solution/does-solution-exist");

/**
 * Test to check if the function returns true when it needs to
 */
test("True Test", () => {
  var solutionList = new Array();
  var currentSolution = new Array();

  currentSolution["solution"] = "NEWS";
  currentSolution["reason"] = "Double Definition";

  solutionList.push(currentSolution);

  expect(doesSolutionExist(solutionList, currentSolution)).toBeTruthy();
});

/**
 * Test to check if the function returns false when it needs to
 */
test("False Test", () => {
  var solutionList = new Array();
  var solution1 = new Array();
  solution1["solution"] = "TEST";
  solution1["reason"] = "Test";
  solutionList.push(solution1);

  var currentSolution = new Array();
  currentSolution["solution"] = "NEWS";
  currentSolution["reason"] = "Double Definition";

  expect(doesSolutionExist(solutionList, currentSolution)).toBeFalsy();
});
