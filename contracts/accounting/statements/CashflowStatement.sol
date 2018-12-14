pragma experimental ABIEncoderV2;

import "contracts/interfaces/ICashflowStatement.sol";

contract CashflowStatement is ICashflowStatement {

  //Constants

  uint256 month = 712 hours;
  uint256 twoMonths = 1424 hours;
  uint256 quarter = 2136 hours;
  uint256 year = 8544 hours;

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


  uint256 startTime;

  uint256[] monthlyCharity;

  uint256[] monthlyTotalEquipment;

  uint256[] monthlyIncreaseInInventory;

  uint256[] monthlyDepreciations;

  uint256[] monthlyNetEarnings;

  uint256[] monthlyDividentsPaid;

  NonRecurrentSalary[] nonRecurrentSalaries;

  IncomeTax[] incomeTaxes;

  Rent[] rents;

  InterestPayment[] interestPayments;

  mapping(address => uint256) recurrentSalaries;

  mapping(string => uint256) equipmentExpenses;

  modifier onlyDAO() {

    require(msg.sender == dao);

    _;

  }

  modifier inQuarter {

    uint _hours = (now - startTime) / 60 / 60 / 24 / 60;

    require(_hours <= quarter);

    _;

  }

  constructor(address _dao) {

    dao = _dao;

    startTime = now;

  }

  function updateNetEarnings(uint256 earnings) public onlyDAO inQuarter {

    netEarnings = earnings;

    addToMonthlyNetIncome((now - startTime) / 60 / 60 / 24 / 60, earnings);

    emit UpdatedNetEarnings(earnings);

  }

  function updateDepreciations(uint256 _depreciations) public onlyDAO inQuarter {

    depreciations = _depreciations;

    addToMonthlyDepreciations((now - startTime) / 60 / 60 / 24 / 60, _depreciations);

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

    addToMonthlyDividents((now - startTime) / 60 / 60 / 24 / 60, dividents);

    emit UpdatedDividents(dividents);

  }

  function updateIncreaseInInventory(uint256 inventory) public onlyDAO inQuarter {

    increaseInInventory = inventory;

    addToMonthlyIncreaseInInventory((now - startTime) / 60 / 60 / 24 / 60, inventory);

    emit UpdatedIncreasesInInventory(inventory);

  }

  function setEquipmentExpenses(string updateReason, uint256 equipment) public onlyDAO inQuarter {

    equipmentExpenses[updateReason] = equipmentExpenses[updateReason]
                                      + (equipment - totalEquipmentExpenses);

    totalEquipmentExpenses = equipment;

    addToMonthlyTotalEquipment((now - startTime) / 60 / 60 / 24 / 60, equipment);

    emit SetEquipmentExpenses(updateReason, equipment);

  }

  function setCharity(uint256 _charity) public onlyDAO inQuarter {

    addToMonthlyCharity((now - startTime) / 60 / 60 / 24 / 60, _charity);

    charity = _charity;

    emit SetCharity(_charity);

  }

  function addNonRecurrentSalary(string employeeT, address who, uint256 payment) public onlyDAO inQuarter {

    NonRecurrentSalary memory newSalary = NonRecurrentSalary(now, employeeT, who, payment);

    nonRecurrentSalaries.push(newSalary);

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

  function addRent(string reason, uint256 howMuch) public onlyDAO inQuarter {

    Rent memory newRent = Rent(now, reason, howMuch);

    rents.push(newRent);

    emit AddedRent(reason, howMuch);

  }

  function addIncomeTax(string reason, uint256 howMuch) public onlyDAO inQuarter {

    IncomeTax memory newIncome = IncomeTax(now, reason, howMuch);

    incomeTaxes.push(newIncome);

    emit AddedIncomeTax(reason, howMuch);

  }

  function addInterestPayment(string _type, address receiver, uint256 amount) public onlyDAO inQuarter {

    InterestPayment memory newInterest = InterestPayment(_type, receiver, amount);

    interestPayments.push(newInterest);

    emit AddedInterestPayment(_type, receiver, amount);

  }

  //PRIVATE

  function addToMonthlyNetIncome(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyNetEarnings[0] = howMuch;

    else if (_hours >= month && _hours <= twoMonths)
      monthlyNetEarnings[1] = howMuch;

    else if (_hours >= twoMonths && _hours <= quarter)
      monthlyNetEarnings[2] = howMuch;

  }

  function addToMonthlyDepreciations(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyDepreciations[0] = howMuch;

    else if (_hours >= month && _hours <= twoMonths)
      monthlyDepreciations[1] = howMuch;

    else if (_hours >= twoMonths && _hours <= quarter)
      monthlyDepreciations[2] = howMuch;

  }

  function addToMonthlyIncreaseInInventory(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyIncreaseInInventory[0] = howMuch;

    else if (_hours >= month && _hours <= twoMonths)
      monthlyIncreaseInInventory[1] = howMuch;

    else if (_hours >= twoMonths && _hours <= quarter)
      monthlyIncreaseInInventory[2] = howMuch;

  }

  function addToMonthlyTotalEquipment(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyTotalEquipment[0] = howMuch;

    else if (_hours >= month && _hours <= twoMonths)
      monthlyTotalEquipment[1] = howMuch;

    else if (_hours >= twoMonths && _hours <= quarter)
      monthlyTotalEquipment[2] = howMuch;

  }

  function addToMonthlyCharity(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyTotalEquipment[0] = howMuch;

    else if (_hours >= month && _hours <= twoMonths)
      monthlyTotalEquipment[1] = howMuch;

    else if (_hours >= twoMonths && _hours <= quarter)
      monthlyTotalEquipment[2] = howMuch;

  }

  function addToMonthlyDividents(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyDividentsPaid[0] = howMuch;

    else if (_hours >= month && _hours <= twoMonths)
      monthlyDividentsPaid[1] = howMuch;

    else if (_hours >= twoMonths && _hours <= quarter)
      monthlyDividentsPaid[2] = howMuch;

  }


  //GETTERS

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

  function getNonCurrentSalary(uint256 pos) public view returns (NonRecurrentSalary) {

    return nonRecurrentSalaries[pos];

  }

  function getIncomeTax(uint256 pos) public view returns (IncomeTax) {

    return incomeTaxes[pos];

  }

  function getRent(uint256 pos) public view returns (Rent) {

    return rents[pos];

  }

  function getInterest(uint256 pos) public view returns (InterestPayment) {

    return interestPayments[pos];

  }

  function getRecurrentSalary(address who) public view returns (uint256) {

    return recurrentSalaries[who];

  }

  function getEquipmentDetails(string reason) public view returns (uint256) {

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

}
