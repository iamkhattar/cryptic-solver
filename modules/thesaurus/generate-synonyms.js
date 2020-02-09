const moby = require("moby");
const datamuse = require("../datamuse/datamuse-request");
const splitWords = require("../format/split-words");
const isListAvailable = require("../lists/check-lists");
const getKnownDefinition = require("../cryptic-definitions/known-definitions");
const saveCache = require("../cache/save-cache");

/**
 * generateSynonyms() Returns synonyms for all phrases in this class
 * @param {Query} query : Query Class
 */
async function generateSynonyms(query) {
  var synonymList = new Array();

  var queryArray = new Array();
  var nonQueryArray = new Array();

  const uniquePhrases = query.uniquePhrases;

  //Seperate phrases which are over 4 words. These phrases do not have to be queried
  for (currentUniquePhrase of uniquePhrases) {
    var currentLength = splitWords(currentUniquePhrase).length;
    currentLength > query.allowedPhraseLength
      ? nonQueryArray.push(currentUniquePhrase)
      : queryArray.push(currentUniquePhrase);
  }

  var promiseArray = new Array();
  //Call Datamuse for each phrase that needs to be queried
  queryArray.forEach(currentPhrase => {
    promiseArray.push(datamuse(currentPhrase));
  });

  //Asynchronously Resolve the promises
  var resolvedPromises = await Promise.all(promiseArray);

  //Declare Cache Array
  var cache = new Array();

  for (var i = 0; i < resolvedPromises.length; i++) {
    var currentSolution = {};
    var synonyms = new Array();
    var currentWord = queryArray[i];

    //Parse Datamuse Response
    var datamuseRes = JSON.parse(resolvedPromises[i].body);
    //Add Datamuse Response to Synonym Array
    datamuseRes.forEach(currentDatamuseResponse => {
      if (!synonyms.includes(currentDatamuseResponse.word))
        synonyms.push(currentDatamuseResponse.word);
    });

    //Query Moby Thesaurus for Current Phrase
    var search = moby.search(currentWord);
    var reverse = moby.reverseSearch(currentWord);

    //Add Moby Search to Synonym Array
    if (search != undefined) {
      search.forEach(currentElement => {
        if (!synonyms.includes(currentElement)) synonyms.push(currentElement);
      });
    }

    //Add Moby Reverse Search to Synonym Array
    if (reverse != undefined) {
      reverse.forEach(currentElement => {
        if (!synonyms.includes(currentElement)) synonyms.push(currentElement);
      });
    }

    //Check if word corresponds to any available lists
    var list = isListAvailable(currentWord);
    if (list) {
      list.forEach(currentElement => {
        if (!synonyms.includes(currentElement)) synonyms.push(currentElement);
      });
    }

    //Check if word available in known definitions
    var knownDefinition = getKnownDefinition(currentWord);
    if (knownDefinition) {
      knownDefinition.forEach(currentElement => {
        if (!synonyms.includes(currentElement)) synonyms.push(currentElement);
      });
    }

    //Add Current Solution to synonym list
    currentSolution.word = currentWord;
    currentSolution.synonyms = synonyms;
    synonymList.push(currentSolution);

    //Add CurrentElement to Cache
    var currentCacheObj = {
      word: currentWord,
      synonyms: JSON.parse(resolvedPromises[i].body)
    };

    cache.push(currentCacheObj);
  }

  //Add all phrases which havent been queried to cache
  nonQueryArray.forEach(currentNonQueryPhrase => {
    var currentCacheObject = {
      word: currentNonQueryPhrase,
      synonyms: []
    };
    cache.push(currentCacheObject);
    synonymList.push(currentCacheObject);
  });

  saveCache(cache);

  return synonymList;
}

module.exports = generateSynonyms;
