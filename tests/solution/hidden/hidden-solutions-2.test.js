const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to check whether Confront them in the tobacco store (6) gives ACCOST
 */
test("Confront them in the tobacco store (6) : ACCOST", async () => {
  jest.setTimeout(50000);
  var clue = "Confront them in the tobacco store";
  var length = 6;

  var expectedSolution = "ACCOST";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Hammer in small etching (6) gives MALLET
 */
test("Hammer in small etching (6) : MALLET", async () => {
  jest.setTimeout(50000);
  var clue = "Hammer in small etching";
  var length = 6;

  var expectedSolution = "MALLET";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Composition from Bliss on a tape (6) gives SONATA
 */
test("Composition from Bliss on a tape (6) : SONATA", async () => {
  jest.setTimeout(50000);
  var clue = "Composition from Bliss on a tape";
  var length = 6;

  var expectedSolution = "SONATA";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Found ermine, deer hides crippled (10) gives UNDERMINED
 */
test("Found ermine, deer hides crippled (10) : UNDERMINED", async () => {
  jest.setTimeout(50000);
  var clue = "Found ermine, deer hides crippled";
  var length = 10;

  var expectedSolution = "UNDERMINED";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Rug held by dermatologist (3) gives MAT
 */
test("Rug held by dermatologist (3) : MAT", async () => {
  jest.setTimeout(50000);
  var clue = "Rug held by dermatologist";
  var length = 3;

  var expectedSolution = "MAT";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Warmth in the atrium (4) gives HEAT
 */
test("Warmth in the atrium (4) : HEAT", async () => {
  jest.setTimeout(50000);
  var clue = "Warmth in the atrium";
  var length = 4;

  var expectedSolution = "HEAT";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Celeb race letter contained arm band (8) gives BRACELET
 */
test("Celeb race letter contained arm band (8) : BRACELET", async () => {
  jest.setTimeout(50000);
  var clue = "Celeb race letter contained arm band";
  var length = 8;

  var expectedSolution = "BRACELET";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to check whether Consumes a portion of meat stew (4) gives EATS
 */
test("Consumes a portion of meat stew (4) : EATS", async () => {
  jest.setTimeout(50000);
  var clue = "Consumes a portion of meat stew";
  var length = 4;

  var expectedSolution = "EATS";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
