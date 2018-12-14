pragma solidity 0.4.24;

import "contracts/interfaces/ITransparentDao.sol";
import "contracts/interfaces/IFloatMath.sol";
import "contracts/interfaces/IIncomeStatement.sol";

import "contracts/utils/DateTime.sol";

contract IncomeStatement is IIncomeStatement {

  //Structs

  struct Income {

    string _type;

    uint256 howMuch;

  }

  struct Expense {

    string _type;

    uint256 howMuch;

  }

  //Constants

  uint256 month = 712 hours;
  uint256 twoMonths = 1424 hours;
  uint256 quarter = 2136 hours;
  uint256 year = 8544 hours;

  //General

  uint256[] monthlyRevenue;
  uint256[] monthlyExpenses;

  //Expenses

  uint256 primaryExpenses;

  uint256 secondaryExpenses;

  uint256 totalExpenses;

  uint256 incomeTaxExpense;

  uint256 RDExpense;

  uint256 donations;

  uint256 interestExpense;

  uint256 costOfRevenue;

  uint256 losses;

  //Earnings

  uint256 operatingIncome;

  uint256 nonOperatingIncome;

  uint256 totalGrossIncome;

  uint256 interestGained;

  uint256 gains;

  //Misscellaneous

  address dao;

  uint256 startTime;

  uint256 endTime;

  mapping(string => Expense) detailedExpenses;
  mapping(string => uint256) detailedLosses;

  mapping(string => Income) detailedIncome;
  mapping(string => uint256) detailedGains;

  mapping(string => uint256) detailedDonations;
  mapping(string => uint256) detailedRD;

  mapping(string => uint256) detailedInterestPaid;
  mapping(string => uint256) detailedInterestReceived;

  DateTime dateTime;

  modifier onlyDAO {

    require(msg.sender == dao);
    _;

  }

  modifier inQuarter {

    uint _hours = (now - startTime) / 60 / 60 / 24 / 60;

    require(_hours <= quarter);

    _;

  }

  constructor(address _dao, address _dateTime) {

    dao = _dao;

    startTime = now;

    endTime = startTime + quarter;

    dateTime = DateTime(_dateTime);

  }

  function addIncome(string description, string _type, uint256 howMuch) public onlyDAO inQuarter {

    require(keccak256(_type) == keccak256("primary") ||
            keccak256(_type) == keccak256("secondary"));

    Income memory newItem = Income(_type, howMuch);

    detailedIncome[description] = newItem;

    if (keccak256(_type) == keccak256("primary"))
      operatingIncome = operatingIncome + howMuch;

    else
      nonOperatingIncome = nonOperatingIncome + howMuch;

    totalGrossIncome = totalGrossIncome + howMuch;

    addToMonthlyIncome((now - startTime) / 60 / 60 / 24 / 60, howMuch);

    emit AddedIncome(description, _type, howMuch);

  }

  function addExpense(string description, string _type, uint256 howMuch) public onlyDAO inQuarter {

    require(keccak256(_type) == keccak256("primary") ||
            keccak256(_type) == keccak256("secondary"));

    Expense memory newExpense = Expense(_type, howMuch);

    detailedExpenses[description] = newExpense;

    if (keccak256(_type) == keccak256("primary")) {

      costOfRevenue = costOfRevenue + howMuch;

      primaryExpenses = primaryExpenses + howMuch;

    }

    else
      secondaryExpenses = secondaryExpenses + howMuch;

    totalExpenses = totalExpenses + howMuch;

    addToMonthlyExpenses((now - startTime) / 60 / 60 / 24 / 60, howMuch);

    emit AddedExpense(description, _type, howMuch);

  }

  function addLoss(string description, uint256 howMuch) public onlyDAO inQuarter {

    detailedLosses[description] = detailedLosses[description] + howMuch;

    losses = losses + howMuch;

    totalExpenses = totalExpenses + howMuch;

    addToMonthlyExpenses((now - startTime) / 60 / 60 / 24 / 60, howMuch);

    emit AddedLoss(description, howMuch);

  }

  function addGain(string description, uint256 howMuch) public onlyDAO inQuarter {

    detailedGains[description] = detailedGains[description] + howMuch;

    gains = gains + howMuch;

    totalGrossIncome = totalGrossIncome + howMuch;

    addToMonthlyIncome((now - startTime) / 60 / 60 / 24 / 60, howMuch);

    emit AddedGain(description, howMuch);

  }

  function reportTax(uint256 tax) public onlyDAO inQuarter {

    incomeTaxExpense = incomeTaxExpense + tax;

    totalExpenses = totalExpenses + tax;

    addToMonthlyExpenses( (now - startTime) / 60 / 60 / 24 / 60, tax );

    emit ReportedTax(tax);

  }

  function reportRD(string description, uint256 rdExpense) public onlyDAO inQuarter {

    detailedRD[description] = detailedRD[description] + rdExpense;

    totalExpenses = totalExpenses + rdExpense;

    RDExpense = RDExpense + rdExpense;

    addToMonthlyExpenses((now - startTime) / 60 / 60 / 24 / 60, rdExpense);

    emit ReportedRD(description, rdExpense);

  }

  function reportDonation(string description, uint256 donation) public onlyDAO inQuarter {

    donations = donations + donation;

    totalExpenses = totalExpenses + donation;

    detailedDonations[description] = detailedDonations[description] + donation;

    addToMonthlyExpenses((now - startTime) / 60 / 60 / 24 / 60, donation);

    emit ReportedDonation(description, donation);

  }

  function reportInterestExpense(string description, uint256 howMuch) public onlyDAO inQuarter {

    interestExpense = interestExpense + howMuch;

    totalExpenses = totalExpenses + howMuch;

    detailedInterestPaid[description] = detailedInterestPaid[description] + howMuch;

    addToMonthlyExpenses((now - startTime) / 60 / 60 / 24 / 60, howMuch);

    emit ReportedInterestExpense(description, howMuch);

  }

  function reportInterestGained(string description, uint256 howMuch) public onlyDAO inQuarter {

    detailedInterestReceived[description] = detailedInterestReceived[description] + howMuch;

    interestGained = interestGained + howMuch;

    totalGrossIncome = totalGrossIncome + howMuch;

    addToMonthlyIncome((now - startTime) / 60 / 60 / 24 / 60, howMuch);

    emit ReportedInterestGained(description, howMuch);

  }

  //PRIVATE

  function addToMonthlyIncome(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyRevenue[0] = monthlyRevenue[0] + howMuch;

    else if (_hours >= month && _hours <= twoMonths)
      monthlyRevenue[1] = monthlyRevenue[1] + howMuch;

    else if (_hours >= twoMonths && _hours <= quarter)
      monthlyRevenue[2] = monthlyRevenue[2] + howMuch;

  }

  function addToMonthlyExpenses(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyExpenses[0] = monthlyExpenses[0] + howMuch;

    else if (_hours >= month && _hours <= twoMonths)
      monthlyExpenses[1] = monthlyExpenses[1] + howMuch;

    else if (_hours >= twoMonths && _hours <= quarter)
      monthlyExpenses[2] = monthlyExpenses[2] + howMuch;

  }

  //GETTERS

  //Earnings per coin

  function getEPC() public view returns (bytes32) {

    //[PRODUCTION] do it on chain

  }

  function getMonthlyRevenue(uint256 position) public view returns (uint256) {

    return monthlyRevenue[position];

  }

  function getMonthlyExpenses(uint256 position) public view returns (uint256) {

    return monthlyExpenses[position];

  }

  function getDetailedExpense(string expense) public view returns (string, uint256) {

    return (detailedExpenses[expense]._type, detailedExpenses[expense].howMuch);

  }

  function getDetailedIncome(string income) public view returns (string, uint256) {

    return (detailedIncome[income]._type, detailedIncome[income].howMuch);

  }

  function getDetailedLoss(string loss) public view returns (uint256) {

    return detailedLosses[loss];

  }

  function getDetailedGain(string gain) public view returns (uint256) {

    return detailedGains[gain];

  }

  function getDetailedDonation(string donation) public view returns (uint256) {

    return detailedDonations[donation];

  }

  function getDetailedRD(string rd) public view returns (uint256) {

    return detailedRD[rd];

  }

  function getPrimaryExpenses() public view returns (uint256) {

    return primaryExpenses;

  }

  function getSecondaryExpenses() public view returns (uint256) {

    return secondaryExpenses;

  }

  function getTotalExpenses() public view returns (uint256) {

    return totalExpenses;

  }

  function getIncomeTaxExpenses() public view returns (uint256) {

    return incomeTaxExpense;

  }

  function getRDExpense() public view returns (uint256) {

    return RDExpense;

  }

  function getDonations() public view returns (uint256) {

    return donations;

  }

  function getCostOfRevenue() public view returns (uint256) {

    return costOfRevenue;

  }

  function getInterestExpense() public view returns (uint256) {

    return interestExpense;

  }

  function getLosses() public view returns (uint256) {

    return losses;

  }

  function getOperatingIncome() public view returns (uint256) {

    return operatingIncome;

  }

  function getNonOperatingIncome() public view returns (uint256) {

    return nonOperatingIncome;

  }

  function getTotalGrossIncome() public view returns (uint256) {

    return totalGrossIncome;

  }

  function getGains() public view returns (uint256) {

    return gains;

  }

  function getNetIncomeBeforeTaxes() public view returns (uint256) {

    return totalGrossIncome - totalExpenses + incomeTaxExpense;

  }

  function getNetIncomeAfterTaxes() public view returns (uint256) {

    return totalGrossIncome - totalExpenses;

  }

  function getStartTime() public view returns (uint256) {

    return startTime;

  }

  function getEndTime() public view returns (uint256) {

    return endTime;

  }

}
