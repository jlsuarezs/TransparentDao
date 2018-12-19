var Web3 = require('web3');
var utils = require('ethereumjs-util')
var BigNumber = require('bignumber.js')

var incomeABI = require('./abi/IncomeStatement.js')
var balanceABI = require('./abi/BalanceSheet.js')
var cashflowABI = require('./abi/CashflowStatement.js')
var daoABI = require('./abi/Dao.js')
var daoBondABI = require('./abi/DAOBond.js')

var web3

var defaultGas = 6500000

if (typeof web3 !== 'undefined') {

    web3 = new Web3(web3.currentProvider);

} else {

    // Set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

}

//GENERAL UTILS

async function getCurrentBlockNr(callback) {

  web3.eth.getBlockNumber(function (err, blockNr) {

    if (err != undefined && err != null) return callback(err, undefined)

    return callback(undefined, blockNr)

  })

}

//GET CONTRACTS INSTANCES

async function getContract(pubKey, name, _addr) {

  if (name.toLowerCase() == 'income') {

    var income = new web3.eth.Contract(incomeABI.incomeStatement.abi, _addr,
      {from: pubKey.toString(), gas: defaultGas});

    return income

  } else if (name.toLowerCase() == 'balance') {

    var balance = new web3.eth.Contract(balanceABI.balanceSheet.abi, _addr,
      {from: pubKey.toString(), gas: defaultGas});

    return balance

  } else if (name.toLowerCase() == 'cashflow') {

    var cashflow = new web3.eth.Contract(cashflowABI.cashflowStatement.abi, _addr,
      {from: pubKey.toString(), gas: defaultGas});

    return cashflow

  } else if (name.toLowerCase() == 'dao') {

    var dao = new web3.eth.Contract(daoABI.dao.abi, _addr,
      {from: pubKey.toString(), gas: defaultGas});

    return dao

  } else if (name.toLowerCase() == 'daoBond') {

    var daoBond = new web3.eth.Contract(daoBondABI.daoBond.abi, _addr,
      {from: pubKey.toString(), gas: defaultGas});

    return daoBond

  } else return undefined

}

//DAO

async function getReportsLength(dao) {

  var length

  await dao.methods.getReportsLength().call(function(err, result) {

    if (err != undefined) {length = undefined; console.log(err)}

    else length = result

  });

  return length

}

async function getReportAtPosition(dao, position) {

  var report

  await dao.methods.getReportAtPosition(position).call(function(err, result) {

    if (err != undefined) {report = undefined; console.log(err)}

    else report = result

  });

  return report

}

async function getCoinsAmount(dao) {

  var coins

  await dao.methods.getCoinsAmount().call(function(err, result) {

    if (err != undefined) {coins = undefined; console.log(err)}

    else coins = result

  });

  return coins

}

async function getMarketPrice(dao) {

  var market

  await dao.methods.getMarketPrice().call(function(err, result) {

    if (err != undefined) {market = undefined; console.log(err)}

    else market = result

  });

  return market

}

async function getBondDebt(dao, startPosition, bondsNumber) {

  var debt

  await dao.methods.getBondDebt(startPosition, bondsNumber).call(function(err, result) {

    if (err != undefined) {debt = undefined; console.log(err)}

    else debt = result

  });

  return debt

}

//INCOME STATEMENT

async function getEPC(income) {

  var epc

  await income.methods.getEPC().call(function(err, result) {

    if (err != undefined) {epc = undefined; console.log(err)}

    else epc = result

  });

  return epc

}

async function getDetailedExpense(income, expense) {

  var exp

  await income.methods.getDetailedExpense(expense).call(function(err, result) {

    if (err != undefined) {exp = undefined; console.log(err)}

    else exp = result

  });

  return exp

}

async function getDetailedIncome(income, _inc) {

  var _income

  await income.methods.getDetailedIncome(_inc).call(function(err, result) {

    if (err != undefined) {_income = undefined; console.log(err)}

    else _income = result

  });

  return _income

}

async function getDetailedLoss(income, _loss) {

  var loss

  await income.methods.getDetailedLoss(_loss).call(function(err, result) {

    if (err != undefined) {loss = undefined; console.log(err)}

    else loss = result

  });

  return loss

}

