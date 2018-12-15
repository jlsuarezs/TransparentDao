pragma solidity 0.4.24;

import "contracts/interfaces/IBaseDao.sol";

contract ITransparentDao is IBaseDao {

  event ChangedIssuer(address _issuer);

  event NewBond(address _bond);

  event ChangedFloatMath(address _math);

  event SetDaoCoin(address _coin);

  event AddedTax(uint256 percentage, uint256 threshold);

  event DeletedTax(uint256 position);

  event StartedReport(address income, address balance, address cashflow);


  function setDaoCoin(address _coin) public;

  function addTax(uint256 percentage, uint256 threshold) public;

  function deleteTax(uint256 position) public;

  function changeFloatMath(address _float) public;

  function newBond(address _bond) public;

  function startReport(address _income, address _balance, address _cashflow) public;

  function isContract(address _addr) private returns (bool);

  //GETTERS

  function getBondAddress(uint256 position) public view returns (address);

  function getBondDebt(uint256 startPosition, uint256 bondsNumber) public view returns (uint256);

  function getUOAAddress() public view returns (address);

  function getFloatAddress() public view returns (address);

  function getCoinsAmount() public view returns (uint256);

  function getReportsLength() public view returns (uint256);

  function getReportAtPosition(uint256 position) public view returns (address, address, address);

  function getCoinAddress() public view returns (address);

  function getLatestTax() public view returns (uint256[]);

  function getTaxType() public view returns (uint);

  function getIncomeThresholds() public view returns (uint256[]);

}
