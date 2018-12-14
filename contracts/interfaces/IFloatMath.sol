pragma solidity 0.4.24;

contract IFloatMath {

  function toArray(bytes32 a) public pure returns (uint256[3] memory result);

  function fromArray(uint256[3] _array) public pure returns (bytes32 packed);

  function add(bytes32 a, bytes32 b) public pure returns (bytes32 result);

  function addArrays(uint256[3] aArray, uint256[3] bArray) internal pure returns (uint256[3] memory result);

  function negate(bytes32 a) public pure returns (bytes32 result);

  function negateArray(uint256[3] aArray) internal pure returns (uint256[3] memory result);

  function sub(bytes32 a, bytes32 b) public pure returns (bytes32 result);

  function subArrays(uint256[3] aArray, uint256[3] _bArray) internal pure returns (uint256[3] memory result);

  function mul(bytes32 a, bytes32 b) public pure returns (bytes32 result);

  function mulArrays(uint256[3] aArray, uint256[3] bArray) internal pure returns (uint256[3] memory result);

  function fastInvSqrt(bytes32 a) public pure returns (bytes32 result);

  function div(bytes32 a, bytes32 b) public pure returns (bytes32 result);

  function divArrays(uint256[3] aArray, uint256[3] bArray) internal pure returns (uint256[3] memory result);

  function divNaive(bytes32 a, bytes32 b) public pure returns (bytes32 result);

  function divNaiveArrays(uint256[3] aArray, uint256[3] bArray) internal pure returns (uint256[3] memory result);

  function compare(bytes32 a, bytes32 b) public pure returns (int8 result);

  function compareArrays(uint256[3] aArray, uint256[3] bArray) internal pure returns (int8 result);

  function compareAbs(bytes32 a, bytes32 b) public pure returns (int8 result);

  function compareAbsArrays(uint256[3] aArray, uint256[3] bArray) internal pure returns (int8 result);

  function log2bytes(bytes32 a) public pure returns (bytes32 result);

  function log2Array(uint256[3] aArray) internal pure returns (uint256[3] memory result);

  function initFromInt(int256 a) public pure returns (bytes32 result);

  function initFromIntToArray(int256 a) internal pure returns (uint256[3] memory result);

}
