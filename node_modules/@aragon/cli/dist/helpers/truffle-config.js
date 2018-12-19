"use strict";

var fs = require('fs');

var _require = require('../util'),
    findProjectRoot = _require.findProjectRoot;

var getTruffleConfig = function getTruffleConfig() {
  try {
    if (fs.existsSync("".concat(findProjectRoot(), "/truffle.js"))) {
      var truffleConfig = require("".concat(findProjectRoot(), "/truffle"));

      return truffleConfig;
    }

    if (fs.existsSync("".concat(findProjectRoot(), "/truffle-config.js"))) {
      var _truffleConfig = require("".concat(findProjectRoot(), "/truffle-config.js"));

      return _truffleConfig;
    }
  } catch (err) {
    console.log(err); // This means you are running init

    return null;
  }

  throw new Error("Didn't find any truffle.js file");
};

var getENSAddress = function getENSAddress(network) {
  var truffleConfig = getTruffleConfig();
  var def = '0xB9462EF3441346dBc6E49236Edbb0dF207db09B7';

  if (!truffleConfig) {
    return def;
  }

  if (truffleConfig.networks[network].ens) {
    return truffleConfig.networks[network].ens;
  } else {
    return def; // throw new Error(`No ENS address found for network ${network} in truffle.js`)
  }
};

module.exports = {
  getTruffleConfig: getTruffleConfig,
  getENSAddress: getENSAddress
};