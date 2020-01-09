const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to check whether Ox devours North American (4) gives YANK
 */
test("Ox devours North American (4): YANK", async () => {
  jest.setTimeout(50000);
  var clue = "Ox devours North American";
  var length = 4;

  var expectedSolution = "YANK";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether A relative put us in the money (6) gives COUSIN
 */
test("A relative put us in the money (6): COUSIN", async () => {
  jest.setTimeout(50000);
  var clue = "A relative put us in the money";
  var length = 6;

  var expectedSolution = "COUSIN";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Tired agent outside shelter (6) gives SLEEPY
 */
test("Tired agent outside shelter (6): SLEEPY", async () => {
  jest.setTimeout(50000);
  var clue = "Tired agent outside shelter";
  var length = 6;

  var expectedSolution = "SLEEPY";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Contract surrounding divide is dead (8) gives DEPARTED
 */
test("Contract surrounding divide is dead (8): DEPARTED", async () => {
  jest.setTimeout(50000);
  var clue = "Contract surrounding divide is dead";
  var length = 8;

  var expectedSolution = "DEPARTED";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Apostle's friend outside of university (4) gives PAUL
 */
test("Apostle's friend outside of university (4): PAUL", async () => {
  jest.setTimeout(50000);
  var clue = "Apostle friend outside of university";
  var length = 4;

  var expectedSolution = "PAUL";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
