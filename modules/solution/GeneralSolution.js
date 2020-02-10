const getSynonyms = require("../thesaurus/get-synonyms");
const generatePossibleDefinitions = require("../definitions/generate-possible-definitions");

class GeneralSolution {
  constructor(query) {
    this.query = query;
    this.combination = query.clueArray;
  }

  //Generates all general solutions and returns it
  generateSolutions() {
    var solutionList = [];
    this.generatePossibleWordplays();
    var firstDefinitions = generatePossibleDefinitions(
      this.query,
      this.combination[0]
    );
    var lastDefinitions = generatePossibleDefinitions(
      this.query,
      this.combination[this.combination.length - 1]
    );

    const combination = this.searchArr;

    var firstSolutions = this.getFirstSolutions(combination, firstDefinitions);

    var lastSolutions = this.getLastSolutions(combination, lastDefinitions);

    solutionList = solutionList.concat(firstSolutions);
    solutionList = solutionList.concat(lastSolutions);

    return solutionList;
  }

  /**
   * getFirstSolutions() generates all general solutions when the first word is definiton
   * @param {Array} combination : Combination for which solution was achieved
   * @param {Array} firstDefinions : Array of definitions for first phrase
   */
  getFirstSolutions(combination, firstDefinions) {
    var solutionList = [];
    //Run loop from second term to last term
    for (var i = 1; i < combination.length; i++) {
      //Set start to be first word
      var start = combination[i];

      //Generate combinations for each wordplay
      start.forEach(currentStart => {
        //Check if index in bound
        if (i + 1 < combination.length) {
          var mid = combination[i + 1];
          //Throw away combinations that can be discarded
          mid = mid.filter(
            en => this.query.length - currentStart.word.length >= en.word.length
          );

          //Check each combination
          mid.forEach(currentMid => {
            var word = currentStart.word + currentMid.word;
            //If combination exists within the possible solution, then it is one of the solutions
            if (firstDefinions.includes(word)) {
              var def = this.combination[0];
              var currentSolution = {
                solution: word.toUpperCase(),
                def: def,
                reason: this.generateTwoReasonString(
                  def,
                  currentStart,
                  currentMid,
                  combination,
                  i,
                  word
                ),
                int: "general-clue",
                percentage: 0
              };
              solutionList.push(currentSolution);
            }

            //Check if combination with two terms can be added
            if (i + 2 < combination.length) {
              var end = combination[i + 2];
              //Discard words that dont fit length criteria
              end = end.filter(
                en =>
                  this.query.length -
                    currentStart.word.length -
                    currentMid.word.length ==
                  en.word.length
              );
              //Check if any combination is in the last definitions, if it is then a solution is found
              end.forEach(currentEnd => {
                var threeWord =
                  currentStart.word + currentMid.word + currentEnd.word;
                if (firstDefinions.includes(threeWord)) {
                  var def = this.combination[0];
                  var currentSolution = {
                    solution: threeWord.toUpperCase(),
                    def: def,
                    reason: this.generateThreeReasonString(
                      def,
                      currentStart,
                      currentMid,
                      currentEnd,
                      combination,
                      i,
                      threeWord
                    ),
                    int: "general-clue",
                    percentage: 0
                  };
                  solutionList.push(currentSolution);
                }
              });
            }
          });
        }
      });
    }
    return solutionList;
  }

