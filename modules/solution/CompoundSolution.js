const checkMultipleIndicators = require("../compound/check-multiple-indicators");
const generatePossibleDefinitions = require("../definitions/generate-possible-definitions");
const HiddenCompoundSolution = require("../compound/HiddenCompoundSolution");
const getSynonyms = require("../thesaurus/get-synonyms");
const AnagramCompoundSolution = require("../compound/AnagramCompoundSolution");

class CompoundSolution {
  constructor(query, currentCombination) {
    this.query = query;
    this.currentCombination = currentCombination;
    this.possibleCombinations = [{ comb: currentCombination, reason: "" }];
    this.firstDefinitions = generatePossibleDefinitions(
      query,
      currentCombination[0]
    );
    this.lastDefinitions = generatePossibleDefinitions(
      query,
      currentCombination[currentCombination.length - 1]
    );
  }

  generateSolutions() {
    var solutionList = [];
    var indicators = checkMultipleIndicators(this.currentCombination);
    //Check if more than one indicator
    if (indicators.length > 1) {
      indicators = indicators.sort(
        (a, b) => parseInt(a.index) - parseInt(b.index)
      );
      //console.log("@@@");
      indicators.forEach(element => {
        //console.log(element);
      });
      var copy = indicators;
      for (var i = copy.length - 2; i >= 0; i--) {
        indicators.push(copy[i]);
      }
      indicators.forEach(currentIndex => {
        var ind = currentIndex.indicators;
        ind.forEach(currentIndicator => {
          if (currentIndicator.type == "reversal") {
            this.reverse(currentIndicator.indicator);
          }

          if (currentIndicator.type == "hidden") {
            var solutions = this.hidden(currentIndicator.indicator);
            solutions.forEach(currentElement => {
              if (!this.doesListContainSolution(solutionList, currentElement)) {
                solutionList.push(currentElement);
              }
            });
          }

          if (currentIndicator.type == "container") {
            var solutions = this.container(currentIndicator.indicator);
            solutions.forEach(currentElement => {
              if (!this.doesListContainSolution(solutionList, currentElement)) {
                solutionList.push(currentElement);
              }
            });
          }

          if (currentIndicator.type == "final") {
            this.final(currentIndicator.indicator);
          }

          if (currentIndicator.type == "initial") {
            this.initial(currentIndicator.indicator);
          }

          if (currentIndicator.type == "anagram") {
            var solutions = this.anagram(currentIndicator.indicator);
            solutions.forEach(currentElement => {
              if (!this.doesListContainSolution(solutionList, currentElement)) {
                solutionList.push(currentElement);
              }
            });
          }
        });
      });
    }
    return solutionList;
  }

  anagram(indicator) {
    var solutionList = [];
    this.possibleCombinations.forEach(comb => {
      var anagramCompoundSolution = new AnagramCompoundSolution(
        this,
        comb,
        indicator
      );
      var solutions = anagramCompoundSolution.generateSolution();
      solutions.forEach(currentElement => {
        if (!this.doesListContainSolution(solutionList, currentElement)) {
          solutionList.push(currentElement);
        }
      });
    });
    return solutionList;
  }

