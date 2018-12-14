pragma solidity 0.4.24;

import "contracts/interfaces/IBalanceSheet.sol";

contract BalanceSheet is IBalanceSheet {

  //Constants

  uint256 month = 712 hours;
  uint256 twoMonths = 1424 hours;
  uint256 quarter = 2136 hours;
  uint256 year = 8544 hours;

/*
  //Assets

  int256 cash;

  int256 marketableSecurities;

  int256 accountsReceivable;

  int256 inventory;

  int256 prepaidExpenses;

  int256 longTermExpenses;

  int256 fixedAssets;

  int256 intangibleAssets;

  int256 shortTermInvestments;

  int256 totalShortTermAssets;

  int256 totalLongTermAssets;

  int256 totalAssets;

  //Liabilities

  int256 currentPortionLongTermDebt;

  int256 bankIndebtedness;

  int256 interestPayable;

  int256 wages;

  int256 longTermDebt;

  int256 totalLiabilities;

  //Equity

  uint256 retainedEarnings;

  uint256 commonCoins;

  uint256 treasuryStock;

  uint256 commonEquity;

  uint256 bookValue;

*/

  //Misscellanous

  uint256 startTime;

  address dao;

  mapping(string => int256) detailedAssets;
  mapping(string => int256) detailedLiabilities;
  mapping(string => int256) detailedEquity;

  modifier onlyDAO {

    require(msg.sender == dao);
    _;

  }

  modifier inQuarter {

    uint _hours = (now - startTime) / 60 / 60 / 24 / 60;

    require(_hours <= quarter);

    _;

  }

  constructor(address _dao) {

    dao = _dao;

    startTime = now;

  }

  function setAssets(string _asset, int256 amount) public onlyDAO inQuarter {

    detailedAssets[_asset] = amount;

    emit SetAssets(_asset, amount);

  }

  function setLiabilities(string _liabilities, int256 amount) public onlyDAO inQuarter {

    detailedAssets[_liabilities] = amount;

    emit SetLiabilities(_liabilities, amount);

  }

  function setEquity(string _equity, int256 amount) public onlyDAO inQuarter {

    detailedAssets[_equity] = amount;

    emit SetEquity(_equity, amount);

  }

  //GETTERS

  function getMarginOfSafety() public view returns (int256) {



  }

  function getAcidTestResult() public view returns (int256) {

    //(cash + accounts receivable + short term investments) / current liabilities

  }

  function getAsset(string _asset) public view returns (int256) {

    return detailedAssets[_asset];

  }

  function getLiability(string _liability) public view returns (int256) {

    return detailedLiabilities[_liability];

  }

  function getEquity(string _equity) public view returns (int256) {

    return detailedEquity[_equity];

  }

}
