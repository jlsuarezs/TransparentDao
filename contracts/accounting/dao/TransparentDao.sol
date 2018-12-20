pragma solidity 0.4.24;

import "contracts/utils/Forwarder.sol";

import "contracts/interfaces/IDAOCoin.sol";
import "contracts/interfaces/IDAOBond.sol";

import "contracts/interfaces/ITransparentDao.sol";

import "contracts/interfaces/IIncomeStatement.sol";
import "contracts/interfaces/IBalanceSheet.sol";
import "contracts/interfaces/ICashflowStatement.sol";

import "@aragon/os/contracts/apps/AragonApp.sol";
import "@aragon/os/contracts/lib/math/SafeMath.sol";
import "@aragon/os/contracts/common/IsContract.sol";

import "@aragon/os/contracts/acl/ACL.sol";
import "@aragon/os/contracts/apps/AppProxyUpgradeable.sol";
import "@aragon/os/contracts/factory/EVMScriptRegistryFactory.sol";
import "@aragon/os/contracts/factory/DAOFactory.sol";
import "@aragon/os/contracts/kernel/Kernel.sol";
import "@aragon/os/contracts/kernel/KernelProxy.sol";

contract TransparentDao is IsContract, ITransparentDao, Forwarder, AragonApp {

  using SafeMath for uint256;

  //Aragon related roles

  bytes32 constant public SET_COIN = keccak256("SET_COIN");
  bytes32 constant public ADD_TAX = keccak256("ADD_TAX");
  bytes32 constant public DELETE_TAX = keccak256("DELETE_TAX");
  bytes32 constant public NEW_BOND = keccak256("NEW_BOND");
  bytes32 constant public START_REPORT = keccak256("START_REPORT");

  //Constants

  uint256 quarter = 2136 hours;
  uint256 year = 8544 hours;

  string fiatRepresentation = "US DOLLAR";

  //Structs

  struct Report {

    address income;

    address balance;

    address cashflow;

  }

  //Tax types

  enum TAX_TYPE {NO_TAX, SIMPLE, PROGRESSIVE}

  TAX_TYPE taxT;

  //We can choose to have a simple or progressive tax

  uint256[] latestTax;
  uint256[] incomeThresholds;

  //Financial year indices

  uint256 startOfCurrentYear;
  uint256 latestReportIssuance;

  //Current coin used to do accounting

  address UOA;

  //Coin which might be issued by the DAO

  IDAOCoin daoCoin;

  IDAOBond[] bonds;
  Report[] reportsArray;

  mapping(uint256 => Report) reports;

  function initialize(address _unitOfAccount,
                      address _daoCoin) public onlyInit {

      require(_unitOfAccount == address(0) || isContract(_unitOfAccount) == true);

      if (daoCoin != address(0)) daoCoin = IDAOCoin(_daoCoin);

      UOA = _unitOfAccount;

      initialized();

  }

  function setDaoCoin(address _coin) auth(SET_COIN) public {

    require(address(daoCoin) == address(0));
    require(isContract(_coin) == true);

    daoCoin = IDAOCoin(_coin);

    emit SetDaoCoin(_coin);

  }

  function addTax(uint256 percentage, uint256 threshold) auth(ADD_TAX) public {

    latestTax.push(percentage);

    incomeThresholds.push(threshold);

    emit AddedTax(percentage, threshold);

  }

  function deleteTax(uint256 position) auth(DELETE_TAX) public {

    require(position < latestTax.length);

    for (uint i = position; i < latestTax.length.sub(1); i++) {

        latestTax[i] = latestTax[i.add(1)];
        incomeThresholds[i] = incomeThresholds[i.add(1)];

    }

    delete(latestTax[latestTax.length.sub(1)]);
    delete(incomeThresholds[incomeThresholds.length.sub(1)]);

    latestTax.length--;
    incomeThresholds.length--;

    emit DeletedTax(position);

  }

  function newBond(address _bond) auth(NEW_BOND) public {

    require(isContract(_bond) == true);

    IDAOBond newBond = IDAOBond(_bond);

    require(newBond.getNonce() == 0);

    bonds.push(newBond);

    emit NewBond(_bond);

  }

  function startReport(address _income, address _balance, address _cashflow)
    auth(START_REPORT) public {

    require(latestReportIssuance == 0 || now - latestReportIssuance >= quarter);

    IIncomeStatement inc = IIncomeStatement(_income);
    IBalanceSheet balance = IBalanceSheet(_balance);
    ICashflowStatement cash = ICashflowStatement(_cashflow);

    require(inc.getDao() == address(this));
    require(balance.getDao() == address(this));
    require(cash.getDao() == address(this));

    Report memory newReport = Report(_income, _balance, _cashflow);

    if (latestReportIssuance == 0 || now.sub(startOfCurrentYear) >= year)
      startOfCurrentYear = now;

    latestReportIssuance = now;

    reports[latestReportIssuance] = newReport;

    reportsArray.push(newReport);

    emit StartedReport(_income, _balance, _cashflow);

  }

  function donate() public payable {}

  function() payable {}

  //GETTERS

  function getUOAAddress() public view returns (address) {

    return UOA;

  }

  function getBondDebt(uint256 startPosition, uint256 bondsNumber) public view returns (uint256) {

    require(startPosition < bonds.length);
    require(startPosition.add(bondsNumber) < bonds.length);

    uint256 debt = 0;
    uint256 currentDebt = 0;

    uint256 i = startPosition;

    do {

      currentDebt = bonds[i].getTotalDebt();

      debt = debt.add(currentDebt);

      i++;

    } while (i < startPosition.add(bondsNumber));

    return debt;

  }

  function getBondAddress(uint256 position) public view returns (address) {

    return address(bonds[position]);

  }

  function getMarketPrice() public view returns (int256) {

    return marketPrice;

  }

  function getReportsLength() public view returns (uint256) {

    return reportsArray.length;

  }

  function getReportAtPosition(uint256 position) public view returns (address, address, address) {

    return (reportsArray[position].income, reportsArray[position].balance,
            reportsArray[position].cashflow);

  }

  function getCoinAddress() public view returns (address) {

    return address(daoCoin);

  }

  function getCoinsAmount() public view returns (uint256) {

    uint256 decimals = daoCoin.getDecimals();

    return daoCoin.totalSupply() / 10**decimals;

  }

  function getLatestTax() public view returns (uint256[]) {

    return latestTax;

  }

  function getIncomeThresholds() public view returns (uint256[]) {

    return incomeThresholds;

  }

  function getRoles() public view returns (bytes32, bytes32, bytes32, bytes32, bytes32) {

    return (SET_COIN, ADD_TAX, DELETE_TAX, NEW_BOND, START_REPORT);

  }

  function getTaxType() public view returns (uint) {

    if (latestTax.length > 1) return uint(TAX_TYPE.PROGRESSIVE);

    else if (latestTax.length == 1) return uint(TAX_TYPE.SIMPLE);

    return uint(TAX_TYPE.NO_TAX);

  }

}
