const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Report Account (4) gives NEWS
 */
test("Report Account (4) : NEWS", async () => {
  var clue = "Report Account";
  var length = 4;

  var expectedSolution = "NEWS";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
