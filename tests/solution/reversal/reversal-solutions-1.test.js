const Query = require("../../../modules/solution/Query");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Agree with the backward academic fellow (3) gives NOD
 */
test("Agree with the backward academic fellow (3) : NOD", async () => {
  jest.setTimeout(50000);
  var clue = "Agree with the backward academic fellow";
  var length = 3;

  var expectedSolution = "NOD";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Goddess keen to make comeback (4) gives DIVA
 */
test("Agree with the backward academic fellow (3) : DIVA", async () => {
  jest.setTimeout(50000);
  var clue = "Goddess keen to make comeback";
  var length = 4;

  var expectedSolution = "DIVA";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Physician brings fish round (3) gives DOC
 */
test("Physician brings fish round (3) : DOC", async () => {
  jest.setTimeout(50000);
  var clue = "Physician brings fish round";
  var length = 3;

  var expectedSolution = "DOC";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Containers for drinks taken back to bar (4) gives POTS
 */
test("Containers for drinks taken back to bar (4) : POTS", async () => {
  jest.setTimeout(50000);
  var clue = "Containers for drinks taken back to bar";
  var length = 4;

  var expectedSolution = "POTS";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Tender god of love turns up (4) gives SORE
 */
test("Tender god of love turns up (4) : SORE", async () => {
  jest.setTimeout(50000);
  var clue = "Tender god of love turns up";
  var length = 4;

  var expectedSolution = "SORE";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Sketcher went up to get reward (6) gives DRAWER
 */
test("Sketcher went up to get reward (6) : DRAWER", async () => {
  jest.setTimeout(50000);
  var clue = "Sketcher went up to get reward";
  var length = 6;

  var expectedSolution = "DRAWER";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Returned beer fit for a king (5) gives REGAL
 */
test("Returned beer fit for a king (5) : REGAL", async () => {
  jest.setTimeout(50000);
  var clue = "Returned beer fit for a king";
  var length = 5;

  var expectedSolution = "REGAL";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
