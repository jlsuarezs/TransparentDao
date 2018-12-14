pragma solidity 0.4.24;

import "contracts/zeppelin/SafeMath.sol";
import "contracts/utils/Forwarder.sol";
import "contracts/utils/DateTime.sol";

import "contracts/interfaces/IReportIssuer.sol";
import "contracts/interfaces/IDAOCoin.sol";
import "contracts/interfaces/ITransparentDao.sol";
import "contracts/interfaces/IFloatMath.sol";
import "contracts/interfaces/IIncomeStatement.sol";
import "contracts/interfaces/IDAOBond.sol";

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

  //How many tax thresholds there are

  uint256 taxLenght;

  //Financial year indices

  uint256 startOfCurrentYear;
  uint256 latestReportIssuance;

  //Current coin used to do accounting

  address UOA;

  //Coin which might be issued by the DAO

  IDAOCoin daoCoin;

  IReportIssuer issuer;

  IFloatMath floatMath;

  DateTime dateTime;


  IDAOBond[] bonds;
  Report[] reportsArray;

  mapping(uint256 => Report) reports;

  constructor(address _reportIssuer, address _unitOfAccount, address _floatMath,
              address _daoCoin, address _dateTime) {

    require(_unitOfAccount == address(0) || isContract(_unitOfAccount) == true);
    require(isContract(_floatMath) == true);
    require(isContract(_dateTime) == true);
    require(isContract(_daoCoin) == true);

    daoCoin = IDAOCoin(_daoCoin);

    issuer = IReportIssuer(_reportIssuer);

    UOA = _unitOfAccount;

    floatMath = IFloatMath(_floatMath);

    dateTime = DateTime(_dateTime);

  }

  function changeDateTime(address _dateTime) public {

    require(isContract(_dateTime) == true);

    dateTime = DateTime(_dateTime);

  }

  function changeIssuer(address _issuer) public {

    require(isContract(_issuer) == true);

    issuer = IReportIssuer(_issuer);

    emit ChangedIssuer(_issuer);

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

    if (position >= latestTax.length) return;

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

  function startReport() public {

    require(latestReportIssuance == 0 || now - latestReportIssuance >= quarter);

    address _balance;
    address _cashflow;
    address _income;

    (_income, _balance, _cashflow) = issuer.issueReport(address(dateTime));

    Report memory newReport = Report(_income, _balance, _cashflow);

    if (latestReportIssuance == 0 || now.sub(startOfCurrentYear) >= year)
      startOfCurrentYear = now;

    latestReportIssuance = now;

    reports[latestReportIssuance] = newReport;

    reportsArray.push(newReport);

    emit StartedReport(_income, _balance, _cashflow);

  }

  function() payable;

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

    for (uint256 i = startPosition; i < startPosition.add(bondsNumber); i++) {

      debt = debt.add(bonds[i].getTotalDebt());

    }

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

  function getTaxType() public view returns (uint) {

    if (taxLenght > 1) return uint(TAX_TYPE.PROGRESSIVE);

    else if (taxLenght == 1) return uint(TAX_TYPE.SIMPLE);

    return uint(TAX_TYPE.NO_TAX);

  }

}
