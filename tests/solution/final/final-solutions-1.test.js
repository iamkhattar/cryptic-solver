const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Informer finally reports on the extra cook (5) gives SNEAK
 */
test("Informer finally reports on the extra cook (5) : SNEAK", async () => {
  var clue = "Informer finally reports on the extra cook";
  var length = 5;

  var expectedSolution = "SNEAK";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
