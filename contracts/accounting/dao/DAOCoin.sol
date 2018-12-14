pragma solidity 0.4.24;

import "contracts/interfaces/IDAOCoin.sol";

contract DAOCoin is IDAOCoin {

  string name;
  string symbol;

  uint256 decimals;

  constructor(string _name, string _symbol, uint256 _decimals) {

    name = _name;
    symbol = _symbol;
    decimals = _decimals;

  }

  //GETTERS

  function getName() public view returns (string) {

    return name;

  }

  function getSymbol() public view returns (string) {

    return symbol;

  }

  function getDecimals() public view returns (uint256) {

    return decimals;

  }

}
