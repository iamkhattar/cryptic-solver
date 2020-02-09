const fs = require("fs");

/**
 * saveToCache() saves the current API call to cache for further reuse
 * @param {Array} cache : Current Response from API
 */
function saveToCache(cache) {
  var cacheObject = JSON.stringify(cache);
  fs.writeFileSync("./util/cache/cache.txt", cacheObject);
}

module.exports = saveToCache;
