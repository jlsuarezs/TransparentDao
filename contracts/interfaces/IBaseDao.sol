pragma solidity 0.4.24;

contract IBaseDao {

  //Market price

  int256 marketPrice = -1;

  function getMarketPrice() public view returns (int256);

}
