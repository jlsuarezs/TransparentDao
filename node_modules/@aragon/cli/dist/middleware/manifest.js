"use strict";

var path = require('path');

var fs = require('fs-extra');

var _require = require('../util'),
    findProjectRoot = _require.findProjectRoot;

module.exports = function manifestMiddleware(argv) {
  var runsInCwd = argv['_'] === 'init';

  if (!runsInCwd) {
    try {
      var manifestPath = path.resolve(findProjectRoot(), 'manifest.json');
      var manifest = fs.readJsonSync(manifestPath);
      return {
        manifest: manifest
      };
    } catch (err) {// argv.reporter.debug(err)
    }
  }

  return {};
};