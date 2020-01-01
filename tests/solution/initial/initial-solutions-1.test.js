const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Dance starts by exhibiting ballet or polka (5) gives BEBOP
 */
test("Dance starts by exhibiting ballet or polka (5) : BEBOP", async () => {
  var clue = "Dance starts by exhibiting ballet or polka";
  var length = 5;

  var expectedSolution = "BEBOP";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Initially amiable person eats primate (3) gives APE
 */
test("Initially amiable person eats primate (5) : APE", async () => {
  var clue = "Initially amiable person eats primate";
  var length = 3;

  var expectedSolution = "APE";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Bitter initially, but extremely enjoyable refreshment (4) gives BEER
 */
test("Bitter initially, but extremely enjoyable refreshment (4) : BEER", async () => {
  var clue = "Bitter initially, but extremely enjoyable refreshment";
  var length = 4;

  var expectedSolution = "BEER";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Cooked food really is excellent; deserves tips (5) gives FRIED
 */
test("Cooked food really is excellent; deserves tips (5) : FRIED", async () => {
  var clue = "Cooked food really is excellent; deserves tips";
  var length = 5;

  var expectedSolution = "FRIED";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Starts to serve time in Russian prison (4) gives STIR
 */
test("Starts to serve time in Russian prison (4) : STIR", async () => {
  var clue = "Starts to serve time in Russian prison";
  var length = 4;

  var expectedSolution = "STIR";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Black and white lamb starts to cry (4) gives BAWL
 */
test("Black and white lamb starts to cry (4) : BAWL", async () => {
  var clue = "Black and white lamb starts to cry";
  var length = 4;

  var expectedSolution = "BAWL";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
