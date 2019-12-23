const generateSolution = require("../../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("../solution-contains");
/**
 * Test to Check whether Damaged peach inexpensive (5) gives CHEAP
 */
test("Damaged peach inexpensive (5): CHEAP", async () => {
  var clue = "Damaged peach inexpensive";
  var length = 5;

  var expectedSolution = "CHEAP";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Despicable evil organized (4) gives VILE
 */
test("Despicable evil organized (4): VILE", async () => {
  var clue = "Despicable evil organized";
  var length = 4;

  var expectedSolution = "VILE";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Read about challenge (4) gives DARE
 */
test("Read about challenge (4): DARE", async () => {
  var clue = "Read about challenge";
  var length = 4;

  var expectedSolution = "DARE";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Rate the remodeled operating place (7) gives THEATER
 */
test("Rate the remodelled operating place (7): THEATER", async () => {
  var clue = "Rate the remodelled operating place";
  var length = 7;

  var expectedSolution = "THEATER";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Pine veneer Reg destroyed (9) gives EVERGREEN
 */
test("Pine veneer Reg destroyed (9): EVERGREEN", async () => {
  var clue = "Pine veneer Reg destroyed";
  var length = 9;

  var expectedSolution = "EVERGREEN";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Resolute priest sent in error (10) gives PERSISTENT
 */
test("Resolute priest sent in error (10): PERSISTENT", async () => {
  var clue = "Resolute priest sent in error";
  var length = 10;

  var expectedSolution = "PERSISTENT";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Lap dancing friend (3) gives PAL
 */
test("Lap dancing friend (3): PAL", async () => {
  var clue = "Lap dancing friend";
  var length = 3;

  var expectedSolution = "PAL";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Chaperone shredded corsets (7) gives ESCORTS
 */
test("Chaperone shredded corsets (7): ESCORTS", async () => {
  var clue = "Chaperone shredded corsets";
  var length = 7;

  var expectedSolution = "ESCORTS";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Go near fresh fruit (6) gives ORANGE
 */
test("Go near fresh fruit (6): ORANGE", async () => {
  var clue = "Go near fresh fruit";
  var length = 6;

  var expectedSolution = "ORANGE";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Keeps dissolving in tear (7) gives RETAINS
 */
test("Keeps dissolving in tear (7): RETAINS", async () => {
  var clue = "Keeps dissolving in tears";
  var length = 7;

  var expectedSolution = "RETAINS";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Mad dog becomes an something to worship (3) gives GOD
 */
test("Mad dog becomes an something to worship (3): GOD", async () => {
  var clue = "Mad dog becomes an something to worship";
  var length = 3;

  var expectedSolution = "GOD";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
