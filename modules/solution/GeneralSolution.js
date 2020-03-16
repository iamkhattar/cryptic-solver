const getSynonyms = require("../thesaurus/get-synonyms");
const generatePossibleDefinitions = require("../definitions/generate-possible-definitions");

class GeneralSolution {
  constructor(query, currentCombination) {
    this.query = query;
    this.combination = currentCombination;
  }

  //Generates all general solutions and returns it
  generateSolutions() {
    var solutionList = [];

    //Generates All Possible wordplays for any given word in the combination
    this.generatePossibleWordplays();

    //Get all possible definitions when the first phrase is the definition
    var firstDefinitions = generatePossibleDefinitions(
      this.query,
      this.combination[0]
    );

    //Get all possible definitions when the last phrase is the definition
    var lastDefinitions = generatePossibleDefinitions(
      this.query,
      this.combination[this.combination.length - 1]
    );

    const combination = this.searchArr;

    //Generate Solutions
    var firstHelperSolutions = this.generateSolutionHelper(firstDefinitions, 0);
    var lastHelperSolutions = this.generateSolutionHelper(
      lastDefinitions,
      combination.length - 1
    );

    solutionList = solutionList.concat(firstHelperSolutions);
    solutionList = solutionList.concat(lastHelperSolutions);

    return solutionList;
  }

