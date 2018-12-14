pragma solidity 0.4.24;

contract IBalanceSheet {

  event SetAssets(string _asset, int256 amount);

  event SetLiabilities(string _liabilities, int256 amount);

  event SetEquity(string _equity, int256 amount);


  function setAssets(string _asset, int256 amount) public;

  function setLiabilities(string _liabilities, int256 amount) public;

  function setEquity(string _equity, int256 amount) public;

  function getMarginOfSafety() public view returns (int256);

  function getAcidTestResult() public view returns (int256);

  function getAsset(string _asset) public view returns (int256);

  function getLiability(string _liability) public view returns (int256);

  function getEquity(string _equity) public view returns (int256);

}
