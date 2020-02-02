const fs = require("fs");

/**
 * loadFromCache() loads the cache and parses it
 */
function loadFromCache() {
  const stringBuffer = fs.readFileSync("./util/cache/cache.txt").toString();
  const parsedBuffer = JSON.parse(stringBuffer);
  return parsedBuffer;
}

module.exports = loadFromCache;
