const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Spoil a short month (3) gives MAR
 */
test("Spoil a short month (3) : MAR", async () => {
  var clue = "Spoil a short month";
  var length = 3;

  var expectedSolution = "MAR";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
