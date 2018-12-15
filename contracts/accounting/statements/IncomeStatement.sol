pragma solidity 0.4.24;

import "contracts/interfaces/ITransparentDao.sol";
import "contracts/interfaces/IFloatMath.sol";
import "contracts/interfaces/IIncomeStatement.sol";

import "contracts/utils/DateTime.sol";
import "contracts/zeppelin/SafeMath.sol";

contract IncomeStatement is IIncomeStatement {

  using SafeMath for uint256;

  //Structs

  struct Income {

    bytes32 _type;

    uint256 howMuch;

  }

  struct Expense {

    bytes32 _type;

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

  mapping(bytes32 => Expense) detailedExpenses;
  mapping(bytes32 => uint256) detailedLosses;

  mapping(bytes32 => Income) detailedIncome;
  mapping(bytes32 => uint256) detailedGains;

  mapping(bytes32 => uint256) detailedDonations;
  mapping(bytes32 => uint256) detailedRD;

  mapping(bytes32 => uint256) detailedInterestPaid;
  mapping(bytes32 => uint256) detailedInterestReceived;

  modifier onlyDAO {

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

    endTime = startTime.add(quarter);

  }

  function addIncome(bytes32 description, bytes32 _type, uint256 howMuch) public onlyDAO inQuarter {

    require(_type == bytes32("primary") ||
            _type == bytes32("secondary"));

    Income memory newItem = Income(_type, howMuch);

    detailedIncome[description] = newItem;

    if (_type == bytes32("primary"))
      operatingIncome = operatingIncome.add(howMuch);

    else
      nonOperatingIncome = nonOperatingIncome.add(howMuch);

    totalGrossIncome = totalGrossIncome.add(howMuch);

    addToMonthlyIncome(getHours(now, startTime), howMuch);

    emit AddedIncome(description, _type, howMuch);

  }

  function addExpense(bytes32 description, bytes32 _type, uint256 howMuch) public onlyDAO inQuarter {

    require(_type == bytes32("primary") ||
            _type == bytes32("secondary"));

    Expense memory newExpense = Expense(_type, howMuch);

    detailedExpenses[description] = newExpense;

    if (_type == bytes32("primary")) {

      costOfRevenue = costOfRevenue.add(howMuch);

      primaryExpenses = primaryExpenses.add(howMuch);

    }

    else
      secondaryExpenses = secondaryExpenses.add(howMuch);

    totalExpenses = totalExpenses.add(howMuch);

    addToMonthlyExpenses(getHours(now, startTime), howMuch);

    emit AddedExpense(description, _type, howMuch);

  }

  function addLoss(bytes32 description, uint256 howMuch) public onlyDAO inQuarter {

    detailedLosses[description] = detailedLosses[description].add(howMuch);

    losses = losses.add(howMuch);

    totalExpenses = totalExpenses.add(howMuch);

    addToMonthlyExpenses(getHours(now, startTime), howMuch);

    emit AddedLoss(description, howMuch);

  }

  function addGain(bytes32 description, uint256 howMuch) public onlyDAO inQuarter {

    detailedGains[description] = detailedGains[description].add(howMuch);

    gains = gains.add(howMuch);

    totalGrossIncome = totalGrossIncome.add(howMuch);

    addToMonthlyIncome(getHours(now, startTime), howMuch);

    emit AddedGain(description, howMuch);

  }

  function reportTax(uint256 tax) public onlyDAO inQuarter {

    incomeTaxExpense = incomeTaxExpense.add(tax);

    totalExpenses = totalExpenses.add(tax);

    addToMonthlyExpenses( getHours(now, startTime), tax );

    emit ReportedTax(tax);

  }

  function reportRD(bytes32 description, uint256 rdExpense) public onlyDAO inQuarter {

    detailedRD[description] = detailedRD[description].add(rdExpense);

    totalExpenses = totalExpenses.add(rdExpense);

    RDExpense = RDExpense.add(rdExpense);

    addToMonthlyExpenses(getHours(now, startTime), rdExpense);

    emit ReportedRD(description, rdExpense);

  }

  function reportDonation(bytes32 description, uint256 donation) public onlyDAO inQuarter {

    donations = donations.add(donation);

    totalExpenses = totalExpenses.add(donation);

    detailedDonations[description] = detailedDonations[description].add(donation);

    addToMonthlyExpenses(getHours(now, startTime), donation);

    emit ReportedDonation(description, donation);

  }

  function reportInterestExpense(bytes32 description, uint256 howMuch) public onlyDAO inQuarter {

    interestExpense = interestExpense.add(howMuch);

    totalExpenses = totalExpenses.add(howMuch);

    detailedInterestPaid[description] = detailedInterestPaid[description].add(howMuch);

    addToMonthlyExpenses(getHours(now, startTime), howMuch);

    emit ReportedInterestExpense(description, howMuch);

  }

  function reportInterestGained(bytes32 description, uint256 howMuch) public onlyDAO inQuarter {

    detailedInterestReceived[description] = detailedInterestReceived[description].add(howMuch);

    interestGained = interestGained.add(howMuch);

    totalGrossIncome = totalGrossIncome.add(howMuch);

    addToMonthlyIncome(getHours(now, startTime), howMuch);

    emit ReportedInterestGained(description, howMuch);

  }

  //PRIVATE

  function addToMonthlyIncome(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyRevenue[0] = monthlyRevenue[0].add(howMuch);

    else if (_hours >= month && _hours <= twoMonths)
      monthlyRevenue[1] = monthlyRevenue[1].add(howMuch);

    else if (_hours >= twoMonths && _hours <= quarter)
      monthlyRevenue[2] = monthlyRevenue[2].add(howMuch);

  }

  function addToMonthlyExpenses(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyExpenses[0] = monthlyExpenses[0].add(howMuch);

    else if (_hours >= month && _hours <= twoMonths)
      monthlyExpenses[1] = monthlyExpenses[1].add(howMuch);

    else if (_hours >= twoMonths && _hours <= quarter)
      monthlyExpenses[2] = monthlyExpenses[2].add(howMuch);

  }

  //GETTERS

  function getHours(uint256 endTime, uint256 startTime) public view returns (uint256) {

    return (endTime.sub(startTime)).div(3600);

  }

  function getMonthlyRevenue(uint256 position) public view returns (uint256) {

    return monthlyRevenue[position];

  }

  function getMonthlyExpenses(uint256 position) public view returns (uint256) {

    return monthlyExpenses[position];

  }

  function getDetailedExpense(bytes32 expense) public view returns (bytes32, uint256) {

    return (detailedExpenses[expense]._type, detailedExpenses[expense].howMuch);

  }

  function getDetailedIncome(bytes32 income) public view returns (bytes32, uint256) {

    return (detailedIncome[income]._type, detailedIncome[income].howMuch);

  }

  function getDetailedLoss(bytes32 loss) public view returns (uint256) {

    return detailedLosses[loss];

  }

  function getDetailedGain(bytes32 gain) public view returns (uint256) {

    return detailedGains[gain];

  }

  function getDetailedDonation(bytes32 donation) public view returns (uint256) {

    return detailedDonations[donation];

  }

  function getDetailedRD(bytes32 rd) public view returns (uint256) {

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

    return totalGrossIncome.sub(totalExpenses).add(incomeTaxExpense);

  }

  function getNetIncomeAfterTaxes() public view returns (uint256) {

    return totalGrossIncome.sub(totalExpenses);

  }

  function getStartTime() public view returns (uint256) {

    return startTime;

  }

  function getEndTime() public view returns (uint256) {

    return endTime;

  }

  function getDao() public view returns (address) {

    return dao;

  }

}