  container(indicator) {
    const ContainerCompoundSolution = require("../compound/ContainerCompoundSolution");
    var solutionList = [];
    const getContainers = require("../container/get-containers");
    this.possibleCombinations.forEach(curr => {
      if (curr.comb.includes(indicator)) {
        //console.log(curr.comb);
        var containerCompoundSolution = new ContainerCompoundSolution(
          this,
          curr,
          indicator
        );
        var solutions = containerCompoundSolution.generateSolution();
        solutions.forEach(currentElement => {
          if (!this.doesListContainSolution(solutionList, currentElement)) {
            solutionList.push(currentElement);
          }
        });
        var index = curr.comb.indexOf(indicator);
        if (index - 1 >= 0 && index + 1 < curr.comb.length) {
          var prev = curr.comb[index - 1];
          var next = curr.comb[index + 1];
          var firstSynonyms = getSynonyms(this.query, prev);
          var nextSynonyms = getSynonyms(this.query, next);
          //Direct Container
          var directContainers = getContainers(prev, next);
          directContainers.forEach(currentDirectContainer => {
            var currentArr = [];
            for (var i = 0; i < index - 1; i++) {
              currentArr.push(curr.comb[i]);
            }
            currentArr.push(currentDirectContainer);
            for (var i = index + 2; i < curr.comb.length; i++) {
              currentArr.push(curr.comb[i]);
            }

            var currentObject = {
              comb: currentArr,
              reason:
                indicator.toUpperCase() +
                " is a container indicator. We put " +
                prev.toUpperCase() +
                " in " +
                next.toUpperCase() +
                " we get " +
                currentDirectContainer.toUpperCase() +
                ". "
            };
            this.possibleCombinations.push(currentObject);
          });

          firstSynonyms.forEach(currentFirstSynonym => {
            var firstContainers = getContainers(currentFirstSynonym, next);
            firstContainers.forEach(currentFirstContainer => {
              var currentArr = [];
              for (var i = 0; i < index - 1; i++) {
                currentArr.push(curr.comb[i]);
              }
              currentArr.push(currentFirstContainer);
              for (var i = index + 2; i < curr.comb.length; i++) {
                currentArr.push(curr.comb[i]);
              }
              var currentObject = {
                comb: currentArr,
                reason:
                  indicator.toUpperCase() +
                  " is a container indicator. " +
                  currentFirstSynonym.toUpperCase() +
                  " is a synonym of " +
                  prev.toUpperCase() +
                  ". If we put " +
                  currentFirstSynonym.toUpperCase() +
                  " in " +
                  next.toUpperCase() +
                  " we get " +
                  currentFirstContainer.toUpperCase() +
                  ". "
              };
              this.possibleCombinations.push(currentObject);
            });
          });

          nextSynonyms.forEach(currentNextSynonym => {
            var nextContainers = getContainers(prev, currentNextSynonym);
            nextContainers.forEach(currentNextContainer => {
              var currentArr = [];
              for (var i = 0; i < index - 1; i++) {
                currentArr.push(curr.comb[i]);
              }
              currentArr.push(currentNextContainer);
              for (var i = index + 2; i < curr.comb.length; i++) {
                currentArr.push(curr.comb[i]);
              }
              var currentObject = {
                comb: currentArr,
                reason:
                  indicator.toUpperCase() +
                  " is a container indicator. " +
                  currentNextSynonym.toUpperCase() +
                  " is a synonym of " +
                  next.toUpperCase() +
                  ". If we put " +
                  prev.toUpperCase() +
                  " in " +
                  currentNextSynonym.toUpperCase() +
                  " we get " +
                  currentNextContainer.toUpperCase() +
                  ". "
              };
              this.possibleCombinations.push(currentObject);
            });
          });
        }
      }
    });
    return solutionList;
  }

  initial(indicator) {
    const getInitialLetters = require("../initial/initial-letters");
    this.possibleCombinations.forEach(curr => {
      if (curr.comb.includes(indicator)) {
        var index = curr.comb.indexOf(indicator);
        if (index - 1 >= 0) {
          var prevFin = getInitialLetters(curr.comb[index - 1]);
          var currentComb = [];
          for (var i = 0; i < index - 1; i++) {
            currentComb.push(curr.comb[i]);
          }
          currentComb.push(prevFin);
          for (var i = index + 1; i < curr.comb.length; i++) {
            currentComb.push(curr.comb[i]);
          }
          this.possibleCombinations.push({
            comb: currentComb,
            reason:
              "The Initial Letter indicator is " +
              indicator.toUpperCase() +
              ". Initial letters of " +
              curr.comb[index - 1].toUpperCase() +
              " is " +
              prevFin.toUpperCase() +
              ". "
          });
        }
        if (index + 1 < curr.comb.length) {
          var prevFin = getInitialLetters(curr.comb[index + 1]);
          var currentComb = [];
          for (var i = 0; i < index; i++) {
            currentComb.push(curr.comb[i]);
          }
          currentComb.push(prevFin);
          for (var i = index + 2; i < curr.comb.length; i++) {
            currentComb.push(curr.comb[i]);
          }
          this.possibleCombinations.push({
            comb: currentComb,
            reason:
              "The Initial Letter indicator is " +
              indicator.toUpperCase() +
              ". Initial letters of " +
              curr.comb[index + 1].toUpperCase() +
              " is " +
              prevFin.toUpperCase() +
              ". "
          });
        }
      }
    });
  }

