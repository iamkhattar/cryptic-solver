const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Spy found (5) gives PLANT
 */
test("Spy found (5) : PLANT", async () => {
  var clue = "Spy found";
  var length = 5;

  var expectedSolution = "PLANT";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
