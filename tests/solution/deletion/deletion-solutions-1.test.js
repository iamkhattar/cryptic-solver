const Query = require("../../../modules/solution/Query");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to check whether Head off champion worker (7) gives ARTISAN
 */
test("Head off champion worker (7): ARTISAN", async () => {
  jest.setTimeout(50000);
  var clue = "Head off champion worker";
  var length = 7;

  var expectedSolution = "ARTISAN";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Suggest not starting in a flabby way (5) gives IMPLY
 */
test("Suggest not starting in a flabby way (5): IMPLY", async () => {
  jest.setTimeout(50000);
  var clue = "Suggest not starting in a flabby way";
  var length = 5;

  var expectedSolution = "IMPLY";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Alter without finishing the last word (4) gives AMEN
 */
test("Alter without finishing the last word (4): AMEN", async () => {
  jest.setTimeout(50000);
  var clue = "Alter without finishing the last word";
  var length = 4;

  var expectedSolution = "AMEN";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Little shark edges away from diver's equipment (3) gives CUB
 */
test("Little shark edges away from diver's equipment (3): CUB", async () => {
  jest.setTimeout(50000);
  var clue = "Little shark edges away from diver's equipment";
  var length = 3;

  var expectedSolution = "CUB";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Almost obstruct an alliance (4) gives BLOC
 */
test("Almost obstruct an alliance (4): BLOC", async () => {
  jest.setTimeout(50000);
  var clue = "Almost obstruct an alliance";
  var length = 4;

  var expectedSolution = "BLOC";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