  final(indicator) {
    const getFinalLetters = require("../final/final-letters");
    this.possibleCombinations.forEach(curr => {
      if (curr.comb.includes(indicator)) {
        var index = curr.comb.indexOf(indicator);
        if (index - 1 >= 0) {
          var prevFin = getFinalLetters(curr.comb[index - 1]);
          var currentComb = [];
          for (var i = 0; i < index - 1; i++) {
            currentComb.push(curr.comb[i]);
          }
          currentComb.push(prevFin);
          for (var i = index + 1; i < curr.comb.length; i++) {
            currentComb.push(curr.comb[i]);
          }
          this.possibleCombinations.push({
            comb: currentComb,
            reason:
              "The Final Letter indicator is " +
              indicator.toUpperCase() +
              ". Final letters of " +
              curr.comb[index - 1].toUpperCase() +
              " is " +
              prevFin.toUpperCase() +
              ". "
          });
        }
        if (index + 1 < curr.comb.length) {
          var prevFin = getFinalLetters(curr.comb[index + 1]);
          var currentComb = [];
          for (var i = 0; i < index; i++) {
            currentComb.push(curr.comb[i]);
          }
          currentComb.push(prevFin);
          for (var i = index + 2; i < curr.comb.length; i++) {
            currentComb.push(curr.comb[i]);
          }
          this.possibleCombinations.push({
            comb: currentComb,
            reason:
              "The Final Letter indicator is " +
              indicator.toUpperCase() +
              ". Final letters of " +
              curr.comb[index + 1].toUpperCase() +
              " is " +
              prevFin.toUpperCase() +
              ". "
          });
        }
      }
    });
  }

  hidden(indicator) {
    var solutionList = [];
    this.possibleCombinations.forEach(comb => {
      if (comb.comb.includes(indicator)) {
        var hiddenCompoundSolution = new HiddenCompoundSolution(
          this,
          comb,
          indicator
        );
        var solutions = hiddenCompoundSolution.generateSolution();
        solutions.forEach(currentElement => {
          if (!this.doesListContainSolution(solutionList, currentElement)) {
            solutionList.push(currentElement);
          }
        });
      }
    });
    return solutionList;
  }

  reverse(indicator) {
    const reversePhrase = require("../reversal/reverse-phrase");
    this.possibleCombinations.forEach(curr => {
      var currentPossibleCombination = curr.comb;
      for (var i = 0; i < currentPossibleCombination.length; i++) {
        var reversedPhrase = reversePhrase(currentPossibleCombination[i]);
        var createCombo = [];
        for (var j = 0; j < currentPossibleCombination.length; j++) {
          if (i == j) {
            createCombo.push(reversedPhrase);
          } else {
            createCombo.push(currentPossibleCombination[j]);
          }
        }
        var currentObject = {
          comb: createCombo,
          reason:
            curr.reason +
            indicator.toUpperCase() +
            " indicates a reversal. If we reverse " +
            currentPossibleCombination[i].toUpperCase() +
            " we get " +
            reversedPhrase.toUpperCase() +
            ". "
        };
        this.possibleCombinations.push(currentObject);
      }
    });
  }

  doesListContainSolution(solutionList, currentSolution) {
    var flag = false;
    solutionList.forEach(element => {
      if (
        element.solution.toUpperCase() == currentSolution.solution.toUpperCase()
      ) {
        flag = true;
      }
    });
    return flag;
  }
}

module.exports = CompoundSolution;
