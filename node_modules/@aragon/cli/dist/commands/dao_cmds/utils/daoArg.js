"use strict";

var web3Utils = require('web3-utils');

module.exports = function (yargs) {
  return yargs.positional('dao', {
    description: 'Address of the Kernel or AragonID)',
    type: 'string'
  }).check(function (_ref) {
    var dao = _ref.dao;
    var isValidAragonID = /[a-z0-9]+\.eth/.test(dao);

    if (!(isValidAragonID || web3Utils.isAddress(dao))) {
      throw new Error("".concat(dao, " is not a valid DAO address or ENS name"));
    }

    return true;
  }, false);
};