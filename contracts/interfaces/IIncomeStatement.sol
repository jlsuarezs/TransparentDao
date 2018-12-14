pragma solidity 0.4.24;

contract IIncomeStatement {

  event AddedIncome(string description, string _type, uint256 howMuch);

  event AddedExpense(string description, string _type, uint256 howMuch);

  event AddedLoss(string description, uint256 howMuch);

  event AddedGain(string description, uint256 howMuch);

  event ReportedTax(uint256 tax);

  event ReportedRD(string description, uint256 rdExpense);

  event ReportedDonation(string description, uint256 donation);

  event ReportedInterestExpense(string description, uint256 howMuch);

  event ReportedInterestGained(string description, uint256 howMuch);


  function addIncome(string description, string _type, uint256 howMuch) public;

  function addExpense(string description, string _type, uint256 howMuch) public;

  function addLoss(string description, uint256 howMuch) public;

  function addGain(string description, uint256 howMuch) public;

  function reportTax(uint256 tax) public;

  function reportRD(string description, uint256 rdExpense) public;

  function reportDonation(string description, uint256 donation) public;

  function reportInterestExpense(string description, uint256 howMuch) public;

  function reportInterestGained(string description, uint256 howMuch) public;

  function addToMonthlyIncome(uint256 _hours, uint256 howMuch) private;

  function addToMonthlyExpenses(uint256 _hours, uint256 howMuch) private;


  function getEPC() public view returns (bytes32);

  function getDetailedExpense(string expense) public view returns (string, uint256);

  function getDetailedIncome(string income) public view returns (string, uint256);

  function getDetailedLoss(string loss) public view returns (uint256);

  function getDetailedGain(string gain) public view returns (uint256);

  function getDetailedDonation(string donation) public view returns (uint256);

  function getDetailedRD(string rd) public view returns (uint256);

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
