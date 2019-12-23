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

/**
 * Test to Check whether Abandon the wasteland (6) gives DESERT
 */
test("Abandon the wasteland (6) : DESERT", async () => {
  var clue = "Abandon the wasteland";
  var length = 6;

  var expectedSolution = "DESERT";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Hawthorn blossom's month (3) gives MAY
 */
test("Hawthorn blossom's month (3) : MAY", async () => {
  var clue = "Hawthorn blossom's month";
  var length = 3;

  var expectedSolution = "MAY";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Loud noise from a tennis bat (6) gives RACKET
 */
test("Loud noise from a tennis bat (6) : RACKET", async () => {
  var clue = "Loud noise from a tennis bat";
  var length = 6;

  var expectedSolution = "RACKET";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Glide over ice, Ray (5) gives SKATE
 */
test("Glide over ice, Ray (5) : SKATE", async () => {
  var clue = "Glide over ice, Ray";
  var length = 5;

  var expectedSolution = "SKATE";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Genuine old Spanish coin (4) gives REAL
 */
test("Genuine old Spanish coin (4) : REAL", async () => {
  var clue = "Genuine old Spanish coin";
  var length = 4;

  var expectedSolution = "REAL";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Crazy flying mammals (4) gives BATS
 */
test("Crazy flying mammals (4) : BATS", async () => {
  var clue = "Crazy flying mammals";
  var length = 4;

  var expectedSolution = "BATS";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Put up with an animal (4) gives BEAR
 */
test("Put up with an animal (4) : BEAR", async () => {
  var clue = "Put up with an animal";
  var length = 4;

  var expectedSolution = "BEAR";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Expensive honey (4) gives DEAR
 */
test("Expensive honey (4) : DEAR", async () => {
  var clue = "Expensive honey";
  var length = 4;

  var expectedSolution = "DEAR";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Armour in the post (4) gives MAIL
 */
test("Armour in the post (4) : MAIL", async () => {
  var clue = "Armour in the post";
  var length = 4;

  var expectedSolution = "MAIL";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Instant credit (4) gives TICK
 */
test("Instant credit (4) : TICK", async () => {
  var clue = "Instant credit";
  var length = 4;

  var expectedSolution = "TICK";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Sound warning for a temptress (5) gives SIREN
 */
test("Sound warning for a temptress (5) : SIREN", async () => {
  var clue = "Sound warning for a temptress";
  var length = 5;

  var expectedSolution = "SIREN";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether A fast train, say (7) gives EXPRESS
 */
test("A fast train, say (7) : EXPRESS", async () => {
  var clue = "A fast train, say";
  var length = 7;

  var expectedSolution = "EXPRESS";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Stone jar (4) gives ROCK
 */
test("Stone jar (4) : ROCK", async () => {
  var clue = "Stone jar";
  var length = 4;

  var expectedSolution = "ROCK";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});
