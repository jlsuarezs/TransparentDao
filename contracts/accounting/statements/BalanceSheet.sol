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

  /**
  * @notice Set an asset value
  * @param _asset The asset to be updated
  * @param amount The amount to be set
  */

  function setAssets(bytes32 _asset, int256 amount) public onlyDAO inQuarter {

    detailedAssets[_asset] = amount;

    emit SetAssets(_asset, amount);

  }

  /**
  * @notice Set a liability value
  * @param _liabilities The liability to be updated
  * @param amount The amount to be set
  */

  function setLiabilities(bytes32 _liabilities, int256 amount) public onlyDAO inQuarter {

    detailedLiabilities[_liabilities] = amount;

    emit SetLiabilities(_liabilities, amount);

  }

  /**
  * @notice Set an equity value
  * @param _equity The equity to be updated
  * @param amount The amount to be set
  */

  function setEquity(bytes32 _equity, int256 amount) public onlyDAO inQuarter {

    detailedEquity[_equity] = amount;

    emit SetEquity(_equity, amount);

  }

  //GETTERS

  /**
  * @dev Get the value of an asset
  */

  function getAsset(bytes32 _asset) public view returns (int256) {

    return detailedAssets[_asset];

  }

  /**
  * @dev Get the value of a liability
  */

  function getLiability(bytes32 _liability) public view returns (int256) {

    return detailedLiabilities[_liability];

  }

  /**
  * @dev Get the value of an equity
  */

  function getEquity(bytes32 _equity) public view returns (int256) {

    return detailedEquity[_equity];

  }

  /**
  * @dev Get the Dao controlling this balance sheet
  */

  function getDao() public view returns (address) {

    return dao;

  }

}
