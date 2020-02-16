const Query = require("../../../modules/solution/Query");
const checkIfSolutionListContains = require("../solution-contains");
/**
 * Test to Check whether Damaged peach inexpensive (5) gives CHEAP
 */
test("Damaged peach inexpensive (5): CHEAP", async () => {
  jest.setTimeout(50000);
  var clue = "Damaged peach inexpensive";
  var length = 5;

  var expectedSolution = "CHEAP";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Despicable evil organized (4) gives VILE
 */
test("Despicable evil organized (4): VILE", async () => {
  jest.setTimeout(50000);
  var clue = "Despicable evil organized";
  var length = 4;

  var expectedSolution = "VILE";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Read about challenge (4) gives DARE
 */
test("Read about challenge (4): DARE", async () => {
  jest.setTimeout(50000);
  var clue = "Read about challenge";
  var length = 4;

  var expectedSolution = "DARE";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Rate the remodeled operating place (7) gives THEATER
 */
test("Rate the remodelled operating place (7): THEATER", async () => {
  jest.setTimeout(50000);
  var clue = "Rate the remodelled operating place";
  var length = 7;

  var expectedSolution = "THEATER";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Pine veneer Reg destroyed (9) gives EVERGREEN
 */
test("Pine veneer Reg destroyed (9): EVERGREEN", async () => {
  jest.setTimeout(50000);
  var clue = "Pine veneer Reg destroyed";
  var length = 9;

  var expectedSolution = "EVERGREEN";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Resolute priest sent in error (10) gives PERSISTENT
 */
test("Resolute priest sent in error (10): PERSISTENT", async () => {
  jest.setTimeout(50000);
  var clue = "Resolute priest sent in error";
  var length = 10;

  var expectedSolution = "PERSISTENT";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Lap dancing friend (3) gives PAL
 */
test("Lap dancing friend (3): PAL", async () => {
  jest.setTimeout(50000);
  var clue = "Lap dancing friend";
  var length = 3;

  var expectedSolution = "PAL";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Chaperone shredded corsets (7) gives ESCORTS
 */
test("Chaperone shredded corsets (7): ESCORTS", async () => {
  jest.setTimeout(50000);
  var clue = "Chaperone shredded corsets";
  var length = 7;

  var expectedSolution = "ESCORTS";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Go near fresh fruit (6) gives ORANGE
 */
test("Go near fresh fruit (6): ORANGE", async () => {
  jest.setTimeout(50000);
  var clue = "Go near fresh fruit";
  var length = 6;

  var expectedSolution = "ORANGE";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Keeps dissolving in tear (7) gives RETAINS
 */
test("Keeps dissolving in tear (7): RETAINS", async () => {
  jest.setTimeout(50000);
  var clue = "Keeps dissolving in tears";
  var length = 7;

  var expectedSolution = "RETAINS";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Upset piper eats canape (9) gives APPETISER
 */
test("Upset piper eats canape (9): APPETISER", async () => {
  jest.setTimeout(50000);
  var clue = "Upset piper eats canape";
  var length = 9;

  var expectedSolution = "APPETISER";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Badly pare the fruit (4) gives PEAR
 */
test("Badly pare the fruit (4): PEAR", async () => {
  jest.setTimeout(50000);
  var clue = "Badly pare the fruit";
  var length = 4;

  var expectedSolution = "PEAR";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