async function getDetailedGain(income, _gain) {

  var gain

  await income.methods.getDetailedGain(_gain).call(function(err, result) {

    if (err != undefined) {gain = undefined; console.log(err)}

    else gain = result

  });

  return gain

}

async function getDetailedDonation(income, _donation) {

  var donation

  await income.methods.getDetailedDonation(_donation).call(function(err, result) {

    if (err != undefined) {donation = undefined; console.log(err)}

    else donation = result

  });

  return donation

}

async function getDetailedRD(income, _rd) {

  var rd

  await income.methods.getDetailedRD(_rd).call(function(err, result) {

    if (err != undefined) {rd = undefined; console.log(err)}

    else rd = result

  });

  return rd

}

async function getPrimaryExpenses(income) {

  var expenses

  await income.methods.getPrimaryExpenses().call(function(err, result) {

    if (err != undefined) {expenses = undefined; console.log(err)}

    else expenses = result

  });

  return expenses

}

async function getSecondaryExpenses(income) {

  var expenses

  await income.methods.getSecondaryExpenses().call(function(err, result) {

    if (err != undefined) {expenses = undefined; console.log(err)}

    else expenses = result

  });

  return expenses

}

async function getTotalExpenses(income) {

  var expenses

  await income.methods.getTotalExpenses().call(function(err, result) {

    if (err != undefined) {expenses = undefined; console.log(err)}

    else expenses = result

  });

  return expenses

}

async function getIncomeTaxExpenses(income) {

  var expenses

  await income.methods.getIncomeTaxExpenses().call(function(err, result) {

    if (err != undefined) {expenses = undefined; console.log(err)}

    else expenses = result

  });

  return expenses

}

async function getRDExpense(income) {

  var expenses

  await income.methods.getRDExpense().call(function(err, result) {

    if (err != undefined) {expenses = undefined; console.log(err)}

    else expenses = result

  });

  return expenses

}

async function getDonations(income) {

  var donations

  await income.methods.getDonations().call(function(err, result) {

    if (err != undefined) {donations = undefined; console.log(err)}

    else donations = result

  });

  return donations

}

async function getCostOfRevenue(income) {

  var cost

  await income.methods.getCostOfRevenue().call(function(err, result) {

    if (err != undefined) {cost = undefined; console.log(err)}

    else cost = result

  });

  return cost

}

async function getInterestExpense(income) {

  var expenses

  await income.methods.getInterestExpense().call(function(err, result) {

    if (err != undefined) {expenses = undefined; console.log(err)}

    else expenses = result

  });

  return expenses

}

async function getLosses(income) {

  var losses

  await income.methods.getLosses().call(function(err, result) {

    if (err != undefined) {losses = undefined; console.log(err)}

    else losses = result

  });

  return losses

}

async function getOperatingIncome(income) {

  var inc

  await income.methods.getOperatingIncome().call(function(err, result) {

    if (err != undefined) {inc = undefined; console.log(err)}

    else inc = result

  });

  return inc

}

async function getNonOperatingIncome(income) {

  var inc

  await income.methods.getNonOperatingIncome().call(function(err, result) {

    if (err != undefined) {inc = undefined; console.log(err)}

    else inc = result

  });

  return inc

}

async function getTotalGrossIncome(income) {

  var inc

  await income.methods.getTotalGrossIncome().call(function(err, result) {

    if (err != undefined) {inc = undefined; console.log(err)}

    else inc = result

  });

  return inc

}

async function getGains(income) {

  var gain

  await income.methods.getGains().call(function(err, result) {

    if (err != undefined) {gain = undefined; console.log(err)}

    else gain = result

  });

  return gain

}

async function getNetIncomeBeforeTaxes(income) {

  var inc

  await income.methods.getNetIncomeBeforeTaxes().call(function(err, result) {

    if (err != undefined) {inc = undefined; console.log(err)}

    else inc = result

  });

  return inc

}

