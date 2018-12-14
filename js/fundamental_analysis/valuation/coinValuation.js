var chain = require('../chainInteraction')

async function computeEPC(dao, income) {

  var coinsAmount = await chain.getCoinsAmount(dao)

  var netIncome = await chain.getNetIncomeAfterTaxes(income)

  return netIncome / coinsAmount

}

async function getEquityPercentOfMarketPrice(dao, balance) {

  var marketPrice = await chain.getMarketPrice(dao)

  var liabilities = await chain.getLiability(balance, 'totalLiabilities')

  var assets = await chain.getAsset(balance, 'totalAssets')

  return (assets - liabilities) * 100 / marketPrice

}

async function getBookValue(dao, balance) {

  var liabilities = await chain.getLiability(balance, 'totalLiabilities')

  var assets = await chain.getAsset(balance, 'totalAssets')

  return assets - liabilities

}

async function getBookValuePerCoin(dao, balance) {

  var liabilities = await chain.getLiability(balance, 'totalLiabilities')

  var assets = await chain.getAsset(balance, 'totalAssets')

  var coinsAmount = await chain.getCoinsAmount(dao)

  return (assets - liabilities) / coinsAmount

}

async function acidTestResult(balance) {

  var cashAmount = await chain.getAsset(balance, "cash")

  var accountsReceivable = await chain.getAsset(balance, "accountsReceivable")

  var shortTermInvestments = await chain.getLiability(balance, "shortTermInvestments")

  var totalLiabilities = await chain.getLiability(balance, "totalLiabilities")

  return (cashAmount + accountsReceivable + shortTermInvestments) / totalLiabilities

}

async function getMarketPricePerCoin(dao) {

  var marketPrice = await chain.getMarketPrice(dao)

  var coinsAmount = await chain.getCoinsAmount(dao)

  return marketPrice / coinsAmount

}

async function getEarningsPerCoin(dao, income) {

  var coinsAmount = await chain.getCoinsAmount(dao)

  var netIncome = await chain.getNetIncomeAfterTaxes(income)

  return netIncome / coinsAmount

}

async function getMarketValuePerCoin(dao) {

  var marketPrice = await chain.getMarketPrice(dao)

  var coinsAmount = await chain.getCoinsAmount(dao)

  return marketPrice / coinsAmount

}

async function getReturnOnEquity(dao, income, balance) {

  var epc = await getEarningsPerCoin(dao, income)

  var bvpc = await getBookValuePerCoin(dao, balance)

  return epc / bvpc

}

async function getPE(dao, income) {

  var marketPricePerCoin = await getMarketValuePerCoin(dao)

  var epc = await computeEPC(dao, income)

  return marketPricePerCoin / epc

}

//For the last quarter

async function getQuaterlyExpectedReturn(dao, income) {

  var marketPrice = await chain.getMarketPrice(dao)

  var netIncome = await chain.getNetIncomeAfterTaxes(income)

  return (netIncome * 100) / marketPrice

}

async function getYearlyExpectedReturn(dao, income1, income2, income3, income4) {

  var marketPrice = await chain.getMarketPrice(dao)

  var netIncome1 = await chain.getNetIncomeAfterTaxes(income1)

  var netIncome2 = await chain.getNetIncomeAfterTaxes(income2)

  var netIncome3 = await chain.getNetIncomeAfterTaxes(income3)

  var netIncome4 = await chain.getNetIncomeAfterTaxes(income4)

  return (netIncome1 + netIncome2 + netIncome3 + netIncome4) * 100 / marketPrice

}

async function getPriceToBookRatio(dao, balance) {

  var price = await getMarketPricePerCoin(dao)

  var bookValue = await getBookValue(dao, balance)

  var coinsAmount = await chain.getCoinsAmount(dao)

  return price / bookValue / coinsAmount

}

async function getCoinSafety(dao, balance) {

  var price = await getMarketPricePerCoin(dao)

  var bookValue = await getBookValue(dao, balance)

  var coinsAmount = await chain.getCoinsAmount(dao)

  var pbv = price / bookValue / coinsAmount

  return (1 / pbv) * 100

}

async function getEquity(balance) {

  var liabilities = await chain.getLiability(balance, 'totalLiabilities')

  var assets = await chain.getAsset(balance, 'totalAssets')

  return assets - liabilities

}