  /**
   * generateSolutionHelper() generates all possible general solutions for a given combination
   * @param {Array} definitions List of definitions
   * @param {Integer} definitionIndex index of definition in phrase
   */
  generateSolutionHelper(definitions, definitionIndex) {
    var solutionList = [];
    const combination = this.searchArr;
    var start, end;
    if (definitionIndex == 0) {
      start = 1;
      end = combination.length;
    } else {
      start = 0;
      end = definitionIndex;
    }

    var definitionWord = this.combination[definitionIndex].toUpperCase();
    for (var i = start; i < end; i++) {
      //Get Starting Word
      var startingWord = combination[i];
      //Generate Combinations for each wordplay
      startingWord.forEach(currentStartingWord => {
        //Check if index of next word is inbound
        if (i + 1 < end) {
          var secondWord = combination[i + 1];

          //Discard Words that arent possible
          secondWord = secondWord.filter(
            en =>
              this.query.length - currentStartingWord.word.length >=
              en.word.length
          );

          //Check Each Combination
          secondWord.forEach(currentSecondWord => {
            var possibleSolution =
              currentStartingWord.word + currentSecondWord.word;

            //If the solution includes in the possible definitions it is one of the answers
            if (
              definitions.includes(possibleSolution) &&
              currentStartingWord.word.toUpperCase() != "" &&
              currentSecondWord.word.toUpperCase() != ""
            ) {
              var reasonString =
                "This is a General Clue. The definition is " +
                definitionWord +
                ". " +
                possibleSolution.toUpperCase() +
                " is a synonym of " +
                definitionWord +
                ". ";

              var firstChangeReason = this.getChangeReason(
                this.combination[i],
                currentStartingWord
              );

              var secondChangeReason = this.getChangeReason(
                this.combination[i + 1],
                currentSecondWord
              );

              reasonString += firstChangeReason;
              reasonString += secondChangeReason;

              reasonString +=
                currentStartingWord.word.toUpperCase() +
                "+" +
                currentSecondWord.word.toUpperCase() +
                " gives us " +
                possibleSolution.toUpperCase();

              var currentSolution = {
                solution: possibleSolution.toUpperCase(),
                def: definitionWord.toLowerCase(),
                reason: reasonString,
                int: "general-clue",
                percentage: 0
              };
              solutionList.push(currentSolution);
            }

            //Check if next index in bound
            if (i + 2 < end) {
              var thirdWord = combination[i + 2];
              //Discard Words that arent possible
              thirdWord = thirdWord.filter(
                en =>
                  this.query.length -
                    currentStartingWord.word.length -
                    currentSecondWord.word.length >=
                  en.word.length
              );

              //Check if any solution is possible with each of the possible combinations
              thirdWord.forEach(currentThirdWord => {
                var possibleSolution =
                  currentStartingWord.word +
                  currentSecondWord.word +
                  currentThirdWord.word;

                //If the solution includes in the possible definitions it is one of the answers
                if (
                  definitions.includes(possibleSolution) &&
                  currentStartingWord.word.toUpperCase() != ""
                ) {
                  var count = 0;
                  if (currentStartingWord.word == "") count++;
                  if (currentSecondWord.word == "") count++;
                  if (currentThirdWord.word == "") count++;
                  if (count < 2) {
                    var reasonString =
                      "This is a General Clue. The definition is " +
                      definitionWord +
                      ". " +
                      possibleSolution.toUpperCase() +
                      " is a synonym of " +
                      definitionWord +
                      ". ";
                    var firstChangeReason = this.getChangeReason(
                      this.combination[i],
                      currentStartingWord
                    );

                    var secondChangeReason = this.getChangeReason(
                      this.combination[i + 1],
                      currentSecondWord
                    );

                    var thirdReasonChange = this.getChangeReason(
                      this.combination[i + 2],
                      currentThirdWord
                    );

                    reasonString += firstChangeReason;
                    reasonString += secondChangeReason;
                    reasonString += thirdReasonChange;

                    reasonString +=
                      currentStartingWord.word.toUpperCase() + "+";
                    if (currentSecondWord.word != "") {
                      reasonString +=
                        currentSecondWord.word.toUpperCase() + "+";
                    }
                    if (currentThirdWord.word != "") {
                      reasonString += currentThirdWord.word.toUpperCase();
                    }
                    reasonString +=
                      " gives us " + possibleSolution.toUpperCase();

                    var currentSolution = {
                      solution: possibleSolution.toUpperCase(),
                      def: definitionWord.toLowerCase(),
                      reason: reasonString,
                      int: "general-clue",
                      percentage: 0
                    };
                    solutionList.push(currentSolution);
                  }
                }

                //Check if next index in bound
                if (i + 3 < end) {
                  var finalWord = combination[i + 3];
                  //Discard Words that arent possible
                  finalWord = finalWord.filter(
                    en =>
                      this.query.length -
                        currentStartingWord.word.length -
                        currentSecondWord.word.length -
                        currentThirdWord.word.length ==
                      en.word.length
                  );

                  //Check if any solution is possible with each of the possible combinations
                  finalWord.forEach(currentFinalWord => {
                    var possibleSolution =
                      currentStartingWord.word +
                      currentSecondWord.word +
                      currentThirdWord.word +
                      currentFinalWord.word;

                    //If the solution includes in the possible definitions it is one of the answers
                    if (
                      definitions.includes(possibleSolution) &&
                      currentStartingWord.word.toUpperCase() != ""
                    ) {
                      var countt = 0;
                      if (currentStartingWord.word == "") countt++;
                      if (currentSecondWord.word == "") countt++;
                      if (currentThirdWord.word == "") countt++;
                      if (currentFinalWord.word == "") countt++;
                      if (countt < 3) {
                        var reasonString =
                          "This is a General Clue. The definition is " +
                          definitionWord +
                          ". " +
                          possibleSolution.toUpperCase() +
                          " is a synonym of " +
                          definitionWord +
                          ". ";
                        var firstChangeReason = this.getChangeReason(
                          this.combination[i],
                          currentStartingWord
                        );

                        var secondChangeReason = this.getChangeReason(
                          this.combination[i + 1],
                          currentSecondWord
                        );

                        var thirdReasonChange = this.getChangeReason(
                          this.combination[i + 2],
                          currentThirdWord
                        );

                        var finalReasonChange = this.getChangeReason(
                          this.combination[i + 3],
                          currentFinalWord
                        );

                        reasonString += firstChangeReason;
                        reasonString += secondChangeReason;
                        reasonString += thirdReasonChange;
                        reasonString += finalReasonChange;

                        reasonString +=
                          currentStartingWord.word.toUpperCase() + "+";
                        if (currentSecondWord.word != "") {
                          reasonString +=
                            currentSecondWord.word.toUpperCase() + "+";
                        }
                        if (currentThirdWord.word != "") {
                          reasonString +=
                            currentThirdWord.word.toUpperCase() + "+";
                        }
                        if (currentFinalWord != "") {
                          reasonString += currentFinalWord.word.toUpperCase();
                        }

                        reasonString +=
                          " gives us " + possibleSolution.toUpperCase();

                        var currentSolution = {
                          solution: possibleSolution.toUpperCase(),
                          def: definitionWord.toLowerCase(),
                          reason: reasonString,
                          int: "general-clue",
                          percentage: 0
                        };
                        solutionList.push(currentSolution);
                      }
                    }
                  });
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
   * Generates the reason string for the word transformation
   * @param {String} word : Intial Word
   * @param {String} currentWord : Changed Word
   */
  getChangeReason(word, currentWord) {
    if (
      currentWord.reason == "initial letter" ||
      currentWord.reason == "synonym" ||
      currentWord.reason == "anagram" ||
      currentWord.reason == "final letter" ||
      currentWord.reason == "even letter" ||
      currentWord.reason == "odd letter" ||
      currentWord.reason == "word without the first letter" ||
      currentWord.reason == "word without the last letter" ||
      currentWord.reason == "word without the middle letters" ||
      currentWord.reason == "reversal" ||
      currentWord.reason == "word without the first and last letters"
    ) {
      return (
        currentWord.word.toUpperCase() +
        " is the " +
        currentWord.reason +
        " of " +
        word.toUpperCase() +
        ". "
      );
    } else if (currentWord.reason == "same as") {
      return (
        currentWord.word.toUpperCase() +
        " remains " +
        currentWord.word.toUpperCase() +
        ". "
      );
    } else if (currentWord.reason == "nothing") {
      return word.toUpperCase() + " is a joining word. ";
    } else {
      return "";
    }
  }

  /**
   * Generates all possible wordplays for each word in the combination
   */
  generatePossibleWordplays() {
    const combination = this.combination;

    var searchArr = [];
    const getInitialLetters = require("../initial/initial-letters");
    const getFinalLetters = require("../final/final-letters");
    const getOddLetters = require("../alternate/odd-letters");
    const getEvenLetters = require("../alternate/even-letters");
    const deleteFirstLetter = require("../deletion/delete-first-letter");
    const deleteLastLetter = require("../deletion/delete-last-letter");
    const deleteMiddleLetters = require("../deletion/delete-middle-letters");
    const deleteFirstAndLastLetter = require("../deletion/delete-first-and-last-letter");
    const reversePhrase = require("../reversal/reverse-phrase");

    combination.forEach(currentElement => {
      var currentArr = [];
      currentArr.push({ word: currentElement, reason: "same as" });

      currentArr.push({
        word: getInitialLetters(currentElement),
        reason: "initial letter"
      });
      currentArr.push({
        word: reversePhrase(currentElement),
        reason: "reversal"
      });
      currentArr.push({
        word: deleteFirstLetter(currentElement),
        reason: "word without the first letter"
      });
      currentArr.push({
        word: deleteLastLetter(currentElement),
        reason: "word without the last letter"
      });
      currentArr.push({
        word: deleteMiddleLetters(currentElement),
        reason: "word without the middle letters"
      });
      currentArr.push({
        word: deleteFirstAndLastLetter(currentElement),
        reason: "word without the first and last letters"
      });
      currentArr.push({
        word: getFinalLetters(currentElement),
        reason: "final letter"
      });
      currentArr.push({
        word: getOddLetters(currentElement),
        reason: "odd letter"
      });
      currentArr.push({
        word: getEvenLetters(currentElement),
        reason: "even letter"
      });
      currentArr.push({
        word: "",
        reason: "nothing"
      });
      /**
      var anagrams = generateAnagrams(currentElement);
      anagrams.forEach(currentAnagram => {
        currentArr.push({
          word: currentAnagram,
          reason: "anagram of"
        });
      }); */
      var synonyms = getSynonyms(this.query, currentElement);

      synonyms.forEach(currentSynonym => {
        currentArr.push({
          word: currentSynonym,
          reason: "synonym"
        });
      });
      searchArr.push(currentArr);
    });

    this.searchArr = searchArr;
  }
}
module.exports = GeneralSolution;