async function getNetIncomeAfterTaxes(income) {

  var inc

  await income.methods.getNetIncomeAfterTaxes().call(function(err, result) {

    if (err != undefined) {inc = undefined; console.log(err)}

    else inc = result

  });

  return inc

}

async function getStartTime(income) {

  var time

  await income.methods.getStartTime().call(function(err, result) {

    if (err != undefined) {time = undefined; console.log(err)}

    else time = result

  });

  return time

}

async function getEndTime(income) {

  var time

  await income.methods.getEndTime().call(function(err, result) {

    if (err != undefined) {time = undefined; console.log(err)}

    else time = result

  });

  return time

}

//BALANCE SHEET

async function getMarginOfSafety(balance) {

  var margin

  await balance.methods.getMarginOfSafety().call(function(err, result) {

    if (err != undefined) {margin = undefined; console.log(err)}

    else margin = result

  });

  return margin

}

async function getAcidTestResult(balance) {

  var acid

  await balance.methods.getAcidTestResult().call(function(err, result) {

    if (err != undefined) {acid = undefined; console.log(err)}

    else acid = result

  });

  return acid

}

async function getAsset(balance, _asset) {

  var asset

  await balance.methods.getAsset(_asset).call(function(err, result) {

    if (err != undefined) {asset = undefined; console.log(err)}

    else asset = result

  });

  return asset

}

async function getLiability(balance, _lia) {

  var lia

  await balance.methods.getLiability(_lia).call(function(err, result) {

    if (err != undefined) {lia = undefined; console.log(err)}

    else lia = result

  });

  return lia

}

async function getEquity(balance, _equity) {

  var equity

  await balance.methods.getEquity(_equity).call(function(err, result) {

    if (err != undefined) {equity = undefined; console.log(err)}

    else equity = result

  });

  return equity

}

//CASHFLOW STATEMENT

async function getTotalDividentsPaid(cashflow) {

  var dividents

  await cashflow.methods.getTotalDividentsPaid().call(function(err, result) {

    if (err != undefined) {dividents = undefined; console.log(err)}

    else dividents = result

  });

  return dividents

}

async function getNetEarnings(cashflow) {

  var netEarnings

  await cashflow.methods.getNetEarnings().call(function(err, result) {

    if (err != undefined) {netEarnings = undefined; console.log(err)}

    else netEarnings = result

  });

  return netEarnings

}

async function getDepreciations(cashflow) {

  var depreciations

  await cashflow.methods.getDepreciations().call(function(err, result) {

    if (err != undefined) {depreciations = undefined; console.log(err)}

    else depreciations = result

  });

  return depreciations

}

async function getDeccInAcc(cashflow) {

  var decc

  await cashflow.methods.getDeccInAcc().call(function(err, result) {

    if (err != undefined) {decc = undefined; console.log(err)}

    else decc = result

  });

  return decc

}

async function getIncInAcc(cashflow) {

  var inc

  await cashflow.methods.getIncInAcc().call(function(err, result) {

    if (err != undefined) {inc = undefined; console.log(err)}

    else inc = result

  });

  return inc

}

async function getIncInTaxes(cashflow) {

  var inc

  await cashflow.methods.getIncInTaxes().call(function(err, result) {

    if (err != undefined) {inc = undefined; console.log(err)}

    else inc = result

  });

  return inc

}

async function getIncreaseInInventory(cashflow) {

  var inc

  await cashflow.methods.getIncreaseInInventory().call(function(err, result) {

    if (err != undefined) {inc = undefined; console.log(err)}

    else inc = result

  });

  return inc

}

async function getTotalEquipment(cashflow) {

  var equipment

  await cashflow.methods.getTotalEquipment().call(function(err, result) {

    if (err != undefined) {equipment = undefined; console.log(err)}

    else equipment = result

  });

  return equipment

}

async function getCharity(cashflow) {

  var charity

  await cashflow.methods.getCharity().call(function(err, result) {

    if (err != undefined) {charity = undefined; console.log(err)}

    else charity = result

  });

  return charity

}

async function getNonCurrentSalary(cashflow, pos) {

  var salary

  await cashflow.methods.getNonCurrentSalary(pos).call(function(err, result) {

    if (err != undefined) {salary = undefined; console.log(err)}

    else salary = result

  });

  return salary

}

