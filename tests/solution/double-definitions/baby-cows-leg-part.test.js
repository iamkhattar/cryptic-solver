const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Baby cow's leg part (4) gives CALF
 */
test("Baby cow's leg part (4): CALF", async () => {
  var clue = "Baby cow's leg part";
  var length = 4;

  var expectedSolution = "CALF";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
