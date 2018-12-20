pragma solidity 0.4.24;

import "contracts/interfaces/ITransparentDao.sol";
import "contracts/interfaces/IFloatMath.sol";
import "contracts/interfaces/IIncomeStatement.sol";

import "@aragon/os/contracts/lib/math/SafeMath.sol";

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

  uint256 month = 712;
  uint256 twoMonths = 1424;
  uint256 quarter = 2136;
  uint256 year = 8544;

  //General

  uint256[] monthlyRevenue = new uint256[](3);
  uint256[] monthlyExpenses = new uint256[](3);

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
  mapping(bytes32 => Income) detailedIncome;

  mapping(string => mapping(bytes32 => uint256)) detailedGeneralCashflow;

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

    require(description != bytes32(""));

    Income memory newItem = Income(_type, howMuch);

    detailedIncome[description] = newItem;

    if (_type == bytes32("primary"))
      operatingIncome = operatingIncome.add(howMuch);

    else
      nonOperatingIncome = nonOperatingIncome.add(howMuch);

    totalGrossIncome = totalGrossIncome.add(howMuch);

    uint256 _hours = getHours(now, startTime);

    addToMonthlyIncome(_hours, howMuch);

    emit AddedIncome(description, _type, howMuch);

  }

  function addExpense(bytes32 description, bytes32 _type, uint256 howMuch) public onlyDAO inQuarter {

    require(_type == bytes32("primary") ||
            _type == bytes32("secondary"));

    require(description != bytes32(""));

    require(howMuch > 0);

    Expense memory newExpense = Expense(_type, howMuch);

    detailedExpenses[description] = newExpense;

    if (_type == bytes32("primary")) {

      costOfRevenue = costOfRevenue.add(howMuch);

      primaryExpenses = primaryExpenses.add(howMuch);

    }

    else
      secondaryExpenses = secondaryExpenses.add(howMuch);

    totalExpenses = totalExpenses.add(howMuch);

    uint256 _hours = getHours(now, startTime);

    addToMonthlyExpenses(_hours, howMuch);

    emit AddedExpense(description, _type, howMuch);

  }

  function addLoss(bytes32 description, uint256 howMuch) public onlyDAO inQuarter {

    require(description != bytes32(""));

    require(howMuch > 0);

    detailedGeneralCashflow["loss"][description]
      = detailedGeneralCashflow["loss"][description].add(howMuch);

    losses = losses.add(howMuch);

    totalExpenses = totalExpenses.add(howMuch);

    uint256 _hours = getHours(now, startTime);

    addToMonthlyExpenses(_hours, howMuch);

    emit AddedLoss(description, howMuch);

  }

  function addGain(bytes32 description, uint256 howMuch) public onlyDAO inQuarter {

    require(description != bytes32(""));

    require(howMuch > 0);

    detailedGeneralCashflow["gain"][description]
      = detailedGeneralCashflow["gain"][description].add(howMuch);

    gains = gains.add(howMuch);

    totalGrossIncome = totalGrossIncome.add(howMuch);

    uint256 _hours = getHours(now, startTime);

    addToMonthlyIncome(_hours, howMuch);

    emit AddedGain(description, howMuch);

  }

  function reportTax(uint256 tax) public onlyDAO inQuarter {

    require(tax > 0);

    incomeTaxExpense = incomeTaxExpense.add(tax);

    totalExpenses = totalExpenses.add(tax);

    uint256 _hours = getHours(now, startTime);

    addToMonthlyExpenses( _hours, tax );

    emit ReportedTax(tax);

  }

  function reportRD(bytes32 description, uint256 rdExpense) public onlyDAO inQuarter {

    require(description != bytes32(""));

    require(rdExpense > 0);

    detailedGeneralCashflow["rd"][description]
      = detailedGeneralCashflow["rd"][description].add(rdExpense);

    totalExpenses = totalExpenses.add(rdExpense);

    RDExpense = RDExpense.add(rdExpense);

    uint256 _hours = getHours(now, startTime);

    addToMonthlyExpenses(_hours, rdExpense);

    emit ReportedRD(description, rdExpense);

  }

  function reportDonation(bytes32 description, uint256 donation) public onlyDAO inQuarter {

    require(description != bytes32(""));

    require(donation > 0);

    donations = donations.add(donation);

    totalExpenses = totalExpenses.add(donation);

    detailedGeneralCashflow["donation"][description]
      = detailedGeneralCashflow["donation"][description].add(donation);

    uint256 _hours = getHours(now, startTime);

    addToMonthlyExpenses(_hours, donation);

    emit ReportedDonation(description, donation);

  }

  function reportInterestExpense(bytes32 description, uint256 howMuch) public onlyDAO inQuarter {

    require(description != bytes32(""));

    require(howMuch > 0);

    interestExpense = interestExpense.add(howMuch);

    totalExpenses = totalExpenses.add(howMuch);

    detailedGeneralCashflow["interestExpense"][description]
      = detailedGeneralCashflow["interestExpense"][description].add(howMuch);

    uint256 _hours = getHours(now, startTime);

    addToMonthlyExpenses(_hours, howMuch);

    emit ReportedInterestExpense(description, howMuch);

  }

  function reportInterestGained(bytes32 description, uint256 howMuch) public onlyDAO inQuarter {

    require(description != bytes32(""));

    require(howMuch > 0);

    detailedGeneralCashflow["interestGained"][description]
      = detailedGeneralCashflow["interestGained"][description].add(howMuch);

    interestGained = interestGained.add(howMuch);

    totalGrossIncome = totalGrossIncome.add(howMuch);

    uint256 _hours = getHours(now, startTime);

    addToMonthlyIncome(_hours, howMuch);

    emit ReportedInterestGained(description, howMuch);

  }

  //PRIVATE

  function addToMonthlyIncome(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyRevenue[0] = monthlyRevenue[0].add(howMuch);

    else if (_hours > month && _hours <= twoMonths)
      monthlyRevenue[1] = monthlyRevenue[1].add(howMuch);

    else if (_hours > twoMonths && _hours <= quarter)
      monthlyRevenue[2] = monthlyRevenue[2].add(howMuch);

  }

  function addToMonthlyExpenses(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyExpenses[0] = monthlyExpenses[0].add(howMuch);

    else if (_hours > month && _hours <= twoMonths)
      monthlyExpenses[1] = monthlyExpenses[1].add(howMuch);

    else if (_hours > twoMonths && _hours <= quarter)
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

    return detailedGeneralCashflow["loss"][loss];

  }

  function getDetailedGain(bytes32 gain) public view returns (uint256) {

    return detailedGeneralCashflow["gain"][gain];

  }

  function getDetailedDonation(bytes32 donation) public view returns (uint256) {

    return detailedGeneralCashflow["donation"][donation];

  }

  function getDetailedRD(bytes32 rd) public view returns (uint256) {

    return detailedGeneralCashflow["rd"][rd];

  }

  function getDetailedInterestExpense(bytes32 interest) public view returns (uint256) {

    return detailedGeneralCashflow["interestExpense"][interest];

  }

  function getDetailedInterestReceived(bytes32 interest) public view returns (uint256) {

    return detailedGeneralCashflow["interestGained"][interest];

  }

  function getPrimaryExpenses() public view returns (uint256) {

    return primaryExpenses;

  }

  function getInterestGained() public view returns (uint256) {

    return interestGained;

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
