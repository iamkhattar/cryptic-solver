const checkAnagram = require("../../modules/anagram/check-anagram");

/**
 * Test to check if two anagrams return true
 */
test("Dormitory : Dirty Room", () => {
  var word1 = "Dormitory";
  var word2 = "Dirty Room";
  var anag = checkAnagram(word1, word2);
  expect(anag).toBeTruthy();
});

/**
 * Test to check if two non anagrams return false
 */
test("Dormitoryyyy : Dirty Room", () => {
  var word1 = "Dormitoryyyy";
  var word2 = "Dirty Room";
  var anag = checkAnagram(word1, word2);
  expect(anag).toBeFalsy();
});

/**
 * Test to check if two non anagrams return false
 */
test("Dormizory : Dirty Room", () => {
  var word1 = "Dormizory";
  var word2 = "Dirty Room";
  var anag = checkAnagram(word1, word2);
  expect(anag).toBeFalsy();
});
