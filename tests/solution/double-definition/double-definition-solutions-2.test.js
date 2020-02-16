const Query = require("../../../modules/solution/Query");
const checkIfSolutionListContains = require("../solution-contains");

/**
 * Test to Check whether Hawthorn blossom's month (3) gives MAY
 */
test("Hawthorn blossom's month (3) : MAY", async () => {
  jest.setTimeout(50000);
  var clue = "Hawthorn blossom's month";
  var length = 3;

  var expectedSolution = "MAY";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Loud noise from a tennis bat (6) gives RACKET
 */
test("Loud noise from a tennis bat (6) : RACKET", async () => {
  jest.setTimeout(50000);
  var clue = "Loud noise from a tennis bat";
  var length = 6;

  var expectedSolution = "RACKET";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Glide over ice, Ray (5) gives SKATE
 */
test("Glide over ice, Ray (5) : SKATE", async () => {
  jest.setTimeout(50000);
  var clue = "Glide over ice, Ray";
  var length = 5;

  var expectedSolution = "SKATE";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Genuine old Spanish coin (4) gives REAL
 */
test("Genuine old Spanish coin (4) : REAL", async () => {
  jest.setTimeout(50000);
  var clue = "Genuine old Spanish coin";
  var length = 4;

  var expectedSolution = "REAL";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Crazy flying mammals (4) gives BATS
 */
test("Crazy flying mammals (4) : BATS", async () => {
  jest.setTimeout(50000);
  var clue = "Crazy flying mammals";
  var length = 4;

  var expectedSolution = "BATS";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Put up with an animal (4) gives BEAR
 */
test("Put up with an animal (4) : BEAR", async () => {
  jest.setTimeout(50000);
  var clue = "Put up with an animal";
  var length = 4;

  var expectedSolution = "BEAR";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Expensive honey (4) gives DEAR
 */
test("Expensive honey (4) : DEAR", async () => {
  jest.setTimeout(50000);
  var clue = "Expensive honey";
  var length = 4;

  var expectedSolution = "DEAR";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Armour in the post (4) gives MAIL
 */
test("Armour in the post (4) : MAIL", async () => {
  jest.setTimeout(50000);
  var clue = "Armour in the post";
  var length = 4;

  var expectedSolution = "MAIL";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Instant credit (4) gives TICK
 */
test("Instant credit (4) : TICK", async () => {
  jest.setTimeout(50000);
  var clue = "Instant credit";
  var length = 4;

  var expectedSolution = "TICK";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Sound warning for a temptress (5) gives SIREN
 */
test("Sound warning for a temptress (5) : SIREN", async () => {
  jest.setTimeout(50000);
  var clue = "Sound warning for a temptress";
  var length = 5;

  var expectedSolution = "SIREN";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether A fast train, say (7) gives EXPRESS
 */
test("A fast train, say (7) : EXPRESS", async () => {
  jest.setTimeout(50000);
  var clue = "A fast train, say";
  var length = 7;

  var expectedSolution = "EXPRESS";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Stone jar (4) gives ROCK
 */
test("Stone jar (4) : ROCK", async () => {
  jest.setTimeout(50000);
  var clue = "Stone jar";
  var length = 4;

  var expectedSolution = "ROCK";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
/**
 * Test to Check whether Clear as a document (8) gives MANIFEST
 */
test("Clear as a document (8): MANIFEST", async () => {
  jest.setTimeout(50000);
  var clue = "Clear as a document";
  var length = 8;

  var expectedSolution = "MANIFEST";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Baby cow's leg part (4) gives CALF
 */
test("Baby cow's leg part (4): CALF", async () => {
  jest.setTimeout(50000);
  var clue = "Baby cow's leg part";
  var length = 4;

  var expectedSolution = "CALF";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Business worry (7) gives CONCERN
 */
test("Business worry (7): CONCERN", async () => {
  jest.setTimeout(50000);
  var clue = "Business worry";
  var length = 7;

  var expectedSolution = "CONCERN";

  var query = new Query(clue, length);
  var solutionList = await query.solveClue();

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
