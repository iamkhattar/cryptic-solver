/**
 * @param words[] : Array of split words
 * @return All possible combinations of those words
 *
 * getPossibleCombinations() generates all possible combinations of a given array.
 */
function getPossibleCombinations(words) {
  var solution = new Array();
  var def = "";

  var length = words.length;
  for (var i = 0; i < length; i++) {
    if (i != length - 1) {
      def += words[i] + " ";
    }
    var wordplay = new Array();
    for (var j = i + 1; j < length; j++) {
      wordplay.push(words[j]);
    }

    if (wordplay.length !== 0) {
      var word = "";
      for (var k = 0; k < wordplay.length; k++) {
        if (k != length - 1) {
          word += wordplay[k] + " ";
        }
        var play = new Array();
        play.push(word);
        for (var l = k + 1; l < wordplay.length; l++) {
          play.push(wordplay[l]);
        }
        var currentSolution = new Array();
        currentSolution.push(def.trim());
        play.forEach(element => {
          currentSolution.push(element.trim());
        });
        if (!doesSolutionContain(solution, currentSolution)) {
          solution.push(currentSolution);
        }
      }
    }
  }

  def = "";

  for (var i = length - 1; i >= 0; i--) {
    if (i !== 0) {
      def = words[i] + " " + def;
    }
    var wordplay = new Array();
    for (var j = 0; j < i; j++) {
      wordplay.push(words[j]);
    }

    if (wordplay.length !== 0) {
      var word = "";
      for (var k = 0; k < wordplay.length; k++) {
        if (k != length - 1) {
          word += wordplay[k] + " ";
        }
        var play = new Array();
        play.push(word);
        for (var l = k + 1; l < wordplay.length; l++) {
          play.push(wordplay[l]);
        }
        var currentSolution = new Array();

        play.forEach(element => {
          currentSolution.push(element.trim());
        });
        currentSolution.push(def.trim());
        if (!doesSolutionContain(solution, currentSolution)) {
          solution.push(currentSolution);
        }
      }
    }
  }

  return solution;
}

/**
 *
 * @param solution : The entire solution
 * @param currentSolution : The current solution
 *
 * doesSolutionContain() checks whether solution contains currentSolution.
 *
 */
function doesSolutionContain(solution, currentSolution) {
  var flag = false;
  for (var i = 0; i < solution.length; i++) {
    if (solution[i].length == currentSolution.length) {
      var currentflag = true;
      for (var j = 0; j < currentSolution.length; j++) {
        if (solution[i][j] != currentSolution[j]) {
          currentflag = false;
        }
      }
      if (currentflag == true) {
        flag = true;
      }
    }
  }
  return flag;
}

module.exports = getPossibleCombinations;