//Quick coin valuation tool, modeled after the valuation tool used by B. Graham and W. Buffet to assess stocks

async function getQCV(dao, balance, income) {

  var bv = await getPriceToBookRatio(dao, balance)

  var pe = await getPE(dao, income)

  return pe * bv

}

async function getDebtToEquity(balance) {

  var equity = await getEquity(balance)

  var liabilities = await chain.getLiability(balance, 'totalLiabilities')

  return liabilities / equity

}

async function getCurrentRatio(balance) {

  var liabilities = await chain.getLiability(balance, 'currentLiabilities')

  var assets = await chain.getAsset(balance, 'currentAssets')

  return assets / liabilities

}

async function getQuarterlyBookValueChange(oldBook, nrQuarters, dao, balance) {

  var currentBookValue = await getBookValue(dao, balance)

  var upper = 1 / nrQuarters

  var base = currentBookValue / oldBook

  var a = Math.pow(base, upper)

  return 100 * (a - 1)

}

async function getYearlyBookValueChange(oldBook, nrYears, dao, balance1, balance2, balance3, balance4) {

  var currentBookValue1 = await getBookValue(dao, balance1)

  var currentBookValue2 = await getBookValue(dao, balance2)

  var currentBookValue3 = await getBookValue(dao, balance3)

  var currentBookValue4 = await getBookValue(dao, balance4)

  var totalBookValue = currentBookValue1 + currentBookValue2
                       + currentBookValue3 + currentBookValue4

  var upper = 1 / nrQuarters

  var base = totalBookValue / oldBook

  var a = Math.pow(base, upper)

  return 100 * (a - 1)

}

async function getIntrinsicValue(oldBook, nrYears, discountRate,
                                 dao, balance1, balance2, balance3, balance4,
                                 cashflow1, cashflow2, cashflow3, cashflow4) {

  var dividents1 = await chain.getTotalDividentsPaid(cashflow1)

  var dividents2 = await chain.getTotalDividentsPaid(cashflow2)

  var dividents3 = await chain.getTotalDividentsPaid(cashflow3)

  var dividents4 = await chain.getTotalDividentsPaid(cashflow4)

  var cashTakenOutOfBusiness = dividents1 + dividents2 + dividents3 + dividents4

  var bookValue = await getBookValue(dao, balance)

  var coinsAmount = await chain.getCoinsAmount(dao)

  var bookValueChange = await getYearlyBookValueChange(oldBook, nrYears, dao,
                        balance1, balance2, balance3, balance4)

  var perc = 1 + bookValueChange / coinsAmount / 100

  var base = Math.pow(perc, nrYears)

  var par = bookValue / coinsAmount * base

  var dRate = discountRate / 100

  var extra = Math.pow((1 + dRate), nrYears)

  return cashTakenOutOfBusiness * (1 - (1 / extra)) / dRate + par / extra

}

function getMarginOfSafety(income1, income2, income3, income4) {

  var margin1 = await chain.getNetIncomeAfterTaxes(income1)

  var margin2 = await chain.getNetIncomeAfterTaxes(income2)

  var margin3 = await chain.getNetIncomeAfterTaxes(income3)

  var margin4 = await chain.getNetIncomeAfterTaxes(income4)

  var marginArray = [margin2, margin3, margin4]

  var lowestMargin = margin1

  for (var i = 0; i < marginArray.length; i++) {

    if (marginArray[i] < lowestMargin) lowestMargin = marginArray[i]

  }

  return lowestMargin

}

module.exports = {

  getMarginOfSafety,
  getIntrinsicValue,
  getYearlyBookValueChange,
  getQuarterlyBookValueChange,
  getCurrentRatio,
  getDebtToEquity,
  getQCV,
  getEquity,
  getCoinSafety,
  getPriceToBookRatio,
  getYearlyExpectedReturn,
  getQuaterlyExpectedReturn,
  getPE,
  getMarketValuePerCoin,
  getEarningsPerCoin,
  getMarketPricePerCoin,
  acidTestResult,
  getBookValue,
  getEquityPercentOfMarketPrice,
  computeEPC,
  getReturnOnEquity,
  getBookValuePerCoin

}
