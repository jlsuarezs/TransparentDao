pragma solidity 0.4.24;

library StringUtils {

  function getHash(string str) internal view returns (bytes32) {

    return keccak256(str);

  }

}
