var transparentDao = {
  "contractName": "TransparentDao",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_addr",
          "type": "address"
        },
        {
          "name": "method",
          "type": "string"
        },
        {
          "name": "_str",
          "type": "string"
        },
        {
          "name": "nr",
          "type": "uint256"
        }
      ],
      "name": "callStringUint256",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_addr",
          "type": "address"
        },
        {
          "name": "method",
          "type": "string"
        },
        {
          "name": "someStr1",
          "type": "string"
        },
        {
          "name": "someString2",
          "type": "string"
        },
        {
          "name": "someNr",
          "type": "uint256"
        }
      ],
      "name": "callStringStringUint256",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_addr",
          "type": "address"
        },
        {
          "name": "method",
          "type": "string"
        },
        {
          "name": "someAddr",
          "type": "address"
        }
      ],
      "name": "callAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_addr",
          "type": "address"
        },
        {
          "name": "method",
          "type": "string"
        },
        {
          "name": "someStr",
          "type": "string"
        }
      ],
      "name": "callString",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_addr",
          "type": "address"
        },
        {
          "name": "method",
          "type": "string"
        },
        {
          "name": "nr",
          "type": "int256"
        }
      ],
      "name": "callInt256",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_addr",
          "type": "address"
        },
        {
          "name": "method",
          "type": "string"
        },
        {
          "name": "someAddr",
          "type": "address"
        },
        {
          "name": "nr",
          "type": "uint256"
        }
      ],
      "name": "callAddressUint256",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_addr",
          "type": "address"
        },
        {
          "name": "method",
          "type": "string"
        },
        {
          "name": "nr",
          "type": "uint256"
        }
      ],
      "name": "callUint256",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_addr",
          "type": "address"
        },
        {
          "name": "method",
          "type": "string"
        },
        {
          "name": "_str",
          "type": "string"
        },
        {
          "name": "_someAddr",
          "type": "address"
        },
        {
          "name": "nr",
          "type": "uint256"
        }
      ],
      "name": "callStringAddressUint256",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_reportIssuer",
          "type": "address"
        },
        {
          "name": "_unitOfAccount",
          "type": "address"
        },
        {
          "name": "_floatMath",
          "type": "address"
        },
        {
          "name": "_daoCoin",
          "type": "address"
        },
        {
          "name": "_dateTime",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_issuer",
          "type": "address"
        }
      ],
      "name": "ChangedIssuer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_math",
          "type": "address"
        }
      ],
      "name": "ChangedFloatMath",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_coin",
          "type": "address"
        }
      ],
      "name": "SetDaoCoin",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "percentage",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "threshold",
          "type": "uint256"
        }
      ],
      "name": "AddedTax",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "position",
          "type": "uint256"
        }
      ],
      "name": "DeletedTax",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "income",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "balance",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "cashflow",
          "type": "address"
        }
      ],
      "name": "StartedReport",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_dateTime",
          "type": "address"
        }
      ],
      "name": "changeDateTime",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_issuer",
          "type": "address"
        }
      ],
      "name": "changeIssuer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_float",
          "type": "address"
        }
      ],
      "name": "changeFloatMath",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_coin",
          "type": "address"
        }
      ],
      "name": "setDaoCoin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "percentage",
          "type": "uint256"
        },
        {
          "name": "threshold",
          "type": "uint256"
        }
      ],
      "name": "addTax",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "position",
          "type": "uint256"
        }
      ],
      "name": "deleteTax",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "startReport",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getUOAAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "startPosition",
          "type": "uint256"
        },
        {
          "name": "bondsNumber",
          "type": "uint256"
        }
      ],
      "name": "getBondDebt",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "position",
          "type": "uint256"
        }
      ],
      "name": "getBondAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getMarketPrice",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getReportsLength",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "position",
          "type": "uint256"
        }
      ],
      "name": "getReportAtPosition",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getFloatAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCoinAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCoinsAmount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getLatestTax",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getTaxType",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity 0.4.24;\n\nimport \"contracts/zeppelin/SafeMath.sol\";\nimport \"contracts/utils/Forwarder.sol\";\nimport \"contracts/utils/DateTime.sol\";\n\nimport \"contracts/interfaces/IReportIssuer.sol\";\nimport \"contracts/interfaces/IDAOCoin.sol\";\nimport \"contracts/interfaces/ITransparentDao.sol\";\nimport \"contracts/interfaces/IFloatMath.sol\";\nimport \"contracts/interfaces/IIncomeStatement.sol\";\nimport \"contracts/interfaces/IDAOBond.sol\";\n\ncontract TransparentDao is ITransparentDao, Forwarder {\n\n  using SafeMath for uint256;\n\n  //Constants\n\n  uint256 quarter = 2136 hours;\n  uint256 year = 8544 hours;\n  string fiatRepresentation = \"US DOLLAR\";\n\n  //Structs\n\n  struct Report {\n\n    address income;\n\n    address balance;\n\n    address cashflow;\n\n  }\n\n  //Tax types\n\n  enum TAX_TYPE {NO_TAX, SIMPLE, PROGRESSIVE}\n\n  TAX_TYPE taxT;\n\n  //We can choose to have a simple or progressive tax\n\n  uint256[] latestTax;\n\n  uint256[] incomeThresholds;\n\n  //How many tax thresholds there are\n\n  uint256 taxLenght;\n\n  //Financial year indices\n\n  uint256 startOfCurrentYear;\n  uint256 latestReportIssuance;\n\n  //Current coin used to do accounting\n\n  address UOA;\n\n  //Coin which might be issued by the DAO\n\n  IDAOCoin daoCoin;\n\n  IReportIssuer issuer;\n\n  IFloatMath floatMath;\n\n  DateTime dateTime;\n\n\n  IDAOBond[] bonds;\n  Report[] reportsArray;\n\n  mapping(uint256 => Report) reports;\n\n  constructor(address _reportIssuer, address _unitOfAccount, address _floatMath,\n              address _daoCoin, address _dateTime) {\n\n    require(_unitOfAccount == address(0) || isContract(_unitOfAccount) == true);\n    require(isContract(_floatMath) == true);\n    require(isContract(_dateTime) == true);\n    require(isContract(_daoCoin) == true);\n\n    daoCoin = IDAOCoin(_daoCoin);\n\n    issuer = IReportIssuer(_reportIssuer);\n\n    UOA = _unitOfAccount;\n\n    floatMath = IFloatMath(_floatMath);\n\n    dateTime = DateTime(_dateTime);\n\n  }\n\n  function changeDateTime(address _dateTime) public {\n\n    require(isContract(_dateTime) == true);\n\n    dateTime = DateTime(_dateTime);\n\n  }\n\n  function changeIssuer(address _issuer) public {\n\n    require(isContract(_issuer) == true);\n\n    issuer = IReportIssuer(_issuer);\n\n    emit ChangedIssuer(_issuer);\n\n  }\n\n  function changeFloatMath(address _float) public {\n\n    require(isContract(_float) == true);\n\n    floatMath = IFloatMath(_float);\n\n    emit ChangedFloatMath(_float);\n\n  }\n\n  function setDaoCoin(address _coin) public {\n\n    require(address(daoCoin) == address(0));\n    require(isContract(_coin) == true);\n\n    daoCoin = IDAOCoin(_coin);\n\n    emit SetDaoCoin(_coin);\n\n  }\n\n  function addTax(uint256 percentage, uint256 threshold) public {\n\n    latestTax.push(percentage);\n\n    incomeThresholds.push(threshold);\n\n    emit AddedTax(percentage, threshold);\n\n  }\n\n  function deleteTax(uint256 position) public {\n\n    if (position >= latestTax.length) return;\n\n    for (uint i = position; i < latestTax.length.sub(1); i++) {\n\n        latestTax[i] = latestTax[i.add(1)];\n        incomeThresholds[i] = incomeThresholds[i.add(1)];\n\n    }\n\n    delete(latestTax[latestTax.length.sub(1)]);\n    delete(incomeThresholds[incomeThresholds.length.sub(1)]);\n\n    latestTax.length--;\n    incomeThresholds.length--;\n\n    emit DeletedTax(position);\n\n  }\n\n  function startReport() public {\n\n    require(latestReportIssuance == 0 || now - latestReportIssuance >= quarter);\n\n    address _balance;\n    address _cashflow;\n    address _income;\n\n    (_income, _balance, _cashflow) = issuer.issueReport(address(dateTime));\n\n    Report memory newReport = Report(_income, _balance, _cashflow);\n\n    if (latestReportIssuance == 0 || now.sub(startOfCurrentYear) >= year)\n      startOfCurrentYear = now;\n\n    latestReportIssuance = now;\n\n    reports[latestReportIssuance] = newReport;\n\n    reportsArray.push(newReport);\n\n    emit StartedReport(_income, _balance, _cashflow);\n\n  }\n\n  function() payable;\n\n  //PRIVATE\n\n  function isContract(address _addr) private returns (bool) {\n\n    uint32 size;\n\n    assembly {\n      size := extcodesize(_addr)\n    }\n\n    return (size > 0);\n\n  }\n\n  //GETTERS\n\n  function getUOAAddress() public view returns (address) {\n\n    return UOA;\n\n  }\n\n  function getBondDebt(uint256 startPosition, uint256 bondsNumber) public view returns (uint256) {\n\n    require(startPosition < bonds.length);\n    require(startPosition.add(bondsNumber) < bonds.length);\n\n    uint256 debt = 0;\n\n    for (uint256 i = startPosition; i < startPosition.add(bondsNumber); i++) {\n\n      debt = debt.add(bonds[i].getTotalDebt());\n\n    }\n\n    return debt;\n\n  }\n\n  function getBondAddress(uint256 position) public view returns (address) {\n\n    return address(bonds[position]);\n\n  }\n\n  function getMarketPrice() public view returns (int256) {\n\n    return marketPrice;\n\n  }\n\n  function getReportsLength() public view returns (uint256) {\n\n    return reportsArray.length;\n\n  }\n\n  function getReportAtPosition(uint256 position) public view returns (address, address, address) {\n\n    return (reportsArray[position].income, reportsArray[position].balance,\n            reportsArray[position].cashflow);\n\n  }\n\n  function getFloatAddress() public view returns (address) {\n\n    return address(floatMath);\n\n  }\n\n  function getCoinAddress() public view returns (address) {\n\n    return address(daoCoin);\n\n  }\n\n  function getCoinsAmount() public view returns (uint256) {\n\n    uint256 decimals = daoCoin.getDecimals();\n\n    return daoCoin.totalSupply() / 10**decimals;\n\n  }\n\n  function getLatestTax() public view returns (uint256[]) {\n\n    return latestTax;\n\n  }\n\n  function getTaxType() public view returns (uint) {\n\n    if (taxLenght > 1) return uint(TAX_TYPE.PROGRESSIVE);\n\n    else if (taxLenght == 1) return uint(TAX_TYPE.SIMPLE);\n\n    return uint(TAX_TYPE.NO_TAX);\n\n  }\n\n}\n",
  "sourcePath": "/home/stefan/Work/TransparentDao/contracts/accounting/dao/TransparentDao.sol",
  "ast": {
    "absolutePath": "/home/stefan/Work/TransparentDao/contracts/accounting/dao/TransparentDao.sol",
    "exportedSymbols": {
      "TransparentDao": [
        1743
      ]
    },
    "id": 1744,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1077,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:3"
      },
      {
        "absolutePath": "contracts/zeppelin/SafeMath.sol",
        "file": "contracts/zeppelin/SafeMath.sol",
        "id": 1078,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 14688,
        "src": "25:41:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/utils/Forwarder.sol",
        "file": "contracts/utils/Forwarder.sol",
        "id": 1079,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 14070,
        "src": "67:39:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/utils/DateTime.sol",
        "file": "contracts/utils/DateTime.sol",
        "id": 1080,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 13874,
        "src": "107:38:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IReportIssuer.sol",
        "file": "contracts/interfaces/IReportIssuer.sol",
        "id": 1081,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 12970,
        "src": "147:48:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IDAOCoin.sol",
        "file": "contracts/interfaces/IDAOCoin.sol",
        "id": 1082,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 12351,
        "src": "196:43:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/ITransparentDao.sol",
        "file": "contracts/interfaces/ITransparentDao.sol",
        "id": 1083,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 13106,
        "src": "240:50:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IFloatMath.sol",
        "file": "contracts/interfaces/IFloatMath.sol",
        "id": 1084,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 12595,
        "src": "291:45:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IIncomeStatement.sol",
        "file": "contracts/interfaces/IIncomeStatement.sol",
        "id": 1085,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 12956,
        "src": "337:51:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IDAOBond.sol",
        "file": "contracts/interfaces/IDAOBond.sol",
        "id": 1086,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 12330,
        "src": "389:43:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1087,
              "name": "ITransparentDao",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 13105,
              "src": "461:15:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ITransparentDao_$13105",
                "typeString": "contract ITransparentDao"
              }
            },
            "id": 1088,
            "nodeType": "InheritanceSpecifier",
            "src": "461:15:3"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1089,
              "name": "Forwarder",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14069,
              "src": "478:9:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Forwarder_$14069",
                "typeString": "contract Forwarder"
              }
            },
            "id": 1090,
            "nodeType": "InheritanceSpecifier",
            "src": "478:9:3"
          }
        ],
        "contractDependencies": [
          11774,
          12681,
          13105,
          14069
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1743,
        "linearizedBaseContracts": [
          1743,
          14069,
          12681,
          13105,
          11774
        ],
        "name": "TransparentDao",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1093,
            "libraryName": {
              "contractScope": null,
              "id": 1091,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14687,
              "src": "499:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$14687",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "493:27:3",
            "typeName": {
              "id": 1092,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "512:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 1096,
            "name": "quarter",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "539:28:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1094,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "539:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "32313336",
              "id": 1095,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "557:10:3",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_7689600_by_1",
                "typeString": "int_const 7689600"
              },
              "value": "2136"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1099,
            "name": "year",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "571:25:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1097,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "571:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "38353434",
              "id": 1098,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "586:10:3",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_30758400_by_1",
                "typeString": "int_const 30758400"
              },
              "value": "8544"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1102,
            "name": "fiatRepresentation",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "600:39:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1100,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "600:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "555320444f4c4c4152",
              "id": 1101,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "628:11:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_779c348e6684549be43adac38c9ac68a57bfee5826e3f1a02fa31df465f0cf19",
                "typeString": "literal_string \"US DOLLAR\""
              },
              "value": "US DOLLAR"
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "TransparentDao.Report",
            "id": 1109,
            "members": [
              {
                "constant": false,
                "id": 1104,
                "name": "income",
                "nodeType": "VariableDeclaration",
                "scope": 1109,
                "src": "678:14:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1103,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "678:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1106,
                "name": "balance",
                "nodeType": "VariableDeclaration",
                "scope": 1109,
                "src": "699:15:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1105,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "699:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1108,
                "name": "cashflow",
                "nodeType": "VariableDeclaration",
                "scope": 1109,
                "src": "721:16:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1107,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "721:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Report",
            "nodeType": "StructDefinition",
            "scope": 1743,
            "src": "657:86:3",
            "visibility": "public"
          },
          {
            "canonicalName": "TransparentDao.TAX_TYPE",
            "id": 1113,
            "members": [
              {
                "id": 1110,
                "name": "NO_TAX",
                "nodeType": "EnumValue",
                "src": "777:6:3"
              },
              {
                "id": 1111,
                "name": "SIMPLE",
                "nodeType": "EnumValue",
                "src": "785:6:3"
              },
              {
                "id": 1112,
                "name": "PROGRESSIVE",
                "nodeType": "EnumValue",
                "src": "793:11:3"
              }
            ],
            "name": "TAX_TYPE",
            "nodeType": "EnumDefinition",
            "src": "762:43:3"
          },
          {
            "constant": false,
            "id": 1115,
            "name": "taxT",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "809:13:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
              "typeString": "enum TransparentDao.TAX_TYPE"
            },
            "typeName": {
              "contractScope": null,
              "id": 1114,
              "name": "TAX_TYPE",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1113,
              "src": "809:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
                "typeString": "enum TransparentDao.TAX_TYPE"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1118,
            "name": "latestTax",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "882:19:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 1116,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "882:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 1117,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "882:9:3",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1121,
            "name": "incomeThresholds",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "906:26:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 1119,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "906:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 1120,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "906:9:3",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1123,
            "name": "taxLenght",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "976:17:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1122,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "976:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1125,
            "name": "startOfCurrentYear",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1026:26:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1124,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1026:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1127,
            "name": "latestReportIssuance",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1056:28:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1126,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1056:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1129,
            "name": "UOA",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1129:11:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1128,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1129:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1131,
            "name": "daoCoin",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1188:16:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IDAOCoin_$12350",
              "typeString": "contract IDAOCoin"
            },
            "typeName": {
              "contractScope": null,
              "id": 1130,
              "name": "IDAOCoin",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 12350,
              "src": "1188:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                "typeString": "contract IDAOCoin"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1133,
            "name": "issuer",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1209:20:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IReportIssuer_$12969",
              "typeString": "contract IReportIssuer"
            },
            "typeName": {
              "contractScope": null,
              "id": 1132,
              "name": "IReportIssuer",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 12969,
              "src": "1209:13:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                "typeString": "contract IReportIssuer"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1135,
            "name": "floatMath",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1234:20:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IFloatMath_$12594",
              "typeString": "contract IFloatMath"
            },
            "typeName": {
              "contractScope": null,
              "id": 1134,
              "name": "IFloatMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 12594,
              "src": "1234:10:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IFloatMath_$12594",
                "typeString": "contract IFloatMath"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1137,
            "name": "dateTime",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1259:17:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DateTime_$13873",
              "typeString": "contract DateTime"
            },
            "typeName": {
              "contractScope": null,
              "id": 1136,
              "name": "DateTime",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 13873,
              "src": "1259:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DateTime_$13873",
                "typeString": "contract DateTime"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1140,
            "name": "bonds",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1282:16:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_contract$_IDAOBond_$12329_$dyn_storage",
              "typeString": "contract IDAOBond[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 1138,
                "name": "IDAOBond",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 12329,
                "src": "1282:8:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IDAOBond_$12329",
                  "typeString": "contract IDAOBond"
                }
              },
              "id": 1139,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1282:10:3",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_contract$_IDAOBond_$12329_$dyn_storage_ptr",
                "typeString": "contract IDAOBond[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1143,
            "name": "reportsArray",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1302:21:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Report_$1109_storage_$dyn_storage",
              "typeString": "struct TransparentDao.Report[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 1141,
                "name": "Report",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1109,
                "src": "1302:6:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Report_$1109_storage_ptr",
                  "typeString": "struct TransparentDao.Report"
                }
              },
              "id": 1142,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1302:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Report_$1109_storage_$dyn_storage_ptr",
                "typeString": "struct TransparentDao.Report[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1147,
            "name": "reports",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1328:34:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Report_$1109_storage_$",
              "typeString": "mapping(uint256 => struct TransparentDao.Report)"
            },
            "typeName": {
              "id": 1146,
              "keyType": {
                "id": 1144,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1336:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1328:26:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Report_$1109_storage_$",
                "typeString": "mapping(uint256 => struct TransparentDao.Report)"
              },
              "valueType": {
                "contractScope": null,
                "id": 1145,
                "name": "Report",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1109,
                "src": "1347:6:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Report_$1109_storage_ptr",
                  "typeString": "struct TransparentDao.Report"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1226,
              "nodeType": "Block",
              "src": "1497:404:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1171,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 1165,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1161,
                            "name": "_unitOfAccount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1151,
                            "src": "1512:14:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 1163,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1538:1:3",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 1162,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1530:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 1164,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1530:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1512:28:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 1170,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1167,
                                "name": "_unitOfAccount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1151,
                                "src": "1555:14:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 1166,
                              "name": "isContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1540,
                              "src": "1544:10:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                                "typeString": "function (address) returns (bool)"
                              }
                            },
                            "id": 1168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1544:26:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 1169,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1574:4:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "1544:34:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1512:66:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1160,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "1504:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1172,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1504:75:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1173,
                  "nodeType": "ExpressionStatement",
                  "src": "1504:75:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1179,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1176,
                              "name": "_floatMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1153,
                              "src": "1604:10:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1175,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1540,
                            "src": "1593:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) returns (bool)"
                            }
                          },
                          "id": 1177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1593:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1178,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1619:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "1593:30:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1174,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "1585:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1585:39:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1181,
                  "nodeType": "ExpressionStatement",
                  "src": "1585:39:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1187,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1184,
                              "name": "_dateTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1157,
                              "src": "1649:9:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1183,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1540,
                            "src": "1638:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) returns (bool)"
                            }
                          },
                          "id": 1185,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1638:21:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1186,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1663:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "1638:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1182,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "1630:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1630:38:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1189,
                  "nodeType": "ExpressionStatement",
                  "src": "1630:38:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1192,
                              "name": "_daoCoin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1155,
                              "src": "1693:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1191,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1540,
                            "src": "1682:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) returns (bool)"
                            }
                          },
                          "id": 1193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1682:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1706:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "1682:28:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1190,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "1674:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1674:37:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1197,
                  "nodeType": "ExpressionStatement",
                  "src": "1674:37:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1198,
                      "name": "daoCoin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1131,
                      "src": "1718:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                        "typeString": "contract IDAOCoin"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1200,
                          "name": "_daoCoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1155,
                          "src": "1737:8:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1199,
                        "name": "IDAOCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12350,
                        "src": "1728:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IDAOCoin_$12350_$",
                          "typeString": "type(contract IDAOCoin)"
                        }
                      },
                      "id": 1201,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1728:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                        "typeString": "contract IDAOCoin"
                      }
                    },
                    "src": "1718:28:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                      "typeString": "contract IDAOCoin"
                    }
                  },
                  "id": 1203,
                  "nodeType": "ExpressionStatement",
                  "src": "1718:28:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1208,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1204,
                      "name": "issuer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1133,
                      "src": "1753:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                        "typeString": "contract IReportIssuer"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1206,
                          "name": "_reportIssuer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1149,
                          "src": "1776:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1205,
                        "name": "IReportIssuer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12969,
                        "src": "1762:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IReportIssuer_$12969_$",
                          "typeString": "type(contract IReportIssuer)"
                        }
                      },
                      "id": 1207,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1762:28:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                        "typeString": "contract IReportIssuer"
                      }
                    },
                    "src": "1753:37:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                      "typeString": "contract IReportIssuer"
                    }
                  },
                  "id": 1209,
                  "nodeType": "ExpressionStatement",
                  "src": "1753:37:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1212,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1210,
                      "name": "UOA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1129,
                      "src": "1797:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1211,
                      "name": "_unitOfAccount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1151,
                      "src": "1803:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1797:20:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1213,
                  "nodeType": "ExpressionStatement",
                  "src": "1797:20:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1218,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1214,
                      "name": "floatMath",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1135,
                      "src": "1824:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IFloatMath_$12594",
                        "typeString": "contract IFloatMath"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1216,
                          "name": "_floatMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1153,
                          "src": "1847:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1215,
                        "name": "IFloatMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12594,
                        "src": "1836:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IFloatMath_$12594_$",
                          "typeString": "type(contract IFloatMath)"
                        }
                      },
                      "id": 1217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1836:22:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IFloatMath_$12594",
                        "typeString": "contract IFloatMath"
                      }
                    },
                    "src": "1824:34:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IFloatMath_$12594",
                      "typeString": "contract IFloatMath"
                    }
                  },
                  "id": 1219,
                  "nodeType": "ExpressionStatement",
                  "src": "1824:34:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1224,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1220,
                      "name": "dateTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1137,
                      "src": "1865:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DateTime_$13873",
                        "typeString": "contract DateTime"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1222,
                          "name": "_dateTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1157,
                          "src": "1885:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1221,
                        "name": "DateTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13873,
                        "src": "1876:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DateTime_$13873_$",
                          "typeString": "type(contract DateTime)"
                        }
                      },
                      "id": 1223,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1876:19:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DateTime_$13873",
                        "typeString": "contract DateTime"
                      }
                    },
                    "src": "1865:30:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DateTime_$13873",
                      "typeString": "contract DateTime"
                    }
                  },
                  "id": 1225,
                  "nodeType": "ExpressionStatement",
                  "src": "1865:30:3"
                }
              ]
            },
            "documentation": null,
            "id": 1227,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1149,
                  "name": "_reportIssuer",
                  "nodeType": "VariableDeclaration",
                  "scope": 1227,
                  "src": "1379:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1148,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1379:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1151,
                  "name": "_unitOfAccount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1227,
                  "src": "1402:22:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1150,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1402:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1153,
                  "name": "_floatMath",
                  "nodeType": "VariableDeclaration",
                  "scope": 1227,
                  "src": "1426:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1152,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1426:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1155,
                  "name": "_daoCoin",
                  "nodeType": "VariableDeclaration",
                  "scope": 1227,
                  "src": "1460:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1154,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1460:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1157,
                  "name": "_dateTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 1227,
                  "src": "1478:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1478:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1378:118:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1159,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1497:0:3"
            },
            "scope": 1743,
            "src": "1367:534:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1246,
              "nodeType": "Block",
              "src": "1955:88:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1237,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1234,
                              "name": "_dateTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1229,
                              "src": "1981:9:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1233,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1540,
                            "src": "1970:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) returns (bool)"
                            }
                          },
                          "id": 1235,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1970:21:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1236,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1995:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "1970:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1232,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "1962:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1238,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1962:38:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1239,
                  "nodeType": "ExpressionStatement",
                  "src": "1962:38:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1240,
                      "name": "dateTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1137,
                      "src": "2007:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DateTime_$13873",
                        "typeString": "contract DateTime"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1242,
                          "name": "_dateTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1229,
                          "src": "2027:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1241,
                        "name": "DateTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13873,
                        "src": "2018:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DateTime_$13873_$",
                          "typeString": "type(contract DateTime)"
                        }
                      },
                      "id": 1243,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2018:19:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DateTime_$13873",
                        "typeString": "contract DateTime"
                      }
                    },
                    "src": "2007:30:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DateTime_$13873",
                      "typeString": "contract DateTime"
                    }
                  },
                  "id": 1245,
                  "nodeType": "ExpressionStatement",
                  "src": "2007:30:3"
                }
              ]
            },
            "documentation": null,
            "id": 1247,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "changeDateTime",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1230,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1229,
                  "name": "_dateTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 1247,
                  "src": "1929:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1228,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1929:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1928:19:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1231,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1955:0:3"
            },
            "scope": 1743,
            "src": "1905:138:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1270,
              "nodeType": "Block",
              "src": "2093:121:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1257,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1254,
                              "name": "_issuer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1249,
                              "src": "2119:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1253,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1540,
                            "src": "2108:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) returns (bool)"
                            }
                          },
                          "id": 1255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2108:19:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1256,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2131:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "2108:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1252,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "2100:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1258,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2100:36:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1259,
                  "nodeType": "ExpressionStatement",
                  "src": "2100:36:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1260,
                      "name": "issuer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1133,
                      "src": "2143:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                        "typeString": "contract IReportIssuer"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1262,
                          "name": "_issuer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1249,
                          "src": "2166:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1261,
                        "name": "IReportIssuer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12969,
                        "src": "2152:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IReportIssuer_$12969_$",
                          "typeString": "type(contract IReportIssuer)"
                        }
                      },
                      "id": 1263,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2152:22:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                        "typeString": "contract IReportIssuer"
                      }
                    },
                    "src": "2143:31:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                      "typeString": "contract IReportIssuer"
                    }
                  },
                  "id": 1265,
                  "nodeType": "ExpressionStatement",
                  "src": "2143:31:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1267,
                        "name": "_issuer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1249,
                        "src": "2200:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1266,
                      "name": "ChangedIssuer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12978,
                      "src": "2186:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1268,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2186:22:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1269,
                  "nodeType": "EmitStatement",
                  "src": "2181:27:3"
                }
              ]
            },
            "documentation": null,
            "id": 1271,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "changeIssuer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1249,
                  "name": "_issuer",
                  "nodeType": "VariableDeclaration",
                  "scope": 1271,
                  "src": "2069:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1248,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2069:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2068:17:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1251,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2093:0:3"
            },
            "scope": 1743,
            "src": "2047:167:3",
            "stateMutability": "nonpayable",
            "superFunction": 13009,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1294,
              "nodeType": "Block",
              "src": "2266:121:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1281,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1278,
                              "name": "_float",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1273,
                              "src": "2292:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1277,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1540,
                            "src": "2281:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) returns (bool)"
                            }
                          },
                          "id": 1279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2281:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1280,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2303:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "2281:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1276,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "2273:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1282,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2273:35:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1283,
                  "nodeType": "ExpressionStatement",
                  "src": "2273:35:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1284,
                      "name": "floatMath",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1135,
                      "src": "2315:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IFloatMath_$12594",
                        "typeString": "contract IFloatMath"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1286,
                          "name": "_float",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1273,
                          "src": "2338:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1285,
                        "name": "IFloatMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12594,
                        "src": "2327:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IFloatMath_$12594_$",
                          "typeString": "type(contract IFloatMath)"
                        }
                      },
                      "id": 1287,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2327:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IFloatMath_$12594",
                        "typeString": "contract IFloatMath"
                      }
                    },
                    "src": "2315:30:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IFloatMath_$12594",
                      "typeString": "contract IFloatMath"
                    }
                  },
                  "id": 1289,
                  "nodeType": "ExpressionStatement",
                  "src": "2315:30:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1291,
                        "name": "_float",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1273,
                        "src": "2374:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1290,
                      "name": "ChangedFloatMath",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12982,
                      "src": "2357:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2357:24:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1293,
                  "nodeType": "EmitStatement",
                  "src": "2352:29:3"
                }
              ]
            },
            "documentation": null,
            "id": 1295,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "changeFloatMath",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1274,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1273,
                  "name": "_float",
                  "nodeType": "VariableDeclaration",
                  "scope": 1295,
                  "src": "2243:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1272,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2243:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2242:16:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1275,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2266:0:3"
            },
            "scope": 1743,
            "src": "2218:169:3",
            "stateMutability": "nonpayable",
            "superFunction": 13031,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1328,
              "nodeType": "Block",
              "src": "2433:153:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1307,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1302,
                              "name": "daoCoin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1131,
                              "src": "2456:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                                "typeString": "contract IDAOCoin"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                                "typeString": "contract IDAOCoin"
                              }
                            ],
                            "id": 1301,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2448:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1303,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2448:16:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 1305,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2476:1:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 1304,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2468:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1306,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2468:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2448:30:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1300,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "2440:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1308,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2440:39:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1309,
                  "nodeType": "ExpressionStatement",
                  "src": "2440:39:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1315,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1312,
                              "name": "_coin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1297,
                              "src": "2504:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1311,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1540,
                            "src": "2493:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) returns (bool)"
                            }
                          },
                          "id": 1313,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2493:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1314,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2514:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "2493:25:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1310,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "2485:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1316,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2485:34:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1317,
                  "nodeType": "ExpressionStatement",
                  "src": "2485:34:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1318,
                      "name": "daoCoin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1131,
                      "src": "2526:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                        "typeString": "contract IDAOCoin"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1320,
                          "name": "_coin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1297,
                          "src": "2545:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1319,
                        "name": "IDAOCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12350,
                        "src": "2536:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IDAOCoin_$12350_$",
                          "typeString": "type(contract IDAOCoin)"
                        }
                      },
                      "id": 1321,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2536:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                        "typeString": "contract IDAOCoin"
                      }
                    },
                    "src": "2526:25:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                      "typeString": "contract IDAOCoin"
                    }
                  },
                  "id": 1323,
                  "nodeType": "ExpressionStatement",
                  "src": "2526:25:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1325,
                        "name": "_coin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1297,
                        "src": "2574:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1324,
                      "name": "SetDaoCoin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12986,
                      "src": "2563:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1326,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2563:17:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1327,
                  "nodeType": "EmitStatement",
                  "src": "2558:22:3"
                }
              ]
            },
            "documentation": null,
            "id": 1329,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setDaoCoin",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1298,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1297,
                  "name": "_coin",
                  "nodeType": "VariableDeclaration",
                  "scope": 1329,
                  "src": "2411:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1296,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2411:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2410:15:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1299,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2433:0:3"
            },
            "scope": 1743,
            "src": "2391:195:3",
            "stateMutability": "nonpayable",
            "superFunction": 13014,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1353,
              "nodeType": "Block",
              "src": "2652:121:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1339,
                        "name": "percentage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1331,
                        "src": "2674:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1336,
                        "name": "latestTax",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1118,
                        "src": "2659:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 1338,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2659:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 1340,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2659:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1341,
                  "nodeType": "ExpressionStatement",
                  "src": "2659:26:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1345,
                        "name": "threshold",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1333,
                        "src": "2714:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1342,
                        "name": "incomeThresholds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1121,
                        "src": "2692:16:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 1344,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2692:21:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 1346,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2692:32:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1347,
                  "nodeType": "ExpressionStatement",
                  "src": "2692:32:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1349,
                        "name": "percentage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1331,
                        "src": "2745:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1350,
                        "name": "threshold",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1333,
                        "src": "2757:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 1348,
                      "name": "AddedTax",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12992,
                      "src": "2736:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 1351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2736:31:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1352,
                  "nodeType": "EmitStatement",
                  "src": "2731:36:3"
                }
              ]
            },
            "documentation": null,
            "id": 1354,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addTax",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1334,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1331,
                  "name": "percentage",
                  "nodeType": "VariableDeclaration",
                  "scope": 1354,
                  "src": "2606:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1330,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2606:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1333,
                  "name": "threshold",
                  "nodeType": "VariableDeclaration",
                  "scope": 1354,
                  "src": "2626:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1332,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2626:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2605:39:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1335,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2652:0:3"
            },
            "scope": 1743,
            "src": "2590:183:3",
            "stateMutability": "nonpayable",
            "superFunction": 13021,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1437,
              "nodeType": "Block",
              "src": "2821:427:3",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1362,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1359,
                      "name": "position",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1356,
                      "src": "2832:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1360,
                        "name": "latestTax",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1118,
                        "src": "2844:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 1361,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2844:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2832:28:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 1364,
                  "nodeType": "IfStatement",
                  "src": "2828:41:3",
                  "trueBody": {
                    "expression": null,
                    "functionReturnParameters": 1358,
                    "id": 1363,
                    "nodeType": "Return",
                    "src": "2862:7:3"
                  }
                },
                {
                  "body": {
                    "id": 1401,
                    "nodeType": "Block",
                    "src": "2933:111:3",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1388,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1379,
                              "name": "latestTax",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1118,
                              "src": "2944:9:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 1381,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1380,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1366,
                              "src": "2954:1:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2944:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1382,
                              "name": "latestTax",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1118,
                              "src": "2959:9:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 1387,
                            "indexExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "31",
                                  "id": 1385,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2975:1:3",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1383,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1366,
                                  "src": "2969:1:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 1384,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "add",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 14686,
                                "src": "2969:5:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 1386,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2969:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2959:19:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2944:34:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1389,
                        "nodeType": "ExpressionStatement",
                        "src": "2944:34:3"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1399,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1390,
                              "name": "incomeThresholds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1121,
                              "src": "2988:16:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 1392,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1391,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1366,
                              "src": "3005:1:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2988:19:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1393,
                              "name": "incomeThresholds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1121,
                              "src": "3010:16:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 1398,
                            "indexExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "31",
                                  "id": 1396,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3033:1:3",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1394,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1366,
                                  "src": "3027:1:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 1395,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "add",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 14686,
                                "src": "3027:5:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 1397,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3027:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3010:26:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2988:48:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1400,
                        "nodeType": "ExpressionStatement",
                        "src": "2988:48:3"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1375,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1369,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1366,
                      "src": "2899:1:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 1373,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2924:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1370,
                            "name": "latestTax",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1118,
                            "src": "2903:9:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 1371,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2903:16:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1372,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14662,
                        "src": "2903:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1374,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2903:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2899:27:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1402,
                  "initializationExpression": {
                    "assignments": [
                      1366
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 1366,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 1438,
                        "src": "2880:6:3",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1365,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2880:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 1368,
                    "initialValue": {
                      "argumentTypes": null,
                      "id": 1367,
                      "name": "position",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1356,
                      "src": "2889:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2880:17:3"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1377,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2928:3:3",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 1376,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1366,
                        "src": "2928:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1378,
                    "nodeType": "ExpressionStatement",
                    "src": "2928:3:3"
                  },
                  "nodeType": "ForStatement",
                  "src": "2875:169:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1411,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3050:42:3",
                    "subExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1403,
                            "name": "latestTax",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1118,
                            "src": "3057:9:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 1409,
                          "indexExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 1407,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3088:1:3",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1404,
                                  "name": "latestTax",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1118,
                                  "src": "3067:9:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                    "typeString": "uint256[] storage ref"
                                  }
                                },
                                "id": 1405,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3067:16:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 1406,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 14662,
                              "src": "3067:20:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 1408,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3067:23:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "3057:34:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 1410,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "3056:36:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1412,
                  "nodeType": "ExpressionStatement",
                  "src": "3050:42:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3098:56:3",
                    "subExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1413,
                            "name": "incomeThresholds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1121,
                            "src": "3105:16:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 1419,
                          "indexExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 1417,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3150:1:3",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1414,
                                  "name": "incomeThresholds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1121,
                                  "src": "3122:16:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                    "typeString": "uint256[] storage ref"
                                  }
                                },
                                "id": 1415,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3122:23:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 1416,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 14662,
                              "src": "3122:27:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 1418,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3122:30:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "3105:48:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 1420,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "3104:50:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1422,
                  "nodeType": "ExpressionStatement",
                  "src": "3098:56:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1426,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "3161:18:3",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1423,
                        "name": "latestTax",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1118,
                        "src": "3161:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 1425,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3161:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1427,
                  "nodeType": "ExpressionStatement",
                  "src": "3161:18:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "3185:25:3",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1428,
                        "name": "incomeThresholds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1121,
                        "src": "3185:16:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 1430,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3185:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1432,
                  "nodeType": "ExpressionStatement",
                  "src": "3185:25:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1434,
                        "name": "position",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1356,
                        "src": "3233:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 1433,
                      "name": "DeletedTax",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12996,
                      "src": "3222:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 1435,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3222:20:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1436,
                  "nodeType": "EmitStatement",
                  "src": "3217:25:3"
                }
              ]
            },
            "documentation": null,
            "id": 1438,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteTax",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1357,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1356,
                  "name": "position",
                  "nodeType": "VariableDeclaration",
                  "scope": 1438,
                  "src": "2796:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1355,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2796:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2795:18:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1358,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2821:0:3"
            },
            "scope": 1743,
            "src": "2777:471:3",
            "stateMutability": "nonpayable",
            "superFunction": 13026,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1519,
              "nodeType": "Block",
              "src": "3282:579:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1450,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1444,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1442,
                            "name": "latestReportIssuance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1127,
                            "src": "3297:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1443,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3321:1:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3297:25:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1449,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 1447,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 1445,
                              "name": "now",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14790,
                              "src": "3326:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 1446,
                              "name": "latestReportIssuance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1127,
                              "src": "3332:20:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3326:26:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 1448,
                            "name": "quarter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1096,
                            "src": "3356:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3326:37:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "3297:66:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1441,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "3289:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1451,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3289:75:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1452,
                  "nodeType": "ExpressionStatement",
                  "src": "3289:75:3"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1454,
                      "name": "_balance",
                      "nodeType": "VariableDeclaration",
                      "scope": 1520,
                      "src": "3371:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1453,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3371:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1455,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3371:16:3"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1457,
                      "name": "_cashflow",
                      "nodeType": "VariableDeclaration",
                      "scope": 1520,
                      "src": "3393:17:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1456,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3393:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1458,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3393:17:3"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1460,
                      "name": "_income",
                      "nodeType": "VariableDeclaration",
                      "scope": 1520,
                      "src": "3416:15:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1459,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3416:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1461,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3416:15:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1472,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "id": 1462,
                          "name": "_income",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1460,
                          "src": "3439:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1463,
                          "name": "_balance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1454,
                          "src": "3448:8:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1464,
                          "name": "_cashflow",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1457,
                          "src": "3458:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "id": 1465,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "3438:30:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$",
                        "typeString": "tuple(address,address,address)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1469,
                              "name": "dateTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1137,
                              "src": "3498:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DateTime_$13873",
                                "typeString": "contract DateTime"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_DateTime_$13873",
                                "typeString": "contract DateTime"
                              }
                            ],
                            "id": 1468,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3490:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1470,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3490:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 1466,
                          "name": "issuer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1133,
                          "src": "3471:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                            "typeString": "contract IReportIssuer"
                          }
                        },
                        "id": 1467,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "issueReport",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 12968,
                        "src": "3471:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$_t_address_$_t_address_$_t_address_$",
                          "typeString": "function (address) external returns (address,address,address)"
                        }
                      },
                      "id": 1471,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3471:37:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$",
                        "typeString": "tuple(address,address,address)"
                      }
                    },
                    "src": "3438:70:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1473,
                  "nodeType": "ExpressionStatement",
                  "src": "3438:70:3"
                },
                {
                  "assignments": [
                    1475
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1475,
                      "name": "newReport",
                      "nodeType": "VariableDeclaration",
                      "scope": 1520,
                      "src": "3515:23:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Report_$1109_memory_ptr",
                        "typeString": "struct TransparentDao.Report"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1474,
                        "name": "Report",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1109,
                        "src": "3515:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Report_$1109_storage_ptr",
                          "typeString": "struct TransparentDao.Report"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1481,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1477,
                        "name": "_income",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1460,
                        "src": "3548:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1478,
                        "name": "_balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1454,
                        "src": "3557:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1479,
                        "name": "_cashflow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1457,
                        "src": "3567:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1476,
                      "name": "Report",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1109,
                      "src": "3541:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Report_$1109_storage_ptr_$",
                        "typeString": "type(struct TransparentDao.Report storage pointer)"
                      }
                    },
                    "id": 1480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3541:36:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Report_$1109_memory",
                      "typeString": "struct TransparentDao.Report memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3515:62:3"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 1491,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1484,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 1482,
                        "name": "latestReportIssuance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1127,
                        "src": "3588:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 1483,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3612:1:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3588:25:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1490,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1487,
                            "name": "startOfCurrentYear",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1125,
                            "src": "3625:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1485,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14790,
                            "src": "3617:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1486,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sub",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 14662,
                          "src": "3617:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1488,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3617:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 1489,
                        "name": "year",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1099,
                        "src": "3648:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3617:35:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "3588:64:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 1496,
                  "nodeType": "IfStatement",
                  "src": "3584:100:3",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1494,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 1492,
                        "name": "startOfCurrentYear",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1125,
                        "src": "3660:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 1493,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14790,
                        "src": "3681:3:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3660:24:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1495,
                    "nodeType": "ExpressionStatement",
                    "src": "3660:24:3"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1497,
                      "name": "latestReportIssuance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1127,
                      "src": "3691:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1498,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14790,
                      "src": "3714:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3691:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1500,
                  "nodeType": "ExpressionStatement",
                  "src": "3691:26:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1501,
                        "name": "reports",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1147,
                        "src": "3724:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Report_$1109_storage_$",
                          "typeString": "mapping(uint256 => struct TransparentDao.Report storage ref)"
                        }
                      },
                      "id": 1503,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1502,
                        "name": "latestReportIssuance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1127,
                        "src": "3732:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3724:29:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Report_$1109_storage",
                        "typeString": "struct TransparentDao.Report storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1504,
                      "name": "newReport",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1475,
                      "src": "3756:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Report_$1109_memory_ptr",
                        "typeString": "struct TransparentDao.Report memory"
                      }
                    },
                    "src": "3724:41:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Report_$1109_storage",
                      "typeString": "struct TransparentDao.Report storage ref"
                    }
                  },
                  "id": 1506,
                  "nodeType": "ExpressionStatement",
                  "src": "3724:41:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1510,
                        "name": "newReport",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1475,
                        "src": "3790:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Report_$1109_memory_ptr",
                          "typeString": "struct TransparentDao.Report memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Report_$1109_memory_ptr",
                          "typeString": "struct TransparentDao.Report memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1507,
                        "name": "reportsArray",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1143,
                        "src": "3772:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Report_$1109_storage_$dyn_storage",
                          "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                        }
                      },
                      "id": 1509,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3772:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Report_$1109_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct TransparentDao.Report storage ref) returns (uint256)"
                      }
                    },
                    "id": 1511,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3772:28:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1512,
                  "nodeType": "ExpressionStatement",
                  "src": "3772:28:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1514,
                        "name": "_income",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1460,
                        "src": "3826:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1515,
                        "name": "_balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1454,
                        "src": "3835:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1516,
                        "name": "_cashflow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1457,
                        "src": "3845:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1513,
                      "name": "StartedReport",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13004,
                      "src": "3812:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 1517,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3812:43:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1518,
                  "nodeType": "EmitStatement",
                  "src": "3807:48:3"
                }
              ]
            },
            "documentation": null,
            "id": 1520,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "startReport",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1439,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3272:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1440,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3282:0:3"
            },
            "scope": 1743,
            "src": "3252:609:3",
            "stateMutability": "nonpayable",
            "superFunction": 13034,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1523,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1521,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3873:2:3"
            },
            "payable": true,
            "returnParameters": {
              "id": 1522,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3883:0:3"
            },
            "scope": 1743,
            "src": "3865:19:3",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1539,
              "nodeType": "Block",
              "src": "3959:103:3",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1531,
                      "name": "size",
                      "nodeType": "VariableDeclaration",
                      "scope": 1540,
                      "src": "3966:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      },
                      "typeName": {
                        "id": 1530,
                        "name": "uint32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3966:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1532,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3966:11:3"
                },
                {
                  "externalReferences": [
                    {
                      "size": {
                        "declaration": 1531,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4001:4:3",
                        "valueSize": 1
                      }
                    },
                    {
                      "_addr": {
                        "declaration": 1525,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4021:5:3",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 1533,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    size := extcodesize(_addr)\n}",
                  "src": "3984:61:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        },
                        "id": 1536,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1534,
                          "name": "size",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1531,
                          "src": "4047:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1535,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4054:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4047:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 1537,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4046:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1529,
                  "id": 1538,
                  "nodeType": "Return",
                  "src": "4039:17:3"
                }
              ]
            },
            "documentation": null,
            "id": 1540,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "isContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1525,
                  "name": "_addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 1540,
                  "src": "3921:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1524,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3921:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3920:15:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1528,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1540,
                  "src": "3953:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1527,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3953:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3952:6:3"
            },
            "scope": 1743,
            "src": "3901:161:3",
            "stateMutability": "nonpayable",
            "superFunction": 13041,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1547,
              "nodeType": "Block",
              "src": "4134:23:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1545,
                    "name": "UOA",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1129,
                    "src": "4148:3:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1544,
                  "id": 1546,
                  "nodeType": "Return",
                  "src": "4141:10:3"
                }
              ]
            },
            "documentation": null,
            "id": 1548,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUOAAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1541,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4101:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1544,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1543,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1548,
                  "src": "4125:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1542,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4125:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4124:9:3"
            },
            "scope": 1743,
            "src": "4079:78:3",
            "stateMutability": "view",
            "superFunction": 13062,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1606,
              "nodeType": "Block",
              "src": "4256:287:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1561,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1558,
                          "name": "startPosition",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1550,
                          "src": "4271:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1559,
                            "name": "bonds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1140,
                            "src": "4287:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_contract$_IDAOBond_$12329_$dyn_storage",
                              "typeString": "contract IDAOBond[] storage ref"
                            }
                          },
                          "id": 1560,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4287:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4271:28:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1557,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "4263:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1562,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4263:37:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1563,
                  "nodeType": "ExpressionStatement",
                  "src": "4263:37:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1571,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1567,
                              "name": "bondsNumber",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1552,
                              "src": "4332:11:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1565,
                              "name": "startPosition",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1550,
                              "src": "4314:13:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1566,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 14686,
                            "src": "4314:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1568,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4314:30:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1569,
                            "name": "bonds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1140,
                            "src": "4347:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_contract$_IDAOBond_$12329_$dyn_storage",
                              "typeString": "contract IDAOBond[] storage ref"
                            }
                          },
                          "id": 1570,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4347:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4314:45:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1564,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "4306:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4306:54:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1573,
                  "nodeType": "ExpressionStatement",
                  "src": "4306:54:3"
                },
                {
                  "assignments": [
                    1575
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1575,
                      "name": "debt",
                      "nodeType": "VariableDeclaration",
                      "scope": 1607,
                      "src": "4367:12:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1574,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4367:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1577,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 1576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4382:1:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4367:16:3"
                },
                {
                  "body": {
                    "id": 1602,
                    "nodeType": "Block",
                    "src": "4463:57:3",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1600,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 1591,
                            "name": "debt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1575,
                            "src": "4472:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 1594,
                                      "name": "bonds",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1140,
                                      "src": "4488:5:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_contract$_IDAOBond_$12329_$dyn_storage",
                                        "typeString": "contract IDAOBond[] storage ref"
                                      }
                                    },
                                    "id": 1596,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 1595,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1579,
                                      "src": "4494:1:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "4488:8:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_IDAOBond_$12329",
                                      "typeString": "contract IDAOBond"
                                    }
                                  },
                                  "id": 1597,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "getTotalDebt",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 12308,
                                  "src": "4488:21:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                    "typeString": "function () view external returns (uint256)"
                                  }
                                },
                                "id": 1598,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4488:23:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 1592,
                                "name": "debt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1575,
                                "src": "4479:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 1593,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 14686,
                              "src": "4479:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 1599,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4479:33:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4472:40:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1601,
                        "nodeType": "ExpressionStatement",
                        "src": "4472:40:3"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1587,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1582,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1579,
                      "src": "4422:1:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1585,
                          "name": "bondsNumber",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1552,
                          "src": "4444:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 1583,
                          "name": "startPosition",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1550,
                          "src": "4426:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1584,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14686,
                        "src": "4426:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1586,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4426:30:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4422:34:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1603,
                  "initializationExpression": {
                    "assignments": [
                      1579
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 1579,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 1607,
                        "src": "4395:9:3",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1578,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4395:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 1581,
                    "initialValue": {
                      "argumentTypes": null,
                      "id": 1580,
                      "name": "startPosition",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1550,
                      "src": "4407:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4395:25:3"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1589,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4458:3:3",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 1588,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1579,
                        "src": "4458:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1590,
                    "nodeType": "ExpressionStatement",
                    "src": "4458:3:3"
                  },
                  "nodeType": "ForStatement",
                  "src": "4390:130:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1604,
                    "name": "debt",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1575,
                    "src": "4533:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1556,
                  "id": 1605,
                  "nodeType": "Return",
                  "src": "4526:11:3"
                }
              ]
            },
            "documentation": null,
            "id": 1607,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBondDebt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1553,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1550,
                  "name": "startPosition",
                  "nodeType": "VariableDeclaration",
                  "scope": 1607,
                  "src": "4182:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1549,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4182:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1552,
                  "name": "bondsNumber",
                  "nodeType": "VariableDeclaration",
                  "scope": 1607,
                  "src": "4205:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1551,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4205:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4181:44:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1555,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1607,
                  "src": "4247:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1554,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4247:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4246:9:3"
            },
            "scope": 1743,
            "src": "4161:382:3",
            "stateMutability": "view",
            "superFunction": 13057,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1620,
              "nodeType": "Block",
              "src": "4619:44:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1615,
                          "name": "bonds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1140,
                          "src": "4641:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_contract$_IDAOBond_$12329_$dyn_storage",
                            "typeString": "contract IDAOBond[] storage ref"
                          }
                        },
                        "id": 1617,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1616,
                          "name": "position",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1609,
                          "src": "4647:8:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4641:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOBond_$12329",
                          "typeString": "contract IDAOBond"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IDAOBond_$12329",
                          "typeString": "contract IDAOBond"
                        }
                      ],
                      "id": 1614,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "4633:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 1618,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4633:24:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1613,
                  "id": 1619,
                  "nodeType": "Return",
                  "src": "4626:31:3"
                }
              ]
            },
            "documentation": null,
            "id": 1621,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBondAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1610,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1609,
                  "name": "position",
                  "nodeType": "VariableDeclaration",
                  "scope": 1621,
                  "src": "4571:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1608,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4571:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4570:18:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1612,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1621,
                  "src": "4610:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1611,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4610:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4609:9:3"
            },
            "scope": 1743,
            "src": "4547:116:3",
            "stateMutability": "view",
            "superFunction": 13048,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1628,
              "nodeType": "Block",
              "src": "4722:31:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1626,
                    "name": "marketPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 11768,
                    "src": "4736:11:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 1625,
                  "id": 1627,
                  "nodeType": "Return",
                  "src": "4729:18:3"
                }
              ]
            },
            "documentation": null,
            "id": 1629,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMarketPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1622,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4690:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1624,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1629,
                  "src": "4714:6:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1623,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4714:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4713:8:3"
            },
            "scope": 1743,
            "src": "4667:86:3",
            "stateMutability": "view",
            "superFunction": 11773,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1637,
              "nodeType": "Block",
              "src": "4815:39:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 1634,
                      "name": "reportsArray",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1143,
                      "src": "4829:12:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Report_$1109_storage_$dyn_storage",
                        "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                      }
                    },
                    "id": 1635,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "4829:19:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1633,
                  "id": 1636,
                  "nodeType": "Return",
                  "src": "4822:26:3"
                }
              ]
            },
            "documentation": null,
            "id": 1638,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getReportsLength",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1630,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4782:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1632,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1638,
                  "src": "4806:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1631,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4806:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4805:9:3"
            },
            "scope": 1743,
            "src": "4757:97:3",
            "stateMutability": "view",
            "superFunction": 13077,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1663,
              "nodeType": "Block",
              "src": "4953:128:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1649,
                            "name": "reportsArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1143,
                            "src": "4968:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Report_$1109_storage_$dyn_storage",
                              "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                            }
                          },
                          "id": 1651,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1650,
                            "name": "position",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1640,
                            "src": "4981:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4968:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Report_$1109_storage",
                            "typeString": "struct TransparentDao.Report storage ref"
                          }
                        },
                        "id": 1652,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "income",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1104,
                        "src": "4968:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1653,
                            "name": "reportsArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1143,
                            "src": "4999:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Report_$1109_storage_$dyn_storage",
                              "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                            }
                          },
                          "id": 1655,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1654,
                            "name": "position",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1640,
                            "src": "5012:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4999:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Report_$1109_storage",
                            "typeString": "struct TransparentDao.Report storage ref"
                          }
                        },
                        "id": 1656,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1106,
                        "src": "4999:30:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1657,
                            "name": "reportsArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1143,
                            "src": "5043:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Report_$1109_storage_$dyn_storage",
                              "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                            }
                          },
                          "id": 1659,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1658,
                            "name": "position",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1640,
                            "src": "5056:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5043:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Report_$1109_storage",
                            "typeString": "struct TransparentDao.Report storage ref"
                          }
                        },
                        "id": 1660,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "cashflow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1108,
                        "src": "5043:31:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "id": 1661,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4967:108:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$",
                      "typeString": "tuple(address,address,address)"
                    }
                  },
                  "functionReturnParameters": 1648,
                  "id": 1662,
                  "nodeType": "Return",
                  "src": "4960:115:3"
                }
              ]
            },
            "documentation": null,
            "id": 1664,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getReportAtPosition",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1641,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1640,
                  "name": "position",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "4887:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1639,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4887:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4886:18:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1643,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "4926:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1642,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4926:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1645,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "4935:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1644,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4935:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1647,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "4944:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1646,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4944:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4925:27:3"
            },
            "scope": 1743,
            "src": "4858:223:3",
            "stateMutability": "view",
            "superFunction": 13088,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1673,
              "nodeType": "Block",
              "src": "5142:38:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1670,
                        "name": "floatMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1135,
                        "src": "5164:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IFloatMath_$12594",
                          "typeString": "contract IFloatMath"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IFloatMath_$12594",
                          "typeString": "contract IFloatMath"
                        }
                      ],
                      "id": 1669,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5156:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 1671,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5156:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1668,
                  "id": 1672,
                  "nodeType": "Return",
                  "src": "5149:25:3"
                }
              ]
            },
            "documentation": null,
            "id": 1674,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getFloatAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1665,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5109:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1667,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1674,
                  "src": "5133:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1666,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5133:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5132:9:3"
            },
            "scope": 1743,
            "src": "5085:95:3",
            "stateMutability": "view",
            "superFunction": 13067,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1683,
              "nodeType": "Block",
              "src": "5240:36:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1680,
                        "name": "daoCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1131,
                        "src": "5262:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                          "typeString": "contract IDAOCoin"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                          "typeString": "contract IDAOCoin"
                        }
                      ],
                      "id": 1679,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5254:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 1681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5254:16:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1678,
                  "id": 1682,
                  "nodeType": "Return",
                  "src": "5247:23:3"
                }
              ]
            },
            "documentation": null,
            "id": 1684,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getCoinAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1675,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5207:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1677,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1684,
                  "src": "5231:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1676,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5231:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5230:9:3"
            },
            "scope": 1743,
            "src": "5184:92:3",
            "stateMutability": "view",
            "superFunction": 13093,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1703,
              "nodeType": "Block",
              "src": "5336:103:3",
              "statements": [
                {
                  "assignments": [
                    1690
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1690,
                      "name": "decimals",
                      "nodeType": "VariableDeclaration",
                      "scope": 1704,
                      "src": "5343:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1689,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5343:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1694,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1691,
                        "name": "daoCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1131,
                        "src": "5362:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                          "typeString": "contract IDAOCoin"
                        }
                      },
                      "id": 1692,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getDecimals",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 12349,
                      "src": "5362:19:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                        "typeString": "function () view external returns (uint256)"
                      }
                    },
                    "id": 1693,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5362:21:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5343:40:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 1695,
                          "name": "daoCoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1131,
                          "src": "5397:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                            "typeString": "contract IDAOCoin"
                          }
                        },
                        "id": 1696,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "totalSupply",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14092,
                        "src": "5397:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                          "typeString": "function () view external returns (uint256)"
                        }
                      },
                      "id": 1697,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5397:21:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1700,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 1698,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5421:2:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "**",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 1699,
                        "name": "decimals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1690,
                        "src": "5425:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5421:12:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5397:36:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1688,
                  "id": 1702,
                  "nodeType": "Return",
                  "src": "5390:43:3"
                }
              ]
            },
            "documentation": null,
            "id": 1704,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getCoinsAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1685,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5303:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1688,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1687,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1704,
                  "src": "5327:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1686,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5327:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5326:9:3"
            },
            "scope": 1743,
            "src": "5280:159:3",
            "stateMutability": "view",
            "superFunction": 13072,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1712,
              "nodeType": "Block",
              "src": "5499:29:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1710,
                    "name": "latestTax",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1118,
                    "src": "5513:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 1709,
                  "id": 1711,
                  "nodeType": "Return",
                  "src": "5506:16:3"
                }
              ]
            },
            "documentation": null,
            "id": 1713,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLatestTax",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1705,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5464:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1709,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1708,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1713,
                  "src": "5488:9:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 1706,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5488:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1707,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5488:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5487:11:3"
            },
            "scope": 1743,
            "src": "5443:85:3",
            "stateMutability": "view",
            "superFunction": 13099,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1741,
              "nodeType": "Block",
              "src": "5581:160:3",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1720,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1718,
                      "name": "taxLenght",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1123,
                      "src": "5592:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 1719,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5604:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "5592:13:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1728,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 1726,
                        "name": "taxLenght",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1123,
                        "src": "5656:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 1727,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5669:1:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "5656:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 1734,
                    "nodeType": "IfStatement",
                    "src": "5652:48:3",
                    "trueBody": {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1730,
                              "name": "TAX_TYPE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1113,
                              "src": "5684:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_TAX_TYPE_$1113_$",
                                "typeString": "type(enum TransparentDao.TAX_TYPE)"
                              }
                            },
                            "id": 1731,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "SIMPLE",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5684:15:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
                              "typeString": "enum TransparentDao.TAX_TYPE"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
                              "typeString": "enum TransparentDao.TAX_TYPE"
                            }
                          ],
                          "id": 1729,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5679:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": "uint"
                        },
                        "id": 1732,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5679:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 1717,
                      "id": 1733,
                      "nodeType": "Return",
                      "src": "5672:28:3"
                    }
                  },
                  "id": 1735,
                  "nodeType": "IfStatement",
                  "src": "5588:112:3",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1722,
                            "name": "TAX_TYPE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1113,
                            "src": "5619:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_TAX_TYPE_$1113_$",
                              "typeString": "type(enum TransparentDao.TAX_TYPE)"
                            }
                          },
                          "id": 1723,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "PROGRESSIVE",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "5619:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
                            "typeString": "enum TransparentDao.TAX_TYPE"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
                            "typeString": "enum TransparentDao.TAX_TYPE"
                          }
                        ],
                        "id": 1721,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5614:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 1724,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5614:26:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 1717,
                    "id": 1725,
                    "nodeType": "Return",
                    "src": "5607:33:3"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1737,
                          "name": "TAX_TYPE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1113,
                          "src": "5719:8:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_TAX_TYPE_$1113_$",
                            "typeString": "type(enum TransparentDao.TAX_TYPE)"
                          }
                        },
                        "id": 1738,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberName": "NO_TAX",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5719:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
                          "typeString": "enum TransparentDao.TAX_TYPE"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
                          "typeString": "enum TransparentDao.TAX_TYPE"
                        }
                      ],
                      "id": 1736,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5714:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": "uint"
                    },
                    "id": 1739,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5714:21:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1717,
                  "id": 1740,
                  "nodeType": "Return",
                  "src": "5707:28:3"
                }
              ]
            },
            "documentation": null,
            "id": 1742,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTaxType",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1714,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5551:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1716,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1742,
                  "src": "5575:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1715,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5575:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5574:6:3"
            },
            "scope": 1743,
            "src": "5532:209:3",
            "stateMutability": "view",
            "superFunction": 13104,
            "visibility": "public"
          }
        ],
        "scope": 1744,
        "src": "434:5310:3"
      }
    ],
    "src": "0:5745:3"
  },
  "legacyAST": {
    "absolutePath": "/home/stefan/Work/TransparentDao/contracts/accounting/dao/TransparentDao.sol",
    "exportedSymbols": {
      "TransparentDao": [
        1743
      ]
    },
    "id": 1744,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1077,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:3"
      },
      {
        "absolutePath": "contracts/zeppelin/SafeMath.sol",
        "file": "contracts/zeppelin/SafeMath.sol",
        "id": 1078,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 14688,
        "src": "25:41:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/utils/Forwarder.sol",
        "file": "contracts/utils/Forwarder.sol",
        "id": 1079,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 14070,
        "src": "67:39:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/utils/DateTime.sol",
        "file": "contracts/utils/DateTime.sol",
        "id": 1080,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 13874,
        "src": "107:38:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IReportIssuer.sol",
        "file": "contracts/interfaces/IReportIssuer.sol",
        "id": 1081,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 12970,
        "src": "147:48:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IDAOCoin.sol",
        "file": "contracts/interfaces/IDAOCoin.sol",
        "id": 1082,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 12351,
        "src": "196:43:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/ITransparentDao.sol",
        "file": "contracts/interfaces/ITransparentDao.sol",
        "id": 1083,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 13106,
        "src": "240:50:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IFloatMath.sol",
        "file": "contracts/interfaces/IFloatMath.sol",
        "id": 1084,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 12595,
        "src": "291:45:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IIncomeStatement.sol",
        "file": "contracts/interfaces/IIncomeStatement.sol",
        "id": 1085,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 12956,
        "src": "337:51:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IDAOBond.sol",
        "file": "contracts/interfaces/IDAOBond.sol",
        "id": 1086,
        "nodeType": "ImportDirective",
        "scope": 1744,
        "sourceUnit": 12330,
        "src": "389:43:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1087,
              "name": "ITransparentDao",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 13105,
              "src": "461:15:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ITransparentDao_$13105",
                "typeString": "contract ITransparentDao"
              }
            },
            "id": 1088,
            "nodeType": "InheritanceSpecifier",
            "src": "461:15:3"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1089,
              "name": "Forwarder",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14069,
              "src": "478:9:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Forwarder_$14069",
                "typeString": "contract Forwarder"
              }
            },
            "id": 1090,
            "nodeType": "InheritanceSpecifier",
            "src": "478:9:3"
          }
        ],
        "contractDependencies": [
          11774,
          12681,
          13105,
          14069
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1743,
        "linearizedBaseContracts": [
          1743,
          14069,
          12681,
          13105,
          11774
        ],
        "name": "TransparentDao",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1093,
            "libraryName": {
              "contractScope": null,
              "id": 1091,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14687,
              "src": "499:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$14687",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "493:27:3",
            "typeName": {
              "id": 1092,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "512:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 1096,
            "name": "quarter",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "539:28:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1094,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "539:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "32313336",
              "id": 1095,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "557:10:3",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_7689600_by_1",
                "typeString": "int_const 7689600"
              },
              "value": "2136"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1099,
            "name": "year",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "571:25:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1097,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "571:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "38353434",
              "id": 1098,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "586:10:3",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_30758400_by_1",
                "typeString": "int_const 30758400"
              },
              "value": "8544"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1102,
            "name": "fiatRepresentation",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "600:39:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1100,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "600:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "555320444f4c4c4152",
              "id": 1101,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "628:11:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_779c348e6684549be43adac38c9ac68a57bfee5826e3f1a02fa31df465f0cf19",
                "typeString": "literal_string \"US DOLLAR\""
              },
              "value": "US DOLLAR"
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "TransparentDao.Report",
            "id": 1109,
            "members": [
              {
                "constant": false,
                "id": 1104,
                "name": "income",
                "nodeType": "VariableDeclaration",
                "scope": 1109,
                "src": "678:14:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1103,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "678:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1106,
                "name": "balance",
                "nodeType": "VariableDeclaration",
                "scope": 1109,
                "src": "699:15:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1105,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "699:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1108,
                "name": "cashflow",
                "nodeType": "VariableDeclaration",
                "scope": 1109,
                "src": "721:16:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1107,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "721:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Report",
            "nodeType": "StructDefinition",
            "scope": 1743,
            "src": "657:86:3",
            "visibility": "public"
          },
          {
            "canonicalName": "TransparentDao.TAX_TYPE",
            "id": 1113,
            "members": [
              {
                "id": 1110,
                "name": "NO_TAX",
                "nodeType": "EnumValue",
                "src": "777:6:3"
              },
              {
                "id": 1111,
                "name": "SIMPLE",
                "nodeType": "EnumValue",
                "src": "785:6:3"
              },
              {
                "id": 1112,
                "name": "PROGRESSIVE",
                "nodeType": "EnumValue",
                "src": "793:11:3"
              }
            ],
            "name": "TAX_TYPE",
            "nodeType": "EnumDefinition",
            "src": "762:43:3"
          },
          {
            "constant": false,
            "id": 1115,
            "name": "taxT",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "809:13:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
              "typeString": "enum TransparentDao.TAX_TYPE"
            },
            "typeName": {
              "contractScope": null,
              "id": 1114,
              "name": "TAX_TYPE",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1113,
              "src": "809:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
                "typeString": "enum TransparentDao.TAX_TYPE"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1118,
            "name": "latestTax",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "882:19:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 1116,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "882:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 1117,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "882:9:3",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1121,
            "name": "incomeThresholds",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "906:26:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 1119,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "906:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 1120,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "906:9:3",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1123,
            "name": "taxLenght",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "976:17:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1122,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "976:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1125,
            "name": "startOfCurrentYear",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1026:26:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1124,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1026:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1127,
            "name": "latestReportIssuance",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1056:28:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1126,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1056:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1129,
            "name": "UOA",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1129:11:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1128,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1129:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1131,
            "name": "daoCoin",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1188:16:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IDAOCoin_$12350",
              "typeString": "contract IDAOCoin"
            },
            "typeName": {
              "contractScope": null,
              "id": 1130,
              "name": "IDAOCoin",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 12350,
              "src": "1188:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                "typeString": "contract IDAOCoin"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1133,
            "name": "issuer",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1209:20:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IReportIssuer_$12969",
              "typeString": "contract IReportIssuer"
            },
            "typeName": {
              "contractScope": null,
              "id": 1132,
              "name": "IReportIssuer",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 12969,
              "src": "1209:13:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                "typeString": "contract IReportIssuer"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1135,
            "name": "floatMath",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1234:20:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IFloatMath_$12594",
              "typeString": "contract IFloatMath"
            },
            "typeName": {
              "contractScope": null,
              "id": 1134,
              "name": "IFloatMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 12594,
              "src": "1234:10:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IFloatMath_$12594",
                "typeString": "contract IFloatMath"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1137,
            "name": "dateTime",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1259:17:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DateTime_$13873",
              "typeString": "contract DateTime"
            },
            "typeName": {
              "contractScope": null,
              "id": 1136,
              "name": "DateTime",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 13873,
              "src": "1259:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DateTime_$13873",
                "typeString": "contract DateTime"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1140,
            "name": "bonds",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1282:16:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_contract$_IDAOBond_$12329_$dyn_storage",
              "typeString": "contract IDAOBond[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 1138,
                "name": "IDAOBond",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 12329,
                "src": "1282:8:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IDAOBond_$12329",
                  "typeString": "contract IDAOBond"
                }
              },
              "id": 1139,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1282:10:3",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_contract$_IDAOBond_$12329_$dyn_storage_ptr",
                "typeString": "contract IDAOBond[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1143,
            "name": "reportsArray",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1302:21:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Report_$1109_storage_$dyn_storage",
              "typeString": "struct TransparentDao.Report[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 1141,
                "name": "Report",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1109,
                "src": "1302:6:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Report_$1109_storage_ptr",
                  "typeString": "struct TransparentDao.Report"
                }
              },
              "id": 1142,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1302:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Report_$1109_storage_$dyn_storage_ptr",
                "typeString": "struct TransparentDao.Report[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1147,
            "name": "reports",
            "nodeType": "VariableDeclaration",
            "scope": 1743,
            "src": "1328:34:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Report_$1109_storage_$",
              "typeString": "mapping(uint256 => struct TransparentDao.Report)"
            },
            "typeName": {
              "id": 1146,
              "keyType": {
                "id": 1144,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1336:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1328:26:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Report_$1109_storage_$",
                "typeString": "mapping(uint256 => struct TransparentDao.Report)"
              },
              "valueType": {
                "contractScope": null,
                "id": 1145,
                "name": "Report",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1109,
                "src": "1347:6:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Report_$1109_storage_ptr",
                  "typeString": "struct TransparentDao.Report"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1226,
              "nodeType": "Block",
              "src": "1497:404:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1171,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 1165,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1161,
                            "name": "_unitOfAccount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1151,
                            "src": "1512:14:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 1163,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1538:1:3",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 1162,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1530:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 1164,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1530:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1512:28:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 1170,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1167,
                                "name": "_unitOfAccount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1151,
                                "src": "1555:14:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 1166,
                              "name": "isContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1540,
                              "src": "1544:10:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                                "typeString": "function (address) returns (bool)"
                              }
                            },
                            "id": 1168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1544:26:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 1169,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1574:4:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "1544:34:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1512:66:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1160,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "1504:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1172,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1504:75:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1173,
                  "nodeType": "ExpressionStatement",
                  "src": "1504:75:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1179,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1176,
                              "name": "_floatMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1153,
                              "src": "1604:10:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1175,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1540,
                            "src": "1593:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) returns (bool)"
                            }
                          },
                          "id": 1177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1593:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1178,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1619:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "1593:30:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1174,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "1585:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1585:39:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1181,
                  "nodeType": "ExpressionStatement",
                  "src": "1585:39:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1187,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1184,
                              "name": "_dateTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1157,
                              "src": "1649:9:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1183,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1540,
                            "src": "1638:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) returns (bool)"
                            }
                          },
                          "id": 1185,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1638:21:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1186,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1663:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "1638:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1182,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "1630:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1630:38:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1189,
                  "nodeType": "ExpressionStatement",
                  "src": "1630:38:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1192,
                              "name": "_daoCoin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1155,
                              "src": "1693:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1191,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1540,
                            "src": "1682:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) returns (bool)"
                            }
                          },
                          "id": 1193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1682:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1706:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "1682:28:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1190,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "1674:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1674:37:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1197,
                  "nodeType": "ExpressionStatement",
                  "src": "1674:37:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1198,
                      "name": "daoCoin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1131,
                      "src": "1718:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                        "typeString": "contract IDAOCoin"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1200,
                          "name": "_daoCoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1155,
                          "src": "1737:8:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1199,
                        "name": "IDAOCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12350,
                        "src": "1728:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IDAOCoin_$12350_$",
                          "typeString": "type(contract IDAOCoin)"
                        }
                      },
                      "id": 1201,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1728:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                        "typeString": "contract IDAOCoin"
                      }
                    },
                    "src": "1718:28:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                      "typeString": "contract IDAOCoin"
                    }
                  },
                  "id": 1203,
                  "nodeType": "ExpressionStatement",
                  "src": "1718:28:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1208,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1204,
                      "name": "issuer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1133,
                      "src": "1753:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                        "typeString": "contract IReportIssuer"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1206,
                          "name": "_reportIssuer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1149,
                          "src": "1776:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1205,
                        "name": "IReportIssuer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12969,
                        "src": "1762:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IReportIssuer_$12969_$",
                          "typeString": "type(contract IReportIssuer)"
                        }
                      },
                      "id": 1207,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1762:28:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                        "typeString": "contract IReportIssuer"
                      }
                    },
                    "src": "1753:37:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                      "typeString": "contract IReportIssuer"
                    }
                  },
                  "id": 1209,
                  "nodeType": "ExpressionStatement",
                  "src": "1753:37:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1212,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1210,
                      "name": "UOA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1129,
                      "src": "1797:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1211,
                      "name": "_unitOfAccount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1151,
                      "src": "1803:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1797:20:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1213,
                  "nodeType": "ExpressionStatement",
                  "src": "1797:20:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1218,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1214,
                      "name": "floatMath",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1135,
                      "src": "1824:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IFloatMath_$12594",
                        "typeString": "contract IFloatMath"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1216,
                          "name": "_floatMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1153,
                          "src": "1847:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1215,
                        "name": "IFloatMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12594,
                        "src": "1836:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IFloatMath_$12594_$",
                          "typeString": "type(contract IFloatMath)"
                        }
                      },
                      "id": 1217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1836:22:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IFloatMath_$12594",
                        "typeString": "contract IFloatMath"
                      }
                    },
                    "src": "1824:34:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IFloatMath_$12594",
                      "typeString": "contract IFloatMath"
                    }
                  },
                  "id": 1219,
                  "nodeType": "ExpressionStatement",
                  "src": "1824:34:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1224,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1220,
                      "name": "dateTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1137,
                      "src": "1865:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DateTime_$13873",
                        "typeString": "contract DateTime"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1222,
                          "name": "_dateTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1157,
                          "src": "1885:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1221,
                        "name": "DateTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13873,
                        "src": "1876:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DateTime_$13873_$",
                          "typeString": "type(contract DateTime)"
                        }
                      },
                      "id": 1223,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1876:19:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DateTime_$13873",
                        "typeString": "contract DateTime"
                      }
                    },
                    "src": "1865:30:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DateTime_$13873",
                      "typeString": "contract DateTime"
                    }
                  },
                  "id": 1225,
                  "nodeType": "ExpressionStatement",
                  "src": "1865:30:3"
                }
              ]
            },
            "documentation": null,
            "id": 1227,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1149,
                  "name": "_reportIssuer",
                  "nodeType": "VariableDeclaration",
                  "scope": 1227,
                  "src": "1379:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1148,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1379:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1151,
                  "name": "_unitOfAccount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1227,
                  "src": "1402:22:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1150,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1402:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1153,
                  "name": "_floatMath",
                  "nodeType": "VariableDeclaration",
                  "scope": 1227,
                  "src": "1426:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1152,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1426:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1155,
                  "name": "_daoCoin",
                  "nodeType": "VariableDeclaration",
                  "scope": 1227,
                  "src": "1460:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1154,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1460:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1157,
                  "name": "_dateTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 1227,
                  "src": "1478:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1478:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1378:118:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1159,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1497:0:3"
            },
            "scope": 1743,
            "src": "1367:534:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1246,
              "nodeType": "Block",
              "src": "1955:88:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1237,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1234,
                              "name": "_dateTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1229,
                              "src": "1981:9:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1233,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1540,
                            "src": "1970:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) returns (bool)"
                            }
                          },
                          "id": 1235,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1970:21:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1236,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1995:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "1970:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1232,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "1962:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1238,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1962:38:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1239,
                  "nodeType": "ExpressionStatement",
                  "src": "1962:38:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1240,
                      "name": "dateTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1137,
                      "src": "2007:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DateTime_$13873",
                        "typeString": "contract DateTime"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1242,
                          "name": "_dateTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1229,
                          "src": "2027:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1241,
                        "name": "DateTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13873,
                        "src": "2018:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DateTime_$13873_$",
                          "typeString": "type(contract DateTime)"
                        }
                      },
                      "id": 1243,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2018:19:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DateTime_$13873",
                        "typeString": "contract DateTime"
                      }
                    },
                    "src": "2007:30:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DateTime_$13873",
                      "typeString": "contract DateTime"
                    }
                  },
                  "id": 1245,
                  "nodeType": "ExpressionStatement",
                  "src": "2007:30:3"
                }
              ]
            },
            "documentation": null,
            "id": 1247,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "changeDateTime",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1230,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1229,
                  "name": "_dateTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 1247,
                  "src": "1929:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1228,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1929:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1928:19:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1231,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1955:0:3"
            },
            "scope": 1743,
            "src": "1905:138:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1270,
              "nodeType": "Block",
              "src": "2093:121:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1257,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1254,
                              "name": "_issuer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1249,
                              "src": "2119:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1253,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1540,
                            "src": "2108:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) returns (bool)"
                            }
                          },
                          "id": 1255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2108:19:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1256,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2131:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "2108:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1252,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "2100:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1258,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2100:36:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1259,
                  "nodeType": "ExpressionStatement",
                  "src": "2100:36:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1260,
                      "name": "issuer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1133,
                      "src": "2143:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                        "typeString": "contract IReportIssuer"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1262,
                          "name": "_issuer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1249,
                          "src": "2166:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1261,
                        "name": "IReportIssuer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12969,
                        "src": "2152:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IReportIssuer_$12969_$",
                          "typeString": "type(contract IReportIssuer)"
                        }
                      },
                      "id": 1263,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2152:22:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                        "typeString": "contract IReportIssuer"
                      }
                    },
                    "src": "2143:31:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                      "typeString": "contract IReportIssuer"
                    }
                  },
                  "id": 1265,
                  "nodeType": "ExpressionStatement",
                  "src": "2143:31:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1267,
                        "name": "_issuer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1249,
                        "src": "2200:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1266,
                      "name": "ChangedIssuer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12978,
                      "src": "2186:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1268,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2186:22:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1269,
                  "nodeType": "EmitStatement",
                  "src": "2181:27:3"
                }
              ]
            },
            "documentation": null,
            "id": 1271,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "changeIssuer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1249,
                  "name": "_issuer",
                  "nodeType": "VariableDeclaration",
                  "scope": 1271,
                  "src": "2069:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1248,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2069:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2068:17:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1251,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2093:0:3"
            },
            "scope": 1743,
            "src": "2047:167:3",
            "stateMutability": "nonpayable",
            "superFunction": 13009,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1294,
              "nodeType": "Block",
              "src": "2266:121:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1281,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1278,
                              "name": "_float",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1273,
                              "src": "2292:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1277,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1540,
                            "src": "2281:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) returns (bool)"
                            }
                          },
                          "id": 1279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2281:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1280,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2303:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "2281:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1276,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "2273:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1282,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2273:35:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1283,
                  "nodeType": "ExpressionStatement",
                  "src": "2273:35:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1284,
                      "name": "floatMath",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1135,
                      "src": "2315:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IFloatMath_$12594",
                        "typeString": "contract IFloatMath"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1286,
                          "name": "_float",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1273,
                          "src": "2338:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1285,
                        "name": "IFloatMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12594,
                        "src": "2327:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IFloatMath_$12594_$",
                          "typeString": "type(contract IFloatMath)"
                        }
                      },
                      "id": 1287,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2327:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IFloatMath_$12594",
                        "typeString": "contract IFloatMath"
                      }
                    },
                    "src": "2315:30:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IFloatMath_$12594",
                      "typeString": "contract IFloatMath"
                    }
                  },
                  "id": 1289,
                  "nodeType": "ExpressionStatement",
                  "src": "2315:30:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1291,
                        "name": "_float",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1273,
                        "src": "2374:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1290,
                      "name": "ChangedFloatMath",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12982,
                      "src": "2357:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2357:24:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1293,
                  "nodeType": "EmitStatement",
                  "src": "2352:29:3"
                }
              ]
            },
            "documentation": null,
            "id": 1295,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "changeFloatMath",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1274,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1273,
                  "name": "_float",
                  "nodeType": "VariableDeclaration",
                  "scope": 1295,
                  "src": "2243:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1272,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2243:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2242:16:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1275,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2266:0:3"
            },
            "scope": 1743,
            "src": "2218:169:3",
            "stateMutability": "nonpayable",
            "superFunction": 13031,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1328,
              "nodeType": "Block",
              "src": "2433:153:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1307,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1302,
                              "name": "daoCoin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1131,
                              "src": "2456:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                                "typeString": "contract IDAOCoin"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                                "typeString": "contract IDAOCoin"
                              }
                            ],
                            "id": 1301,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2448:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1303,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2448:16:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 1305,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2476:1:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 1304,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2468:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1306,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2468:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2448:30:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1300,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "2440:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1308,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2440:39:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1309,
                  "nodeType": "ExpressionStatement",
                  "src": "2440:39:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1315,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1312,
                              "name": "_coin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1297,
                              "src": "2504:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1311,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1540,
                            "src": "2493:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) returns (bool)"
                            }
                          },
                          "id": 1313,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2493:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1314,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2514:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "2493:25:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1310,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "2485:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1316,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2485:34:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1317,
                  "nodeType": "ExpressionStatement",
                  "src": "2485:34:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1318,
                      "name": "daoCoin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1131,
                      "src": "2526:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                        "typeString": "contract IDAOCoin"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1320,
                          "name": "_coin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1297,
                          "src": "2545:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1319,
                        "name": "IDAOCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12350,
                        "src": "2536:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IDAOCoin_$12350_$",
                          "typeString": "type(contract IDAOCoin)"
                        }
                      },
                      "id": 1321,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2536:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                        "typeString": "contract IDAOCoin"
                      }
                    },
                    "src": "2526:25:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                      "typeString": "contract IDAOCoin"
                    }
                  },
                  "id": 1323,
                  "nodeType": "ExpressionStatement",
                  "src": "2526:25:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1325,
                        "name": "_coin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1297,
                        "src": "2574:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1324,
                      "name": "SetDaoCoin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12986,
                      "src": "2563:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1326,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2563:17:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1327,
                  "nodeType": "EmitStatement",
                  "src": "2558:22:3"
                }
              ]
            },
            "documentation": null,
            "id": 1329,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setDaoCoin",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1298,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1297,
                  "name": "_coin",
                  "nodeType": "VariableDeclaration",
                  "scope": 1329,
                  "src": "2411:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1296,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2411:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2410:15:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1299,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2433:0:3"
            },
            "scope": 1743,
            "src": "2391:195:3",
            "stateMutability": "nonpayable",
            "superFunction": 13014,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1353,
              "nodeType": "Block",
              "src": "2652:121:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1339,
                        "name": "percentage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1331,
                        "src": "2674:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1336,
                        "name": "latestTax",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1118,
                        "src": "2659:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 1338,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2659:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 1340,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2659:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1341,
                  "nodeType": "ExpressionStatement",
                  "src": "2659:26:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1345,
                        "name": "threshold",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1333,
                        "src": "2714:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1342,
                        "name": "incomeThresholds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1121,
                        "src": "2692:16:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 1344,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2692:21:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 1346,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2692:32:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1347,
                  "nodeType": "ExpressionStatement",
                  "src": "2692:32:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1349,
                        "name": "percentage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1331,
                        "src": "2745:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1350,
                        "name": "threshold",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1333,
                        "src": "2757:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 1348,
                      "name": "AddedTax",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12992,
                      "src": "2736:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 1351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2736:31:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1352,
                  "nodeType": "EmitStatement",
                  "src": "2731:36:3"
                }
              ]
            },
            "documentation": null,
            "id": 1354,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addTax",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1334,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1331,
                  "name": "percentage",
                  "nodeType": "VariableDeclaration",
                  "scope": 1354,
                  "src": "2606:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1330,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2606:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1333,
                  "name": "threshold",
                  "nodeType": "VariableDeclaration",
                  "scope": 1354,
                  "src": "2626:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1332,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2626:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2605:39:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1335,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2652:0:3"
            },
            "scope": 1743,
            "src": "2590:183:3",
            "stateMutability": "nonpayable",
            "superFunction": 13021,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1437,
              "nodeType": "Block",
              "src": "2821:427:3",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1362,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1359,
                      "name": "position",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1356,
                      "src": "2832:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1360,
                        "name": "latestTax",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1118,
                        "src": "2844:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 1361,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2844:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2832:28:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 1364,
                  "nodeType": "IfStatement",
                  "src": "2828:41:3",
                  "trueBody": {
                    "expression": null,
                    "functionReturnParameters": 1358,
                    "id": 1363,
                    "nodeType": "Return",
                    "src": "2862:7:3"
                  }
                },
                {
                  "body": {
                    "id": 1401,
                    "nodeType": "Block",
                    "src": "2933:111:3",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1388,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1379,
                              "name": "latestTax",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1118,
                              "src": "2944:9:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 1381,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1380,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1366,
                              "src": "2954:1:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2944:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1382,
                              "name": "latestTax",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1118,
                              "src": "2959:9:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 1387,
                            "indexExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "31",
                                  "id": 1385,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2975:1:3",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1383,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1366,
                                  "src": "2969:1:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 1384,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "add",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 14686,
                                "src": "2969:5:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 1386,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2969:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2959:19:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2944:34:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1389,
                        "nodeType": "ExpressionStatement",
                        "src": "2944:34:3"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1399,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1390,
                              "name": "incomeThresholds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1121,
                              "src": "2988:16:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 1392,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1391,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1366,
                              "src": "3005:1:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2988:19:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1393,
                              "name": "incomeThresholds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1121,
                              "src": "3010:16:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 1398,
                            "indexExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "31",
                                  "id": 1396,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3033:1:3",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1394,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1366,
                                  "src": "3027:1:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 1395,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "add",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 14686,
                                "src": "3027:5:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 1397,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3027:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3010:26:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2988:48:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1400,
                        "nodeType": "ExpressionStatement",
                        "src": "2988:48:3"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1375,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1369,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1366,
                      "src": "2899:1:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 1373,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2924:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1370,
                            "name": "latestTax",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1118,
                            "src": "2903:9:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 1371,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2903:16:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1372,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14662,
                        "src": "2903:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1374,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2903:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2899:27:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1402,
                  "initializationExpression": {
                    "assignments": [
                      1366
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 1366,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 1438,
                        "src": "2880:6:3",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1365,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2880:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 1368,
                    "initialValue": {
                      "argumentTypes": null,
                      "id": 1367,
                      "name": "position",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1356,
                      "src": "2889:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2880:17:3"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1377,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2928:3:3",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 1376,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1366,
                        "src": "2928:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1378,
                    "nodeType": "ExpressionStatement",
                    "src": "2928:3:3"
                  },
                  "nodeType": "ForStatement",
                  "src": "2875:169:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1411,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3050:42:3",
                    "subExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1403,
                            "name": "latestTax",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1118,
                            "src": "3057:9:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 1409,
                          "indexExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 1407,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3088:1:3",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1404,
                                  "name": "latestTax",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1118,
                                  "src": "3067:9:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                    "typeString": "uint256[] storage ref"
                                  }
                                },
                                "id": 1405,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3067:16:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 1406,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 14662,
                              "src": "3067:20:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 1408,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3067:23:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "3057:34:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 1410,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "3056:36:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1412,
                  "nodeType": "ExpressionStatement",
                  "src": "3050:42:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3098:56:3",
                    "subExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1413,
                            "name": "incomeThresholds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1121,
                            "src": "3105:16:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 1419,
                          "indexExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 1417,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3150:1:3",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1414,
                                  "name": "incomeThresholds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1121,
                                  "src": "3122:16:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                    "typeString": "uint256[] storage ref"
                                  }
                                },
                                "id": 1415,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3122:23:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 1416,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 14662,
                              "src": "3122:27:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 1418,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3122:30:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "3105:48:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 1420,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "3104:50:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1422,
                  "nodeType": "ExpressionStatement",
                  "src": "3098:56:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1426,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "3161:18:3",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1423,
                        "name": "latestTax",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1118,
                        "src": "3161:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 1425,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3161:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1427,
                  "nodeType": "ExpressionStatement",
                  "src": "3161:18:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "3185:25:3",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1428,
                        "name": "incomeThresholds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1121,
                        "src": "3185:16:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 1430,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3185:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1432,
                  "nodeType": "ExpressionStatement",
                  "src": "3185:25:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1434,
                        "name": "position",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1356,
                        "src": "3233:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 1433,
                      "name": "DeletedTax",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12996,
                      "src": "3222:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 1435,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3222:20:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1436,
                  "nodeType": "EmitStatement",
                  "src": "3217:25:3"
                }
              ]
            },
            "documentation": null,
            "id": 1438,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteTax",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1357,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1356,
                  "name": "position",
                  "nodeType": "VariableDeclaration",
                  "scope": 1438,
                  "src": "2796:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1355,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2796:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2795:18:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1358,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2821:0:3"
            },
            "scope": 1743,
            "src": "2777:471:3",
            "stateMutability": "nonpayable",
            "superFunction": 13026,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1519,
              "nodeType": "Block",
              "src": "3282:579:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1450,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1444,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1442,
                            "name": "latestReportIssuance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1127,
                            "src": "3297:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1443,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3321:1:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3297:25:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1449,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 1447,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 1445,
                              "name": "now",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14790,
                              "src": "3326:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 1446,
                              "name": "latestReportIssuance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1127,
                              "src": "3332:20:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3326:26:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 1448,
                            "name": "quarter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1096,
                            "src": "3356:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3326:37:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "3297:66:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1441,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "3289:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1451,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3289:75:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1452,
                  "nodeType": "ExpressionStatement",
                  "src": "3289:75:3"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1454,
                      "name": "_balance",
                      "nodeType": "VariableDeclaration",
                      "scope": 1520,
                      "src": "3371:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1453,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3371:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1455,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3371:16:3"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1457,
                      "name": "_cashflow",
                      "nodeType": "VariableDeclaration",
                      "scope": 1520,
                      "src": "3393:17:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1456,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3393:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1458,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3393:17:3"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1460,
                      "name": "_income",
                      "nodeType": "VariableDeclaration",
                      "scope": 1520,
                      "src": "3416:15:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1459,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3416:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1461,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3416:15:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1472,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "id": 1462,
                          "name": "_income",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1460,
                          "src": "3439:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1463,
                          "name": "_balance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1454,
                          "src": "3448:8:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1464,
                          "name": "_cashflow",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1457,
                          "src": "3458:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "id": 1465,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "3438:30:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$",
                        "typeString": "tuple(address,address,address)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1469,
                              "name": "dateTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1137,
                              "src": "3498:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DateTime_$13873",
                                "typeString": "contract DateTime"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_DateTime_$13873",
                                "typeString": "contract DateTime"
                              }
                            ],
                            "id": 1468,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3490:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1470,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3490:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 1466,
                          "name": "issuer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1133,
                          "src": "3471:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IReportIssuer_$12969",
                            "typeString": "contract IReportIssuer"
                          }
                        },
                        "id": 1467,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "issueReport",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 12968,
                        "src": "3471:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$_t_address_$_t_address_$_t_address_$",
                          "typeString": "function (address) external returns (address,address,address)"
                        }
                      },
                      "id": 1471,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3471:37:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$",
                        "typeString": "tuple(address,address,address)"
                      }
                    },
                    "src": "3438:70:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1473,
                  "nodeType": "ExpressionStatement",
                  "src": "3438:70:3"
                },
                {
                  "assignments": [
                    1475
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1475,
                      "name": "newReport",
                      "nodeType": "VariableDeclaration",
                      "scope": 1520,
                      "src": "3515:23:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Report_$1109_memory_ptr",
                        "typeString": "struct TransparentDao.Report"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1474,
                        "name": "Report",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1109,
                        "src": "3515:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Report_$1109_storage_ptr",
                          "typeString": "struct TransparentDao.Report"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1481,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1477,
                        "name": "_income",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1460,
                        "src": "3548:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1478,
                        "name": "_balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1454,
                        "src": "3557:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1479,
                        "name": "_cashflow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1457,
                        "src": "3567:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1476,
                      "name": "Report",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1109,
                      "src": "3541:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Report_$1109_storage_ptr_$",
                        "typeString": "type(struct TransparentDao.Report storage pointer)"
                      }
                    },
                    "id": 1480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3541:36:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Report_$1109_memory",
                      "typeString": "struct TransparentDao.Report memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3515:62:3"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 1491,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1484,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 1482,
                        "name": "latestReportIssuance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1127,
                        "src": "3588:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 1483,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3612:1:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3588:25:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1490,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1487,
                            "name": "startOfCurrentYear",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1125,
                            "src": "3625:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1485,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14790,
                            "src": "3617:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1486,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sub",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 14662,
                          "src": "3617:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1488,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3617:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 1489,
                        "name": "year",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1099,
                        "src": "3648:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3617:35:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "3588:64:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 1496,
                  "nodeType": "IfStatement",
                  "src": "3584:100:3",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1494,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 1492,
                        "name": "startOfCurrentYear",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1125,
                        "src": "3660:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 1493,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14790,
                        "src": "3681:3:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3660:24:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1495,
                    "nodeType": "ExpressionStatement",
                    "src": "3660:24:3"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1497,
                      "name": "latestReportIssuance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1127,
                      "src": "3691:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1498,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14790,
                      "src": "3714:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3691:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1500,
                  "nodeType": "ExpressionStatement",
                  "src": "3691:26:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1501,
                        "name": "reports",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1147,
                        "src": "3724:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Report_$1109_storage_$",
                          "typeString": "mapping(uint256 => struct TransparentDao.Report storage ref)"
                        }
                      },
                      "id": 1503,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1502,
                        "name": "latestReportIssuance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1127,
                        "src": "3732:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3724:29:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Report_$1109_storage",
                        "typeString": "struct TransparentDao.Report storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1504,
                      "name": "newReport",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1475,
                      "src": "3756:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Report_$1109_memory_ptr",
                        "typeString": "struct TransparentDao.Report memory"
                      }
                    },
                    "src": "3724:41:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Report_$1109_storage",
                      "typeString": "struct TransparentDao.Report storage ref"
                    }
                  },
                  "id": 1506,
                  "nodeType": "ExpressionStatement",
                  "src": "3724:41:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1510,
                        "name": "newReport",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1475,
                        "src": "3790:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Report_$1109_memory_ptr",
                          "typeString": "struct TransparentDao.Report memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Report_$1109_memory_ptr",
                          "typeString": "struct TransparentDao.Report memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1507,
                        "name": "reportsArray",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1143,
                        "src": "3772:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Report_$1109_storage_$dyn_storage",
                          "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                        }
                      },
                      "id": 1509,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3772:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Report_$1109_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct TransparentDao.Report storage ref) returns (uint256)"
                      }
                    },
                    "id": 1511,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3772:28:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1512,
                  "nodeType": "ExpressionStatement",
                  "src": "3772:28:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1514,
                        "name": "_income",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1460,
                        "src": "3826:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1515,
                        "name": "_balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1454,
                        "src": "3835:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1516,
                        "name": "_cashflow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1457,
                        "src": "3845:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1513,
                      "name": "StartedReport",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13004,
                      "src": "3812:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 1517,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3812:43:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1518,
                  "nodeType": "EmitStatement",
                  "src": "3807:48:3"
                }
              ]
            },
            "documentation": null,
            "id": 1520,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "startReport",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1439,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3272:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1440,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3282:0:3"
            },
            "scope": 1743,
            "src": "3252:609:3",
            "stateMutability": "nonpayable",
            "superFunction": 13034,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1523,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1521,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3873:2:3"
            },
            "payable": true,
            "returnParameters": {
              "id": 1522,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3883:0:3"
            },
            "scope": 1743,
            "src": "3865:19:3",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1539,
              "nodeType": "Block",
              "src": "3959:103:3",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1531,
                      "name": "size",
                      "nodeType": "VariableDeclaration",
                      "scope": 1540,
                      "src": "3966:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      },
                      "typeName": {
                        "id": 1530,
                        "name": "uint32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3966:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1532,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3966:11:3"
                },
                {
                  "externalReferences": [
                    {
                      "size": {
                        "declaration": 1531,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4001:4:3",
                        "valueSize": 1
                      }
                    },
                    {
                      "_addr": {
                        "declaration": 1525,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4021:5:3",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 1533,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    size := extcodesize(_addr)\n}",
                  "src": "3984:61:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        },
                        "id": 1536,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1534,
                          "name": "size",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1531,
                          "src": "4047:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1535,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4054:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4047:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 1537,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4046:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1529,
                  "id": 1538,
                  "nodeType": "Return",
                  "src": "4039:17:3"
                }
              ]
            },
            "documentation": null,
            "id": 1540,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "isContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1525,
                  "name": "_addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 1540,
                  "src": "3921:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1524,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3921:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3920:15:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1528,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1540,
                  "src": "3953:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1527,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3953:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3952:6:3"
            },
            "scope": 1743,
            "src": "3901:161:3",
            "stateMutability": "nonpayable",
            "superFunction": 13041,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1547,
              "nodeType": "Block",
              "src": "4134:23:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1545,
                    "name": "UOA",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1129,
                    "src": "4148:3:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1544,
                  "id": 1546,
                  "nodeType": "Return",
                  "src": "4141:10:3"
                }
              ]
            },
            "documentation": null,
            "id": 1548,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUOAAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1541,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4101:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1544,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1543,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1548,
                  "src": "4125:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1542,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4125:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4124:9:3"
            },
            "scope": 1743,
            "src": "4079:78:3",
            "stateMutability": "view",
            "superFunction": 13062,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1606,
              "nodeType": "Block",
              "src": "4256:287:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1561,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1558,
                          "name": "startPosition",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1550,
                          "src": "4271:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1559,
                            "name": "bonds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1140,
                            "src": "4287:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_contract$_IDAOBond_$12329_$dyn_storage",
                              "typeString": "contract IDAOBond[] storage ref"
                            }
                          },
                          "id": 1560,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4287:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4271:28:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1557,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "4263:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1562,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4263:37:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1563,
                  "nodeType": "ExpressionStatement",
                  "src": "4263:37:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1571,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1567,
                              "name": "bondsNumber",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1552,
                              "src": "4332:11:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1565,
                              "name": "startPosition",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1550,
                              "src": "4314:13:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1566,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 14686,
                            "src": "4314:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1568,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4314:30:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1569,
                            "name": "bonds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1140,
                            "src": "4347:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_contract$_IDAOBond_$12329_$dyn_storage",
                              "typeString": "contract IDAOBond[] storage ref"
                            }
                          },
                          "id": 1570,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4347:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4314:45:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1564,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "4306:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4306:54:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1573,
                  "nodeType": "ExpressionStatement",
                  "src": "4306:54:3"
                },
                {
                  "assignments": [
                    1575
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1575,
                      "name": "debt",
                      "nodeType": "VariableDeclaration",
                      "scope": 1607,
                      "src": "4367:12:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1574,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4367:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1577,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 1576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4382:1:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4367:16:3"
                },
                {
                  "body": {
                    "id": 1602,
                    "nodeType": "Block",
                    "src": "4463:57:3",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1600,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 1591,
                            "name": "debt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1575,
                            "src": "4472:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 1594,
                                      "name": "bonds",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1140,
                                      "src": "4488:5:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_contract$_IDAOBond_$12329_$dyn_storage",
                                        "typeString": "contract IDAOBond[] storage ref"
                                      }
                                    },
                                    "id": 1596,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 1595,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1579,
                                      "src": "4494:1:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "4488:8:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_IDAOBond_$12329",
                                      "typeString": "contract IDAOBond"
                                    }
                                  },
                                  "id": 1597,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "getTotalDebt",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 12308,
                                  "src": "4488:21:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                    "typeString": "function () view external returns (uint256)"
                                  }
                                },
                                "id": 1598,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4488:23:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 1592,
                                "name": "debt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1575,
                                "src": "4479:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 1593,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 14686,
                              "src": "4479:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 1599,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4479:33:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4472:40:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1601,
                        "nodeType": "ExpressionStatement",
                        "src": "4472:40:3"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1587,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1582,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1579,
                      "src": "4422:1:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1585,
                          "name": "bondsNumber",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1552,
                          "src": "4444:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 1583,
                          "name": "startPosition",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1550,
                          "src": "4426:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1584,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14686,
                        "src": "4426:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1586,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4426:30:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4422:34:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1603,
                  "initializationExpression": {
                    "assignments": [
                      1579
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 1579,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 1607,
                        "src": "4395:9:3",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1578,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4395:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 1581,
                    "initialValue": {
                      "argumentTypes": null,
                      "id": 1580,
                      "name": "startPosition",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1550,
                      "src": "4407:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4395:25:3"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1589,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4458:3:3",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 1588,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1579,
                        "src": "4458:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1590,
                    "nodeType": "ExpressionStatement",
                    "src": "4458:3:3"
                  },
                  "nodeType": "ForStatement",
                  "src": "4390:130:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1604,
                    "name": "debt",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1575,
                    "src": "4533:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1556,
                  "id": 1605,
                  "nodeType": "Return",
                  "src": "4526:11:3"
                }
              ]
            },
            "documentation": null,
            "id": 1607,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBondDebt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1553,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1550,
                  "name": "startPosition",
                  "nodeType": "VariableDeclaration",
                  "scope": 1607,
                  "src": "4182:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1549,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4182:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1552,
                  "name": "bondsNumber",
                  "nodeType": "VariableDeclaration",
                  "scope": 1607,
                  "src": "4205:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1551,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4205:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4181:44:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1555,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1607,
                  "src": "4247:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1554,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4247:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4246:9:3"
            },
            "scope": 1743,
            "src": "4161:382:3",
            "stateMutability": "view",
            "superFunction": 13057,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1620,
              "nodeType": "Block",
              "src": "4619:44:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1615,
                          "name": "bonds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1140,
                          "src": "4641:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_contract$_IDAOBond_$12329_$dyn_storage",
                            "typeString": "contract IDAOBond[] storage ref"
                          }
                        },
                        "id": 1617,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1616,
                          "name": "position",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1609,
                          "src": "4647:8:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4641:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOBond_$12329",
                          "typeString": "contract IDAOBond"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IDAOBond_$12329",
                          "typeString": "contract IDAOBond"
                        }
                      ],
                      "id": 1614,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "4633:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 1618,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4633:24:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1613,
                  "id": 1619,
                  "nodeType": "Return",
                  "src": "4626:31:3"
                }
              ]
            },
            "documentation": null,
            "id": 1621,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBondAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1610,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1609,
                  "name": "position",
                  "nodeType": "VariableDeclaration",
                  "scope": 1621,
                  "src": "4571:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1608,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4571:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4570:18:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1612,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1621,
                  "src": "4610:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1611,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4610:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4609:9:3"
            },
            "scope": 1743,
            "src": "4547:116:3",
            "stateMutability": "view",
            "superFunction": 13048,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1628,
              "nodeType": "Block",
              "src": "4722:31:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1626,
                    "name": "marketPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 11768,
                    "src": "4736:11:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 1625,
                  "id": 1627,
                  "nodeType": "Return",
                  "src": "4729:18:3"
                }
              ]
            },
            "documentation": null,
            "id": 1629,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMarketPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1622,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4690:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1624,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1629,
                  "src": "4714:6:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1623,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4714:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4713:8:3"
            },
            "scope": 1743,
            "src": "4667:86:3",
            "stateMutability": "view",
            "superFunction": 11773,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1637,
              "nodeType": "Block",
              "src": "4815:39:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 1634,
                      "name": "reportsArray",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1143,
                      "src": "4829:12:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Report_$1109_storage_$dyn_storage",
                        "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                      }
                    },
                    "id": 1635,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "4829:19:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1633,
                  "id": 1636,
                  "nodeType": "Return",
                  "src": "4822:26:3"
                }
              ]
            },
            "documentation": null,
            "id": 1638,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getReportsLength",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1630,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4782:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1632,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1638,
                  "src": "4806:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1631,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4806:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4805:9:3"
            },
            "scope": 1743,
            "src": "4757:97:3",
            "stateMutability": "view",
            "superFunction": 13077,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1663,
              "nodeType": "Block",
              "src": "4953:128:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1649,
                            "name": "reportsArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1143,
                            "src": "4968:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Report_$1109_storage_$dyn_storage",
                              "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                            }
                          },
                          "id": 1651,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1650,
                            "name": "position",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1640,
                            "src": "4981:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4968:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Report_$1109_storage",
                            "typeString": "struct TransparentDao.Report storage ref"
                          }
                        },
                        "id": 1652,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "income",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1104,
                        "src": "4968:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1653,
                            "name": "reportsArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1143,
                            "src": "4999:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Report_$1109_storage_$dyn_storage",
                              "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                            }
                          },
                          "id": 1655,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1654,
                            "name": "position",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1640,
                            "src": "5012:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4999:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Report_$1109_storage",
                            "typeString": "struct TransparentDao.Report storage ref"
                          }
                        },
                        "id": 1656,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1106,
                        "src": "4999:30:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1657,
                            "name": "reportsArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1143,
                            "src": "5043:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Report_$1109_storage_$dyn_storage",
                              "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                            }
                          },
                          "id": 1659,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1658,
                            "name": "position",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1640,
                            "src": "5056:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5043:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Report_$1109_storage",
                            "typeString": "struct TransparentDao.Report storage ref"
                          }
                        },
                        "id": 1660,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "cashflow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1108,
                        "src": "5043:31:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "id": 1661,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4967:108:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$",
                      "typeString": "tuple(address,address,address)"
                    }
                  },
                  "functionReturnParameters": 1648,
                  "id": 1662,
                  "nodeType": "Return",
                  "src": "4960:115:3"
                }
              ]
            },
            "documentation": null,
            "id": 1664,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getReportAtPosition",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1641,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1640,
                  "name": "position",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "4887:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1639,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4887:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4886:18:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1643,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "4926:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1642,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4926:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1645,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "4935:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1644,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4935:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1647,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "4944:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1646,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4944:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4925:27:3"
            },
            "scope": 1743,
            "src": "4858:223:3",
            "stateMutability": "view",
            "superFunction": 13088,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1673,
              "nodeType": "Block",
              "src": "5142:38:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1670,
                        "name": "floatMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1135,
                        "src": "5164:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IFloatMath_$12594",
                          "typeString": "contract IFloatMath"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IFloatMath_$12594",
                          "typeString": "contract IFloatMath"
                        }
                      ],
                      "id": 1669,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5156:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 1671,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5156:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1668,
                  "id": 1672,
                  "nodeType": "Return",
                  "src": "5149:25:3"
                }
              ]
            },
            "documentation": null,
            "id": 1674,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getFloatAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1665,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5109:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1667,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1674,
                  "src": "5133:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1666,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5133:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5132:9:3"
            },
            "scope": 1743,
            "src": "5085:95:3",
            "stateMutability": "view",
            "superFunction": 13067,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1683,
              "nodeType": "Block",
              "src": "5240:36:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1680,
                        "name": "daoCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1131,
                        "src": "5262:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                          "typeString": "contract IDAOCoin"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                          "typeString": "contract IDAOCoin"
                        }
                      ],
                      "id": 1679,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5254:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 1681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5254:16:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1678,
                  "id": 1682,
                  "nodeType": "Return",
                  "src": "5247:23:3"
                }
              ]
            },
            "documentation": null,
            "id": 1684,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getCoinAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1675,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5207:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1677,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1684,
                  "src": "5231:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1676,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5231:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5230:9:3"
            },
            "scope": 1743,
            "src": "5184:92:3",
            "stateMutability": "view",
            "superFunction": 13093,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1703,
              "nodeType": "Block",
              "src": "5336:103:3",
              "statements": [
                {
                  "assignments": [
                    1690
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1690,
                      "name": "decimals",
                      "nodeType": "VariableDeclaration",
                      "scope": 1704,
                      "src": "5343:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1689,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5343:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1694,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1691,
                        "name": "daoCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1131,
                        "src": "5362:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                          "typeString": "contract IDAOCoin"
                        }
                      },
                      "id": 1692,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getDecimals",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 12349,
                      "src": "5362:19:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                        "typeString": "function () view external returns (uint256)"
                      }
                    },
                    "id": 1693,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5362:21:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5343:40:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 1695,
                          "name": "daoCoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1131,
                          "src": "5397:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                            "typeString": "contract IDAOCoin"
                          }
                        },
                        "id": 1696,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "totalSupply",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14092,
                        "src": "5397:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                          "typeString": "function () view external returns (uint256)"
                        }
                      },
                      "id": 1697,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5397:21:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1700,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 1698,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5421:2:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "**",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 1699,
                        "name": "decimals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1690,
                        "src": "5425:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5421:12:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5397:36:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1688,
                  "id": 1702,
                  "nodeType": "Return",
                  "src": "5390:43:3"
                }
              ]
            },
            "documentation": null,
            "id": 1704,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getCoinsAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1685,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5303:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1688,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1687,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1704,
                  "src": "5327:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1686,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5327:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5326:9:3"
            },
            "scope": 1743,
            "src": "5280:159:3",
            "stateMutability": "view",
            "superFunction": 13072,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1712,
              "nodeType": "Block",
              "src": "5499:29:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1710,
                    "name": "latestTax",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1118,
                    "src": "5513:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 1709,
                  "id": 1711,
                  "nodeType": "Return",
                  "src": "5506:16:3"
                }
              ]
            },
            "documentation": null,
            "id": 1713,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLatestTax",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1705,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5464:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1709,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1708,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1713,
                  "src": "5488:9:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 1706,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5488:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1707,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5488:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5487:11:3"
            },
            "scope": 1743,
            "src": "5443:85:3",
            "stateMutability": "view",
            "superFunction": 13099,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1741,
              "nodeType": "Block",
              "src": "5581:160:3",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1720,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1718,
                      "name": "taxLenght",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1123,
                      "src": "5592:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 1719,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5604:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "5592:13:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1728,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 1726,
                        "name": "taxLenght",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1123,
                        "src": "5656:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 1727,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5669:1:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "5656:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 1734,
                    "nodeType": "IfStatement",
                    "src": "5652:48:3",
                    "trueBody": {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1730,
                              "name": "TAX_TYPE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1113,
                              "src": "5684:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_TAX_TYPE_$1113_$",
                                "typeString": "type(enum TransparentDao.TAX_TYPE)"
                              }
                            },
                            "id": 1731,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "SIMPLE",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5684:15:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
                              "typeString": "enum TransparentDao.TAX_TYPE"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
                              "typeString": "enum TransparentDao.TAX_TYPE"
                            }
                          ],
                          "id": 1729,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5679:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": "uint"
                        },
                        "id": 1732,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5679:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 1717,
                      "id": 1733,
                      "nodeType": "Return",
                      "src": "5672:28:3"
                    }
                  },
                  "id": 1735,
                  "nodeType": "IfStatement",
                  "src": "5588:112:3",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1722,
                            "name": "TAX_TYPE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1113,
                            "src": "5619:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_TAX_TYPE_$1113_$",
                              "typeString": "type(enum TransparentDao.TAX_TYPE)"
                            }
                          },
                          "id": 1723,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "PROGRESSIVE",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "5619:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
                            "typeString": "enum TransparentDao.TAX_TYPE"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
                            "typeString": "enum TransparentDao.TAX_TYPE"
                          }
                        ],
                        "id": 1721,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5614:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 1724,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5614:26:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 1717,
                    "id": 1725,
                    "nodeType": "Return",
                    "src": "5607:33:3"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1737,
                          "name": "TAX_TYPE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1113,
                          "src": "5719:8:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_TAX_TYPE_$1113_$",
                            "typeString": "type(enum TransparentDao.TAX_TYPE)"
                          }
                        },
                        "id": 1738,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberName": "NO_TAX",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5719:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
                          "typeString": "enum TransparentDao.TAX_TYPE"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_TAX_TYPE_$1113",
                          "typeString": "enum TransparentDao.TAX_TYPE"
                        }
                      ],
                      "id": 1736,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5714:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": "uint"
                    },
                    "id": 1739,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5714:21:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1717,
                  "id": 1740,
                  "nodeType": "Return",
                  "src": "5707:28:3"
                }
              ]
            },
            "documentation": null,
            "id": 1742,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTaxType",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1714,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5551:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1716,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1742,
                  "src": "5575:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1715,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5575:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5574:6:3"
            },
            "scope": 1743,
            "src": "5532:209:3",
            "stateMutability": "view",
            "superFunction": 13104,
            "visibility": "public"
          }
        ],
        "scope": 1744,
        "src": "434:5310:3"
      }
    ],
    "src": "0:5745:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-14T17:21:44.514Z"
}

module.exports = {

  transparentDao

}
