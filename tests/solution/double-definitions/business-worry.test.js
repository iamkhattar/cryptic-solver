const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Business worry (7) gives CONCERN
 */
test("Business worry (7): CONCERN", async () => {
  var clue = "Business worry";
  var length = 7;

  var expectedSolution = "CONCERN";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
