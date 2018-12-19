var chain = require('../chainInteraction')

async function getRemainingSimpleInterest(bond, idBond) {

  var remainingCoupons = await chain.getRemainingCoupons(bond, idBond)

  var interest = await chain.getSimpleInterest(bond)

  return remainingCoupons * interest

}

async function getCouponYield(bond) {

  var interest = await chain.getSimpleInterest(bond)

  var par = await chain.getParValue(bond)

  return interest / par * 100

}

async function getCurrentYield(bond, pricePaid) {

  var interest = await chain.getSimpleInterest(bond)

  return interest * pricePaid / 100

}

async function calculateCompoundInterest(principal, r , n, t) {

  return p * (1 + r / n) ** (n * t)

}

async function getYieldToMaturity(bond, idBond, currentMarketPrice) {

  var remainingCoupons = await chain.getRemainingCoupons(bond, idBond)

  var c = await chain.getSimpleInterest(bond)

  var f = await chain.getParValue(bond)

  return (c + (f - currentMarketPrice) / remainingCoupons) / ((f + currentMarketPrice) / 2)

}

async function currentBondPrice(bond, idBond, newInterestRate) {

  var interest = await chain.getSimpleInterest(bond)

  var remainingCoupons = await chain.getRemainingCoupons(bond, idBond)

  var par = await chain.getParValue(bond)

  var auxInterest = newInterestRate / 100

  var base = Math.pow((1 + auxInterest), remainingCoupons)

  return interest * ((1 - (1 / base)) / auxInterest) + par / base

}

module.exports = {

  getRemainingSimpleInterest,
  getCouponYield,
  getCurrentYield,
  calculateCompoundInterest,
  getYieldToMaturity,
  currentBondPrice

}
