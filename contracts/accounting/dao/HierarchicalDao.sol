pragma solidity 0.4.24;

import "contracts/interfaces/IHierarchicalDao.sol";

contract HierarchicalDao is IHierarchicalDao {

  //Direct parent DAOs that own this DAO

  address[] directParents;

  //Direct children DAOs owned by this DAO

  address[] directChildren;

  //How many direct direct children this DAO can have

  uint256 maxChildren;

  uint256 biggestBuyOffer;


  address biggestBuyer;

  mapping(address => uint256) buySignals;

  modifier parentDependent() {

    bool callerIsParent = false;

    for (uint i = 0; i < directParents.length; i++) {

      if (directParents[i] == msg.sender) {callerIsParent = true; break;}

    }

    require(directParents.length == 0 || callerIsParent == true);

    _;

  }

  modifier onlyParentDAO {

    bool ok = false;

    for (uint256 i = 0; i < directParents.length; i++) {

      if (directParents[i] == msg.sender) {

        ok = true; break;

      }

    }

    require(ok == true);

    _;

  }

  modifier onlyChildDAO {

    bool ok = false;

    for (uint256 i = 0; i < directChildren.length; i++) {

      if (directChildren[i] == msg.sender) {

        ok = true; break;

      }

    }

    require(ok == true);

    _;

  }

  constructor(uint256 _maxChildren) {

    maxChildren = _maxChildren;

  }

  function signalBuyAvailability(int256 _marketPrice) public parentDependent {

    require(marketPrice >= -1);

    marketPrice = _marketPrice;

    emit SignalledBuyAvailability(_marketPrice);

  }

  function withdrawFromMarket() public parentDependent {

    marketPrice = -1;

  }

  //GETTERS

}
