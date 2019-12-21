const moby = require("moby");
const datamuse = require("datamuse");

/**
 *
 * @param uniquePhrases : phrases for which synonyms have to be generated
 * @return : list of word and synonym
 */
async function getWordplays(uniquePhrases) {
  var promiseArray = new Array();
  uniquePhrases.forEach(currentPhrase => {
    promiseArray.push(datamuse.words({ ml: currentPhrase }));
  });

  var p = await Promise.all(promiseArray);

  var solution = new Array();
  for (var i = 0; i < p.length; i++) {
    var currentSolution = new Array();
    var synonyms = new Array();
    var currentWord = uniquePhrases[i];

    var search = moby.search(currentWord);
    var rev = moby.reverseSearch(currentWord);
    var currentData = p[i];

    if (search != undefined) {
      search.forEach(element => {
        if (!synonyms.includes(element)) synonyms.push(element);
      });
    }

    if (rev != undefined) {
      rev.forEach(element => {
        if (!synonyms.includes(element)) synonyms.push(element);
      });
    }

    currentData.forEach(element => {
      if (!synonyms.includes(element.word)) synonyms.push(element.word);
    });

    currentSolution["word"] = currentWord;
    currentSolution["synonyms"] = synonyms;
    solution.push(currentSolution);
  }

  return solution;
}

module.exports = getWordplays;
