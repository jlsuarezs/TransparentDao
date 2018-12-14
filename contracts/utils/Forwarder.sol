pragma solidity 0.4.24;

import "contracts/interfaces/IForwarder.sol";

contract Forwarder is IForwarder {

  constructor() {}

  function callInt256(address _addr, string method, int256 nr) {
    _addr.call(bytes4(keccak256(method)), nr);
  }

  function callUint256(address _addr, string method, uint256 nr) {
    _addr.call(bytes4(keccak256(method)), nr);
  }

  function callStringUint256(address _addr, string method, string _str, uint256 nr) {
    _addr.call(bytes4(keccak256(method)), _str, nr);
  }

  function callStringAddressUint256(address _addr, string method, string _str, address _someAddr, uint256 nr) {
    _addr.call(bytes4(keccak256(method)), _str, _someAddr, nr);
  }

  function callAddressUint256(address _addr, string method, address someAddr, uint256 nr) {
    _addr.call(bytes4(keccak256(method)), someAddr, nr);
  }

  function callAddress(address _addr, string method, address someAddr) {
    _addr.call(bytes4(keccak256(method)), someAddr);
  }

  function callString(address _addr, string method, string someStr) {
    _addr.call(bytes4(keccak256(method)), someStr);
  }

  function callStringStringUint256(address _addr, string method, string someStr1, string someString2, uint256 someNr) {

    _addr.call(bytes4(keccak256(method)), someStr1, someString2, someNr);

  }

}
