pragma solidity 0.4.24;

contract IBalanceSheet {

  event SetAssets(bytes32 _asset, int256 amount);

  event SetLiabilities(bytes32 _liabilities, int256 amount);

  event SetEquity(bytes32 _equity, int256 amount);


  function setAssets(bytes32 _asset, int256 amount) public;

  function setLiabilities(bytes32 _liabilities, int256 amount) public;

  function setEquity(bytes32 _equity, int256 amount) public;



  function getDao() public view returns (address);

  function getAsset(bytes32 _asset) public view returns (int256);

  function getLiability(bytes32 _liability) public view returns (int256);

  function getEquity(bytes32 _equity) public view returns (int256);

}
