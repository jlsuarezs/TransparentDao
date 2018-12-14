pragma solidity 0.4.24;

import "contracts/zeppelin/ERC20/MintableToken.sol";

contract IDAOCoin is MintableToken {

  function getName() public view returns (string);

  function getSymbol() public view returns (string);

  function getDecimals() public view returns (uint256);

}
