const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Metal guide (4) gives LEAD
 */
test("Metal guide (4) : LEAD", async () => {
  var clue = "Metal guide";
  var length = 4;

  var expectedSolution = "LEAD";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
