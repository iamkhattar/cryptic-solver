const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to check whether Found ermine, deer hides damaged (10) gives HYDRA
 */
test("Found ermine, deer hides damaged (10) : UNDERMINED", async () => {
  jest.setTimeout(50000);
  var clue = "Found ermine, deer hides damaged";
  var length = 10;

  var expectedSolution = "UNDERMINED";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Herb's buried in a filthy meadow (5) gives THYME
 */
test("Herb's buried in a filthy meadow (5) : THYME", async () => {
  jest.setTimeout(50000);
  var clue = "Herb's buried in a filthy meadow";
  var length = 5;

  var expectedSolution = "THYME";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Pilfer a bit of waste alexandrite (5) gives STEAL
 */
test("Pilfer a bit of waste alexandrite (5) : STEAL", async () => {
  jest.setTimeout(50000);
  var clue = "Pilfer a bit of waste alexandrite";
  var length = 5;

  var expectedSolution = "STEAL";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Scapegoat concealed self esteem (3) gives EGO
 */
test("Scapegoat concealed self esteem (3) : EGO", async () => {
  jest.setTimeout(50000);
  var clue = "Scapegoat concealed self esteem";
  var length = 3;

  var expectedSolution = "EGO";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Tapestry covers primates (4) gives APES
 */
test("Tapestry covers primates (4) : APES", async () => {
  jest.setTimeout(50000);
  var clue = "Tapestry covers primates";
  var length = 4;

  var expectedSolution = "APES";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Enjoyment from malfunction (3) gives FUN
 */
test("Enjoyment from malfunction (3) : FUN", async () => {
  jest.setTimeout(50000);
  var clue = "Enjoyment from malfunction";
  var length = 3;

  var expectedSolution = "FUN";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Tear in jumper I purchased (3) gives RIP
 */
test("Tear in jumper I purchased (3) : RIP", async () => {
  jest.setTimeout(50000);
  var clue = "Tear in jumper I purchased";
  var length = 3;

  var expectedSolution = "RIP";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Dry in the Kalahari desert (4) gives ARID
 */
test("Dry in the Kalahari desert (4) : ARID", async () => {
  jest.setTimeout(50000);
  var clue = "Dry in the Kalahari desert";
  var length = 4;

  var expectedSolution = "ARID";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
