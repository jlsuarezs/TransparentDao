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

  /**
  * @notice Record new income earned by the Dao controlling this income statement
  * @param description Details about the income
  * @param _type The type of income received
  * @param howMuch How much income is recorded
  */

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

  /**
  * @notice Record new expenses incurred by the Dao controlling this income statement
  * @param description Details about the expenses
  * @param _type The type of expenses incurred
  * @param howMuch How big the expense is
  */

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

  /**
  * @notice Record new losses incurred by the Dao controlling this income statement
  * @param description Details about the losses
  * @param howMuch How big the loss is
  */

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

  /**
  * @notice Record new gains for the Dao controlling this income statement
  * @param description Details about the gains
  * @param howMuch How big the gain is
  */

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

  /**
  * @notice Record new taxes subtracted from the Dao
  * @param tax How big the tax is
  */

  function reportTax(uint256 tax) public onlyDAO inQuarter {

    require(tax > 0);

    incomeTaxExpense = incomeTaxExpense.add(tax);

    totalExpenses = totalExpenses.add(tax);

    uint256 _hours = getHours(now, startTime);

    addToMonthlyExpenses( _hours, tax );

    emit ReportedTax(tax);

  }

  /**
  * @notice Record new R&D expenses
  * @param description Details about the R&D expenses
  * @param rdExpense How big the expense is
  */

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

  /**
  * @notice Record a new donation
  * @param description Details about the donation
  * @param donation How big the donation is
  */

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

  /**
  * @notice Record a new interest expense
  * @param description Details about the expense
  * @param howMuch How big the expense is
  */

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

  /**
  * @notice Record a new interest gain
  * @param description Details about the gain
  * @param howMuch How big the gain is
  */

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

  /**
  * @notice Record a new monthly income
  * @param _hours How many hours passed since this statement was created
  * @param howMuch How big the income is
  */

  function addToMonthlyIncome(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyRevenue[0] = monthlyRevenue[0].add(howMuch);

    else if (_hours > month && _hours <= twoMonths)
      monthlyRevenue[1] = monthlyRevenue[1].add(howMuch);

    else if (_hours > twoMonths && _hours <= quarter)
      monthlyRevenue[2] = monthlyRevenue[2].add(howMuch);

  }

  /**
  * @notice Record a new monthly expense
  * @param _hours How many hours passed since this statement was created
  * @param howMuch How big the expense is
  */

  function addToMonthlyExpenses(uint256 _hours, uint256 howMuch) private {

    if (_hours <= month)
      monthlyExpenses[0] = monthlyExpenses[0].add(howMuch);

    else if (_hours > month && _hours <= twoMonths)
      monthlyExpenses[1] = monthlyExpenses[1].add(howMuch);

    else if (_hours > twoMonths && _hours <= quarter)
      monthlyExpenses[2] = monthlyExpenses[2].add(howMuch);

  }

  //GETTERS

  /**
  * @dev Get the amount of hours between two dates
  */

  function getHours(uint256 endTime, uint256 startTime) public view returns (uint256) {

    return (endTime.sub(startTime)).div(3600);

  }

  /**
  * @dev Get the revenue for a specific month
  */

  function getMonthlyRevenue(uint256 position) public view returns (uint256) {

    return monthlyRevenue[position];

  }

  /**
  * @dev Get the expenses for a specific month
  */

  function getMonthlyExpenses(uint256 position) public view returns (uint256) {

    return monthlyExpenses[position];

  }

  /**
  * @dev Get the details about a specific expense
  */

  function getDetailedExpense(bytes32 expense) public view returns (bytes32, uint256) {

    return (detailedExpenses[expense]._type, detailedExpenses[expense].howMuch);

  }

  /**
  * @dev Get the details about a specific income
  */

  function getDetailedIncome(bytes32 income) public view returns (bytes32, uint256) {

    return (detailedIncome[income]._type, detailedIncome[income].howMuch);

  }

  /**
  * @dev Get the details about a specific loss
  */

  function getDetailedLoss(bytes32 loss) public view returns (uint256) {

    return detailedGeneralCashflow["loss"][loss];

  }

  /**
  * @dev Get the details about a specific gain
  */

  function getDetailedGain(bytes32 gain) public view returns (uint256) {

    return detailedGeneralCashflow["gain"][gain];

  }

  /**
  * @dev Get the details about a specific donation
  */

  function getDetailedDonation(bytes32 donation) public view returns (uint256) {

    return detailedGeneralCashflow["donation"][donation];

  }

  /**
  * @dev Get the details about a specific R&D expense
  */

  function getDetailedRD(bytes32 rd) public view returns (uint256) {

    return detailedGeneralCashflow["rd"][rd];

  }

  /**
  * @dev Get the details about a specific interest expense
  */

  function getDetailedInterestExpense(bytes32 interest) public view returns (uint256) {

    return detailedGeneralCashflow["interestExpense"][interest];

  }

  /**
  * @dev Get the details about a specific interest income
  */

  function getDetailedInterestReceived(bytes32 interest) public view returns (uint256) {

    return detailedGeneralCashflow["interestGained"][interest];

  }

  /**
  * @dev Get the amount of primary expenses
  */

  function getPrimaryExpenses() public view returns (uint256) {

    return primaryExpenses;

  }

  /**
  * @dev Get the total interest gained
  */

  function getInterestGained() public view returns (uint256) {

    return interestGained;

  }

  /**
  * @dev Get the amount of secondary expenses
  */

  function getSecondaryExpenses() public view returns (uint256) {

    return secondaryExpenses;

  }

  /**
  * @dev Get the amount of total expenses
  */

  function getTotalExpenses() public view returns (uint256) {

    return totalExpenses;

  }

  /**
  * @dev Get the amount of income tax expenses
  */

  function getIncomeTaxExpenses() public view returns (uint256) {

    return incomeTaxExpense;

  }

  /**
  * @dev Get the amount of R&D expenses
  */

  function getRDExpense() public view returns (uint256) {

    return RDExpense;

  }

  /**
  * @dev Get the amount of donations
  */

  function getDonations() public view returns (uint256) {

    return donations;

  }

  /**
  * @dev Get the amount of cos tof revenue
  */

  function getCostOfRevenue() public view returns (uint256) {

    return costOfRevenue;

  }

  /**
  * @dev Get the amount of interest expenses
  */

  function getInterestExpense() public view returns (uint256) {

    return interestExpense;

  }

  /**
  * @dev Get the amount of losses
  */

  function getLosses() public view returns (uint256) {

    return losses;

  }

  /**
  * @dev Get the amount of operating income
  */

  function getOperatingIncome() public view returns (uint256) {

    return operatingIncome;

  }

  /**
  * @dev Get the amount of non-operating income
  */

  function getNonOperatingIncome() public view returns (uint256) {

    return nonOperatingIncome;

  }

  /**
  * @dev Get the total gross income
  */

  function getTotalGrossIncome() public view returns (uint256) {

    return totalGrossIncome;

  }

  /**
  * @dev Get the amount of gains
  */

  function getGains() public view returns (uint256) {

    return gains;

  }

  /**
  * @dev Get the net income before taxes
  */

  function getNetIncomeBeforeTaxes() public view returns (uint256) {

    return totalGrossIncome.sub(totalExpenses).add(incomeTaxExpense);

  }

  /**
  * @dev Get the net income after taxes
  */

  function getNetIncomeAfterTaxes() public view returns (uint256) {

    return totalGrossIncome.sub(totalExpenses);

  }

  /**
  * @dev Get the timestamp of when this statement was created
  */

  function getStartTime() public view returns (uint256) {

    return startTime;

  }

  /**
  * @dev Get the timestamp when this statement will no longer be available
  */

  function getEndTime() public view returns (uint256) {

    return endTime;

  }

  /**
  * @dev Get the address of the Dao controlling this statement
  */

  function getDao() public view returns (address) {

    return dao;

  }

}
