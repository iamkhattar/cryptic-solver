/**
 * getContainers() generates all possible containers for two given words and returns it
 * @param word1 : First Word
 * @param word2 : Second Word
 */
function getContainers(word1, word2) {
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  word1 = word1.replace(/\s+/g, "");
  word2 = word2.replace(/\s+/g, "");

  var solutionList = new Array();

  var iEl = "";
  for (var i = 0; i < word1.length; i++) {
    var currentSolution = "";
    iEl += word1[i];
    currentSolution += iEl;
    currentSolution += word2;
    currentSolution += word1.substring(i + 1);
    solutionList.push(currentSolution);
  }

  var jEl = "";
  for (var j = 0; j < word2.length; j++) {
    var currentSolution = "";
    jEl += word2[j];
    currentSolution += jEl;
    currentSolution += word1;
    currentSolution += word2.substring(j + 1);
    solutionList.push(currentSolution);
  }

  return solutionList;
}

module.exports = getContainers;
