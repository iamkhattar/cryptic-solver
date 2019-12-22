/**
 *
 * @param word1 : First Word to be checked
 * @param word2 : Second Word to be checked
 * @return : true if they are anagrams, false if they are not
 *
 * checkAnagram() checks wheteher two phrases are anagrams ignoring spaces
 */
function checkAnagram(word1, word2) {
  word1 = word1.replace(/\s+/g, "");
  word2 = word2.replace(/\s+/g, "");

  if (word1.length != word2.length) {
    return false;
  }

  var a = word1.toLowerCase();
  var b = word2.toLowerCase();
  var counts = [];

  for (var i = 0; i < a.length; i++) {
    var index = a.charCodeAt(i) - 97;
    counts[index] = (counts[index] || 0) + 1;
  }

  for (var i = 0; i < b.length; i++) {
    var index = b.charCodeAt(i) - 97;
    if (!counts[index]) {
      return false;
    } else {
      counts[index]--;
    }
  }
  return true;
}

module.exports = checkAnagram;
