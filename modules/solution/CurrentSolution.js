const generatePossibleDefinitions = require("../definitions/generate-possible-definitions");

const checkHiddenIndicator = require("../hidden/check-hidden-indicator");
const HiddenSolutions = require("../hidden/HiddenSolutions");

const checkReversalIndicator = require("../reversal/check-reversal-indicator");
const ReversalSolutions = require("../reversal/ReversalSolutions");

const checkAnagramIndicator = require("../anagram/check-anagram-indicator");
const AnagramSolutions = require("../anagram/AnagramSolutions");

const checkInitialIndicator = require("../initial/check-initial-indicator");
const InitialSolutions = require("../initial/InitialSolutions");

const checkFinalIndicator = require("../final/check-final-indicator");
const FinalSolutions = require("../final/FinalSolutions");

const checkContainerIndicator = require("../container/check-container-indicator");
const ContainerSolutions = require("../container/ContainerSolutions");

const checkDeletionIndicator = require("../deletion/check-deletion-indicator");
const DeletionSolutions = require("../deletion/DeletionSolutions");

const AlternateSolutions = require("../alternate/AlternateSolutions");

const DoubleDefinitionSolution = require("../double-definition/DoubleDefinitionSolutions");

class CurrentSolution {
  constructor(query, currentCombination) {
    this.query = query;
    this.currentCombination = currentCombination;
    this.firstDefinitions = generatePossibleDefinitions(
      query,
      currentCombination[0]
    );
    this.lastDefinitions = generatePossibleDefinitions(
      query,
      currentCombination[currentCombination.length - 1]
    );
  }

  //getCurrentSolution() generates the solution for the current combination
  getCurrentSolution() {
    var solutionList = new Array();

    //Check if Combination has Hidden Indicator
    var hiddenIndicator = checkHiddenIndicator(this.currentCombination);
    if (hiddenIndicator) {
      //If a Hidden Indicator is found then generate all possible Hidden Solutions
      var hiddenSolutions = new HiddenSolutions(this, hiddenIndicator);
      var solutions = hiddenSolutions.generateSolution();

      //Add all the solution to the final list
      solutions.forEach(currentHiddenSolutions => {
        if (
          !this.doesListContainSolution(solutionList, currentHiddenSolutions)
        ) {
          solutionList.push(currentHiddenSolutions);
        }
      });
    }

    //Check if Combination has Reversal Indicator
    var reversalIndicator = checkReversalIndicator(this.currentCombination);
    if (reversalIndicator) {
      //If a Reversal Indicator is found then generate all possible Reveral Solutions
      var reversalSolutions = new ReversalSolutions(this, reversalIndicator);
      var solutions = reversalSolutions.generateSolution();

      //Add all the solution to the final list
      solutions.forEach(currentReversalSolution => {
        if (
          !this.doesListContainSolution(solutionList, currentReversalSolution)
        ) {
          solutionList.push(currentReversalSolution);
        }
      });
    }

    //Check if Combination Has Anagram Indicator
    var anagramIndicator = checkAnagramIndicator(this.currentCombination);
    if (anagramIndicator) {
      //If a Anagram Indicator is found then generate all possible Anagram Solutions
      var anagramSolutions = new AnagramSolutions(this, anagramIndicator);
      var solutions = anagramSolutions.generateSolution();

      //Add all the solution to the final list
      solutions.forEach(currentAnagramSolution => {
        if (
          !this.doesListContainSolution(solutionList, currentAnagramSolution)
        ) {
          solutionList.push(currentAnagramSolution);
        }
      });
    }

    //Check if Combination has Initial Letter Indicator
    var initialIndicator = checkInitialIndicator(this.currentCombination);
    if (initialIndicator) {
      //If an Initial Indicator is found then generate all possible Initial letter Solutions
      var initialSolutions = new InitialSolutions(this, initialIndicator);
      var solutions = initialSolutions.generateSolution();
      //Add all the solution to the final list
      solutions.forEach(currentInitialLetterSolution => {
        if (
          !this.doesListContainSolution(
            solutionList,
            currentInitialLetterSolution
          )
        ) {
          solutionList.push(currentInitialLetterSolution);
        }
      });
    }

    //Check if Combination has Final Letter Indicator
    var finalIndicator = checkFinalIndicator(this.currentCombination);
    if (finalIndicator) {
      //If a Final Indicator is found then generate all possible Final letter Solutions
      var finalSolutions = new FinalSolutions(this, finalIndicator);
      var solutions = finalSolutions.generateSolution();

      //Add all the solutions to the final list
      solutions.forEach(currentFinalLetterSolution => {
        if (
          !this.doesListContainSolution(
            solutionList,
            currentFinalLetterSolution
          )
        ) {
          solutionList.push(currentFinalLetterSolution);
        }
      });
    }

    //Check if Combination has Deletion Indicator
    var deletionIndicator = checkDeletionIndicator(this.currentCombination);
    if (deletionIndicator) {
      //If a deletion indicator is found then generate all possible deletion Solutions
      var deletionSolutions = new DeletionSolutions(this, deletionIndicator);
      var solutions = deletionSolutions.generateSolution();

      //Add all the solutions to the final list
      solutions.forEach(currentDeletionSolution => {
        if (
          !this.doesListContainSolution(solutionList, currentDeletionSolution)
        ) {
          solutionList.push(currentDeletionSolution);
        }
      });
    }

    //Check if Combination has Container Indicator
    var containerIndicator = checkContainerIndicator(this.currentCombination);
    if (containerIndicator) {
      var containerSolutions = new ContainerSolutions(this, containerIndicator);
      var solutions = containerSolutions.generateSolutions();
      solutions.forEach(currentContainerSolution => {
        if (
          !this.doesListContainSolution(solutionList, currentContainerSolution)
        ) {
          solutionList.push(currentContainerSolution);
        }
      });
    }

    //Check if Alternate Letter Solutions are possible
    var altSolutions = new AlternateSolutions(this).generateSolutions();
    altSolutions.forEach(currentAltSol => {
      if (!this.doesListContainSolution(solutionList, currentAltSol)) {
        solutionList.push(currentAltSol);
      }
    });

    //If combination has only 2 phrases check for double definitions
    if (this.currentCombination.length == 2) {
      //Generate All Double Definition Solutions
      var solutions = new DoubleDefinitionSolution(this).generateSolution();
      solutions.forEach(currentDoubleDefinitionSolution => {
        if (
          !this.doesListContainSolution(
            solutionList,
            currentDoubleDefinitionSolution
          )
        ) {
          solutionList.push(currentDoubleDefinitionSolution);
        }
      });
    }

    return solutionList;
  }

  /**
   * doesListContainSolution() Checks whether a given solution is present in a list
   * @param {Array} solutionList : List to be checked
   * @param {Object} currentSolution : Solution to be checked in list
   *
   */
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

module.exports = CurrentSolution;
