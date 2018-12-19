pragma solidity 0.4.24;

contract ICashflowStatement {

  event UpdatedNetEarnings(uint256 earnings);

  event UpdatedDepreciations(uint256 depreciations);

  event UpdatedDecreasesInAcc(uint256 decreases);

  event UpdatedIncreasesInAcc(uint256 increases);

  event UpdatedIncreasesInTaxes(uint256 taxes);

  event UpdatedIncreasesInInventory(uint256 inventory);

  event SetEquipmentExpenses(bytes32 updateReason, uint256 equipment);

  event SetCharity(uint256 charity);

  event AddedNonRecurrentSalary(bytes32 employeeT, address who, uint256 payment);

  event AddedRecurrentSalary(address employee, uint256 salary);

  event DeletedRecurrentSalary(address employee);

  event AddedRent(bytes32 reason, uint256 howMuch);

  event AddedIncomeTax(bytes32 reason, uint256 howMuch);

  event AddedInterestPayment(bytes32 _type, address receiver, uint256 amount);

  event UpdatedDividents(uint256 dividents);


  function updateNetEarnings(uint256 earnings) public;

  function updateDepreciations(uint256 _depreciations) public;

  function updateDecreasesInAcc(uint256 decreases) public;

  function updateIncreasesInAcc(uint256 increases) public;

  function updateIncreaseInTaxes(uint256 taxes) public;

  function updateIncreaseInInventory(uint256 inventory) public;

  function setEquipmentExpenses(bytes32 updateReason, uint256 equipment, uint256 total) public;

  function setCharity(uint256 _charity) public;

  function addNonRecurrentSalary(bytes32 employeeT, address who, uint256 payment) public;

  function addRecurrentSalary(address employee, uint256 salary) public;

  function deleteRecurrentSalary(address employee) public;

  function addRent(bytes32 reason, uint256 howMuch) public;

  function addIncomeTax(bytes32 reason, uint256 howMuch) public;

  function updateDividentsPaid(uint256 dividents) public;

  function addInterestPayment(bytes32 _type, address receiver, uint256 amount) public;


  function getHours(uint256 endTime, uint256 startTime) public view returns (uint256);

  function getDao() public view returns (address);

  function getNetEarnings() public view returns (uint256);

  function getDepreciations() public view returns (uint256);

  function getDeccInAcc() public view returns (uint256);

  function getIncInAcc() public view returns (uint256);

  function getIncInTaxes() public view returns (uint256);

  function getIncreaseInInventory() public view returns (uint256);

  function getTotalEquipment() public view returns (uint256);

  function getCharity() public view returns (uint256);

  function getNonRecurrentSalary(uint256 pos) public view returns (uint256, bytes32, address, uint256);

  function getIncomeTax(uint256 pos) public view returns (uint256, bytes32, uint256);

  function getRent(uint256 pos) public view returns (uint256, bytes32, uint256);

  function getInterest(uint256 pos) public view returns (bytes32, address, uint256);

  function getRecurrentSalary(address who) public view returns (uint256);

  function getEquipmentDetails(bytes32 reason) public view returns (uint256);

  function getMonthlyCharity(uint256 position) public view returns (uint256);

  function getMonthlyTotalEquipment(uint256 position) public view returns (uint256);

  function getMonthlyIncreaseInInventory(uint256 position) public view returns (uint256);

  function getMonthlyDepreciations(uint256 position) public view returns (uint256);

  function getMonthlyNetEarnings(uint256 position) public view returns (uint256);

  function getMonthlyDividentsPaid(uint256 position) public view returns (uint256);

  function getTotalDividentsPaid() public view returns (uint256);

  //PRIVATE

  function addToMonthlyNetIncome(uint256 _hours, uint256 howMuch) private;

  function addToMonthlyDepreciations(uint256 _hours, uint256 howMuch) private;

  function addToMonthlyIncreaseInInventory(uint256 _hours, uint256 howMuch) private;

  function addToMonthlyTotalEquipment(uint256 _hours, uint256 howMuch) private;

  function addToMonthlyCharity(uint256 _hours, uint256 howMuch) private;

  function addToMonthlyDividents(uint256 _hours, uint256 howMuch) private;

}
