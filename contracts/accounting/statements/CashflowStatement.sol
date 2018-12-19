pragma solidity 0.4.24;

import "contracts/interfaces/ICashflowStatement.sol";

import "contracts/zeppelin/SafeMath.sol";

contract CashflowStatement is ICashflowStatement {

  using SafeMath for uint256;

  //Structs

  struct NonRecurrentSalary {

    uint256 timestamp;

    bytes32 employeeType;

    address employee;

    uint256 payment;

  }

  struct InterestPayment {

    bytes32 interestType;

    address receiver;

    uint256 amount;

  }

  struct IncomeTax {

    uint256 date;

    bytes32 forWhat;

    uint256 howMuch;

  }

  struct Rent {

    uint256 date;

    bytes32 forWhat;

    uint256 howMuch;

  }

  //Constants

  uint256 month = 712;
  uint256 twoMonths = 1424;
  uint256 quarter = 2136;
  uint256 year = 8544;

  //Indices

  uint256 netEarnings;

  //Additions to cash

  uint256 depreciations;

  uint256 decreasesInAccReceivable;

  uint256 increaseInAccPayable;

  uint256 increaseInTaxesPayable;

  //Substractions from cash

  uint256 increaseInInventory;

  uint256 totalEquipmentExpenses;

  uint256 charity;

  uint256 totalDividentsPaid;


  address dao;

  uint256 nonRecurrentNonce = 0;


  uint256 startTime;

  uint256[] monthlyCharity = new uint256[](3);

  uint256[] monthlyTotalEquipment = new uint256[](3);

  uint256[] monthlyIncreaseInInventory = new uint256[](3);

  uint256[] monthlyDepreciations = new uint256[](3);

  uint256[] monthlyNetEarnings = new uint256[](3);

  uint256[] monthlyDividentsPaid = new uint256[](3);


  IncomeTax[] incomeTaxes;

  Rent[] rents;

  InterestPayment[] interestPayments;

  mapping(uint256 => NonRecurrentSalary) nonRecurrentSalaries;

  mapping(address => uint256) recurrentSalaries;

  mapping(bytes32 => uint256) equipmentExpenses;

  modifier onlyDAO() {

    require(msg.sender == dao);

    _;

  }

  modifier inQuarter {

    uint _hours = getHours(now, startTime);

    require(_hours <= quarter);

    _;

  }

  constructor(address _dao) {

    dao = _dao;

    startTime = now;

  }

  function updateNetEarnings(uint256 earnings) public onlyDAO inQuarter {

    netEarnings = earnings;

    addToMonthlyNetIncome(getHours(now, startTime), earnings);

    emit UpdatedNetEarnings(earnings);

  }

  function updateDepreciations(uint256 _depreciations) public onlyDAO inQuarter {

    depreciations = _depreciations;

    addToMonthlyDepreciations(getHours(now, startTime), _depreciations);

    emit UpdatedDepreciations(_depreciations);

  }

  function updateDecreasesInAcc(uint256 decreases) public onlyDAO inQuarter {

    decreasesInAccReceivable = decreases;

    emit UpdatedDecreasesInAcc(decreases);

  }

  function updateIncreasesInAcc(uint256 increases) public onlyDAO inQuarter {

    increaseInAccPayable = increases;

    emit UpdatedIncreasesInAcc(increases);

  }

  function updateIncreaseInTaxes(uint256 taxes) public onlyDAO inQuarter {

    increaseInTaxesPayable = taxes;

    emit UpdatedIncreasesInTaxes(taxes);

  }

  function updateDividentsPaid(uint256 dividents) public onlyDAO inQuarter {

    totalDividentsPaid = dividents;

    addToMonthlyDividents(getHours(now, startTime), dividents);

    emit UpdatedDividents(dividents);

  }

  function updateIncreaseInInventory(uint256 inventory) public onlyDAO inQuarter {

    increaseInInventory = inventory;

    addToMonthlyIncreaseInInventory(getHours(now, startTime), inventory);

    emit UpdatedIncreasesInInventory(inventory);

  }

  function setEquipmentExpenses(bytes32 updateReason, uint256 equipment, uint256 total) public onlyDAO inQuarter {

    equipmentExpenses[updateReason] = equipment;

    totalEquipmentExpenses = total;

    addToMonthlyTotalEquipment(getHours(now, startTime), equipment);

    emit SetEquipmentExpenses(updateReason, equipment);

  }

  function setCharity(uint256 _charity) public onlyDAO inQuarter {

    addToMonthlyCharity(getHours(now, startTime), _charity);

    charity = _charity;

    emit SetCharity(_charity);

  }

  function addNonRecurrentSalary(bytes32 employeeT, address who, uint256 payment) public onlyDAO inQuarter {

    NonRecurrentSalary memory newSalary = NonRecurrentSalary(now, employeeT, who, payment);

    nonRecurrentSalaries[nonRecurrentNonce] = newSalary;

    nonRecurrentNonce++;

    emit AddedNonRecurrentSalary(employeeT, who, payment);

  }

  function addRecurrentSalary(address employee, uint256 salary) public onlyDAO inQuarter {

    recurrentSalaries[employee] = salary;

    emit AddedRecurrentSalary(employee, salary);

  }

  function deleteRecurrentSalary(address employee) public onlyDAO inQuarter {

    delete(recurrentSalaries[employee]);

    emit DeletedRecurrentSalary(employee);

  }

  function addRent(bytes32 reason, uint256 howMuch) public onlyDAO inQuarter {

    Rent memory newRent = Rent(now, reason, howMuch);

    rents.push(newRent);

    emit AddedRent(reason, howMuch);

  }

  function addIncomeTax(bytes32 reason, uint256 howMuch) public onlyDAO inQuarter {

    IncomeTax memory newIncome = IncomeTax(now, reason, howMuch);

    incomeTaxes.push(newIncome);

    emit AddedIncomeTax(reason, howMuch);

  }

  function addInterestPayment(bytes32 _type, address receiver, uint256 amount) public onlyDAO inQuarter {

    InterestPayment memory newInterest = InterestPayment(_type, receiver, amount);

    interestPayments.push(newInterest);

    emit AddedInterestPayment(_type, receiver, amount);

  }

  //PRIVATE

  function addToMonthlyNetIncome(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyNetEarnings[0] = howMuch;

    else if (_hours > month && _hours <= twoMonths)
      monthlyNetEarnings[1] = howMuch;

    else if (_hours > twoMonths && _hours <= quarter)
      monthlyNetEarnings[2] = howMuch;

  }

  function addToMonthlyDepreciations(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyDepreciations[0] = howMuch;

    else if (_hours > month && _hours <= twoMonths)
      monthlyDepreciations[1] = howMuch;

    else if (_hours > twoMonths && _hours <= quarter)
      monthlyDepreciations[2] = howMuch;

  }

  function addToMonthlyIncreaseInInventory(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyIncreaseInInventory[0] = howMuch;

    else if (_hours > month && _hours <= twoMonths)
      monthlyIncreaseInInventory[1] = howMuch;

    else if (_hours > twoMonths && _hours <= quarter)
      monthlyIncreaseInInventory[2] = howMuch;

  }

  function addToMonthlyTotalEquipment(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyTotalEquipment[0] = howMuch;

    else if (_hours > month && _hours <= twoMonths)
      monthlyTotalEquipment[1] = howMuch;

    else if (_hours > twoMonths && _hours <= quarter)
      monthlyTotalEquipment[2] = howMuch;

  }

  function addToMonthlyCharity(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyCharity[0] = howMuch;

    else if (_hours > month && _hours <= twoMonths)
      monthlyCharity[1] = howMuch;

    else if (_hours > twoMonths && _hours <= quarter)
      monthlyCharity[2] = howMuch;

  }

  function addToMonthlyDividents(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyDividentsPaid[0] = howMuch;

    else if (_hours > month && _hours <= twoMonths)
      monthlyDividentsPaid[1] = howMuch;

    else if (_hours > twoMonths && _hours <= quarter)
      monthlyDividentsPaid[2] = howMuch;

  }


  //GETTERS

  function getHours(uint256 endTime, uint256 startTime) public view returns (uint256) {

    return (endTime.sub(startTime)).div(3600);

  }

  function getNetEarnings() public view returns (uint256) {

    return netEarnings;

  }

  function getDepreciations() public view returns (uint256) {

    return depreciations;

  }

  function getDeccInAcc() public view returns (uint256) {

    return decreasesInAccReceivable;

  }

  function getIncInAcc() public view returns (uint256) {

    return increaseInAccPayable;

  }

  function getIncInTaxes() public view returns (uint256) {

    return increaseInTaxesPayable;

  }

  function getIncreaseInInventory() public view returns (uint256) {

    return increaseInInventory;

  }

  function getTotalEquipment() public view returns (uint256) {

    return totalEquipmentExpenses;

  }

  function getCharity() public view returns (uint256) {

    return charity;

  }

  function getNonRecurrentSalary(uint256 pos) public view returns (uint256, bytes32, address, uint256) {

    return (nonRecurrentSalaries[pos].timestamp, nonRecurrentSalaries[pos].employeeType,
            nonRecurrentSalaries[pos].employee, nonRecurrentSalaries[pos].payment);

  }

  function getIncomeTax(uint256 pos) public view returns (uint256, bytes32, uint256) {

    return (incomeTaxes[pos].date, incomeTaxes[pos].forWhat, incomeTaxes[pos].howMuch);

  }

  function getRent(uint256 pos) public view returns (uint256, bytes32, uint256) {

    return (rents[pos].date, rents[pos].forWhat, rents[pos].howMuch);

  }

  function getInterest(uint256 pos) public view returns (bytes32, address, uint256) {

    return (interestPayments[pos].interestType, interestPayments[pos].receiver,
            interestPayments[pos].amount);

  }

  function getRecurrentSalary(address who) public view returns (uint256) {

    return recurrentSalaries[who];

  }

  function getEquipmentDetails(bytes32 reason) public view returns (uint256) {

    return equipmentExpenses[reason];

  }

  function getMonthlyCharity(uint256 position) public view returns (uint256) {

    return monthlyCharity[position];

  }

  function getMonthlyTotalEquipment(uint256 position) public view returns (uint256) {

    return monthlyTotalEquipment[position];

  }

  function getMonthlyIncreaseInInventory(uint256 position) public view returns (uint256) {

    return monthlyIncreaseInInventory[position];

  }

  function getMonthlyDepreciations(uint256 position) public view returns (uint256) {

    return monthlyDepreciations[position];

  }

  function getMonthlyNetEarnings(uint256 position) public view returns (uint256) {

    return monthlyNetEarnings[position];

  }

  function getMonthlyDividentsPaid(uint256 position) public view returns (uint256) {

    return monthlyDividentsPaid[position];

  }

  function getTotalDividentsPaid() public view returns (uint256) {

    return totalDividentsPaid;

  }

  function getDao() public view returns (address) {

    return dao;

  }

}
