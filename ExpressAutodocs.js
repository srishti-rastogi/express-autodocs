const fs = require("fs");
const express = require("express");
const getAllAPICalls = require("./helpers/getAllAPICalls");
const createDocs = require("./helpers/templateHelpers/createDocs");
class ExpressAutodocs {
  static generateDocs(
    filepath,
    appname,
    routername,
    outputFormat,
    outputBranch,
    token = null,
    docsTitle
  ) {
    try {
      console.log(
        "\x1b[36m",
        "\x1b[1m",
        "✨ Initialized Express AutoDocs",
        "\x1b[0m"
      );
      const apis = getAllAPICalls(filepath, appname, routername);
      console.log("\x1b[36m", "\x1b[1m", "✨ Creating Docss ...", "\x1b[0m");
      createDocs(apis, outputFormat, outputBranch, token, docsTitle);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ExpressAutodocs;
