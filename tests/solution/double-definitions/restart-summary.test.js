const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Restart Summary (6) gives RESUME
 */
test("Restart Summary (6) : RESUME", async () => {
  var clue = "Restart Summary";
  var length = 6;

  var expectedSolution = "RESUME";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
