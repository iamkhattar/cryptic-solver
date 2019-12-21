const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Fruit goes out of fashion (4) gives DATE
 */
test("Fruit goes out of fashion (4) : DATE", async () => {
  var clue = "Fruit goes out of fashion";
  var length = 4;

  var expectedSolution = "DATE";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
