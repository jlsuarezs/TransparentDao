var BalanceSheet = artifacts.require("contracts/accounting/statements/BalanceSheet.sol")
var CashflowStatement = artifacts.require("contracts/accounting/statements/CashflowStatement.sol")
var IncomeStatement = artifacts.require("contracts/accounting/statements/IncomeStatement.sol")

var DAOBond = artifacts.require("contracts/accounting/dao/DAOBond.sol")
var DAOCoin = artifacts.require("contracts/accounting/dao/DAOCoin.sol")
var TransparentDao = artifacts.require("contracts/accounting/dao/TransparentDao.sol")

const increaseTime = require('./helpers/increaseTime')

contract('TransparentDao', function (accounts) {

  let balanceSheet, cashflow, income, bond, coin, uoa, dao

  //Bond vars

  let bondName = "DAO Bond"
  let par = 4321
  let parDecimals = 0
  let coupon = 3
  let term = 10**5
  let cap = 50
  let timesToRedeem = 2
  let tknToRedeem = '0x0'
  let loopLimit = 30

  //Coin vars

  let coinName = "DAO Coin"
  let symbol = "D"
  let decimals = 18

  uoa = '0x0'

  beforeEach(async () => {

    bond = await DAOBond.new(bondName, par, parDecimals, coupon,
        term, cap, timesToRedeem, tknToRedeem, loopLimit, {from: accounts[0]})

    coin = await DAOCoin.new(coinName, symbol, decimals, {from: accounts[0]})

    dao = await TransparentDao.new(uoa, "0x0", coin.address, "0x0", {from: accounts[0]})

    income = await IncomeStatement.new(dao.address, {from: accounts[0]})

    balanceSheet = await BalanceSheet.new(dao.address, {from: accounts[0]})

    cashflow = await CashflowStatement.new(dao.address, {from: accounts[0]})

  })

  it("Add and delete tax thresholds", async () => {

    assert.equal(await dao.getTaxType(), 0)

    await dao.addTax(20, 10**5, {from: accounts[0]})

    assert.equal(await dao.getTaxType(), 1)

    await dao.addTax(35, 10**8, {from: accounts[0]})

    assert.equal(await dao.getTaxType(), 2)

    await dao.addTax(45, 10**10, {from: accounts[0]})

    var latestTax = await dao.getLatestTax()

    var incomeThreshold = await dao.getIncomeThresholds()

    assert.isTrue(latestTax[0] == 20 && latestTax[1] == 35 && latestTax[2] == 45)

    assert.isTrue(incomeThreshold[0] == 10**5 &&
                  incomeThreshold[1] == 10**8 &&
                  incomeThreshold[2] == 10**10)

    await dao.deleteTax(0)

    assert.equal(await dao.getTaxType(), 2)

    await dao.deleteTax(1)

    assert.equal(await dao.getTaxType(), 1)

    await dao.deleteTax(0)

    assert.equal(await dao.getTaxType(), 0)

  })

  it("Add bond and get debt", async () => {

    await dao.newBond(bond.address, {from: accounts[0]})

    await bond.mintBond(accounts[4], 20, {from: accounts[0]})

    assert.equal(bond.address, await dao.getBondAddress(0))

    assert.equal(await dao.getBondDebt(0,0), 91580)

  })

  it("Create new report", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    assert.equal(await dao.getReportsLength(), 1)

    var report = await dao.getReportAtPosition(0)

    assert.isTrue(report[0] == income.address && report[1] == balanceSheet.address &&
                  report[2] == cashflow.address)

  })

})
