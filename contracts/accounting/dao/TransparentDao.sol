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

  /**
  * @notice Initialize the contract as described in the Aragon docs
  * @param _unitOfAccount The UOA crypto-coin that is used to do accounting (the revenues/expenses are denoted in this coin when shown on the front-end)
  * @param _daoCoin The address of the ERC-20 contract
  */

  function initialize(address _unitOfAccount,
                      address _daoCoin) public onlyInit {

      require(_unitOfAccount == address(0) || isContract(_unitOfAccount) == true);

      if (daoCoin != address(0)) daoCoin = IDAOCoin(_daoCoin);

      UOA = _unitOfAccount;

      initialized();

  }

  /**
  * @notice Set the official Dao coin
  * @param _coin The address of the ERC-20 contract
  */

  function setDaoCoin(address _coin) auth(SET_COIN) public {

    require(address(daoCoin) == address(0));
    require(isContract(_coin) == true);

    daoCoin = IDAOCoin(_coin);

    emit SetDaoCoin(_coin);

  }

  /**
  * @notice The government (or a representative) can add a tax threshold for the Dao
  * @param percentage Percentage of tax charged from gross revenues
  * @param threshold Threshold of revenues that the Dao needs to cross in order to pay a certain tax
  */

  function addTax(uint256 percentage, uint256 threshold) auth(ADD_TAX) public {

    latestTax.push(percentage);

    incomeThresholds.push(threshold);

    emit AddedTax(percentage, threshold);

  }

  /**
  * @notice The government (or a representative) can delete a tax threshold for the Dao
  * @param position The position of the tax threshold in the latestTax array
  */

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

  /**
  * @notice Issue a new bond for this Dao
  * @param _bond The address of the smart bond contract
  */

  function newBond(address _bond) auth(NEW_BOND) public {

    require(isContract(_bond) == true);

    IDAOBond newBond = IDAOBond(_bond);

    require(newBond.getNonce() == 0);

    bonds.push(newBond);

    emit NewBond(_bond);

  }

  /**
  * @notice Start a new quaterly report
  * @param _income The address of the income statement contract
  * @param _balance The address of the balance sheet contract
  * @param _cashflow The address of the cashflow statement contract
  */

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

  /**
  * @notice Donate money to this Dao
  */

  function donate() public payable {}

  function() payable { revert(); }

  //GETTERS

  /**
  * @dev Get the unit of account coin address
  * @return The address of the coin contract
  */

  function getUOAAddress() public view returns (address) {

    return UOA;

  }

  /**
  * @dev Get the total debt of the bonds issued by this Dao between 2 indices
  * @param startPosition The position in the bonds array from which to loop
  * @param bondsNumber How many bonds to take into consideration starting from startPosition
  * @return The total debt from bondsNumber bonds
  */

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

  /**
  * @dev Get the address of a bond contract from the bonds array
  * @param position The position of the bond contract in the array
  * @return The address of the smart bond contract
  */

  function getBondAddress(uint256 position) public view returns (address) {

    return address(bonds[position]);

  }

  /**
  * @dev Get the market price of this Dao
  * @return The market price
  */

  function getMarketPrice() public view returns (int256) {

    return marketPrice;

  }

  /**
  * @dev Get the length of the reportsArray
  * @return The length of the reports array
  */

  function getReportsLength() public view returns (uint256) {

    return reportsArray.length;

  }

  /**
  * @dev Get the financial reports addresses from a specific reportsArray position
  * @param position The position of the reportsArray array
  * @return The 3 addresses corresponding to the income statement, balance sheet and cashflow statement
  */

  function getReportAtPosition(uint256 position) public view returns (address, address, address) {

    return (reportsArray[position].income, reportsArray[position].balance,
            reportsArray[position].cashflow);

  }

  /**
  * @dev Get the address of the official Dao coin
  * @return The address of the coin address
  */

  function getCoinAddress() public view returns (address) {

    return address(daoCoin);

  }

  /**
  * @dev Get the number of coins issued in the official Dao coin contract
  * @return The amounf of coins issued
  */

  function getCoinsAmount() public view returns (uint256) {

    uint256 decimals = daoCoin.getDecimals();

    return daoCoin.totalSupply() / 10**decimals;

  }

  /**
  * @dev Get the latestTax array
  * @return The array having the taxes applied to this Dao
  */

  function getLatestTax() public view returns (uint256[]) {

    return latestTax;

  }

  /**
  * @dev Get the income threshold for which taxes will be applied
  * @return The incomeThresholds array
  */

  function getIncomeThresholds() public view returns (uint256[]) {

    return incomeThresholds;

  }

  /**
  * @dev Get the Aragon roles from this contract
  * @return All Aragon roles
  */

  function getRoles() public view returns (bytes32, bytes32, bytes32, bytes32, bytes32) {

    return (SET_COIN, ADD_TAX, DELETE_TAX, NEW_BOND, START_REPORT);

  }

  /**
  * @dev Get the type of tax applied to this Dao
  * @return The tax type for this Dao
  */

  function getTaxType() public view returns (uint) {

    if (latestTax.length > 1) return uint(TAX_TYPE.PROGRESSIVE);

    else if (latestTax.length == 1) return uint(TAX_TYPE.SIMPLE);

    return uint(TAX_TYPE.NO_TAX);

  }

}
