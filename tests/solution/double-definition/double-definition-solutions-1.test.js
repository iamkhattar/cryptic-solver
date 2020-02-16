const Query = require("../../../modules/solution/Query");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Flee the race (3) gives RUN
 */
test("Flee the race (3) : RUN", async () => {
  jest.setTimeout(50000);
  var clue = "Flee the race";
  var length = 3;

  var expectedSolution = "RUN";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Fruit goes out of fashion (4) gives DATE
 */
test("Fruit goes out of fashion (4) : DATE", async () => {
  jest.setTimeout(50000);
  var clue = "Fruit goes out of fashion";
  var length = 4;

  var expectedSolution = "DATE";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Immature litter (5) gives YOUNG
 */
test("Immature litter (5) : YOUNG", async () => {
  jest.setTimeout(50000);
  var clue = "Immature litter";
  var length = 5;

  var expectedSolution = "YOUNG";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Kind disposition (6) gives NATURE
 */
test("Kind disposition (6) : NATURE", async () => {
  jest.setTimeout(50000);
  var clue = "Kind disposition";
  var length = 6;

  var expectedSolution = "NATURE";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Metal guide (4) gives LEAD
 */
test("Metal guide (4) : LEAD", async () => {
  jest.setTimeout(50000);
  var clue = "Metal guide";
  var length = 4;

  var expectedSolution = "LEAD";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Report Account (4) gives NEWS
 */
test("Report Account (4) : NEWS", async () => {
  jest.setTimeout(50000);
  var clue = "Report Account";
  var length = 4;

  var expectedSolution = "NEWS";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Restart Summary (6) gives RESUME
 */
test("Restart Summary (6) : RESUME", async () => {
  jest.setTimeout(50000);
  var clue = "Restart Summary";
  var length = 6;

  var expectedSolution = "RESUME";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Run away from wasteland (6) gives DESERT
 */
test("Run away from wasteland (6) : DESERT", async () => {
  jest.setTimeout(50000);
  var clue = "Run away from wasteland";
  var length = 6;

  var expectedSolution = "DESERT";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Spoil a short month (3) gives MAR
 */
test("Spoil a short month (3) : MAR", async () => {
  jest.setTimeout(50000);
  var clue = "Spoil a short month";
  var length = 3;

  var expectedSolution = "MAR";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Spy found (5) gives PLANT
 */
test("Spy found (5) : PLANT", async () => {
  jest.setTimeout(50000);
  var clue = "Spy found";
  var length = 5;

  var expectedSolution = "PLANT";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Succession of command (5) gives ORDER
 */
test("Succession of command (5) : ORDER", async () => {
  jest.setTimeout(50000);
  var clue = "Succession of command";
  var length = 5;

  var expectedSolution = "ORDER";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Twist the breeze (4) gives WIND
 */
test("Twist the breeze (4) : WIND", async () => {
  jest.setTimeout(50000);
  var clue = "Twist the breeze";
  var length = 4;

  var expectedSolution = "WIND";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Abandon the wasteland (6) gives DESERT
 */
test("Abandon the wasteland (6) : DESERT", async () => {
  jest.setTimeout(50000);
  var clue = "Abandon the wasteland";
  var length = 6;

  var expectedSolution = "DESERT";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
