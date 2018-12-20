var BalanceSheet = artifacts.require("contracts/accounting/statements/BalanceSheet.sol")
var CashflowStatement = artifacts.require("contracts/accounting/statements/CashflowStatement.sol")
var IncomeStatement = artifacts.require("contracts/accounting/statements/IncomeStatement.sol")

var DAOBond = artifacts.require("contracts/accounting/dao/DAOBond.sol")
var DAOCoin = artifacts.require("contracts/accounting/dao/DAOCoin.sol")
var TransparentDao = artifacts.require("contracts/accounting/dao/TransparentDao.sol")

//Aragon related

const ACL = artifacts.require('ACL')
const AppProxyUpgradeable = artifacts.require('AppProxyUpgradeable')
const EVMScriptRegistryFactory = artifacts.require('EVMScriptRegistryFactory')
const DAOFactory = artifacts.require('DAOFactory')
const Kernel = artifacts.require('Kernel')
const KernelProxy = artifacts.require('KernelProxy')

const increaseTime = require('./helpers/increaseTime')
const assertFail = require("./helpers/assertFail")

const { hash } = require('eth-ens-namehash')

const getEvent = (receipt, event, arg) => { return receipt.logs.filter(l => l.event == event)[0].args[arg] }

contract('TransparentDao', function (accounts) {

  let balanceSheet, cashflow, income, bond, coin, uoa, dao, acl

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

  //Aragon

  let roles
  let daoFact
  let transparentId
  let APP_MANAGER_ROLE, ANY_ENTITY

  uoa = '0x0'

  before(async () => {

    const kernelBase = await Kernel.new(true)
    const aclBase = await ACL.new()
    const regFact = await EVMScriptRegistryFactory.new()
    daoFact = await DAOFactory.new(kernelBase.address, aclBase.address, regFact.address)

    // Setup constants
    ANY_ENTITY = await aclBase.ANY_ENTITY()
    APP_MANAGER_ROLE = await kernelBase.APP_MANAGER_ROLE()

  })

  beforeEach(async () => {

    dao = await TransparentDao.new()

    const r = await daoFact.newDAO(accounts[0])
    const aragonDao = Kernel.at(getEvent(r, 'DeployDAO', 'dao'))
    const acl = ACL.at(await aragonDao.acl())

    await acl.createPermission(accounts[0], aragonDao.address,
        APP_MANAGER_ROLE, accounts[0], { from: accounts[0] })

    // Transparent dao
    transparentId = hash('TransparentDao.aragonpm.eth')

    const transparentReceipt = await aragonDao.newAppInstance(transparentId, dao.address, '0x', false)
    const transparentProxyAddress = getEvent(transparentReceipt, 'NewAppProxy', 'proxy')


    dao = TransparentDao.at(transparentProxyAddress)

    bond = await DAOBond.new(bondName, par, parDecimals, coupon,
        term, cap, timesToRedeem, tknToRedeem, loopLimit, {from: accounts[0]})

    coin = await DAOCoin.new(coinName, symbol, decimals, {from: accounts[0]})

    income = await IncomeStatement.new(dao.address, {from: accounts[0]})

    balanceSheet = await BalanceSheet.new(dao.address, {from: accounts[0]})

    cashflow = await CashflowStatement.new(dao.address, {from: accounts[0]})


    roles = await dao.getRoles()

    await acl.createPermission(accounts[0], dao.address, roles[0], accounts[0])
    await acl.createPermission(accounts[0], dao.address, roles[1], accounts[0])
    await acl.createPermission(accounts[0], dao.address, roles[2], accounts[0])
    await acl.createPermission(accounts[0], dao.address, roles[3], accounts[0])
    await acl.createPermission(accounts[0], dao.address, roles[4], accounts[0])

    await dao.initialize(uoa, '0x0')

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

  it("Test getters and setters in balance sheet", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    await dao.callStringInt256(balanceSheet.address, "setAssets(bytes32,int256)",
                               "cash", 10**10);

    await dao.callStringInt256(balanceSheet.address, "setLiabilities(bytes32,int256)",
                               "longTermDebt", 10**2);

    await dao.callStringInt256(balanceSheet.address, "setEquity(bytes32,int256)",
                               "treasuryCoins", 10**4);

    assert.equal(10**10, await balanceSheet.getAsset("cash"))

    assert.equal(10**2, await balanceSheet.getLiability("longTermDebt"))

    assert.equal(10**4, await balanceSheet.getEquity("treasuryCoins"))

  })

  it("Test income statement - getHours", async () => {

    var end = web3.eth.getBlock(web3.eth.blockNumber).timestamp + increaseTime.duration.hours(145)

    var start = web3.eth.getBlock(web3.eth.blockNumber).timestamp

    assert.equal(await income.getHours(end, start), 145)

  })

  it("Test income statement - addIncome", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await income.addIncome("Random", "secondary", 10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callStringStringUint256(income.address, "addIncome(bytes32,bytes32,uint256)",
                                      "Random", "secondary", 10)

    var detailedIncome = await income.getDetailedIncome("Random")

    assert.equal(detailedIncome[1], 10)

    assert.equal(await income.getTotalGrossIncome(), 10)

    assert.equal(await income.getMonthlyRevenue(0), 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringStringUint256(income.address, "addIncome(bytes32,bytes32,uint256)",
                                      "Business", "primary", 23)

    detailedIncome = await income.getDetailedIncome("Business")

    assert.equal(detailedIncome[1], 23)

    assert.equal(await income.getTotalGrossIncome(), 33)

    assert.equal(await income.getMonthlyRevenue(1), 23)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringStringUint256(income.address, "addIncome(bytes32,bytes32,uint256)",
                                      "End of quarter, we are bankrupt", "primary", 53)

    detailedIncome = await income.getDetailedIncome("End of quarter, we are bankrupt")

    assert.equal(detailedIncome[1], 53)

    assert.equal(await income.getTotalGrossIncome(), 86)

    assert.equal(await income.getMonthlyRevenue(2), 53)

  })

  it("Test income statement - addExpense", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await income.addExpense("Random", "secondary", 10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callStringStringUint256(income.address, "addExpense(bytes32,bytes32,uint256)",
                                      "Random", "secondary", 10)

    var detailedExpense = await income.getDetailedExpense("Random")

    assert.equal(detailedExpense[1], 10)

    assert.equal(await income.getSecondaryExpenses(), 10)

    assert.equal(await income.getTotalExpenses(), 10)

    assert.equal(await income.getMonthlyExpenses(0), 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringStringUint256(income.address, "addExpense(bytes32,bytes32,uint256)",
                                      "Business", "primary", 60)

    detailedExpense = await income.getDetailedExpense("Business")

    assert.equal(detailedExpense[1], 60)

    assert.equal(await income.getSecondaryExpenses(), 10)

    assert.equal(await income.getPrimaryExpenses(), 60)

    assert.equal(await income.getTotalExpenses(), 70)

    assert.equal(await income.getMonthlyExpenses(1), 60)

    assert.equal(await income.getCostOfRevenue(), 60)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringStringUint256(income.address, "addExpense(bytes32,bytes32,uint256)",
                                      "End of quarter", "primary", 1160)

    detailedExpense = await income.getDetailedExpense("End of quarter")

    assert.equal(detailedExpense[1], 1160)

    assert.equal(await income.getPrimaryExpenses(), 1220)

    assert.equal(await income.getTotalExpenses(), 1230)

    assert.equal(await income.getMonthlyExpenses(2), 1160)

    assert.equal(await income.getCostOfRevenue(), 1220)

  })

  it("Test income statement - addLoss", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await income.addLoss("Random", 10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callStringUint256(income.address, "addLoss(bytes32,uint256)",
                                "Random", 10)

    var detailedLoss = await income.getDetailedLoss("Random")

    assert.equal(detailedLoss, 10)

    assert.equal(await income.getLosses(), 10)

    assert.equal(await income.getTotalExpenses(), 10)

    assert.equal(await income.getMonthlyExpenses(0), 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringUint256(income.address, "addLoss(bytes32,uint256)",
                                      "Business", 111)

    detailedLoss = await income.getDetailedLoss("Business")

    assert.equal(detailedLoss, 111)

    assert.equal(await income.getLosses(), 121)

    assert.equal(await income.getTotalExpenses(), 121)

    assert.equal(await income.getMonthlyExpenses(1), 111)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringUint256(income.address, "addLoss(bytes32,uint256)",
                                      "End of quarter", 1)

    detailedLoss = await income.getDetailedLoss("End of quarter")

    assert.equal(detailedLoss, 1)

    assert.equal(await income.getLosses(), 122)

    assert.equal(await income.getTotalExpenses(), 122)

    assert.equal(await income.getMonthlyExpenses(2), 1)

  })

  it("Test income statement - addGain", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await income.addGain("Random", 10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callStringUint256(income.address, "addGain(bytes32,uint256)",
                                "Random", 10)

    var detailedGain = await income.getDetailedGain("Random")

    assert.equal(detailedGain, 10)

    assert.equal(await income.getTotalGrossIncome(), 10)

    assert.equal(await income.getMonthlyRevenue(0), 10)

    assert.equal(await income.getGains(), 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringUint256(income.address, "addGain(bytes32,uint256)",
                                "Business", 100)

    detailedGain = await income.getDetailedGain("Business")

    assert.equal(detailedGain, 100)

    assert.equal(await income.getTotalGrossIncome(), 110)

    assert.equal(await income.getMonthlyRevenue(1), 100)

    assert.equal(await income.getGains(), 110)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringUint256(income.address, "addGain(bytes32,uint256)",
                                "End of quarter", 200)

    detailedGain = await income.getDetailedGain("End of quarter")

    assert.equal(detailedGain, 200)

    assert.equal(await income.getTotalGrossIncome(), 310)

    assert.equal(await income.getMonthlyRevenue(2), 200)

    assert.equal(await income.getGains(), 310)

  })

  it("Test income statement - reportTax", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await income.reportTax(10, { from: accounts[1] })
    ));

    // Month 1

    await dao.callUint256(income.address, "reportTax(uint256)",
                          10)

    assert.equal(await income.getIncomeTaxExpenses(), 10)

    assert.equal(await income.getTotalExpenses(), 10)

    assert.equal(await income.getMonthlyExpenses(0), 10)

    // Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(income.address, "reportTax(uint256)",
                          10)

    assert.equal(await income.getIncomeTaxExpenses(), 20)

    assert.equal(await income.getTotalExpenses(), 20)

    assert.equal(await income.getMonthlyExpenses(1), 10)

    // Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(income.address, "reportTax(uint256)",
                          10)

    assert.equal(await income.getIncomeTaxExpenses(), 30)

    assert.equal(await income.getTotalExpenses(), 30)

    assert.equal(await income.getMonthlyExpenses(2), 10)

  })

  it("Test income statement - reportRD", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await income.reportRD("Random", 10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callStringUint256(income.address, "reportRD(bytes32,uint256)",
                                "Random", 10)

    var detailedRD = await income.getDetailedRD("Random")

    assert.equal(detailedRD, 10)

    assert.equal(await income.getRDExpense(), 10)

    assert.equal(await income.getTotalExpenses(), 10)

    assert.equal(await income.getMonthlyExpenses(0), 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringUint256(income.address, "reportRD(bytes32,uint256)",
                                "Business", 10)

    detailedRD = await income.getDetailedRD("Business")

    assert.equal(detailedRD, 10)

    assert.equal(await income.getRDExpense(), 20)

    assert.equal(await income.getTotalExpenses(), 20)

    assert.equal(await income.getMonthlyExpenses(1), 10)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringUint256(income.address, "reportRD(bytes32,uint256)",
                                "Quarter", 10)

    detailedRD = await income.getDetailedRD("Quarter")

    assert.equal(detailedRD, 10)

    assert.equal(await income.getRDExpense(), 30)

    assert.equal(await income.getTotalExpenses(), 30)

    assert.equal(await income.getMonthlyExpenses(2), 10)

  })

  it("Test income statement - reportDonation", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await income.reportDonation("Random", 10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callStringUint256(income.address, "reportDonation(bytes32,uint256)",
                                "Random", 10)

    var detailedDonation = await income.getDetailedDonation("Random")

    assert.equal(detailedDonation, 10)

    assert.equal(await income.getDonations(), 10)

    assert.equal(await income.getTotalExpenses(), 10)

    assert.equal(await income.getMonthlyExpenses(0), 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringUint256(income.address, "reportDonation(bytes32,uint256)",
                                "Business", 10)

    detailedDonation = await income.getDetailedDonation("Business")

    assert.equal(detailedDonation, 10)

    assert.equal(await income.getDonations(), 20)

    assert.equal(await income.getTotalExpenses(), 20)

    assert.equal(await income.getMonthlyExpenses(1), 10)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringUint256(income.address, "reportDonation(bytes32,uint256)",
                                "Quarter", 10)

    detailedDonation = await income.getDetailedDonation("Quarter")

    assert.equal(detailedDonation, 10)

    assert.equal(await income.getDonations(), 30)

    assert.equal(await income.getTotalExpenses(), 30)

    assert.equal(await income.getMonthlyExpenses(2), 10)

  })

  it("Test income statement - reportInterestExpense", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await income.reportInterestExpense("Random", 10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callStringUint256(income.address, "reportInterestExpense(bytes32,uint256)",
                                "Random", 10)

    var detailedInterest = await income.getDetailedInterestExpense("Random")

    assert.equal(detailedInterest, 10)

    assert.equal(await income.getInterestExpense(), 10)

    assert.equal(await income.getTotalExpenses(), 10)

    assert.equal(await income.getMonthlyExpenses(0), 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringUint256(income.address, "reportInterestExpense(bytes32,uint256)",
                                "Business", 10)

    detailedInterest = await income.getDetailedInterestExpense("Business")

    assert.equal(detailedInterest, 10)

    assert.equal(await income.getInterestExpense(), 20)

    assert.equal(await income.getTotalExpenses(), 20)

    assert.equal(await income.getMonthlyExpenses(1), 10)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringUint256(income.address, "reportInterestExpense(bytes32,uint256)",
                                "Quarter", 10)

    detailedInterest = await income.getDetailedInterestExpense("Quarter")

    assert.equal(detailedInterest, 10)

    assert.equal(await income.getInterestExpense(), 30)

    assert.equal(await income.getTotalExpenses(), 30)

    assert.equal(await income.getMonthlyExpenses(2), 10)

  })

  it("Test income statement - reportInterestGained", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await income.reportInterestGained("Random", 10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callStringUint256(income.address, "reportInterestGained(bytes32,uint256)",
                                "Random", 10)

    var detailedInterest = await income.getDetailedInterestReceived("Random")

    assert.equal(detailedInterest, 10)

    assert.equal(await income.getInterestGained(), 10)

    assert.equal(await income.getTotalGrossIncome(), 10)

    assert.equal(await income.getMonthlyRevenue(0), 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringUint256(income.address, "reportInterestGained(bytes32,uint256)",
                                "Business", 10)

    detailedInterest = await income.getDetailedInterestReceived("Business")

    assert.equal(detailedInterest, 10)

    assert.equal(await income.getInterestGained(), 20)

    assert.equal(await income.getTotalGrossIncome(), 20)

    assert.equal(await income.getMonthlyRevenue(1), 10)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringUint256(income.address, "reportInterestGained(bytes32,uint256)",
                                "Quarter", 10)

    detailedInterest = await income.getDetailedInterestReceived("Quarter")

    assert.equal(detailedInterest, 10)

    assert.equal(await income.getInterestGained(), 30)

    assert.equal(await income.getTotalGrossIncome(), 30)

    assert.equal(await income.getMonthlyRevenue(2), 10)

  })

  it("Test cashflow statement - updateNetEarnings", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await cashflow.updateNetEarnings(10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callUint256(cashflow.address, "updateNetEarnings(uint256)",
                          10)

    var earnings = await cashflow.getNetEarnings()

    assert.equal(earnings, 10)

    assert.equal(await cashflow.getMonthlyNetEarnings(0), 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "updateNetEarnings(uint256)",
                          10)

    earnings = await cashflow.getNetEarnings()

    assert.equal(earnings, 10)

    assert.equal(await cashflow.getMonthlyNetEarnings(1), 10)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "updateNetEarnings(uint256)",
                          10)

    earnings = await cashflow.getNetEarnings()

    assert.equal(earnings, 10)

    assert.equal(await cashflow.getMonthlyNetEarnings(2), 10)

  })

  it("Test cashflow statement - updateDepreciations", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await cashflow.updateDepreciations(10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callUint256(cashflow.address, "updateDepreciations(uint256)",
                          10)

    var depreciations = await cashflow.getDepreciations()

    assert.equal(depreciations, 10)

    assert.equal(await cashflow.getMonthlyDepreciations(0), 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "updateDepreciations(uint256)",
                          10)

    depreciations = await cashflow.getDepreciations()

    assert.equal(depreciations, 10)

    assert.equal(await cashflow.getMonthlyDepreciations(1), 10)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "updateDepreciations(uint256)",
                          10)

    depreciations = await cashflow.getDepreciations()

    assert.equal(depreciations, 10)

    assert.equal(await cashflow.getMonthlyDepreciations(2), 10)

  })

  it("Test cashflow statement - updateDecreasesInAcc", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await cashflow.updateDecreasesInAcc(10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callUint256(cashflow.address, "updateDecreasesInAcc(uint256)",
                          10)

    var decreases = await cashflow.getDeccInAcc()

    assert.equal(decreases, 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "updateDecreasesInAcc(uint256)",
                          10)

    decreases = await cashflow.getDeccInAcc()

    assert.equal(decreases, 10)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "updateDecreasesInAcc(uint256)",
                          10)

    decreases = await cashflow.getDeccInAcc()

    assert.equal(decreases, 10)

  })

  it("Test cashflow statement - updateIncreasesInAcc", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await cashflow.updateIncreasesInAcc(10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callUint256(cashflow.address, "updateIncreasesInAcc(uint256)",
                          10)

    var increases = await cashflow.getIncInAcc()

    assert.equal(increases, 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "updateIncreasesInAcc(uint256)",
                          10)

    increases = await cashflow.getIncInAcc()

    assert.equal(increases, 10)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "updateIncreasesInAcc(uint256)",
                          10)

    increases = await cashflow.getIncInAcc()

    assert.equal(increases, 10)

  })

  it("Test cashflow statement - updateIncreaseInTaxes", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await cashflow.updateIncreaseInTaxes(10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callUint256(cashflow.address, "updateIncreaseInTaxes(uint256)",
                          10)

    var increases = await cashflow.getIncInTaxes()

    assert.equal(increases, 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "updateIncreaseInTaxes(uint256)",
                          10)

    increases = await cashflow.getIncInTaxes()

    assert.equal(increases, 10)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "updateIncreaseInTaxes(uint256)",
                          10)

    increases = await cashflow.getIncInTaxes()

    assert.equal(increases, 10)

  })

  it("Test cashflow statement - updateDividentsPaid", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await cashflow.updateDividentsPaid(10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callUint256(cashflow.address, "updateDividentsPaid(uint256)",
                          10)

    var dividents = await cashflow.getTotalDividentsPaid()

    assert.equal(dividents, 10)

    assert.equal(await cashflow.getMonthlyDividentsPaid(0), 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "updateDividentsPaid(uint256)",
                          10)

    dividents = await cashflow.getTotalDividentsPaid()

    assert.equal(dividents, 10)

    assert.equal(await cashflow.getMonthlyDividentsPaid(1), 10)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "updateDividentsPaid(uint256)",
                          10)

    dividents = await cashflow.getTotalDividentsPaid()

    assert.equal(dividents, 10)

    assert.equal(await cashflow.getMonthlyDividentsPaid(2), 10)

  })

  it("Test cashflow statement - updateIncreaseInInventory", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await cashflow.updateIncreaseInInventory(10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callUint256(cashflow.address, "updateIncreaseInInventory(uint256)",
                          10)

    var inventory = await cashflow.getIncreaseInInventory()

    assert.equal(inventory, 10)

    assert.equal(await cashflow.getMonthlyIncreaseInInventory(0), 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "updateIncreaseInInventory(uint256)",
                          10)

    inventory = await cashflow.getIncreaseInInventory()

    assert.equal(inventory, 10)

    assert.equal(await cashflow.getMonthlyIncreaseInInventory(1), 10)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "updateIncreaseInInventory(uint256)",
                          10)

    inventory = await cashflow.getIncreaseInInventory()

    assert.equal(inventory, 10)

    assert.equal(await cashflow.getMonthlyIncreaseInInventory(2), 10)

  })

  it("Test cashflow statement - setEquipmentExpenses", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await cashflow.setEquipmentExpenses("Random", 10, 10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callStringUint256Uint256(cashflow.address, "setEquipmentExpenses(bytes32,uint256,uint256)",
                                "Random", 10, 10)

    var equipment = await cashflow.getEquipmentDetails("Random")

    assert.equal(equipment, 10)

    assert.equal(await cashflow.getTotalEquipment(), 10)

    assert.equal(await cashflow.getMonthlyTotalEquipment(0), 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringUint256Uint256(cashflow.address, "setEquipmentExpenses(bytes32,uint256,uint256)",
                                "Business", 10, 20)

    equipment = await cashflow.getEquipmentDetails("Business")

    assert.equal(equipment, 10)

    assert.equal(await cashflow.getTotalEquipment(), 20)

    assert.equal(await cashflow.getMonthlyTotalEquipment(1), 10)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callStringUint256Uint256(cashflow.address, "setEquipmentExpenses(bytes32,uint256,uint256)",
                                       "Quarter", 10, 30)

    equipment = await cashflow.getEquipmentDetails("Quarter")

    assert.equal(equipment, 10)

    assert.equal(await cashflow.getTotalEquipment(), 30)

    assert.equal(await cashflow.getMonthlyTotalEquipment(2), 10)

  })

  it("Test cashflow statement - setCharity", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await cashflow.setCharity(10, { from: accounts[1] })
    ));

    //Month 1

    await dao.callUint256(cashflow.address, "setCharity(uint256)",
                          10)

    var charity = await cashflow.getCharity()

    assert.equal(charity, 10)

    assert.equal(await cashflow.getMonthlyCharity(0), 10)

    //Month 2

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "setCharity(uint256)",
                          10)

    charity = await cashflow.getCharity()

    assert.equal(charity, 10)

    assert.equal(await cashflow.getMonthlyCharity(1), 10)

    //Month 3

    await increaseTime.increaseTimeTo(web3.eth.getBlock(web3.eth.blockNumber).timestamp
        + increaseTime.duration.weeks(5));

    await dao.callUint256(cashflow.address, "setCharity(uint256)",
                          10)

    charity = await cashflow.getCharity()

    assert.equal(charity, 10)

    assert.equal(await cashflow.getMonthlyCharity(2), 10)

  })

  it("Test cashflow statement - addRecurrentSalary", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await cashflow.addRecurrentSalary(accounts[1], 10, { from: accounts[1] })
    ));

    await dao.callAddressUint256(cashflow.address, "addRecurrentSalary(address,uint256)",
                          accounts[1], 10)

    var salary = await cashflow.getRecurrentSalary(accounts[1])

    assert.isTrue(salary == 10)

    await dao.callAddress(cashflow.address, "deleteRecurrentSalary(address)", accounts[1])

    salary = await cashflow.getRecurrentSalary(accounts[1])

    assert.isTrue(salary == 0)

  })

  it("Test cashflow statement - addRent", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await cashflow.addRent("Building", 10, { from: accounts[1] })
    ));

    await dao.callStringUint256(cashflow.address, "addRent(bytes32,uint256)",
                          "Building", 10)

    var rent = await cashflow.getRent(0)

    assert.equal(rent[2], 10)

  })

  it("Test cashflow statement - addIncomeTax", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await cashflow.addIncomeTax("Building", 10, { from: accounts[1] })
    ));

    await dao.callStringUint256(cashflow.address, "addIncomeTax(bytes32,uint256)",
                          "Tax", 10)

    var tax = await cashflow.getIncomeTax(0)

    assert.equal(tax[2], 10)

  })

  it("Test cashflow statement - addInterestPayment", async () => {

    await dao.startReport(income.address, balanceSheet.address, cashflow.address,
        {from: accounts[0]})

    //Check if only DAO can call

    await assertFail(async () => (
          await cashflow.addInterestPayment("Primary", accounts[1], 10, { from: accounts[1] })
    ));

    await dao.callStringAddressUint256(cashflow.address, "addInterestPayment(bytes32,address,uint256)",
                          "Primary", accounts[1], 10)

    var interest = await cashflow.getInterest(0)

    assert.equal(interest[2], 10)

  })

})