async function getIncomeTax(cashflow, pos) {

  var tax

  await cashflow.methods.getIncomeTax(pos).call(function(err, result) {

    if (err != undefined) {tax = undefined; console.log(err)}

    else tax = result

  });

  return tax

}

async function getRent(cashflow, pos) {

  var rent

  await cashflow.methods.getRent(pos).call(function(err, result) {

    if (err != undefined) {rent = undefined; console.log(err)}

    else rent = result

  });

  return rent

}

async function getInterest(cashflow, pos) {

  var interest

  await cashflow.methods.getInterest(pos).call(function(err, result) {

    if (err != undefined) {interest = undefined; console.log(err)}

    else interest = result

  });

  return interest

}

async function getRecurrentSalary(cashflow, who) {

  var salary

  await cashflow.methods.getRecurrentSalary(who).call(function(err, result) {

    if (err != undefined) {salary = undefined; console.log(err)}

    else salary = result

  });

  return salary

}

async function getEquipmentDetails(cashflow, reason) {

  var equipment

  await cashflow.methods.getEquipmentDetails(reason).call(function(err, result) {

    if (err != undefined) {equipment = undefined; console.log(err)}

    else equipment = result

  });

  return equipment

}

//DAO Bond

async function getTerm(bond) {

  var term

  await bond.methods.getTerm().call(function(err, result) {

    if (err != undefined) {term = undefined; console.log(err)}

    else term = result

  });

  return term

}

async function getMaturity(bond) {

  var maturity

  await bond.methods.getMaturity().call(function(err, result) {

    if (err != undefined) {maturity = undefined; console.log(err)}

    else maturity = result

  });

  return maturity

}

async function getCouponRate(bond) {

  var rate

  await bond.methods.getCouponRate().call(function(err, result) {

    if (err != undefined) {rate = undefined; console.log(err)}

    else rate = result

  });

  return rate

}

async function getParValue(bond) {

  var par

  await bond.methods.getParValue().call(function(err, result) {

    if (err != undefined) {par = undefined; console.log(err)}

    else par = result

  });

  return par

}

async function getRemainingCoupons(bond, idBond) {

  var remaining

  await bond.methods.getRemainingCoupons(idBond).call(function(err, result) {

    if (err != undefined) {remaining = undefined; console.log(err)}

    else remaining = result

  });

  return remaining

}

async function getSimpleInterest(bond) {

  var interest

  await bond.methods.getSimpleInterest().call(function(err, result) {

    if (err != undefined) {interest = undefined; console.log(err)}

    else interest = result

  });

  return interest

}

module.exports = {

  web3,
  getContract,

  getCoinsAmount,
  getMarketPrice,

  getReportsLength,
  getReportAtPosition,
  getCoinsAmount,
  getBondDebt,

  getEndTime,
  getStartTime,
  getNetIncomeAfterTaxes,
  getNetIncomeBeforeTaxes,
  getGains,
  getTotalGrossIncome,
  getNonOperatingIncome,
  getOperatingIncome,
  getLosses,
  getInterestExpense,
  getCostOfRevenue,
  getDonations,
  getRDExpense,
  getIncomeTaxExpenses,
  getTotalExpenses,
  getSecondaryExpenses,
  getPrimaryExpenses,
  getDetailedRD,
  getDetailedDonation,
  getDetailedGain,
  getDetailedLoss,
  getDetailedIncome,
  getDetailedExpense,
  getEPC,

  getEquity,
  getLiability,
  getAsset,
  getAcidTestResult,
  getMarginOfSafety,

  getEquipmentDetails,
  getRecurrentSalary,
  getInterest,
  getRent,
  getIncomeTax,
  getNonCurrentSalary,
  getCharity,
  getTotalEquipment,
  getIncreaseInInventory,
  getIncInTaxes,
  getIncInAcc,
  getDeccInAcc,
  getDepreciations,
  getNetEarnings,
  getTotalDividentsPaid,

  getTerm,
  getMaturity,
  getCouponRate,
  getParValue,
  getRemainingCoupons,
  getSimpleInterest

}
