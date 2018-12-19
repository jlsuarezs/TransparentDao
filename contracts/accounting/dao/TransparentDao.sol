pragma solidity 0.4.24;

import "contracts/zeppelin/SafeMath.sol";
import "contracts/utils/Forwarder.sol";
import "contracts/utils/DateTime.sol";
import "contracts/interfaces/IFloatMath.sol";

import "contracts/interfaces/IDAOCoin.sol";
import "contracts/interfaces/IDAOBond.sol";

import "contracts/interfaces/ITransparentDao.sol";

import "contracts/interfaces/IIncomeStatement.sol";
import "contracts/interfaces/IBalanceSheet.sol";
import "contracts/interfaces/ICashflowStatement.sol";

contract TransparentDao is ITransparentDao, Forwarder {

  using SafeMath for uint256;

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

  IFloatMath floatMath;

  DateTime dateTime;


  IDAOBond[] bonds;
  Report[] reportsArray;

  mapping(uint256 => Report) reports;

  constructor(address _unitOfAccount, address _floatMath,
              address _daoCoin, address _dateTime) {

    require(_unitOfAccount == address(0) || isContract(_unitOfAccount) == true);

    if (daoCoin != address(0)) daoCoin = IDAOCoin(_daoCoin);

    UOA = _unitOfAccount;

    if (floatMath != address(0)) floatMath = IFloatMath(_floatMath);

    if (dateTime != address(0)) dateTime = DateTime(_dateTime);

  }

  function changeDateTime(address _dateTime) public {

    require(isContract(_dateTime) == true);

    dateTime = DateTime(_dateTime);

  }

  function changeFloatMath(address _float) public {

    require(isContract(_float) == true);

    floatMath = IFloatMath(_float);

    emit ChangedFloatMath(_float);

  }

  function setDaoCoin(address _coin) public {

    require(address(daoCoin) == address(0));
    require(isContract(_coin) == true);

    daoCoin = IDAOCoin(_coin);

    emit SetDaoCoin(_coin);

  }

  function addTax(uint256 percentage, uint256 threshold) public {

    latestTax.push(percentage);

    incomeThresholds.push(threshold);

    emit AddedTax(percentage, threshold);

  }

  function deleteTax(uint256 position) public {

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

  function newBond(address _bond) public {

    require(isContract(_bond) == true);

    IDAOBond newBond = IDAOBond(_bond);

    require(newBond.getNonce() == 0);

    bonds.push(newBond);

    emit NewBond(_bond);

  }

  function startReport(address _income, address _balance, address _cashflow) public {

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

  function() payable {}

  //PRIVATE

  function isContract(address _addr) private returns (bool) {

    uint32 size;

    assembly {
      size := extcodesize(_addr)
    }

    return (size > 0);

  }

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

  function getFloatAddress() public view returns (address) {

    return address(floatMath);

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

  function getTaxType() public view returns (uint) {

    if (latestTax.length > 1) return uint(TAX_TYPE.PROGRESSIVE);

    else if (latestTax.length == 1) return uint(TAX_TYPE.SIMPLE);

    return uint(TAX_TYPE.NO_TAX);

  }

}
