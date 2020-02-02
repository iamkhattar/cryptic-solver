const fs = require("fs");

/**
 *
 * @param cache : Current Response from API
 *
 * saveToCache() saves the current API call to cache for further reuse
 */
function saveToCache(cache) {
  var cacheObject = JSON.stringify(cache);
  fs.writeFileSync("./util/cache/cache.txt", cacheObject);
}

module.exports = saveToCache;
