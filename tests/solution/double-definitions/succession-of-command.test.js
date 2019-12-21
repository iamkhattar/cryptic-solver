const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Succession of command (5) gives ORDER
 */
test("Succession of command (5) : ORDER", async () => {
  var clue = "Succession of command";
  var length = 5;

  var expectedSolution = "ORDER";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