  /**
   * Generates all General Solutions when the last phrase is the definition
   * @param {Array} combination : Combination for which solution has to be generated
   * @param {Array} lastDefinitions : Array of definitions for last phrase
   */
  getLastSolutions(combination, lastDefinitions) {
    var solutionList = [];
    //Run loop from first term to second last term
    for (var i = 0; i < combination.length - 1; i++) {
      //Set start to be first word
      var start = combination[i];

      //Generate combinations for each wordplay
      start.forEach(currentStart => {
        //Check if index in bound
        if (i + 1 < combination.length - 1) {
          var mid = combination[i + 1];
          //Throw away combinations that can be discarded
          mid = mid.filter(
            en => this.query.length - currentStart.word.length >= en.word.length
          );

          //Check each combination
          mid.forEach(currentMid => {
            var word = currentStart.word + currentMid.word;
            //If combination exists within the possible solution, then it is one of the solutions
            if (lastDefinitions.includes(word)) {
              var def = this.combination[this.combination.length - 1];
              var currentSolution = {
                solution: word.toUpperCase(),
                def: def,
                reason: this.generateTwoReasonString(
                  def,
                  currentStart,
                  currentMid,
                  combination,
                  i,
                  word
                ),
                int: "general-clue",
                percentage: 0
              };
              solutionList.push(currentSolution);
            }

            //Check if combination with two terms can be added
            if (i + 2 < combination.length - 1) {
              var end = combination[i + 2];
              //Discard words that dont fit length criteria
              end = end.filter(
                en =>
                  this.query.length -
                    currentStart.word.length -
                    currentMid.word.length ==
                  en.word.length
              );
              //Check if any combination is in the last definitions, if it is then a solution is found
              end.forEach(currentEnd => {
                var threeWord =
                  currentStart.word + currentMid.word + currentEnd.word;
                if (lastDefinitions.includes(threeWord)) {
                  var def = this.combination[this.combination.length - 1];
                  var currentSolution = {
                    solution: threeWord.toUpperCase(),
                    def: def,
                    reason: this.generateThreeReasonString(
                      def,
                      currentStart,
                      currentMid,
                      currentEnd,
                      combination,
                      i,
                      threeWord
                    ),
                    int: "general-clue",
                    percentage: 0
                  };
                  solutionList.push(currentSolution);
                }
              });
            }
          });
        }
      });
    }
    return solutionList;
  }

  /**
   * Generate Three Reason String generates the reason string when there is an addition of three words
   * @param {String} definition : Definion in combination
   * @param {Object} start : First Adddition
   * @param {Object} mid : Second Addition
   * @param {Object} end : Third Addition
   * @param {Array} combination : Combination for which this solution was achieved
   * @param {Integer} index : Index of first adddition
   * @param {String} solution : Solution calculated
   */
  generateThreeReasonString(
    definition,
    start,
    mid,
    end,
    combination,
    index,
    solution
  ) {
    return (
      "This is a General Clue. The definition is " +
      definition.toUpperCase() +
      ". " +
      solution.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". " +
      start.word.toUpperCase() +
      " is the " +
      start.reason +
      " " +
      combination[index][0].word.toUpperCase() +
      ". " +
      mid.word.toUpperCase() +
      " is the " +
      mid.reason +
      " " +
      combination[index + 1][0].word.toUpperCase() +
      ". " +
      end.word.toUpperCase() +
      " is the " +
      end.reason +
      " " +
      combination[index + 2][0].word.toUpperCase() +
      ". " +
      start.word.toUpperCase() +
      "+" +
      mid.word.toUpperCase() +
      "+" +
      end.word.toUpperCase() +
      " gives us " +
      solution.toUpperCase()
    );
  }

  /**
   * generateTwoString() generates the reason string when a single addition has taken place
   * @param {String} definition : Definition in combination
   * @param {Object} start : First word that was added
   * @param {Object} end : Second word that was added
   * @param {Array} combination : Combination for which the solution was calculated
   * @param {Integer} index : Index of first addition
   * @param {String} solution : Solution that was caculated
   */
  generateTwoReasonString(
    definition,
    start,
    end,
    combination,
    index,
    solution
  ) {
    return (
      "This is a General Clue. The definition is " +
      definition.toUpperCase() +
      ". " +
      solution.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". " +
      start.word.toUpperCase() +
      " is the " +
      start.reason +
      " " +
      combination[index][0].word.toUpperCase() +
      ". " +
      end.word.toUpperCase() +
      " is the " +
      end.reason +
      " of " +
      combination[index + 1][0].word.toUpperCase() +
      ". " +
      start.word.toUpperCase() +
      "+" +
      end.word.toUpperCase() +
      " gives us " +
      solution.toUpperCase()
    );
  }

  /**
   * Generates all possible wordplays for each word in the combination
   */
  generatePossibleWordplays() {
    const combination = this.combination;
    var searchArr = [];

    combination.forEach(currentElement => {
      var currentArr = [];
      currentArr.push({ word: currentElement, reason: "same as" });
      currentArr.push({ word: currentElement[0], reason: "initial letter of" });
      currentArr.push({
        word: currentElement[currentElement.length - 1],
        reason: "final letter of"
      });
      var synonyms = getSynonyms(this.query, currentElement);
      synonyms.forEach(currentSynonym => {
        currentArr.push({
          word: currentSynonym,
          reason: "synonym of"
        });
      });
      searchArr.push(currentArr);
    });

    this.searchArr = searchArr;
  }
}
module.exports = GeneralSolution;
