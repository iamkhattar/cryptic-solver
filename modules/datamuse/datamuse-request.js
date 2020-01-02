"use strict";

const https = require("https");
const url = "https://api.datamuse.com/words?ml=";
/**
 * Module for querying Datamuse API
 */
module.exports = (urlOptions, data = "") => {
  const datamuseUrl = url + urlOptions;
  return new Promise((resolve, reject) => {
    const req = https.request(datamuseUrl, res => {
      let body = "";
      res.on("data", chunk => (body += chunk.toString()));
      res.on("error", reject);
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode <= 299) {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: body
          });
        } else {
          reject(
            "Request failed. status: " + res.statusCode + ", body: " + body
          );
        }
      });
    });
    req.on("error", reject);
    req.write(data, "binary");
    req.end();
  });
};
