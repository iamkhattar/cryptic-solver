const generateSolution = require("../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("./solution-contains");

/**
 * Test to Check whether Clear as a document (8) gives MANIFEST
 */
test("Clear as a document (8): MANIFEST", async () => {
  var clue = "Clear as a document";
  var length = 8;

  var expectedSolution = "MANIFEST";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Baby cow's leg part (4) gives CALF
 */
test("Baby cow's leg part (4): CALF", async () => {
  var clue = "Baby cow's leg part";
  var length = 4;

  var expectedSolution = "CALF";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Business worry (7) gives CONCERN
 */
test("Business worry (7): CONCERN", async () => {
  var clue = "Business worry";
  var length = 7;

  var expectedSolution = "CONCERN";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Flee the race (3) gives RUN
 */
test("Flee the race (3) : RUN", async () => {
  var clue = "Flee the race";
  var length = 3;

  var expectedSolution = "RUN";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Fruit goes out of fashion (4) gives DATE
 */
test("Fruit goes out of fashion (4) : DATE", async () => {
  var clue = "Fruit goes out of fashion";
  var length = 4;

  var expectedSolution = "DATE";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Immature litter (5) gives YOUNG
 */
test("Immature litter (5) : YOUNG", async () => {
  var clue = "Immature litter";
  var length = 5;

  var expectedSolution = "YOUNG";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Kind disposition (6) gives NATURE
 */
test("Kind disposition (6) : NATURE", async () => {
  var clue = "Kind disposition";
  var length = 6;

  var expectedSolution = "NATURE";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Metal guide (4) gives LEAD
 */
test("Metal guide (4) : LEAD", async () => {
  var clue = "Metal guide";
  var length = 4;

  var expectedSolution = "LEAD";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Report Account (4) gives NEWS
 */
test("Report Account (4) : NEWS", async () => {
  var clue = "Report Account";
  var length = 4;

  var expectedSolution = "NEWS";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Restart Summary (6) gives RESUME
 */
test("Restart Summary (6) : RESUME", async () => {
  var clue = "Restart Summary";
  var length = 6;

  var expectedSolution = "RESUME";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Run away from wasteland (6) gives DESERT
 */
test("Run away from wasteland (6) : DESERT", async () => {
  var clue = "Run away from wasteland";
  var length = 6;

  var expectedSolution = "DESERT";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Spoil a short month (3) gives MAR
 */
test("Spoil a short month (3) : MAR", async () => {
  var clue = "Spoil a short month";
  var length = 3;

  var expectedSolution = "MAR";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Spy found (5) gives PLANT
 */
test("Spy found (5) : PLANT", async () => {
  var clue = "Spy found";
  var length = 5;

  var expectedSolution = "PLANT";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Succession of command (5) gives ORDER
 */
test("Succession of command (5) : ORDER", async () => {
  var clue = "Succession of command";
  var length = 5;

  var expectedSolution = "ORDER";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Twist the breeze (4) gives WIND
 */
test("Twist the breeze (4) : WIND", async () => {
  var clue = "Twist the breeze";
  var length = 4;

  var expectedSolution = "WIND";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
