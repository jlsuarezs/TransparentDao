pragma solidity 0.4.24;

import "contracts/accounting/statements/BalanceSheet.sol";
import "contracts/accounting/statements/CashflowStatement.sol";
import "contracts/accounting/statements/IncomeStatement.sol";

import "contracts/interfaces/IReportIssuer.sol";

contract ReportIssuer is IReportIssuer {

  constructor() {}

  function issueReport(address _dateTime) public returns (address, address, address) {

    address income = new IncomeStatement(msg.sender, _dateTime);

    address balance = new BalanceSheet(msg.sender);

    address cashflow = new CashflowStatement(msg.sender);

    return (income, balance, cashflow);

  }

}
