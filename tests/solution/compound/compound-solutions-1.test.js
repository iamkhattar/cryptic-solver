const Query = require("../../../modules/solution/Query");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to check whether Country-lover dismantled rails blocking track (8) gives RURALIST
 */
test("Country-lover dismantled rails blocking track (8) : RURALIST", async () => {
  jest.setTimeout(50000);
  var clue = "Country-lover dismantled rails blocking track";
  var length = 8;

  var expectedSolution = "RURALIST";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Relation agreeable to embrace revenge at end (5) gives NIECE
 */
test("Relation agreeable to embrace revenge at end (5) : NIECE", async () => {
  jest.setTimeout(50000);
  var clue = "Relation agreeable to embrace revenge at end";
  var length = 5;

  var expectedSolution = "NIECE";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Report back in prime time (4) gives ITEM
 */
test("Report back in prime time (4) : ITEM", async () => {
  jest.setTimeout(50000);
  var clue = "Report back in prime time";
  var length = 4;

  var expectedSolution = "ITEM";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Dog held back in big rocks (5) gives CORGI
 */
test("Dog held back in big rocks (5) : CORGI", async () => {
  jest.setTimeout(50000);
  var clue = "Dog held back in big rocks";
  var length = 5;

  var expectedSolution = "CORGI";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
