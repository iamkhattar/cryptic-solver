const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Flee the race (3) gives RUN
 */
test("Flee the race (3) : RUN", async () => {
  var clue = "Flee the race";
  var length = 3;

  var expectedSolution = "RUN";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
