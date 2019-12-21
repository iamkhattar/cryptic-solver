const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Twist the breeze (4) gives WIND
 */
test("Twist the breeze (4) : WIND", async () => {
  var clue = "Twist the breeze";
  var length = 4;

  var expectedSolution = "WIND";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
