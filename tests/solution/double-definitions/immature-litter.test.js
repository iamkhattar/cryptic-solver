const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Immature litter (5) gives YOUNG
 */
test("Immature litter (5) : YOUNG", async () => {
  var clue = "Immature litter";
  var length = 5;

  var expectedSolution = "YOUNG";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
