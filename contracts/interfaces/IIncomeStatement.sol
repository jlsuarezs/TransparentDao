pragma solidity 0.4.24;

contract IIncomeStatement {

  event AddedIncome(bytes32 description, bytes32 _type, uint256 howMuch);

  event AddedExpense(bytes32 description, bytes32 _type, uint256 howMuch);

  event AddedLoss(bytes32 description, uint256 howMuch);

  event AddedGain(bytes32 description, uint256 howMuch);

  event ReportedTax(uint256 tax);

  event ReportedRD(bytes32 description, uint256 rdExpense);

  event ReportedDonation(bytes32 description, uint256 donation);

  event ReportedInterestExpense(bytes32 description, uint256 howMuch);

  event ReportedInterestGained(bytes32 description, uint256 howMuch);


  function addIncome(bytes32 description, bytes32 _type, uint256 howMuch) public;

  function addExpense(bytes32 description, bytes32 _type, uint256 howMuch) public;

  function addLoss(bytes32 description, uint256 howMuch) public;

  function addGain(bytes32 description, uint256 howMuch) public;

  function reportTax(uint256 tax) public;

  function reportRD(bytes32 description, uint256 rdExpense) public;

  function reportDonation(bytes32 description, uint256 donation) public;

  function reportInterestExpense(bytes32 description, uint256 howMuch) public;

  function reportInterestGained(bytes32 description, uint256 howMuch) public;

  function addToMonthlyIncome(uint256 _hours, uint256 howMuch) private;

  function addToMonthlyExpenses(uint256 _hours, uint256 howMuch) private;


  function getHours(uint256 endTime, uint256 startTime) public view returns (uint256);

  function getDao() public view returns (address);

  function getDetailedExpense(bytes32 expense) public view returns (bytes32, uint256);

  function getDetailedIncome(bytes32 income) public view returns (bytes32, uint256);

  function getDetailedLoss(bytes32 loss) public view returns (uint256);

  function getDetailedGain(bytes32 gain) public view returns (uint256);

  function getDetailedDonation(bytes32 donation) public view returns (uint256);

  function getDetailedRD(bytes32 rd) public view returns (uint256);

  function getPrimaryExpenses() public view returns (uint256);

  function getSecondaryExpenses() public view returns (uint256);

  function getTotalExpenses() public view returns (uint256);

  function getIncomeTaxExpenses() public view returns (uint256);

  function getRDExpense() public view returns (uint256);

  function getDonations() public view returns (uint256);

  function getCostOfRevenue() public view returns (uint256);

  function getInterestExpense() public view returns (uint256);

  function getLosses() public view returns (uint256);

  function getOperatingIncome() public view returns (uint256);

  function getNonOperatingIncome() public view returns (uint256);

  function getTotalGrossIncome() public view returns (uint256);

  function getGains() public view returns (uint256);

  function getNetIncomeBeforeTaxes() public view returns (uint256);

  function getNetIncomeAfterTaxes() public view returns (uint256);

  function getStartTime() public view returns (uint256);

  function getEndTime() public view returns (uint256);

}
