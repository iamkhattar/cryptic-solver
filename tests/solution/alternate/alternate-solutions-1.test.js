const Query = require("../../../modules/solution/Query");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Type of lettuce cooks regularly discarded (3) gives COS
 */
test("Type of lettuce cooks regularly discarded (3): COS", async () => {
  jest.setTimeout(50000);
  var clue = "Type of lettuce cooks regularly discarded";
  var length = 3;

  var expectedSolution = "COS";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Young person regularly reading The Beano (4) gives TEEN
 */
test("Young person regularly reading The Beano (4): TEEN", async () => {
  jest.setTimeout(50000);
  var clue = "Young person regularly reading The Beano";
  var length = 4;

  var expectedSolution = "TEEN";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Perhaps the elder Turgenev gets noticed periodically? (4) gives TREE
 */
test("Perhaps the elder Turgenev gets noticed periodically? (4): TREE", async () => {
  jest.setTimeout(50000);
  var clue = "Perhaps the elder Turgenev gets noticed periodically?";
  var length = 4;

  var expectedSolution = "TREE";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Bionic man ignoring the odds is old American (4) gives INCA
 */
test("Bionic man ignoring the odds is old American (4): INCA", async () => {
  jest.setTimeout(50000);
  var clue = "Bionic man ignoring the odds is old American";
  var length = 4;

  var expectedSolution = "INCA";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Harmony, say, in act evens out (4) gives SYNC
 */
test("Harmony, say, in act evens out (4): SYNC", async () => {
  jest.setTimeout(50000);
  var clue = "Harmony, say, in act evens out";
  var length = 4;

  var expectedSolution = "SYNC";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
