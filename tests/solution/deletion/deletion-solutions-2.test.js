const Query = require("../../../modules/solution/Query");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to check whether Bird decapitated dog (5) gives BEAGLE
 */
test("Bird decapitated dog (5): BEAGLE", async () => {
  jest.setTimeout(50000);
  var clue = "Bird decapitated dog";
  var length = 5;

  var expectedSolution = "EAGLE";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Work the land, without first limb (3) gives ARM
 */
test("Work the land, without first limb (3): ARM", async () => {
  jest.setTimeout(50000);
  var clue = "Work the land, without first limb";
  var length = 3;

  var expectedSolution = "ARM";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Yell! Soprano left to get lotion! (5) gives CREAM
 */
test("Yell! Soprano left to get lotion! (5): CREAM", async () => {
  jest.setTimeout(50000);
  var clue = "Yell! Soprano left to get lotion!";
  var length = 5;

  var expectedSolution = "CREAM";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
/**
 * Test to check whether Accomplice is sort of loyal, without love (4) gives BEAGLE
 */
test("Accomplice is sort of loyal, without love (4): ALLY", async () => {
  jest.setTimeout(50000);
  var clue = "Accomplice is sort of loyal, without love";
  var length = 4;

  var expectedSolution = "ALLY";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
