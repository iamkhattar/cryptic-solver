const generateSolution = require("../../modules/solution/generate-solution");
const checkIfSolutionListContains = require("./solution-contains");

/**
 * Test to Check whether Unusually tough monster (5) gives HYDRA
 */
test("Unusually tough monster (5): HYDRA", async () => {
  var clue = "Unusually tough monster";
  var length = 5;

  var expectedSolution = "HYDRA";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Inspection of broken nails, say (8) gives ANALYSIS
 */
test("Inspection of broken nails, say (8): ANALYSIS", async () => {
  var clue = "Inspection of broken nails, say";
  var length = 8;

  var expectedSolution = "ANALYSIS";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Ms Reagan is upset by the executives (8) gives MANAGERS
 */
test("Ms Reagan is upset by the executives (8): MANAGERS", async () => {
  var clue = "Ms Reagan is upset by the executives";
  var length = 8;

  var expectedSolution = "MANAGERS";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Sadly lost knee bones (8) gives SKELETON
 */
test("Sadly lost knee bones (8): SKELETON", async () => {
  var clue = "Sadly lost knee bones";
  var length = 8;

  var expectedSolution = "SKELETON";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Lover to get shot of in Derby (9) gives BOYFRIEND
 */
test("Lover to get shot of in Derby (9): BOYFRIEND", async () => {
  var clue = "Lover to get shot of in Derby";
  var length = 9;

  var expectedSolution = "BOYFRIEND";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Upsurge battered a coastline (10) gives ESCALATION
 */
test("Upsurge battered a coastline (10): ESCALATION", async () => {
  var clue = "Upsurge battered a coastline";
  var length = 10;

  var expectedSolution = "ESCALATION";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Insane damn yeti is explosive (8) gives DYNAMITE
 */
test("Insane damn yeti is explosive (8): DYNAMITE", async () => {
  var clue = "Insane damn yeti is explosive";
  var length = 8;

  var expectedSolution = "DYNAMITE";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Perilous sea dog? Run all over the place! (9) gives DANGEROUS
 */
test("Perilous sea dog? Run all over the place! (9): DANGEROUS", async () => {
  var clue = "Perilous sea dog? Run all over the place!";
  var length = 9;

  var expectedSolution = "DANGEROUS";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Unusually remote extraterrestrial object (6) gives METEOR
 */
test("Unusually remote extraterrestrial object (6): METEOR", async () => {
  var clue = "Unusually remote extraterrestrial object";
  var length = 6;

  var expectedSolution = "METEOR";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Observe pots rearranged (4) gives SPOT
 */
test("Observe pots rearranged (4): SPOT", async () => {
  var clue = "Observe pots rearranged";
  var length = 4;

  var expectedSolution = "SPOT";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Built Roman grand house (5) gives MANOR
 */
test("Built Roman grand house (5): MANOR", async () => {
  var clue = "Built Roman grand house";
  var length = 5;

  var expectedSolution = "MANOR";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Upset piper eats canape (9) gives APPETISER
 */
test("Upset piper eats canape (9): APPETISER", async () => {
  var clue = "Upset piper eats canape";
  var length = 9;

  var expectedSolution = "APPETISER";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

/**
 * Test to Check whether Badly pare the fruit (4) gives PEAR
 */
test("Badly pare the fruit (4): PEAR", async () => {
  var clue = "Badly pare the fruit";
  var length = 4;

  var expectedSolution = "PEAR";

  var solutionList = await generateSolution(clue, length);

  expect(
    checkIfSolutionListContains(solutionList, expectedSolution)
  ).toBeTruthy();
});

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
