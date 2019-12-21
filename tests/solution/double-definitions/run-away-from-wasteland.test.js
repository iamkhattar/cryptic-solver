const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Run away from wasteland (6) gives DESERT
 */
test("Run away from wasteland (6) : DESERT", async () => {
  var clue = "Run away from wasteland";
  var length = 6;

  var expectedSolution = "DESERT";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
