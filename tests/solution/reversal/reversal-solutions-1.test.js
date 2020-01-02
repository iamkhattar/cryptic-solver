const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Agree with the backward academic fellow (3) gives NOD
 */
test("Agree with the backward academic fellow (3) : NOD", async () => {
  var clue = "Agree with the backward academic fellow";
  var length = 3;

  var expectedSolution = "NOD";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Goddess keen to make comeback (4) gives DIVA
 */
test("Agree with the backward academic fellow (3) : DIVA", async () => {
  var clue = "Goddess keen to make comeback";
  var length = 4;

  var expectedSolution = "DIVA";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Physician brings fish round (3) gives DOC
 */
test("Physician brings fish round (3) : DOC", async () => {
  var clue = "Physician brings fish round";
  var length = 3;

  var expectedSolution = "DOC";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Containers for drinks taken back to bar (4) gives POTS
 */
test("Containers for drinks taken back to bar (4) : POTS", async () => {
  var clue = "Containers for drinks taken back to bar";
  var length = 4;

  var expectedSolution = "POTS";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Tender god of love turns up (4) gives SORE
 */
test("Tender god of love turns up (4) : SORE", async () => {
  var clue = "Tender god of love turns up";
  var length = 4;

  var expectedSolution = "SORE";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Sketcher went up to get reward (6) gives DRAWER
 */
test("Sketcher went up to get reward (6) : DRAWER", async () => {
  var clue = "Sketcher went up to get reward";
  var length = 6;

  var expectedSolution = "DRAWER";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Returned beer fit for a king (5) gives REGAL
 */
test("Returned beer fit for a king (5) : REGAL", async () => {
  var clue = "Returned beer fit for a king";
  var length = 5;

  var expectedSolution = "REGAL";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
