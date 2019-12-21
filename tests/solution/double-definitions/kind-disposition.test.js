const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Kind disposition (6) gives NATURE
 */
test("Kind disposition (6) : NATURE", async () => {
  var clue = "Kind disposition";
  var length = 6;

  var expectedSolution = "NATURE";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
