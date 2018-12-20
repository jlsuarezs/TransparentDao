pragma solidity 0.4.24;

import "contracts/interfaces/IBalanceSheet.sol";

contract BalanceSheet is IBalanceSheet {

  //Constants

  uint256 month = 712;
  uint256 twoMonths = 1424;
  uint256 quarter = 2136;
  uint256 year = 8544;

  //Misscellanous

  uint256 startTime;

  address dao;

  mapping(bytes32 => int256) detailedAssets;
  mapping(bytes32 => int256) detailedLiabilities;
  mapping(bytes32 => int256) detailedEquity;

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

  function setAssets(bytes32 _asset, int256 amount) public onlyDAO inQuarter {

    detailedAssets[_asset] = amount;

    emit SetAssets(_asset, amount);

  }

  function setLiabilities(bytes32 _liabilities, int256 amount) public onlyDAO inQuarter {

    detailedLiabilities[_liabilities] = amount;

    emit SetLiabilities(_liabilities, amount);

  }

  function setEquity(bytes32 _equity, int256 amount) public onlyDAO inQuarter {

    detailedEquity[_equity] = amount;

    emit SetEquity(_equity, amount);

  }

  //GETTERS

  function getAsset(bytes32 _asset) public view returns (int256) {

    return detailedAssets[_asset];

  }

  function getLiability(bytes32 _liability) public view returns (int256) {

    return detailedLiabilities[_liability];

  }

  function getEquity(bytes32 _equity) public view returns (int256) {

    return detailedEquity[_equity];

  }

  function getDao() public view returns (address) {

    return dao;

  }

}
