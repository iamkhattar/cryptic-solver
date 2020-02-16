const Query = require("../../../modules/solution/Query");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Informer finally reports on the extra cook (5) gives SNEAK
 */
test("Informer finally reports on the extra cook (5) : SNEAK", async () => {
  jest.setTimeout(50000);
  var clue = "Informer finally reports on the extra cook";
  var length = 5;

  var expectedSolution = "SNEAK";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
