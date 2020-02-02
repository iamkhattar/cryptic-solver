const loadCache = require("../cache/load-cache");
const knownDefinitions = require("../cryptic-definitions/known-definitions");

function getPercentage(definition, solution) {
  var known = knownDefinitions(definition);
  if (known != false) {
    if (known.includes(solution.toLowerCase())) {
      return 100;
    }
  }

  var percentage = 0;
  const cache = loadCache();
  const cacheElement = cache.filter(
    currentEl => currentEl.word == definition
  )[0];

  var solutionElement = cacheElement.synonyms;

  var max = 0;
  var current = 0;

  solutionElement.forEach(currentSolutionElement => {
    if (currentSolutionElement.score > max) {
      max = currentSolutionElement.score;
    }
    if (currentSolutionElement.word == solution.toLowerCase()) {
      current = currentSolutionElement.score;
    }
  });

  percentage = (current / max) * 100;

  percentage = percentage == 0 ? "1" : percentage;

  return percentage;
}

module.exports = getPercentage;
