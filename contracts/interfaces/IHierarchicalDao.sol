pragma solidity 0.4.24;

import "contracts/accounting/dao/TransparentDao.sol";

contract IHierarchicalDao is TransparentDao {

  event SignalledBuyAvailability(int256 _marketPrice);

  function signalBuyAvailability(int256 _marketPrice) public;

}
