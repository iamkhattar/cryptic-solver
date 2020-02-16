const Query = require("../../../modules/solution/Query");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Dance starts by exhibiting ballet or polka (5) gives BEBOP
 */
test("Dance starts by exhibiting ballet or polka (5) : BEBOP", async () => {
  jest.setTimeout(50000);
  var clue = "Dance starts by exhibiting ballet or polka";
  var length = 5;

  var expectedSolution = "BEBOP";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Initially amiable person eats primate (3) gives APE
 */
test("Initially amiable person eats primate (5) : APE", async () => {
  jest.setTimeout(50000);
  var clue = "Initially amiable person eats primate";
  var length = 3;

  var expectedSolution = "APE";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Bitter initially, but extremely enjoyable refreshment (4) gives BEER
 */
test("Bitter initially, but extremely enjoyable refreshment (4) : BEER", async () => {
  jest.setTimeout(50000);
  var clue = "Bitter initially, but extremely enjoyable refreshment";
  var length = 4;

  var expectedSolution = "BEER";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Cooked food really is excellent; deserves tips (5) gives FRIED
 */
test("Cooked food really is excellent; deserves tips (5) : FRIED", async () => {
  jest.setTimeout(50000);
  var clue = "Cooked food really is excellent; deserves tips";
  var length = 5;

  var expectedSolution = "FRIED";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Starts to serve time in Russian prison (4) gives STIR
 */
test("Starts to serve time in Russian prison (4) : STIR", async () => {
  jest.setTimeout(50000);
  var clue = "Starts to serve time in Russian prison";
  var length = 4;

  var expectedSolution = "STIR";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Black and white lamb starts to cry (4) gives BAWL
 */
test("Black and white lamb starts to cry (4) : BAWL", async () => {
  jest.setTimeout(50000);
  var clue = "Black and white lamb starts to cry";
  var length = 4;

  var expectedSolution = "BAWL";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Youngster initially babbles about being young (4) gives BABY
 */
test("Youngster initially babbles about being young (4) : BABY", async () => {
  jest.setTimeout(50000);
  var clue = "Youngster initially babbles about being young";
  var length = 4;

  var expectedSolution = "BABY";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether State first if one wants advice (4) gives IOWA
 */
test("State first if one wants advice (4) : IOWA", async () => {
  jest.setTimeout(50000);
  var clue = "State first if one wants advice";
  var length = 4;

  var expectedSolution = "IOWA";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
