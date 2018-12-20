var DAOBond = artifacts.require('contracts/accounting/dao/DAOBond.sol');
var DAOCoin = artifacts.require('contracts/accounting/dao/DAOCoin.sol');

var TransparentDao = artifacts.require('contracts/accounting/dao/TransparentDao.sol');

module.exports = async function(deployer, network, accounts) {

    let devAddress = '0x1900a41f2777ab70aad2074e3f4b9c5429c7f243'

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

    let nullAddr = "0x0"

    uoa = '0x0'

    if (network == "main") {


    } else if (network == "rinkeby" || network == "ropsten") {

        deployer.deploy(DAOBond, bondName, par, parDecimals, coupon, term, cap, timesToRedeem, tknToRedeem, loopLimit).then(function() {
            return deployer.deploy(DAOCoin, coinName, symbol, decimals).then(function() {
                return deployer.deploy(TransparentDao).then(async function() {

        }) }) })

    } else if (network == "development") {

        deployer.deploy(DAOBond, bondName, par, parDecimals, coupon, term, cap, timesToRedeem, tknToRedeem, loopLimit, {from: accounts[0]}).then(function() {
            return deployer.deploy(DAOCoin, coinName, symbol, decimals).then(function() {
                return deployer.deploy(TransparentDao).then(async function() {

        }) }) })

    }

}
