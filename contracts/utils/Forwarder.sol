pragma solidity 0.4.24;

import "contracts/interfaces/IForwarder.sol";

contract Forwarder is IForwarder {

  constructor() {}

  function callInt256(address _addr, string method, int256 nr) {

    _addr.call(bytes4(keccak256(method)), nr);
    emit ExecutedCall();

  }

  function callUint256(address _addr, string method, uint256 nr) {

    _addr.call(bytes4(keccak256(method)), nr);
    emit ExecutedCall();

  }

  function callStringUint256(address _addr, string method, string _str, uint256 nr) {

    _addr.call(bytes4(keccak256(method)), _str, nr);
    emit ExecutedCall();

  }

  function callStringAddressUint256(address _addr, string method, string _str, address _someAddr, uint256 nr) {

    _addr.call(bytes4(keccak256(method)), _str, _someAddr, nr);
    emit ExecutedCall();

  }

  function callAddressUint256(address _addr, string method, address someAddr, uint256 nr) {

    _addr.call(bytes4(keccak256(method)), someAddr, nr);
    emit ExecutedCall();

  }

  function callAddress(address _addr, string method, address someAddr) {

    _addr.call(bytes4(keccak256(method)), someAddr);
    emit ExecutedCall();

  }

  function callString(address _addr, string method, string someStr) {

    _addr.call(bytes4(keccak256(method)), someStr);
    emit ExecutedCall();

  }

  function callStringStringUint256(address _addr, string method, string someStr1, string someString2, uint256 someNr) {

    _addr.call(bytes4(keccak256(method)), someStr1, someString2, someNr);
    emit ExecutedCall();

  }

  function callStringInt256(address _addr, string method, string someStr, int256 someInt) {

    _addr.call(bytes4(keccak256(method)), someStr, someInt);
    emit ExecutedCall();

  }

  function callStringUint256Uint256(address _addr, string method, string someStr, uint256 someInt1, uint256 someInt2) {

    _addr.call(bytes4(keccak256(method)), someStr, someInt1, someInt2);
    emit ExecutedCall();

  }

}
