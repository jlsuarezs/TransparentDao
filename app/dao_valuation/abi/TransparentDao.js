var transparentDao = {
  "contractName": "TransparentDao",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "hasInitialized",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "START_REPORT",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "ADD_TAX",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
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
          "name": "_script",
          "type": "bytes"
        }
      ],
      "name": "getEVMScriptExecutor",
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
      "name": "getRecoveryVault",
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
      "constant": true,
      "inputs": [],
      "name": "NEW_BOND",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
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
      "constant": true,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        }
      ],
      "name": "allowRecoverability",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "appId",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getInitializationBlock",
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
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "transferToVault",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_sender",
          "type": "address"
        },
        {
          "name": "_role",
          "type": "bytes32"
        },
        {
          "name": "_params",
          "type": "uint256[]"
        }
      ],
      "name": "canPerform",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getEVMScriptRegistry",
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
      "name": "DELETE_TAX",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
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
        },
        {
          "name": "someInt",
          "type": "int256"
        }
      ],
      "name": "callStringInt256",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "SET_COIN",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
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
      "constant": true,
      "inputs": [],
      "name": "kernel",
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
      "name": "isPetrified",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
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
        },
        {
          "name": "someInt1",
          "type": "uint256"
        },
        {
          "name": "someInt2",
          "type": "uint256"
        }
      ],
      "name": "callStringUint256Uint256",
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
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "executor",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "script",
          "type": "bytes"
        },
        {
          "indexed": false,
          "name": "input",
          "type": "bytes"
        },
        {
          "indexed": false,
          "name": "returnData",
          "type": "bytes"
        }
      ],
      "name": "ScriptResult",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "ExecutedCall",
      "type": "event"
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
          "name": "_bond",
          "type": "address"
        }
      ],
      "name": "NewBond",
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
          "name": "_unitOfAccount",
          "type": "address"
        },
        {
          "name": "_daoCoin",
          "type": "address"
        }
      ],
      "name": "initialize",
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
      "inputs": [
        {
          "name": "_bond",
          "type": "address"
        }
      ],
      "name": "newBond",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_income",
          "type": "address"
        },
        {
          "name": "_balance",
          "type": "address"
        },
        {
          "name": "_cashflow",
          "type": "address"
        }
      ],
      "name": "startReport",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "donate",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
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
      "name": "getIncomeThresholds",
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
      "name": "getRoles",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "bytes32"
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
  "bytecode": "0x60806040527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600055627555806001556301d556006002556040805190810160405280600981526020017f555320444f4c4c4152000000000000000000000000000000000000000000000081525060039080519060200190620000849291906200038a565b506200009e620000a4640100000000026401000000009004565b62000439565b6000620000bf620001df640100000000026401000000009004565b146040805190810160405280601881526020017f494e49545f414c52454144595f494e495449414c495a45440000000000000000815250901515620001a2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156200016657808201518184015260208101905062000149565b50505050905090810190601f168015620001945780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50620001dd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6200022c640100000000026401000000009004565b565b6000620002277febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e60010260001916620003786401000000000262004c2c176401000000009004565b905090565b600062000247620001df640100000000026401000000009004565b146040805190810160405280601881526020017f494e49545f414c52454144595f494e495449414c495a454400000000000000008152509015156200032a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620002ee578082015181840152602081019050620002d1565b50505050905090810190601f1680156200031c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5062000375817febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e60010260001916620003836401000000000262004c42179091906401000000009004565b50565b600081549050919050565b8082555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003cd57805160ff1916838001178555620003fe565b82800160010185558215620003fe579182015b82811115620003fd578251825591602001919060010190620003e0565b5b5090506200040d919062000411565b5090565b6200043691905b808211156200043257600081600090555060010162000418565b5090565b90565b614d2a80620004496000396000f300608060405260043610610225576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063011eb8b01461022a57806304d0a5f0146102755780630803fac0146102a257806316967df6146102d15780632757623e1461030457806327ff6b98146103375780632914b9bd1461038e57806332f0a3b514610437578063362b43781461048e57806339558413146104fb5780633f86249a146105d457806340043068146106f3578063485cc9551461074a578063486ead7c146107ad5780634a18e54814610856578063548ce2bc14610889578063660e16c3146108b457806371061398146108df578063716030b21461094e5780637e7db6e114610a1d57806380afdea814610a78578063885c6cf714610aab5780638b3dd74914610b175780639412cc7a14610b425780639ac747e714610b6d5780639d4941d814610bd95780639d59bcbd14610c1c578063a1658fad14610c47578063a479e50814610cf3578063a60f5ca114610d4a578063aa8612b414610d7d578063abcd895814610e56578063af681ad814610e99578063bd16a21014610ecc578063c8adcc8614610f5f578063caa711cb14611012578063cd09bd95146110a5578063cf23940a14611178578063d4aae0c4146111fb578063de4796ed14611252578063ec3edeee14611281578063ed88c68e146112c4578063f586e1b3146112ce578063f6c12a8b14611305578063f8de137e146113e8575b600080fd5b34801561023657600080fd5b5061025f60048036038101908080359060200190929190803590602001909291905050506114e1565b6040518082815260200191505060405180910390f35b34801561028157600080fd5b506102a06004803603810190808035906020019092919050505061164d565b005b3480156102ae57600080fd5b506102b7611949565b604051808215151515815260200191505060405180910390f35b3480156102dd57600080fd5b506102e6611974565b60405180826000191660001916815260200191505060405180910390f35b34801561031057600080fd5b506103196119ad565b60405180826000191660001916815260200191505060405180910390f35b34801561034357600080fd5b5061034c6119e6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561039a57600080fd5b506103f5600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611a10565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561044357600080fd5b5061044c611b2f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561049a57600080fd5b506104b960048036038101908080359060200190929190505050611bdc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561050757600080fd5b506105d2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050611c1f565b005b3480156105e057600080fd5b506106f1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050611d90565b005b3480156106ff57600080fd5b50610708611f5b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561075657600080fd5b506107ab600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611f85565b005b3480156107b957600080fd5b50610854600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506121a8565b005b34801561086257600080fd5b5061086b6122eb565b60405180826000191660001916815260200191505060405180910390f35b34801561089557600080fd5b5061089e612324565b6040518082815260200191505060405180910390f35b3480156108c057600080fd5b506108c96124bf565b6040518082815260200191505060405180910390f35b3480156108eb57600080fd5b506108f46124c8565b60405180866000191660001916815260200185600019166000191681526020018460001916600019168152602001836000191660001916815260200182600019166000191681526020019550505050505060405180910390f35b34801561095a57600080fd5b50610a1b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506125ef565b005b348015610a2957600080fd5b50610a5e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612757565b604051808215151515815260200191505060405180910390f35b348015610a8457600080fd5b50610a8d612762565b60405180826000191660001916815260200191505060405180910390f35b348015610ab757600080fd5b50610ac0612799565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610b03578082015181840152602081019050610ae8565b505050509050019250505060405180910390f35b348015610b2357600080fd5b50610b2c6127f1565b6040518082815260200191505060405180910390f35b348015610b4e57600080fd5b50610b57612828565b6040518082815260200191505060405180910390f35b348015610b7957600080fd5b50610b82612835565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610bc5578082015181840152602081019050610baa565b505050509050019250505060405180910390f35b348015610be557600080fd5b50610c1a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061288d565b005b348015610c2857600080fd5b50610c31612cbf565b6040518082815260200191505060405180910390f35b348015610c5357600080fd5b50610cd9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560001916906020019092919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290505050612d17565b604051808215151515815260200191505060405180910390f35b348015610cff57600080fd5b50610d08612f1e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610d5657600080fd5b50610d5f613039565b60405180826000191660001916815260200191505060405180910390f35b348015610d8957600080fd5b50610e54600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050613072565b005b348015610e6257600080fd5b50610e97600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506131e3565b005b348015610ea557600080fd5b50610eae6134ce565b60405180826000191660001916815260200191505060405180910390f35b348015610ed857600080fd5b50610f5d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050613507565b005b348015610f6b57600080fd5b50611010600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061361e565b005b34801561101e57600080fd5b506110a3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192908035906020019092919050505061376a565b005b3480156110b157600080fd5b506110d060048036038101908080359060200190929190505050613881565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34801561118457600080fd5b506111f9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050613956565b005b34801561120757600080fd5b506112106140ca565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561125e57600080fd5b50611267614101565b604051808215151515815260200191505060405180910390f35b34801561128d57600080fd5b506112c2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050614132565b005b6112cc6143a2565b005b3480156112da57600080fd5b5061130360048036038101908080359060200190929190803590602001909291905050506143a4565b005b34801561131157600080fd5b506113e6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192908035906020019092919080359060200190929190505050614590565b005b3480156113f457600080fd5b506114df600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061470a565b005b600080600080600b80549050861015156114fa57600080fd5b600b8054905061151386886148b090919063ffffffff16565b10151561151f57600080fd5b60009250600091508590505b600b8181548110151561153a57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166334ce998a6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156115c857600080fd5b505af11580156115dc573d6000803e3d6000fd5b505050506040513d60208110156115f257600080fd5b8101908080519060200190929190505050915061161882846148b090919063ffffffff16565b9250808060010191505061163585876148b090919063ffffffff16565b8110156116415761152b565b82935050505092915050565b600060405180807f44454c4554455f54415800000000000000000000000000000000000000000000815250600a01905060405180910390206116c0338260006040519080825280602002602001820160405280156116ba5781602001602082028038833980820191505090505b50612d17565b6040805190810160405280600f81526020017f4150505f415554485f4641494c4544000000000000000000000000000000000081525090151561179e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611763578082015181840152602081019050611748565b50505050905090810190601f1680156117905780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600580549050831015156117b257600080fd5b8291505b6117cf60016005805490506149a590919063ffffffff16565b8210156118775760056117ec6001846148b090919063ffffffff16565b8154811015156117f857fe5b906000526020600020015460058381548110151561181257fe5b906000526020600020018190555060066118366001846148b090919063ffffffff16565b81548110151561184257fe5b906000526020600020015460068381548110151561185c57fe5b906000526020600020018190555081806001019250506117b6565b600561189260016005805490506149a590919063ffffffff16565b81548110151561189e57fe5b906000526020600020016000905560066118c760016006805490506149a590919063ffffffff16565b8154811015156118d357fe5b906000526020600020016000905560058054809190600190036118f69190614c49565b50600680548091906001900361190c9190614c49565b507f0b72ed9bc3245ee50f52040c7a5fad686b4ae577ced7bfd9e7533dbd430b4690836040518082815260200191505060405180910390a1505050565b6000806119546127f1565b90506000811415801561196e57508061196b614a9a565b10155b91505090565b60405180807f53544152545f5245504f52540000000000000000000000000000000000000000815250600c019050604051809103902081565b60405180807f4144445f544158000000000000000000000000000000000000000000000000008152506007019050604051809103902081565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000611a1a612f1e565b73ffffffffffffffffffffffffffffffffffffffff166304bf2a7f836040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611aa1578082015181840152602081019050611a86565b50505050905090810190601f168015611ace5780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b158015611aed57600080fd5b505af1158015611b01573d6000803e3d6000fd5b505050506040513d6020811015611b1757600080fd5b81019080805190602001909291905050509050919050565b6000611b396140ca565b73ffffffffffffffffffffffffffffffffffffffff166332f0a3b56040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015611b9c57600080fd5b505af1158015611bb0573d6000803e3d6000fd5b505050506040513d6020811015611bc657600080fd5b8101908080519060200190929190505050905090565b6000600b82815481101515611bed57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b602083101515611c6c5780518252602082019150602081019050602083039250611c47565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c0100000000000000000000000000000000000000000000000000000000900483836040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180838051906020019080838360005b83811015611d13578082015181840152602081019050611cf8565b50505050905090810190601f168015611d405780820380516001836020036101000a031916815260200191505b50828152602001925050506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a150505050565b8473ffffffffffffffffffffffffffffffffffffffff16846040518082805190602001908083835b602083101515611ddd5780518252602082019150602081019050602083039250611db8565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c010000000000000000000000000000000000000000000000000000000090048484846040518463ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180848051906020019080838360005b83811015611e85578082015181840152602081019050611e6a565b50505050905090810190601f168015611eb25780820380516001836020036101000a031916815260200191505b50838051906020019080838360005b83811015611edc578082015181840152602081019050611ec1565b50505050905090810190601f168015611f095780820380516001836020036101000a031916815260200191505b5082815260200193505050506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a15050505050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000611f8f6127f1565b146040805190810160405280601881526020017f494e49545f414c52454144595f494e495449414c495a4544000000000000000081525090151561206e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612033578082015181840152602081019050612018565b50505050905090810190601f1680156120605780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806120b65750600115156120b283614aa2565b1515145b15156120c157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561215b5780600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b81600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506121a4614af4565b5050565b8273ffffffffffffffffffffffffffffffffffffffff16826040518082805190602001908083835b6020831015156121f557805182526020820191506020810190506020830392506121d0565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c01000000000000000000000000000000000000000000000000000000009004826040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019150506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a1505050565b60405180807f4e45575f424f4e440000000000000000000000000000000000000000000000008152506008019050604051809103902081565b600080600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f0141d846040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156123ad57600080fd5b505af11580156123c1573d6000803e3d6000fd5b505050506040513d60208110156123d757600080fd5b8101908080519060200190929190505050905080600a0a600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561247457600080fd5b505af1158015612488573d6000803e3d6000fd5b505050506040513d602081101561249e57600080fd5b81019080805190602001909291905050508115156124b857fe5b0491505090565b60008054905090565b600080600080600060405180807f5345545f434f494e0000000000000000000000000000000000000000000000008152506008019050604051809103902060405180807f4144445f544158000000000000000000000000000000000000000000000000008152506007019050604051809103902060405180807f44454c4554455f54415800000000000000000000000000000000000000000000815250600a019050604051809103902060405180807f4e45575f424f4e440000000000000000000000000000000000000000000000008152506008019050604051809103902060405180807f53544152545f5245504f52540000000000000000000000000000000000000000815250600c0190506040518091039020945094509450945094509091929394565b8273ffffffffffffffffffffffffffffffffffffffff16826040518082805190602001908083835b60208310151561263c5780518252602082019150602081019050602083039250612617565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c01000000000000000000000000000000000000000000000000000000009004826040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828051906020019080838360005b838110156126e25780820151818401526020810190506126c7565b50505050905090810190601f16801561270f5780820380516001836020036101000a031916815260200191505b509150506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a1505050565b600060019050919050565b60006127947fd625496217aa6a3453eecb9c3489dc5a53e6c67b444329ea2b2cbc9ff547639b60010260001916614c21565b905090565b606060058054806020026020016040519081016040528092919081815260200182805480156127e757602002820191906000526020600020905b8154815260200190600101908083116127d3575b5050505050905090565b60006128237febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e60010260001916614c2c565b905090565b6000600c80549050905090565b6060600680548060200260200160405190810160405280929190818152602001828054801561288357602002820191906000526020600020905b81548152602001906001019080831161286f575b5050505050905090565b60008061289983612757565b6040805190810160405280601281526020017f5245434f5645525f444953414c4c4f5745440000000000000000000000000000815250901515612977576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561293c578082015181840152602081019050612921565b50505050905090810190601f1680156129695780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50612980611b2f565b915061298b82614aa2565b6040805190810160405280601a81526020017f5245434f5645525f5641554c545f4e4f545f434f4e5452414354000000000000815250901515612a69576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612a2e578082015181840152602081019050612a13565b50505050905090810190601f168015612a5b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612b02578173ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050158015612afc573d6000803e3d6000fd5b50612cba565b8273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015612b9d57600080fd5b505af1158015612bb1573d6000803e3d6000fd5b505050506040513d6020811015612bc757600080fd5b810190808051906020019092919050505090508273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015612c7d57600080fd5b505af1158015612c91573d6000803e3d6000fd5b505050506040513d6020811015612ca757600080fd5b8101908080519060200190929190505050505b505050565b600060016005805490501115612ce257600280811115612cdb57fe5b9050612d14565b60016005805490501415612d045760016002811115612cfd57fe5b9050612d14565b60006002811115612d1157fe5b90505b90565b60008060606000612d26611949565b1515612d355760009350612f14565b612d3d6140ca565b9250600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612d7d5760009350612f14565b602085510290508491508082528273ffffffffffffffffffffffffffffffffffffffff1663fdef9106883089866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612e87578082015181840152602081019050612e6c565b50505050905090810190601f168015612eb45780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015612ed657600080fd5b505af1158015612eea573d6000803e3d6000fd5b505050506040513d6020811015612f0057600080fd5b810190808051906020019092919050505093505b5050509392505050565b600080612f296140ca565b73ffffffffffffffffffffffffffffffffffffffff1663be00bbd87fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb6001027fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd616001026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808360001916600019168152602001826000191660001916815260200192505050602060405180830381600087803b158015612ff557600080fd5b505af1158015613009573d6000803e3d6000fd5b505050506040513d602081101561301f57600080fd5b810190808051906020019092919050505090508091505090565b60405180807f44454c4554455f54415800000000000000000000000000000000000000000000815250600a019050604051809103902081565b8373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b6020831015156130bf578051825260208201915060208101905060208303925061309a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c0100000000000000000000000000000000000000000000000000000000900483836040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180838051906020019080838360005b8381101561316657808201518184015260208101905061314b565b50505050905090810190601f1680156131935780820380516001836020036101000a031916815260200191505b50828152602001925050506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a150505050565b600060405180807f4e45575f424f4e4400000000000000000000000000000000000000000000000081525060080190506040518091039020613256338260006040519080825280602002602001820160405280156132505781602001602082028038833980820191505090505b50612d17565b6040805190810160405280600f81526020017f4150505f415554485f4641494c45440000000000000000000000000000000000815250901515613334576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156132f95780820151818401526020810190506132de565b50505050905090810190601f1680156133265780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506001151561334284614aa2565b151514151561335057600080fd5b82915060008273ffffffffffffffffffffffffffffffffffffffff1663d087d2886040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156133b957600080fd5b505af11580156133cd573d6000803e3d6000fd5b505050506040513d60208110156133e357600080fd5b810190808051906020019092919050505014151561340057600080fd5b600b8290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550507fd6aad22b4323b201c0383e80b5dfc12d03d4b8846d6cf465d20f2e6e65099a9783604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505050565b60405180807f5345545f434f494e0000000000000000000000000000000000000000000000008152506008019050604051809103902081565b8273ffffffffffffffffffffffffffffffffffffffff16826040518082805190602001908083835b602083101515613554578051825260208201915060208101905060208303925061352f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c01000000000000000000000000000000000000000000000000000000009004826040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808281526020019150506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a1505050565b8373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b60208310151561366b5780518252602082019150602081019050602083039250613646565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c0100000000000000000000000000000000000000000000000000000000900483836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a150505050565b8273ffffffffffffffffffffffffffffffffffffffff16826040518082805190602001908083835b6020831015156137b75780518252602082019150602081019050602083039250613792565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c01000000000000000000000000000000000000000000000000000000009004826040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808281526020019150506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a1505050565b6000806000600c8481548110151561389557fe5b906000526020600020906003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600c858154811015156138d657fe5b906000526020600020906003020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600c8681548110151561391757fe5b906000526020600020906003020160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169250925092509193909250565b6000806000613963614c75565b60405180807f53544152545f5245504f52540000000000000000000000000000000000000000815250600c01905060405180910390206139d4338260006040519080825280602002602001820160405280156139ce5781602001602082028038833980820191505090505b50612d17565b6040805190810160405280600f81526020017f4150505f415554485f4641494c45440000000000000000000000000000000000815250901515613ab2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613a77578082015181840152602081019050613a5c565b50505050905090810190601f168015613aa45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060006008541480613aca5750600154600854420310155b1515613ad557600080fd5b8794508693508592503073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1663b70811bc6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015613b5957600080fd5b505af1158015613b6d573d6000803e3d6000fd5b505050506040513d6020811015613b8357600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16141515613bb657600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1663b70811bc6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015613c3157600080fd5b505af1158015613c45573d6000803e3d6000fd5b505050506040513d6020811015613c5b57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16141515613c8e57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1663b70811bc6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015613d0957600080fd5b505af1158015613d1d573d6000803e3d6000fd5b505050506040513d6020811015613d3357600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16141515613d6657600080fd5b6060604051908101604052808973ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff16815250915060006008541480613ded5750600254613dea600754426149a590919063ffffffff16565b10155b15613dfa57426007819055505b4260088190555081600d6000600854815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050600c829080600181540180825580915050906001820390600052602060002090600302016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050507fe16f13857e20d75277bc68142c3dc894086fadd3a6ae529caff79fcb9a1e2b6f888888604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15050505050505050565b60006140fc7f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b60010260001916614c37565b905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61412c6127f1565b14905090565b60405180807f5345545f434f494e000000000000000000000000000000000000000000000000815250600801905060405180910390206141a33382600060405190808252806020026020018201604052801561419d5781602001602082028038833980820191505090505b50612d17565b6040805190810160405280600f81526020017f4150505f415554485f4641494c45440000000000000000000000000000000000815250901515614281576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561424657808201518184015260208101905061422b565b50505050905090810190601f1680156142735780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156142df57600080fd5b600115156142ec83614aa2565b15151415156142fa57600080fd5b81600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f2c6fbcbde8226e61bf063b650e50aae5b24ecc56402acbe3a90aac368efeaa3282604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15050565b565b60405180807f4144445f54415800000000000000000000000000000000000000000000000000815250600701905060405180910390206144153382600060405190808252806020026020018201604052801561440f5781602001602082028038833980820191505090505b50612d17565b6040805190810160405280600f81526020017f4150505f415554485f4641494c454400000000000000000000000000000000008152509015156144f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156144b857808201518184015260208101905061449d565b50505050905090810190601f1680156144e55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600583908060018154018082558091505090600182039060005260206000200160009091929091909150555060068290806001815401808255809150509060018203906000526020600020016000909192909190915055507ff443eff8ac478b898d3ca63c443d3de38535f621083d0ab819b789c666b951158383604051808381526020018281526020019250505060405180910390a1505050565b8473ffffffffffffffffffffffffffffffffffffffff16846040518082805190602001908083835b6020831015156145dd57805182526020820191506020810190506020830392506145b8565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c010000000000000000000000000000000000000000000000000000000090048484846040518463ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180848051906020019080838360005b8381101561468557808201518184015260208101905061466a565b50505050905090810190601f1680156146b25780820380516001836020036101000a031916815260200191505b5083815260200182815260200193505050506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a15050505050565b8473ffffffffffffffffffffffffffffffffffffffff16846040518082805190602001908083835b6020831015156147575780518252602082019150602081019050602083039250614732565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c010000000000000000000000000000000000000000000000000000000090048484846040518463ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180848051906020019080838360005b838110156147ff5780820151818401526020810190506147e4565b50505050905090810190601f16801561482c5780820380516001836020036101000a031916815260200191505b508373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200193505050506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a15050505050565b6000808284019050838110156040805190810160405280601181526020017f4d4154485f4144445f4f564552464c4f5700000000000000000000000000000081525090151561499a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561495f578082015181840152602081019050614944565b50505050905090810190601f16801561498c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508091505092915050565b600080838311156040805190810160405280601281526020017f4d4154485f5355425f554e444552464c4f570000000000000000000000000000815250901515614a8a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015614a4f578082015181840152602081019050614a34565b50505050905090810190601f168015614a7c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082840390508091505092915050565b600043905090565b600080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415614ae35760009150614aee565b823b90506000811191505b50919050565b6000614afe6127f1565b146040805190810160405280601881526020017f494e49545f414c52454144595f494e495449414c495a45440000000000000000815250901515614bdd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015614ba2578082015181840152602081019050614b87565b50505050905090810190601f168015614bcf5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50614c1f614be9614a9a565b7febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e60010260001916614c4290919063ffffffff16565b565b600081549050919050565b600081549050919050565b600081549050919050565b8082555050565b815481835581811115614c7057818360005260206000209182019101614c6f9190614cd9565b5b505050565b606060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b614cfb91905b80821115614cf7576000816000905550600101614cdf565b5090565b905600a165627a7a72305820d41fe1c9c8e1047274e746128b50c9ca0b0ed1e68776200a9d0d089914823f3b0029",
  "deployedBytecode": "0x608060405260043610610225576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063011eb8b01461022a57806304d0a5f0146102755780630803fac0146102a257806316967df6146102d15780632757623e1461030457806327ff6b98146103375780632914b9bd1461038e57806332f0a3b514610437578063362b43781461048e57806339558413146104fb5780633f86249a146105d457806340043068146106f3578063485cc9551461074a578063486ead7c146107ad5780634a18e54814610856578063548ce2bc14610889578063660e16c3146108b457806371061398146108df578063716030b21461094e5780637e7db6e114610a1d57806380afdea814610a78578063885c6cf714610aab5780638b3dd74914610b175780639412cc7a14610b425780639ac747e714610b6d5780639d4941d814610bd95780639d59bcbd14610c1c578063a1658fad14610c47578063a479e50814610cf3578063a60f5ca114610d4a578063aa8612b414610d7d578063abcd895814610e56578063af681ad814610e99578063bd16a21014610ecc578063c8adcc8614610f5f578063caa711cb14611012578063cd09bd95146110a5578063cf23940a14611178578063d4aae0c4146111fb578063de4796ed14611252578063ec3edeee14611281578063ed88c68e146112c4578063f586e1b3146112ce578063f6c12a8b14611305578063f8de137e146113e8575b600080fd5b34801561023657600080fd5b5061025f60048036038101908080359060200190929190803590602001909291905050506114e1565b6040518082815260200191505060405180910390f35b34801561028157600080fd5b506102a06004803603810190808035906020019092919050505061164d565b005b3480156102ae57600080fd5b506102b7611949565b604051808215151515815260200191505060405180910390f35b3480156102dd57600080fd5b506102e6611974565b60405180826000191660001916815260200191505060405180910390f35b34801561031057600080fd5b506103196119ad565b60405180826000191660001916815260200191505060405180910390f35b34801561034357600080fd5b5061034c6119e6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561039a57600080fd5b506103f5600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611a10565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561044357600080fd5b5061044c611b2f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561049a57600080fd5b506104b960048036038101908080359060200190929190505050611bdc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561050757600080fd5b506105d2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050611c1f565b005b3480156105e057600080fd5b506106f1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050611d90565b005b3480156106ff57600080fd5b50610708611f5b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561075657600080fd5b506107ab600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611f85565b005b3480156107b957600080fd5b50610854600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506121a8565b005b34801561086257600080fd5b5061086b6122eb565b60405180826000191660001916815260200191505060405180910390f35b34801561089557600080fd5b5061089e612324565b6040518082815260200191505060405180910390f35b3480156108c057600080fd5b506108c96124bf565b6040518082815260200191505060405180910390f35b3480156108eb57600080fd5b506108f46124c8565b60405180866000191660001916815260200185600019166000191681526020018460001916600019168152602001836000191660001916815260200182600019166000191681526020019550505050505060405180910390f35b34801561095a57600080fd5b50610a1b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506125ef565b005b348015610a2957600080fd5b50610a5e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612757565b604051808215151515815260200191505060405180910390f35b348015610a8457600080fd5b50610a8d612762565b60405180826000191660001916815260200191505060405180910390f35b348015610ab757600080fd5b50610ac0612799565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610b03578082015181840152602081019050610ae8565b505050509050019250505060405180910390f35b348015610b2357600080fd5b50610b2c6127f1565b6040518082815260200191505060405180910390f35b348015610b4e57600080fd5b50610b57612828565b6040518082815260200191505060405180910390f35b348015610b7957600080fd5b50610b82612835565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610bc5578082015181840152602081019050610baa565b505050509050019250505060405180910390f35b348015610be557600080fd5b50610c1a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061288d565b005b348015610c2857600080fd5b50610c31612cbf565b6040518082815260200191505060405180910390f35b348015610c5357600080fd5b50610cd9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560001916906020019092919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290505050612d17565b604051808215151515815260200191505060405180910390f35b348015610cff57600080fd5b50610d08612f1e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610d5657600080fd5b50610d5f613039565b60405180826000191660001916815260200191505060405180910390f35b348015610d8957600080fd5b50610e54600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050613072565b005b348015610e6257600080fd5b50610e97600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506131e3565b005b348015610ea557600080fd5b50610eae6134ce565b60405180826000191660001916815260200191505060405180910390f35b348015610ed857600080fd5b50610f5d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050613507565b005b348015610f6b57600080fd5b50611010600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061361e565b005b34801561101e57600080fd5b506110a3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192908035906020019092919050505061376a565b005b3480156110b157600080fd5b506110d060048036038101908080359060200190929190505050613881565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34801561118457600080fd5b506111f9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050613956565b005b34801561120757600080fd5b506112106140ca565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561125e57600080fd5b50611267614101565b604051808215151515815260200191505060405180910390f35b34801561128d57600080fd5b506112c2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050614132565b005b6112cc6143a2565b005b3480156112da57600080fd5b5061130360048036038101908080359060200190929190803590602001909291905050506143a4565b005b34801561131157600080fd5b506113e6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192908035906020019092919080359060200190929190505050614590565b005b3480156113f457600080fd5b506114df600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061470a565b005b600080600080600b80549050861015156114fa57600080fd5b600b8054905061151386886148b090919063ffffffff16565b10151561151f57600080fd5b60009250600091508590505b600b8181548110151561153a57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166334ce998a6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156115c857600080fd5b505af11580156115dc573d6000803e3d6000fd5b505050506040513d60208110156115f257600080fd5b8101908080519060200190929190505050915061161882846148b090919063ffffffff16565b9250808060010191505061163585876148b090919063ffffffff16565b8110156116415761152b565b82935050505092915050565b600060405180807f44454c4554455f54415800000000000000000000000000000000000000000000815250600a01905060405180910390206116c0338260006040519080825280602002602001820160405280156116ba5781602001602082028038833980820191505090505b50612d17565b6040805190810160405280600f81526020017f4150505f415554485f4641494c4544000000000000000000000000000000000081525090151561179e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611763578082015181840152602081019050611748565b50505050905090810190601f1680156117905780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600580549050831015156117b257600080fd5b8291505b6117cf60016005805490506149a590919063ffffffff16565b8210156118775760056117ec6001846148b090919063ffffffff16565b8154811015156117f857fe5b906000526020600020015460058381548110151561181257fe5b906000526020600020018190555060066118366001846148b090919063ffffffff16565b81548110151561184257fe5b906000526020600020015460068381548110151561185c57fe5b906000526020600020018190555081806001019250506117b6565b600561189260016005805490506149a590919063ffffffff16565b81548110151561189e57fe5b906000526020600020016000905560066118c760016006805490506149a590919063ffffffff16565b8154811015156118d357fe5b906000526020600020016000905560058054809190600190036118f69190614c49565b50600680548091906001900361190c9190614c49565b507f0b72ed9bc3245ee50f52040c7a5fad686b4ae577ced7bfd9e7533dbd430b4690836040518082815260200191505060405180910390a1505050565b6000806119546127f1565b90506000811415801561196e57508061196b614a9a565b10155b91505090565b60405180807f53544152545f5245504f52540000000000000000000000000000000000000000815250600c019050604051809103902081565b60405180807f4144445f544158000000000000000000000000000000000000000000000000008152506007019050604051809103902081565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000611a1a612f1e565b73ffffffffffffffffffffffffffffffffffffffff166304bf2a7f836040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611aa1578082015181840152602081019050611a86565b50505050905090810190601f168015611ace5780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b158015611aed57600080fd5b505af1158015611b01573d6000803e3d6000fd5b505050506040513d6020811015611b1757600080fd5b81019080805190602001909291905050509050919050565b6000611b396140ca565b73ffffffffffffffffffffffffffffffffffffffff166332f0a3b56040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015611b9c57600080fd5b505af1158015611bb0573d6000803e3d6000fd5b505050506040513d6020811015611bc657600080fd5b8101908080519060200190929190505050905090565b6000600b82815481101515611bed57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b602083101515611c6c5780518252602082019150602081019050602083039250611c47565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c0100000000000000000000000000000000000000000000000000000000900483836040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180838051906020019080838360005b83811015611d13578082015181840152602081019050611cf8565b50505050905090810190601f168015611d405780820380516001836020036101000a031916815260200191505b50828152602001925050506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a150505050565b8473ffffffffffffffffffffffffffffffffffffffff16846040518082805190602001908083835b602083101515611ddd5780518252602082019150602081019050602083039250611db8565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c010000000000000000000000000000000000000000000000000000000090048484846040518463ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180848051906020019080838360005b83811015611e85578082015181840152602081019050611e6a565b50505050905090810190601f168015611eb25780820380516001836020036101000a031916815260200191505b50838051906020019080838360005b83811015611edc578082015181840152602081019050611ec1565b50505050905090810190601f168015611f095780820380516001836020036101000a031916815260200191505b5082815260200193505050506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a15050505050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000611f8f6127f1565b146040805190810160405280601881526020017f494e49545f414c52454144595f494e495449414c495a4544000000000000000081525090151561206e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612033578082015181840152602081019050612018565b50505050905090810190601f1680156120605780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806120b65750600115156120b283614aa2565b1515145b15156120c157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561215b5780600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b81600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506121a4614af4565b5050565b8273ffffffffffffffffffffffffffffffffffffffff16826040518082805190602001908083835b6020831015156121f557805182526020820191506020810190506020830392506121d0565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c01000000000000000000000000000000000000000000000000000000009004826040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019150506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a1505050565b60405180807f4e45575f424f4e440000000000000000000000000000000000000000000000008152506008019050604051809103902081565b600080600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f0141d846040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156123ad57600080fd5b505af11580156123c1573d6000803e3d6000fd5b505050506040513d60208110156123d757600080fd5b8101908080519060200190929190505050905080600a0a600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561247457600080fd5b505af1158015612488573d6000803e3d6000fd5b505050506040513d602081101561249e57600080fd5b81019080805190602001909291905050508115156124b857fe5b0491505090565b60008054905090565b600080600080600060405180807f5345545f434f494e0000000000000000000000000000000000000000000000008152506008019050604051809103902060405180807f4144445f544158000000000000000000000000000000000000000000000000008152506007019050604051809103902060405180807f44454c4554455f54415800000000000000000000000000000000000000000000815250600a019050604051809103902060405180807f4e45575f424f4e440000000000000000000000000000000000000000000000008152506008019050604051809103902060405180807f53544152545f5245504f52540000000000000000000000000000000000000000815250600c0190506040518091039020945094509450945094509091929394565b8273ffffffffffffffffffffffffffffffffffffffff16826040518082805190602001908083835b60208310151561263c5780518252602082019150602081019050602083039250612617565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c01000000000000000000000000000000000000000000000000000000009004826040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828051906020019080838360005b838110156126e25780820151818401526020810190506126c7565b50505050905090810190601f16801561270f5780820380516001836020036101000a031916815260200191505b509150506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a1505050565b600060019050919050565b60006127947fd625496217aa6a3453eecb9c3489dc5a53e6c67b444329ea2b2cbc9ff547639b60010260001916614c21565b905090565b606060058054806020026020016040519081016040528092919081815260200182805480156127e757602002820191906000526020600020905b8154815260200190600101908083116127d3575b5050505050905090565b60006128237febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e60010260001916614c2c565b905090565b6000600c80549050905090565b6060600680548060200260200160405190810160405280929190818152602001828054801561288357602002820191906000526020600020905b81548152602001906001019080831161286f575b5050505050905090565b60008061289983612757565b6040805190810160405280601281526020017f5245434f5645525f444953414c4c4f5745440000000000000000000000000000815250901515612977576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561293c578082015181840152602081019050612921565b50505050905090810190601f1680156129695780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50612980611b2f565b915061298b82614aa2565b6040805190810160405280601a81526020017f5245434f5645525f5641554c545f4e4f545f434f4e5452414354000000000000815250901515612a69576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612a2e578082015181840152602081019050612a13565b50505050905090810190601f168015612a5b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612b02578173ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050158015612afc573d6000803e3d6000fd5b50612cba565b8273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015612b9d57600080fd5b505af1158015612bb1573d6000803e3d6000fd5b505050506040513d6020811015612bc757600080fd5b810190808051906020019092919050505090508273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015612c7d57600080fd5b505af1158015612c91573d6000803e3d6000fd5b505050506040513d6020811015612ca757600080fd5b8101908080519060200190929190505050505b505050565b600060016005805490501115612ce257600280811115612cdb57fe5b9050612d14565b60016005805490501415612d045760016002811115612cfd57fe5b9050612d14565b60006002811115612d1157fe5b90505b90565b60008060606000612d26611949565b1515612d355760009350612f14565b612d3d6140ca565b9250600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612d7d5760009350612f14565b602085510290508491508082528273ffffffffffffffffffffffffffffffffffffffff1663fdef9106883089866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612e87578082015181840152602081019050612e6c565b50505050905090810190601f168015612eb45780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015612ed657600080fd5b505af1158015612eea573d6000803e3d6000fd5b505050506040513d6020811015612f0057600080fd5b810190808051906020019092919050505093505b5050509392505050565b600080612f296140ca565b73ffffffffffffffffffffffffffffffffffffffff1663be00bbd87fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb6001027fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd616001026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808360001916600019168152602001826000191660001916815260200192505050602060405180830381600087803b158015612ff557600080fd5b505af1158015613009573d6000803e3d6000fd5b505050506040513d602081101561301f57600080fd5b810190808051906020019092919050505090508091505090565b60405180807f44454c4554455f54415800000000000000000000000000000000000000000000815250600a019050604051809103902081565b8373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b6020831015156130bf578051825260208201915060208101905060208303925061309a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c0100000000000000000000000000000000000000000000000000000000900483836040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180838051906020019080838360005b8381101561316657808201518184015260208101905061314b565b50505050905090810190601f1680156131935780820380516001836020036101000a031916815260200191505b50828152602001925050506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a150505050565b600060405180807f4e45575f424f4e4400000000000000000000000000000000000000000000000081525060080190506040518091039020613256338260006040519080825280602002602001820160405280156132505781602001602082028038833980820191505090505b50612d17565b6040805190810160405280600f81526020017f4150505f415554485f4641494c45440000000000000000000000000000000000815250901515613334576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156132f95780820151818401526020810190506132de565b50505050905090810190601f1680156133265780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506001151561334284614aa2565b151514151561335057600080fd5b82915060008273ffffffffffffffffffffffffffffffffffffffff1663d087d2886040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156133b957600080fd5b505af11580156133cd573d6000803e3d6000fd5b505050506040513d60208110156133e357600080fd5b810190808051906020019092919050505014151561340057600080fd5b600b8290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550507fd6aad22b4323b201c0383e80b5dfc12d03d4b8846d6cf465d20f2e6e65099a9783604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505050565b60405180807f5345545f434f494e0000000000000000000000000000000000000000000000008152506008019050604051809103902081565b8273ffffffffffffffffffffffffffffffffffffffff16826040518082805190602001908083835b602083101515613554578051825260208201915060208101905060208303925061352f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c01000000000000000000000000000000000000000000000000000000009004826040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808281526020019150506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a1505050565b8373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b60208310151561366b5780518252602082019150602081019050602083039250613646565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c0100000000000000000000000000000000000000000000000000000000900483836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a150505050565b8273ffffffffffffffffffffffffffffffffffffffff16826040518082805190602001908083835b6020831015156137b75780518252602082019150602081019050602083039250613792565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c01000000000000000000000000000000000000000000000000000000009004826040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808281526020019150506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a1505050565b6000806000600c8481548110151561389557fe5b906000526020600020906003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600c858154811015156138d657fe5b906000526020600020906003020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600c8681548110151561391757fe5b906000526020600020906003020160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169250925092509193909250565b6000806000613963614c75565b60405180807f53544152545f5245504f52540000000000000000000000000000000000000000815250600c01905060405180910390206139d4338260006040519080825280602002602001820160405280156139ce5781602001602082028038833980820191505090505b50612d17565b6040805190810160405280600f81526020017f4150505f415554485f4641494c45440000000000000000000000000000000000815250901515613ab2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613a77578082015181840152602081019050613a5c565b50505050905090810190601f168015613aa45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060006008541480613aca5750600154600854420310155b1515613ad557600080fd5b8794508693508592503073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1663b70811bc6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015613b5957600080fd5b505af1158015613b6d573d6000803e3d6000fd5b505050506040513d6020811015613b8357600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16141515613bb657600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1663b70811bc6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015613c3157600080fd5b505af1158015613c45573d6000803e3d6000fd5b505050506040513d6020811015613c5b57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16141515613c8e57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1663b70811bc6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015613d0957600080fd5b505af1158015613d1d573d6000803e3d6000fd5b505050506040513d6020811015613d3357600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16141515613d6657600080fd5b6060604051908101604052808973ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff16815250915060006008541480613ded5750600254613dea600754426149a590919063ffffffff16565b10155b15613dfa57426007819055505b4260088190555081600d6000600854815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050600c829080600181540180825580915050906001820390600052602060002090600302016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050507fe16f13857e20d75277bc68142c3dc894086fadd3a6ae529caff79fcb9a1e2b6f888888604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15050505050505050565b60006140fc7f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b60010260001916614c37565b905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61412c6127f1565b14905090565b60405180807f5345545f434f494e000000000000000000000000000000000000000000000000815250600801905060405180910390206141a33382600060405190808252806020026020018201604052801561419d5781602001602082028038833980820191505090505b50612d17565b6040805190810160405280600f81526020017f4150505f415554485f4641494c45440000000000000000000000000000000000815250901515614281576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561424657808201518184015260208101905061422b565b50505050905090810190601f1680156142735780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156142df57600080fd5b600115156142ec83614aa2565b15151415156142fa57600080fd5b81600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f2c6fbcbde8226e61bf063b650e50aae5b24ecc56402acbe3a90aac368efeaa3282604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15050565b565b60405180807f4144445f54415800000000000000000000000000000000000000000000000000815250600701905060405180910390206144153382600060405190808252806020026020018201604052801561440f5781602001602082028038833980820191505090505b50612d17565b6040805190810160405280600f81526020017f4150505f415554485f4641494c454400000000000000000000000000000000008152509015156144f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156144b857808201518184015260208101905061449d565b50505050905090810190601f1680156144e55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600583908060018154018082558091505090600182039060005260206000200160009091929091909150555060068290806001815401808255809150509060018203906000526020600020016000909192909190915055507ff443eff8ac478b898d3ca63c443d3de38535f621083d0ab819b789c666b951158383604051808381526020018281526020019250505060405180910390a1505050565b8473ffffffffffffffffffffffffffffffffffffffff16846040518082805190602001908083835b6020831015156145dd57805182526020820191506020810190506020830392506145b8565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c010000000000000000000000000000000000000000000000000000000090048484846040518463ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180848051906020019080838360005b8381101561468557808201518184015260208101905061466a565b50505050905090810190601f1680156146b25780820380516001836020036101000a031916815260200191505b5083815260200182815260200193505050506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a15050505050565b8473ffffffffffffffffffffffffffffffffffffffff16846040518082805190602001908083835b6020831015156147575780518252602082019150602081019050602083039250614732565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c010000000000000000000000000000000000000000000000000000000090048484846040518463ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180848051906020019080838360005b838110156147ff5780820151818401526020810190506147e4565b50505050905090810190601f16801561482c5780820380516001836020036101000a031916815260200191505b508373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200193505050506000604051808303816000875af192505050507f1bf73fecff59f53a28e0365d986d6f97d7beab37770653e65daf6ff838ec0ec460405160405180910390a15050505050565b6000808284019050838110156040805190810160405280601181526020017f4d4154485f4144445f4f564552464c4f5700000000000000000000000000000081525090151561499a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561495f578082015181840152602081019050614944565b50505050905090810190601f16801561498c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508091505092915050565b600080838311156040805190810160405280601281526020017f4d4154485f5355425f554e444552464c4f570000000000000000000000000000815250901515614a8a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015614a4f578082015181840152602081019050614a34565b50505050905090810190601f168015614a7c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082840390508091505092915050565b600043905090565b600080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415614ae35760009150614aee565b823b90506000811191505b50919050565b6000614afe6127f1565b146040805190810160405280601881526020017f494e49545f414c52454144595f494e495449414c495a45440000000000000000815250901515614bdd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015614ba2578082015181840152602081019050614b87565b50505050905090810190601f168015614bcf5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50614c1f614be9614a9a565b7febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e60010260001916614c4290919063ffffffff16565b565b600081549050919050565b600081549050919050565b600081549050919050565b8082555050565b815481835581811115614c7057818360005260206000209182019101614c6f9190614cd9565b5b505050565b606060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b614cfb91905b80821115614cf7576000816000905550600101614cdf565b5090565b905600a165627a7a72305820d41fe1c9c8e1047274e746128b50c9ca0b0ed1e68776200a9d0d089914823f3b0029",
  "sourceMap": "849:8403:0:-;;;87:2:59;66:23;;1332:10:0;1314:28;;1361:10;1346:25;;1376:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;344:9:27;:7;;;:9;;;:::i;:::-;849:8403:0;;590:84:35;651:1:33;623:24;:22;;;:24;;;:::i;:::-;:29;654:25;;;;;;;;;;;;;;;;;;615:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;615:65:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;637:30:35;277:2;637:13;;;:30;;;:::i;:::-;590:84::o;889:137:33:-;944:7;970:49;353:66;970:29;;:47;;;;;;;;:49;;;:::i;:::-;963:56;;889:137;:::o;1759:141::-;651:1;623:24;:22;;;:24;;;:::i;:::-;:29;654:25;;;;;;;;;;;;;;;;;;615:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;615:65:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1832:61;1880:12;353:66;1832:29;;:47;;;;;;;;;:61;;;;;:::i;:::-;1759:141;:::o;519:134:38:-;587:12;636:8;630:15;622:23;;620:27;;;:::o;1028:119::-;1134:4;1124:8;1117:22;1115:26;;:::o;849:8403:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "849:8403:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5606:8;;;6128:463;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6128:463:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3565:484;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3565:484:0;;;;;;;;;;;;;;;;;;;;;;;;;;1136:208:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1136:208:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1230:64:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1230:64:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1048:54;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1048:54:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5737:78;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5737:78:0;;;;;;;;;;;;;;;;;;;;;;;;;;;733:179:41;;8:9:-1;5:2;;;30:1;27;20:12;5:2;733:179:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2466:229:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2466:229:26;;;;;;;;;;;;;;;;;;;;;;;;;;;6790:116:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6790:116:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;420:167:66;;8:9:-1;5:2;;;30:1;27;20:12;5:2;420:167:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1292:222;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1292:222:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7875:92:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7875:92:0;;;;;;;;;;;;;;;;;;;;;;;;;;;2296:305;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2296:305:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;980:154:66;;8:9:-1;5:2;;;30:1;27;20:12;5:2;980:154:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1170:56:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1170:56:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8096:159;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8096:159:0;;;;;;;;;;;;;;;;;;;;;;;6993:86;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6993:86:0;;;;;;;;;;;;;;;;;;;;;;;8762:161;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8762:161:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1138:150:66;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1138:150:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1333:99:39;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1333:99:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;796:106:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;796:106:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8363:85:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8363:85:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;8363:85:0;;;;;;;;;;;;;;;;;889:137:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;889:137:33;;;;;;;;;;;;;;;;;;;;;;;7183:97:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7183:97:0;;;;;;;;;;;;;;;;;;;;;;;8569:99;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8569:99:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;8569:99:0;;;;;;;;;;;;;;;;;687:446:39;;8:9:-1;5:2;;;30:1;27;20:12;5:2;687:446:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;9026:223:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;9026:223:0;;;;;;;;;;;;;;;;;;;;;;;1524:826:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1524:826:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;918:231:41;;8:9:-1;5:2;;;30:1;27;20:12;5:2;918:231:41;;;;;;;;;;;;;;;;;;;;;;;;;;;1106:60:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1106:60:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1518:181:66;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1518:181:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4163:233:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4163:233:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;988:56;;8:9:-1;5:2;;;30:1;27;20:12;5:2;988:56:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;130:140:66;;8:9:-1;5:2;;;30:1;27;20:12;5:2;130:140:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;799:177;;8:9:-1;5:2;;;30:1;27;20:12;5:2;799:177:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;274:142;;8:9:-1;5:2;;;30:1;27;20:12;5:2;274:142:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7542:223:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7542:223:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4646:847;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4646:847:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;674:116:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;674:116:25;;;;;;;;;;;;;;;;;;;;;;;;;;;287:117:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;287:117:35;;;;;;;;;;;;;;;;;;;;;;;;;;;2707:210:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2707:210:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;5546:35;;;;;;3187:197;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3187:197:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1703:220:66;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1703:220:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;591:204;;8:9:-1;5:2;;;30:1;27;20:12;5:2;591:204:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6128:463:0;6214:7;6334:12;6356:19;6386:9;6254:5;:12;;;;6238:13;:28;6230:37;;;;;;;;6314:5;:12;;;;6281:30;6299:11;6281:13;:17;;:30;;;;:::i;:::-;:45;6273:54;;;;;;;;6349:1;6334:16;;6378:1;6356:23;;6398:13;6386:25;;6418:150;6444:5;6450:1;6444:8;;;;;;;;;;;;;;;;;;;;;;;;;;;:21;;;:23;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6444:23:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;6444:23:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6444:23:0;;;;;;;;;;;;;;;;6430:37;;6483:21;6492:11;6483:4;:8;;:21;;;;:::i;:::-;6476:28;;6513:3;;;;;;;6536:30;6554:11;6536:13;:17;;:30;;;;:::i;:::-;6532:1;:34;6418:150;;;;;;6581:4;6574:11;;6128:463;;;;;;;:::o;3565:484::-;3681:6;1143:23;;;;;;;;;;;;;;;;;;;873:47:26;884:10;896:5;917:1;903:16;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;903:16:26;;;;873:10;:47::i;:::-;922:17;;;;;;;;;;;;;;;;;;865:75;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;865:75:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3652:9:0;:16;;;;3641:8;:27;3633:36;;;;;;;;3690:8;3681:17;;3676:169;3704:23;3725:1;3704:9;:16;;;;:20;;:23;;;;:::i;:::-;3700:1;:27;3676:169;;;3760:9;3770:8;3776:1;3770;:5;;:8;;;;:::i;:::-;3760:19;;;;;;;;;;;;;;;;;;3745:9;3755:1;3745:12;;;;;;;;;;;;;;;;;:34;;;;3811:16;3828:8;3834:1;3828;:5;;:8;;;;:::i;:::-;3811:26;;;;;;;;;;;;;;;;;;3789:16;3806:1;3789:19;;;;;;;;;;;;;;;;;:48;;;;3729:3;;;;;;;3676:169;;;3858:9;3868:23;3889:1;3868:9;:16;;;;:20;;:23;;;;:::i;:::-;3858:34;;;;;;;;;;;;;;;;;3851:42;;;3906:16;3923:30;3951:1;3923:16;:23;;;;:27;;:30;;;;:::i;:::-;3906:48;;;;;;;;;;;;;;;;;3899:56;;;3962:9;:18;;;;;;;;;;;;:::i;:::-;;3986:16;:25;;;;;;;;;;;;:::i;:::-;;4023:20;4034:8;4023:20;;;;;;;;;;;;;;;;;;3565:484;;;:::o;1136:208:33:-;1183:4;1199:27;1229:24;:22;:24::i;:::-;1199:54;;1293:1;1270:19;:24;;:67;;;;;1318:19;1298:16;:14;:16::i;:::-;:39;;1270:67;1263:74;;1136:208;;:::o;1230:64:0:-;1269:25;;;;;;;;;;;;;;;;;;;1230:64;:::o;1048:54::-;1082:20;;;;;;;;;;;;;;;;;;;1048:54;:::o;5737:78::-;5783:7;5806:3;;;;;;;;;;;5799:10;;5737:78;:::o;733:179:41:-;799:18;855:22;:20;:22::i;:::-;:40;;;896:7;855:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;855:49:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;855:49:41;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;855:49:41;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;855:49:41;;;;;;;;;;;;;;;;829:76;;733:179;;;:::o;2466:229:26:-;2515:7;2621:8;:6;:8::i;:::-;:25;;;:27;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2621:27:26;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2621:27:26;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2621:27:26;;;;;;;;;;;;;;;;2614:34;;2466:229;:::o;6790:116:0:-;6853:7;6884:5;6890:8;6884:15;;;;;;;;;;;;;;;;;;;;;;;;;;;6869:31;;6790:116;;;:::o;420:167:66:-;509:5;:10;;537:6;527:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;527:17:66;;;;;;;;;;;;;;;;509:47;;;547:4;553:2;509:47;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;509:47:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;567:14;;;;;;;;;;420:167;;;;:::o;1292:222::-;1415:5;:10;;1443:6;1433:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1433:17:66;;;;;;;;;;;;;;;;1415:68;;;1453:8;1463:11;1476:6;1415:68;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1415:68:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1415:68:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1494:14;;;;;;;;;;1292:222;;;;;:::o;7875:92:0:-;7922:7;7953;;;;;;;;;;;7938:23;;7875:92;:::o;2296:305::-;651:1:33;623:24;:22;:24::i;:::-;:29;654:25;;;;;;;;;;;;;;;;;;615:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;615:65:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2439:1:0;2413:28;;:14;:28;;;:66;;;;2475:4;2445:34;;:26;2456:14;2445:10;:26::i;:::-;:34;;;2413:66;2405:75;;;;;;;;2512:1;2493:21;;:7;;;;;;;;;;;:21;;;;2489:55;;;2535:8;2516:7;;:28;;;;;;;;;;;;;;;;;;2489:55;2559:14;2553:3;;:20;;;;;;;;;;;;;;;;;;2582:13;:11;:13::i;:::-;2296:305;;:::o;980:154:66:-;1056:5;:10;;1084:6;1074:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1074:17:66;;;;;;;;;;;;;;;;1056:47;;;1094:8;1056:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1114:14;;;;;;;;;;980:154;;;:::o;1170:56:0:-;1205:21;;;;;;;;;;;;;;;;;;;1170:56;:::o;8096:159::-;8143:7;8159:16;8178:7;;;;;;;;;;;:19;;;:21;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8178:21:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;8178:21:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8178:21:0;;;;;;;;;;;;;;;;8159:40;;8241:8;8237:2;:12;8213:7;;;;;;;;;;;:19;;;:21;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8213:21:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;8213:21:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8213:21:0;;;;;;;;;;;;;;;;:36;;;;;;;;8206:43;;8096:159;;:::o;6993:86::-;7040:6;7062:11;;7055:18;;6993:86;:::o;8762:161::-;8803:7;8812;8821;8830;8839;1023:21;;;;;;;;;;;;;;;;;;;1082:20;;;;;;;;;;;;;;;;;;;1143:23;;;;;;;;;;;;;;;;;;;1205:21;;;;;;;;;;;;;;;;;;;1269:25;;;;;;;;;;;;;;;;;;;8855:62;;;;;;;;;;8762:161;;;;;:::o;1138:150:66:-;1211:5;:10;;1239:6;1229:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1229:17:66;;;;;;;;;;;;;;;;1211:46;;;1249:7;1211:46;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1211:46:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1268:14;;;;;;;;;;1138:150;;;:::o;1333:99:39:-;1398:4;1421;1414:11;;1333:99;;;:::o;796:106:25:-;834:7;860:35;601:66;860:15;;:33;;;;:35::i;:::-;853:42;;796:106;:::o;8363:85:0:-;8408:9;8433;8426:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8363:85;:::o;889:137:33:-;944:7;970:49;353:66;970:29;;:47;;;;:49::i;:::-;963:56;;889:137;:::o;7183:97:0:-;7232:7;7255:12;:19;;;;7248:26;;7183:97;:::o;8569:99::-;8621:9;8646:16;8639:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8569:99;:::o;687:446:39:-;811:13;1019:14;755:27;775:6;755:19;:27::i;:::-;784:16;;;;;;;;;;;;;;;;;;747:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;747:54:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;827:18;:16;:18::i;:::-;811:34;;863:17;874:5;863:10;:17::i;:::-;882:24;;;;;;;;;;;;;;;;;;855:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;855:52:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;269:1:31;922:13:39;;:6;:13;;;918:209;;;951:5;:14;;:37;974:4;966:21;;;951:37;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;951:37:39;918:209;;;1042:6;1036:23;;;1060:4;1036:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1036:29:39;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1036:29:39;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1036:29:39;;;;;;;;;;;;;;;;1019:46;;1085:6;1079:22;;;1102:5;1109:6;1079:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1079:37:39;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1079:37:39;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1079:37:39;;;;;;;;;;;;;;;;;918:209;687:446;;;:::o;9026:223:0:-;9069:4;9105:1;9086:9;:16;;;;:20;9082:126;;;9120:20;9115:26;;;;;;;;9108:33;;;;9082:126;9177:1;9157:9;:16;;;;:21;9153:55;;;9192:15;9187:21;;;;;;;;9180:28;;;;9153:55;9227:15;9222:21;;;;;;;;9215:28;;9026:223;;:::o;1524:826:26:-;1616:4;1702:20;2106:16;2132:18;1637:16;:14;:16::i;:::-;1636:17;1632:60;;;1676:5;1669:12;;;;1632:60;1725:8;:6;:8::i;:::-;1702:31;;1780:1;1747:35;;1755:12;1747:35;;;1743:78;;;1805:5;1798:12;;;;1743:78;2170:2;2153:7;:14;:19;2132:40;;2212:7;2205:14;;2244:10;2239:3;2232:23;2281:12;:26;;;2308:7;2325:4;2332:5;2339:3;2281:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2281:62:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2281:62:26;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2281:62:26;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2281:62:26;;;;;;;;;;;;;;;;2274:69;;1524:826;;;;;;;;;:::o;918:231:41:-;971:18;1001:20;1024:8;:6;:8::i;:::-;:15;;;1368:66:52;1040:25:41;;330:66:43;1067:25:41;;1024:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1024:69:41;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1024:69:41;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1024:69:41;;;;;;;;;;;;;;;;1001:92;;1129:12;1103:39;;918:231;;:::o;1106:60:0:-;1143:23;;;;;;;;;;;;;;;;;;;1106:60;:::o;1518:181:66:-;1613:5;:10;;1641:6;1631:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1631:17:66;;;;;;;;;;;;;;;;1613:55;;;1651:7;1660;1613:55;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1613:55:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1679:14;;;;;;;;;;1518:181;;;;:::o;4163:233:0:-;4265:16;1205:21;;;;;;;;;;;;;;;;;;;873:47:26;884:10;896:5;917:1;903:16;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;903:16:26;;;;873:10;:47::i;:::-;922:17;;;;;;;;;;;;;;;;;;865:75;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;865:75:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4253:4:0;4232:25;;:17;4243:5;4232:10;:17::i;:::-;:25;;;4224:34;;;;;;;;4293:5;4265:34;;4336:1;4314:7;:16;;;:18;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4314:18:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4314:18:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4314:18:0;;;;;;;;;;;;;;;;:23;4306:32;;;;;;;;4345:5;4356:7;4345:19;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;4345:19:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4376:14;4384:5;4376:14;;;;;;;;;;;;;;;;;;;;;;4163:233;;;:::o;988:56::-;1023:21;;;;;;;;;;;;;;;;;;;988:56;:::o;130:140:66:-;198:5;:10;;226:6;216:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;216:17:66;;;;;;;;;;;;;;;;198:41;;;236:2;198:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;250:14;;;;;;;;;;130:140;;;:::o;799:177::-;894:5;:10;;922:6;912:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;912:17:66;;;;;;;;;;;;;;;;894:51;;;932:8;942:2;894:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;956:14;;;;;;;;;;799:177;;;;:::o;274:142::-;344:5;:10;;372:6;362:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;362:17:66;;;;;;;;;;;;;;;;344:41;;;382:2;344:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;396:14;;;;;;;;;;274:142;;;:::o;7542:223:0:-;7610:7;7619;7628;7652:12;7665:8;7652:22;;;;;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;7683:12;7696:8;7683:22;;;;;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;7727:12;7740:8;7727:22;;;;;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;7644:115;;;;;;7542:223;;;;;:::o;4646:847::-;4840:20;4894:21;4947:23;5147;;:::i;:::-;1269:25;;;;;;;;;;;;;;;;;;;873:47:26;884:10;896:5;917:1;903:16;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;903:16:26;;;;873:10;:47::i;:::-;922:17;;;;;;;;;;;;;;;;;;865:75;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;865:75:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4790:1:0;4766:20;;:25;:66;;;;4825:7;;4801:20;;4795:3;:26;:37;;4766:66;4758:75;;;;;;;;4880:7;4840:48;;4932:8;4894:47;;4992:9;4947:55;;5041:4;5017:29;;:3;:10;;;:12;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5017:12:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;5017:12:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5017:12:0;;;;;;;;;;;;;;;;:29;;;5009:38;;;;;;;;5089:4;5061:33;;:7;:14;;;:16;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5061:16:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;5061:16:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5061:16:0;;;;;;;;;;;;;;;;:33;;;5053:42;;;;;;;;5134:4;5109:30;;:4;:11;;;:13;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5109:13:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;5109:13:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5109:13:0;;;;;;;;;;;;;;;;:30;;;5101:39;;;;;;;;5173:36;;;;;;;;;5180:7;5173:36;;;;;;5189:8;5173:36;;;;;;5199:9;5173:36;;;;;5147:62;;5244:1;5220:20;;:25;:64;;;;5280:4;;5249:27;5257:18;;5249:3;:7;;:27;;;;:::i;:::-;:35;;5220:64;5216:100;;;5313:3;5292:18;:24;;;;5216:100;5346:3;5323:20;:26;;;;5388:9;5356:7;:29;5364:20;;5356:29;;;;;;;;;;;:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5404:12;5422:9;5404:28;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;5404:28:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5444:43;5458:7;5467:8;5477:9;5444:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4646:847;;;;;;;;:::o;674:116:25:-;713:7;747:35;485:66;747:15;;:33;;;;:35::i;:::-;732:51;;674:116;:::o;287:117:35:-;331:4;277:2;354:24;:22;:24::i;:::-;:43;347:50;;287:117;:::o;2707:210:0:-;1023:21;;;;;;;;;;;;;;;;;;;873:47:26;884:10;896:5;917:1;903:16;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;903:16:26;;;;873:10;:47::i;:::-;922:17;;;;;;;;;;;;;;;;;;865:75;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;865:75:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2807:1:0;2779:30;;2787:7;;;;;;;;;;;2779:30;;;2771:39;;;;;;;;2845:4;2824:25;;:17;2835:5;2824:10;:17::i;:::-;:25;;;2816:34;;;;;;;;2876:5;2857:7;;:25;;;;;;;;;;;;;;;;;;2894:17;2905:5;2894:17;;;;;;;;;;;;;;;;;;;;;;2707:210;;:::o;5546:35::-;:::o;3187:197::-;1082:20;;;;;;;;;;;;;;;;;;;873:47:26;884:10;896:5;917:1;903:16;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;903:16:26;;;;873:10;:47::i;:::-;922:17;;;;;;;;;;;;;;;;;;865:75;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;865:75:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3270:9:0;3285:10;3270:26;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;3270:26:0;;;;;;;;;;;;;;;;;;;;;;3303:16;3325:9;3303:32;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;3303:32:0;;;;;;;;;;;;;;;;;;;;;;3347:31;3356:10;3368:9;3347:31;;;;;;;;;;;;;;;;;;;;;;;;3187:197;;;:::o;1703:220:66:-;1826:5;:10;;1854:6;1844:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1844:17:66;;;;;;;;;;;;;;;;1826:66;;;1864:7;1873:8;1883;1826:66;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1826:66:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1903:14;;;;;;;;;;1703:220;;;;;:::o;591:204::-;706:5;:10;;734:6;724:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;724:17:66;;;;;;;;;;;;;;;;706:58;;;744:4;750:9;761:2;706:58;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;706:58:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;775:14;;;;;;;;;;591:204;;;;;:::o;1928:170:55:-;1988:7;2007:9;2024:2;2019;:7;2007:19;;2049:2;2044:1;:7;;2053:18;;;;;;;;;;;;;;;;;;2036:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2036:36:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2090:1;2083:8;;1928:170;;;;;:::o;1685:172::-;1745:7;1812:9;1778:2;1772;:8;;1782:19;;;;;;;;;;;;;;;;;;1764:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1764:38:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1829:2;1824;:7;1812:19;;1849:1;1842:8;;1685:172;;;;;:::o;347:94:36:-;396:7;422:12;415:19;;347:94;:::o;426:244:34:-;486:4;576:12;525:1;506:21;;:7;:21;;;502:64;;;550:5;543:12;;;;502:64;629:7;617:20;609:28;;662:1;655:4;:8;648:15;;426:244;;;;;:::o;1455:123:33:-;651:1;623:24;:22;:24::i;:::-;:29;654:25;;;;;;;;;;;;;;;;;;615:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;615:65:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1506;1554:16;:14;:16::i;:::-;353:66;1506:29;;:47;;;;;:65;;;;:::i;:::-;1455:123::o;379:134:38:-;447:12;496:8;490:15;482:23;;480:27;;;:::o;519:134::-;587:12;636:8;630:15;622:23;;620:27;;;:::o;239:134::-;307:12;356:8;350:15;342:23;;340:27;;;:::o;1028:119::-;1134:4;1124:8;1117:22;1115:26;;:::o;849:8403:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport \"contracts/utils/Forwarder.sol\";\n\nimport \"contracts/interfaces/IDAOCoin.sol\";\nimport \"contracts/interfaces/IDAOBond.sol\";\n\nimport \"contracts/interfaces/ITransparentDao.sol\";\n\nimport \"contracts/interfaces/IIncomeStatement.sol\";\nimport \"contracts/interfaces/IBalanceSheet.sol\";\nimport \"contracts/interfaces/ICashflowStatement.sol\";\n\nimport \"@aragon/os/contracts/apps/AragonApp.sol\";\nimport \"@aragon/os/contracts/lib/math/SafeMath.sol\";\nimport \"@aragon/os/contracts/common/IsContract.sol\";\n\nimport \"@aragon/os/contracts/acl/ACL.sol\";\nimport \"@aragon/os/contracts/apps/AppProxyUpgradeable.sol\";\nimport \"@aragon/os/contracts/factory/EVMScriptRegistryFactory.sol\";\nimport \"@aragon/os/contracts/factory/DAOFactory.sol\";\nimport \"@aragon/os/contracts/kernel/Kernel.sol\";\nimport \"@aragon/os/contracts/kernel/KernelProxy.sol\";\n\ncontract TransparentDao is IsContract, ITransparentDao, Forwarder, AragonApp {\n\n  using SafeMath for uint256;\n\n  //Aragon related roles\n\n  bytes32 constant public SET_COIN = keccak256(\"SET_COIN\");\n  bytes32 constant public ADD_TAX = keccak256(\"ADD_TAX\");\n  bytes32 constant public DELETE_TAX = keccak256(\"DELETE_TAX\");\n  bytes32 constant public NEW_BOND = keccak256(\"NEW_BOND\");\n  bytes32 constant public START_REPORT = keccak256(\"START_REPORT\");\n\n  //Constants\n\n  uint256 quarter = 2136 hours;\n  uint256 year = 8544 hours;\n\n  string fiatRepresentation = \"US DOLLAR\";\n\n  //Structs\n\n  struct Report {\n\n    address income;\n\n    address balance;\n\n    address cashflow;\n\n  }\n\n  //Tax types\n\n  enum TAX_TYPE {NO_TAX, SIMPLE, PROGRESSIVE}\n\n  TAX_TYPE taxT;\n\n  //We can choose to have a simple or progressive tax\n\n  uint256[] latestTax;\n  uint256[] incomeThresholds;\n\n  //Financial year indices\n\n  uint256 startOfCurrentYear;\n  uint256 latestReportIssuance;\n\n  //Current coin used to do accounting\n\n  address UOA;\n\n  //Coin which might be issued by the DAO\n\n  IDAOCoin daoCoin;\n\n  IDAOBond[] bonds;\n  Report[] reportsArray;\n\n  mapping(uint256 => Report) reports;\n\n  /**\n  * @notice Initialize the contract as described in the Aragon docs\n  * @param _unitOfAccount The UOA crypto-coin that is used to do accounting (the revenues/expenses are denoted in this coin when shown on the front-end)\n  * @param _daoCoin The address of the ERC-20 contract\n  */\n\n  function initialize(address _unitOfAccount,\n                      address _daoCoin) public onlyInit {\n\n      require(_unitOfAccount == address(0) || isContract(_unitOfAccount) == true);\n\n      if (daoCoin != address(0)) daoCoin = IDAOCoin(_daoCoin);\n\n      UOA = _unitOfAccount;\n\n      initialized();\n\n  }\n\n  /**\n  * @notice Set the official Dao coin\n  * @param _coin The address of the ERC-20 contract\n  */\n\n  function setDaoCoin(address _coin) auth(SET_COIN) public {\n\n    require(address(daoCoin) == address(0));\n    require(isContract(_coin) == true);\n\n    daoCoin = IDAOCoin(_coin);\n\n    emit SetDaoCoin(_coin);\n\n  }\n\n  /**\n  * @notice The government (or a representative) can add a tax threshold for the Dao\n  * @param percentage Percentage of tax charged from gross revenues\n  * @param threshold Threshold of revenues that the Dao needs to cross in order to pay a certain tax\n  */\n\n  function addTax(uint256 percentage, uint256 threshold) auth(ADD_TAX) public {\n\n    latestTax.push(percentage);\n\n    incomeThresholds.push(threshold);\n\n    emit AddedTax(percentage, threshold);\n\n  }\n\n  /**\n  * @notice The government (or a representative) can delete a tax threshold for the Dao\n  * @param position The position of the tax threshold in the latestTax array\n  */\n\n  function deleteTax(uint256 position) auth(DELETE_TAX) public {\n\n    require(position < latestTax.length);\n\n    for (uint i = position; i < latestTax.length.sub(1); i++) {\n\n        latestTax[i] = latestTax[i.add(1)];\n        incomeThresholds[i] = incomeThresholds[i.add(1)];\n\n    }\n\n    delete(latestTax[latestTax.length.sub(1)]);\n    delete(incomeThresholds[incomeThresholds.length.sub(1)]);\n\n    latestTax.length--;\n    incomeThresholds.length--;\n\n    emit DeletedTax(position);\n\n  }\n\n  /**\n  * @notice Issue a new bond for this Dao\n  * @param _bond The address of the smart bond contract\n  */\n\n  function newBond(address _bond) auth(NEW_BOND) public {\n\n    require(isContract(_bond) == true);\n\n    IDAOBond newBond = IDAOBond(_bond);\n\n    require(newBond.getNonce() == 0);\n\n    bonds.push(newBond);\n\n    emit NewBond(_bond);\n\n  }\n\n  /**\n  * @notice Start a new quaterly report\n  * @param _income The address of the income statement contract\n  * @param _balance The address of the balance sheet contract\n  * @param _cashflow The address of the cashflow statement contract\n  */\n\n  function startReport(address _income, address _balance, address _cashflow)\n    auth(START_REPORT) public {\n\n    require(latestReportIssuance == 0 || now - latestReportIssuance >= quarter);\n\n    IIncomeStatement inc = IIncomeStatement(_income);\n    IBalanceSheet balance = IBalanceSheet(_balance);\n    ICashflowStatement cash = ICashflowStatement(_cashflow);\n\n    require(inc.getDao() == address(this));\n    require(balance.getDao() == address(this));\n    require(cash.getDao() == address(this));\n\n    Report memory newReport = Report(_income, _balance, _cashflow);\n\n    if (latestReportIssuance == 0 || now.sub(startOfCurrentYear) >= year)\n      startOfCurrentYear = now;\n\n    latestReportIssuance = now;\n\n    reports[latestReportIssuance] = newReport;\n\n    reportsArray.push(newReport);\n\n    emit StartedReport(_income, _balance, _cashflow);\n\n  }\n\n  /**\n  * @notice Donate money to this Dao\n  */\n\n  function donate() public payable {}\n\n  function() payable { revert(); }\n\n  //GETTERS\n\n  /**\n  * @dev Get the unit of account coin address\n  * @return The address of the coin contract\n  */\n\n  function getUOAAddress() public view returns (address) {\n\n    return UOA;\n\n  }\n\n  /**\n  * @dev Get the total debt of the bonds issued by this Dao between 2 indices\n  * @param startPosition The position in the bonds array from which to loop\n  * @param bondsNumber How many bonds to take into consideration starting from startPosition\n  * @return The total debt from bondsNumber bonds\n  */\n\n  function getBondDebt(uint256 startPosition, uint256 bondsNumber) public view returns (uint256) {\n\n    require(startPosition < bonds.length);\n    require(startPosition.add(bondsNumber) < bonds.length);\n\n    uint256 debt = 0;\n    uint256 currentDebt = 0;\n\n    uint256 i = startPosition;\n\n    do {\n\n      currentDebt = bonds[i].getTotalDebt();\n\n      debt = debt.add(currentDebt);\n\n      i++;\n\n    } while (i < startPosition.add(bondsNumber));\n\n    return debt;\n\n  }\n\n  /**\n  * @dev Get the address of a bond contract from the bonds array\n  * @param position The position of the bond contract in the array\n  * @return The address of the smart bond contract\n  */\n\n  function getBondAddress(uint256 position) public view returns (address) {\n\n    return address(bonds[position]);\n\n  }\n\n  /**\n  * @dev Get the market price of this Dao\n  * @return The market price\n  */\n\n  function getMarketPrice() public view returns (int256) {\n\n    return marketPrice;\n\n  }\n\n  /**\n  * @dev Get the length of the reportsArray\n  * @return The length of the reports array\n  */\n\n  function getReportsLength() public view returns (uint256) {\n\n    return reportsArray.length;\n\n  }\n\n  /**\n  * @dev Get the financial reports addresses from a specific reportsArray position\n  * @param position The position of the reportsArray array\n  * @return The 3 addresses corresponding to the income statement, balance sheet and cashflow statement\n  */\n\n  function getReportAtPosition(uint256 position) public view returns (address, address, address) {\n\n    return (reportsArray[position].income, reportsArray[position].balance,\n            reportsArray[position].cashflow);\n\n  }\n\n  /**\n  * @dev Get the address of the official Dao coin\n  * @return The address of the coin address\n  */\n\n  function getCoinAddress() public view returns (address) {\n\n    return address(daoCoin);\n\n  }\n\n  /**\n  * @dev Get the number of coins issued in the official Dao coin contract\n  * @return The amounf of coins issued\n  */\n\n  function getCoinsAmount() public view returns (uint256) {\n\n    uint256 decimals = daoCoin.getDecimals();\n\n    return daoCoin.totalSupply() / 10**decimals;\n\n  }\n\n  /**\n  * @dev Get the latestTax array\n  * @return The array having the taxes applied to this Dao\n  */\n\n  function getLatestTax() public view returns (uint256[]) {\n\n    return latestTax;\n\n  }\n\n  /**\n  * @dev Get the income threshold for which taxes will be applied\n  * @return The incomeThresholds array\n  */\n\n  function getIncomeThresholds() public view returns (uint256[]) {\n\n    return incomeThresholds;\n\n  }\n\n  /**\n  * @dev Get the Aragon roles from this contract\n  * @return All Aragon roles\n  */\n\n  function getRoles() public view returns (bytes32, bytes32, bytes32, bytes32, bytes32) {\n\n    return (SET_COIN, ADD_TAX, DELETE_TAX, NEW_BOND, START_REPORT);\n\n  }\n\n  /**\n  * @dev Get the type of tax applied to this Dao\n  * @return The tax type for this Dao\n  */\n\n  function getTaxType() public view returns (uint) {\n\n    if (latestTax.length > 1) return uint(TAX_TYPE.PROGRESSIVE);\n\n    else if (latestTax.length == 1) return uint(TAX_TYPE.SIMPLE);\n\n    return uint(TAX_TYPE.NO_TAX);\n\n  }\n\n}\n",
  "sourcePath": "/home/stefan/Work/TransparentDao/contracts/accounting/dao/TransparentDao.sol",
  "ast": {
    "absolutePath": "/home/stefan/Work/TransparentDao/contracts/accounting/dao/TransparentDao.sol",
    "exportedSymbols": {
      "TransparentDao": [
        698
      ]
    },
    "id": 699,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "contracts/utils/Forwarder.sol",
        "file": "contracts/utils/Forwarder.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 9428,
        "src": "25:39:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IDAOCoin.sol",
        "file": "contracts/interfaces/IDAOCoin.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 8578,
        "src": "66:43:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IDAOBond.sol",
        "file": "contracts/interfaces/IDAOBond.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 8557,
        "src": "110:43:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/ITransparentDao.sol",
        "file": "contracts/interfaces/ITransparentDao.sol",
        "id": 5,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 9151,
        "src": "155:50:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IIncomeStatement.sol",
        "file": "contracts/interfaces/IIncomeStatement.sol",
        "id": 6,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 8993,
        "src": "207:51:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IBalanceSheet.sol",
        "file": "contracts/interfaces/IBalanceSheet.sol",
        "id": 7,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 7991,
        "src": "259:48:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/ICashflowStatement.sol",
        "file": "contracts/interfaces/ICashflowStatement.sol",
        "id": 8,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 8378,
        "src": "308:53:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/apps/AragonApp.sol",
        "file": "@aragon/os/contracts/apps/AragonApp.sol",
        "id": 9,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 5347,
        "src": "363:49:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/lib/math/SafeMath.sol",
        "file": "@aragon/os/contracts/lib/math/SafeMath.sol",
        "id": 10,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 7835,
        "src": "413:52:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/common/IsContract.sol",
        "file": "@aragon/os/contracts/common/IsContract.sol",
        "id": 11,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 5639,
        "src": "466:52:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/acl/ACL.sol",
        "file": "@aragon/os/contracts/acl/ACL.sol",
        "id": 12,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 4431,
        "src": "520:42:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/apps/AppProxyUpgradeable.sol",
        "file": "@aragon/os/contracts/apps/AppProxyUpgradeable.sol",
        "id": 13,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 5157,
        "src": "563:59:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/factory/EVMScriptRegistryFactory.sol",
        "file": "@aragon/os/contracts/factory/EVMScriptRegistryFactory.sol",
        "id": 14,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 7047,
        "src": "623:67:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/factory/DAOFactory.sol",
        "file": "@aragon/os/contracts/factory/DAOFactory.sol",
        "id": 15,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 6940,
        "src": "691:53:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/kernel/Kernel.sol",
        "file": "@aragon/os/contracts/kernel/Kernel.sol",
        "id": 16,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 7597,
        "src": "745:48:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/kernel/KernelProxy.sol",
        "file": "@aragon/os/contracts/kernel/KernelProxy.sol",
        "id": 17,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 7679,
        "src": "794:53:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 18,
              "name": "IsContract",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5638,
              "src": "876:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IsContract_$5638",
                "typeString": "contract IsContract"
              }
            },
            "id": 19,
            "nodeType": "InheritanceSpecifier",
            "src": "876:10:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 20,
              "name": "ITransparentDao",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9150,
              "src": "888:15:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ITransparentDao_$9150",
                "typeString": "contract ITransparentDao"
              }
            },
            "id": 21,
            "nodeType": "InheritanceSpecifier",
            "src": "888:15:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 22,
              "name": "Forwarder",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9427,
              "src": "905:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Forwarder_$9427",
                "typeString": "contract Forwarder"
              }
            },
            "id": 23,
            "nodeType": "InheritanceSpecifier",
            "src": "905:9:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 24,
              "name": "AragonApp",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5346,
              "src": "916:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AragonApp_$5346",
                "typeString": "contract AragonApp"
              }
            },
            "id": 25,
            "nodeType": "InheritanceSpecifier",
            "src": "916:9:0"
          }
        ],
        "contractDependencies": [
          4849,
          5218,
          5346,
          5359,
          5492,
          5512,
          5610,
          5638,
          5671,
          5718,
          5915,
          6325,
          6352,
          7618,
          8002,
          8690,
          9150,
          9427
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 698,
        "linearizedBaseContracts": [
          698,
          5346,
          4849,
          6325,
          7618,
          6352,
          5915,
          9427,
          8690,
          9150,
          5638,
          5492,
          5512,
          5359,
          5671,
          5610,
          5718,
          5218,
          8002
        ],
        "name": "TransparentDao",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 28,
            "libraryName": {
              "contractScope": null,
              "id": 26,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7834,
              "src": "937:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$7834",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "931:27:0",
            "typeName": {
              "id": 27,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "950:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": true,
            "id": 33,
            "name": "SET_COIN",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "988:56:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 29,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "988:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "5345545f434f494e",
                  "id": 31,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1033:10:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_5a1a50fb94165ce5dd18fccb67b879ecd6d16fff79715d4f509e4f833a17d4c6",
                    "typeString": "literal_string \"SET_COIN\""
                  },
                  "value": "SET_COIN"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_5a1a50fb94165ce5dd18fccb67b879ecd6d16fff79715d4f509e4f833a17d4c6",
                    "typeString": "literal_string \"SET_COIN\""
                  }
                ],
                "id": 30,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 10046,
                "src": "1023:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                  "typeString": "function () pure returns (bytes32)"
                }
              },
              "id": 32,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1023:21:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 38,
            "name": "ADD_TAX",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1048:54:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 34,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1048:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "4144445f544158",
                  "id": 36,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1092:9:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_35040e44eafa9c12e3623d9e2e8d4c4e06ab58d428986025cf6ee428819bf496",
                    "typeString": "literal_string \"ADD_TAX\""
                  },
                  "value": "ADD_TAX"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_35040e44eafa9c12e3623d9e2e8d4c4e06ab58d428986025cf6ee428819bf496",
                    "typeString": "literal_string \"ADD_TAX\""
                  }
                ],
                "id": 35,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 10046,
                "src": "1082:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                  "typeString": "function () pure returns (bytes32)"
                }
              },
              "id": 37,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1082:20:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 43,
            "name": "DELETE_TAX",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1106:60:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 39,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1106:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "44454c4554455f544158",
                  "id": 41,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1153:12:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_95f7607988a3a1937d2c5b88b1029cd1d053aeec2812965d1a90d6d06850e00b",
                    "typeString": "literal_string \"DELETE_TAX\""
                  },
                  "value": "DELETE_TAX"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_95f7607988a3a1937d2c5b88b1029cd1d053aeec2812965d1a90d6d06850e00b",
                    "typeString": "literal_string \"DELETE_TAX\""
                  }
                ],
                "id": 40,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 10046,
                "src": "1143:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                  "typeString": "function () pure returns (bytes32)"
                }
              },
              "id": 42,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1143:23:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 48,
            "name": "NEW_BOND",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1170:56:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 44,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1170:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "4e45575f424f4e44",
                  "id": 46,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1215:10:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_387342245717bca068dcbe24da575e5f97c77ec8d2e52297fd9999b0ec8c8cc4",
                    "typeString": "literal_string \"NEW_BOND\""
                  },
                  "value": "NEW_BOND"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_387342245717bca068dcbe24da575e5f97c77ec8d2e52297fd9999b0ec8c8cc4",
                    "typeString": "literal_string \"NEW_BOND\""
                  }
                ],
                "id": 45,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 10046,
                "src": "1205:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                  "typeString": "function () pure returns (bytes32)"
                }
              },
              "id": 47,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1205:21:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 53,
            "name": "START_REPORT",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1230:64:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 49,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1230:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "53544152545f5245504f5254",
                  "id": 51,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1279:14:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_8afdc3299a201604203c1620e057ec6dae69cc30f2e4acd2ea833e7d59fa4797",
                    "typeString": "literal_string \"START_REPORT\""
                  },
                  "value": "START_REPORT"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_8afdc3299a201604203c1620e057ec6dae69cc30f2e4acd2ea833e7d59fa4797",
                    "typeString": "literal_string \"START_REPORT\""
                  }
                ],
                "id": 50,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 10046,
                "src": "1269:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                  "typeString": "function () pure returns (bytes32)"
                }
              },
              "id": 52,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1269:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 56,
            "name": "quarter",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1314:28:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1314:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "32313336",
              "id": 55,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1332:10:0",
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
            "id": 59,
            "name": "year",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1346:25:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 57,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1346:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "38353434",
              "id": 58,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1361:10:0",
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
            "id": 62,
            "name": "fiatRepresentation",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1376:39:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 60,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1376:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "555320444f4c4c4152",
              "id": 61,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1404:11:0",
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
            "id": 69,
            "members": [
              {
                "constant": false,
                "id": 64,
                "name": "income",
                "nodeType": "VariableDeclaration",
                "scope": 69,
                "src": "1454:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 63,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1454:7:0",
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
                "id": 66,
                "name": "balance",
                "nodeType": "VariableDeclaration",
                "scope": 69,
                "src": "1475:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 65,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1475:7:0",
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
                "id": 68,
                "name": "cashflow",
                "nodeType": "VariableDeclaration",
                "scope": 69,
                "src": "1497:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 67,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1497:7:0",
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
            "scope": 698,
            "src": "1433:86:0",
            "visibility": "public"
          },
          {
            "canonicalName": "TransparentDao.TAX_TYPE",
            "id": 73,
            "members": [
              {
                "id": 70,
                "name": "NO_TAX",
                "nodeType": "EnumValue",
                "src": "1553:6:0"
              },
              {
                "id": 71,
                "name": "SIMPLE",
                "nodeType": "EnumValue",
                "src": "1561:6:0"
              },
              {
                "id": 72,
                "name": "PROGRESSIVE",
                "nodeType": "EnumValue",
                "src": "1569:11:0"
              }
            ],
            "name": "TAX_TYPE",
            "nodeType": "EnumDefinition",
            "src": "1538:43:0"
          },
          {
            "constant": false,
            "id": 75,
            "name": "taxT",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1585:13:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_enum$_TAX_TYPE_$73",
              "typeString": "enum TransparentDao.TAX_TYPE"
            },
            "typeName": {
              "contractScope": null,
              "id": 74,
              "name": "TAX_TYPE",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 73,
              "src": "1585:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_enum$_TAX_TYPE_$73",
                "typeString": "enum TransparentDao.TAX_TYPE"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 78,
            "name": "latestTax",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1658:19:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 76,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1658:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 77,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1658:9:0",
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
            "id": 81,
            "name": "incomeThresholds",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1681:26:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 79,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1681:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 80,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1681:9:0",
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
            "id": 83,
            "name": "startOfCurrentYear",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1740:26:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 82,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1740:7:0",
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
            "id": 85,
            "name": "latestReportIssuance",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1770:28:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 84,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1770:7:0",
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
            "id": 87,
            "name": "UOA",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1843:11:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 86,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1843:7:0",
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
            "id": 89,
            "name": "daoCoin",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1902:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IDAOCoin_$8577",
              "typeString": "contract IDAOCoin"
            },
            "typeName": {
              "contractScope": null,
              "id": 88,
              "name": "IDAOCoin",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8577,
              "src": "1902:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                "typeString": "contract IDAOCoin"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 92,
            "name": "bonds",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1923:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_contract$_IDAOBond_$8556_$dyn_storage",
              "typeString": "contract IDAOBond[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 90,
                "name": "IDAOBond",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 8556,
                "src": "1923:8:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IDAOBond_$8556",
                  "typeString": "contract IDAOBond"
                }
              },
              "id": 91,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1923:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_contract$_IDAOBond_$8556_$dyn_storage_ptr",
                "typeString": "contract IDAOBond[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 95,
            "name": "reportsArray",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1943:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Report_$69_storage_$dyn_storage",
              "typeString": "struct TransparentDao.Report[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 93,
                "name": "Report",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 69,
                "src": "1943:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Report_$69_storage_ptr",
                  "typeString": "struct TransparentDao.Report"
                }
              },
              "id": 94,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1943:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Report_$69_storage_$dyn_storage_ptr",
                "typeString": "struct TransparentDao.Report[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 99,
            "name": "reports",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1969:34:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Report_$69_storage_$",
              "typeString": "mapping(uint256 => struct TransparentDao.Report)"
            },
            "typeName": {
              "id": 98,
              "keyType": {
                "id": 96,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1977:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1969:26:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Report_$69_storage_$",
                "typeString": "mapping(uint256 => struct TransparentDao.Report)"
              },
              "valueType": {
                "contractScope": null,
                "id": 97,
                "name": "Report",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 69,
                "src": "1988:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Report_$69_storage_ptr",
                  "typeString": "struct TransparentDao.Report"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 141,
              "nodeType": "Block",
              "src": "2396:205:0",
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
                        "id": 119,
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
                          "id": 113,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 109,
                            "name": "_unitOfAccount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 101,
                            "src": "2413:14:0",
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
                                "id": 111,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2439:1:0",
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
                              "id": 110,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2431:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 112,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2431:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2413:28:0",
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
                          "id": 118,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 115,
                                "name": "_unitOfAccount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 101,
                                "src": "2456:14:0",
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
                              "id": 114,
                              "name": "isContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5637,
                              "src": "2445:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                "typeString": "function (address) view returns (bool)"
                              }
                            },
                            "id": 116,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2445:26:0",
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
                            "id": 117,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2475:4:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "2445:34:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "2413:66:0",
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
                      "id": 108,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "2405:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 120,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2405:75:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 121,
                  "nodeType": "ExpressionStatement",
                  "src": "2405:75:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 122,
                      "name": "daoCoin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 89,
                      "src": "2493:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                        "typeString": "contract IDAOCoin"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 124,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2512:1:0",
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
                        "id": 123,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2504:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 125,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2504:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2493:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 133,
                  "nodeType": "IfStatement",
                  "src": "2489:55:0",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 131,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 127,
                        "name": "daoCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89,
                        "src": "2516:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOCoin_$8577",
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
                            "id": 129,
                            "name": "_daoCoin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 103,
                            "src": "2535:8:0",
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
                          "id": 128,
                          "name": "IDAOCoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8577,
                          "src": "2526:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IDAOCoin_$8577_$",
                            "typeString": "type(contract IDAOCoin)"
                          }
                        },
                        "id": 130,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2526:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                          "typeString": "contract IDAOCoin"
                        }
                      },
                      "src": "2516:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                        "typeString": "contract IDAOCoin"
                      }
                    },
                    "id": 132,
                    "nodeType": "ExpressionStatement",
                    "src": "2516:28:0"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 134,
                      "name": "UOA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 87,
                      "src": "2553:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 135,
                      "name": "_unitOfAccount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 101,
                      "src": "2559:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2553:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "2553:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 138,
                      "name": "initialized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5595,
                      "src": "2582:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2582:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 140,
                  "nodeType": "ExpressionStatement",
                  "src": "2582:13:0"
                }
              ]
            },
            "documentation": "@notice Initialize the contract as described in the Aragon docs\n@param _unitOfAccount The UOA crypto-coin that is used to do accounting (the revenues/expenses are denoted in this coin when shown on the front-end)\n@param _daoCoin The address of the ERC-20 contract",
            "id": 142,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 106,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 105,
                  "name": "onlyInit",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5542,
                  "src": "2387:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2387:8:0"
              }
            ],
            "name": "initialize",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 101,
                  "name": "_unitOfAccount",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "2316:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 100,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2316:7:0",
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
                  "id": 103,
                  "name": "_daoCoin",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "2362:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2362:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2315:64:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2396:0:0"
            },
            "scope": 698,
            "src": "2296:305:0",
            "stateMutability": "nonpayable",
            "superFunction": 9038,
            "visibility": "public"
          },
          {
            "body": {
              "id": 178,
              "nodeType": "Block",
              "src": "2764:153:0",
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
                        "id": 157,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 152,
                              "name": "daoCoin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 89,
                              "src": "2787:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                                "typeString": "contract IDAOCoin"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                                "typeString": "contract IDAOCoin"
                              }
                            ],
                            "id": 151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2779:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2779:16:0",
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
                              "id": 155,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2807:1:0",
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
                            "id": 154,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2799:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 156,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2799:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2779:30:0",
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
                      "id": 150,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "2771:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 158,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2771:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 159,
                  "nodeType": "ExpressionStatement",
                  "src": "2771:39:0"
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
                        "id": 165,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 162,
                              "name": "_coin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 144,
                              "src": "2835:5:0",
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
                            "id": 161,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5637,
                            "src": "2824:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view returns (bool)"
                            }
                          },
                          "id": 163,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2824:17:0",
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
                          "id": 164,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2845:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "2824:25:0",
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
                      "id": 160,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "2816:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2816:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 167,
                  "nodeType": "ExpressionStatement",
                  "src": "2816:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 172,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 168,
                      "name": "daoCoin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 89,
                      "src": "2857:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$8577",
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
                          "id": 170,
                          "name": "_coin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 144,
                          "src": "2876:5:0",
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
                        "id": 169,
                        "name": "IDAOCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8577,
                        "src": "2867:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IDAOCoin_$8577_$",
                          "typeString": "type(contract IDAOCoin)"
                        }
                      },
                      "id": 171,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2867:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                        "typeString": "contract IDAOCoin"
                      }
                    },
                    "src": "2857:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                      "typeString": "contract IDAOCoin"
                    }
                  },
                  "id": 173,
                  "nodeType": "ExpressionStatement",
                  "src": "2857:25:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 175,
                        "name": "_coin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 144,
                        "src": "2905:5:0",
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
                      "id": 174,
                      "name": "SetDaoCoin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9013,
                      "src": "2894:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 176,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2894:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 177,
                  "nodeType": "EmitStatement",
                  "src": "2889:22:0"
                }
              ]
            },
            "documentation": "@notice Set the official Dao coin\n@param _coin The address of the ERC-20 contract",
            "id": 179,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 147,
                    "name": "SET_COIN",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 33,
                    "src": "2747:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 148,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 146,
                  "name": "auth",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5258,
                  "src": "2742:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2742:14:0"
              }
            ],
            "name": "setDaoCoin",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 144,
                  "name": "_coin",
                  "nodeType": "VariableDeclaration",
                  "scope": 179,
                  "src": "2727:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2727:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2726:15:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 149,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2764:0:0"
            },
            "scope": 698,
            "src": "2707:210:0",
            "stateMutability": "nonpayable",
            "superFunction": 9043,
            "visibility": "public"
          },
          {
            "body": {
              "id": 206,
              "nodeType": "Block",
              "src": "3263:121:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 192,
                        "name": "percentage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 181,
                        "src": "3285:10:0",
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
                        "id": 189,
                        "name": "latestTax",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78,
                        "src": "3270:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 191,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3270:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3270:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 194,
                  "nodeType": "ExpressionStatement",
                  "src": "3270:26:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 198,
                        "name": "threshold",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 183,
                        "src": "3325:9:0",
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
                        "id": 195,
                        "name": "incomeThresholds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 81,
                        "src": "3303:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 197,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3303:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3303:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 200,
                  "nodeType": "ExpressionStatement",
                  "src": "3303:32:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 202,
                        "name": "percentage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 181,
                        "src": "3356:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 203,
                        "name": "threshold",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 183,
                        "src": "3368:9:0",
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
                      "id": 201,
                      "name": "AddedTax",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9019,
                      "src": "3347:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3347:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 205,
                  "nodeType": "EmitStatement",
                  "src": "3342:36:0"
                }
              ]
            },
            "documentation": "@notice The government (or a representative) can add a tax threshold for the Dao\n@param percentage Percentage of tax charged from gross revenues\n@param threshold Threshold of revenues that the Dao needs to cross in order to pay a certain tax",
            "id": 207,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 186,
                    "name": "ADD_TAX",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 38,
                    "src": "3247:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 187,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 185,
                  "name": "auth",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5258,
                  "src": "3242:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3242:13:0"
              }
            ],
            "name": "addTax",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 181,
                  "name": "percentage",
                  "nodeType": "VariableDeclaration",
                  "scope": 207,
                  "src": "3203:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 180,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3203:7:0",
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
                  "id": 183,
                  "name": "threshold",
                  "nodeType": "VariableDeclaration",
                  "scope": 207,
                  "src": "3223:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 182,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3223:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3202:39:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 188,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3263:0:0"
            },
            "scope": 698,
            "src": "3187:197:0",
            "stateMutability": "nonpayable",
            "superFunction": 9050,
            "visibility": "public"
          },
          {
            "body": {
              "id": 294,
              "nodeType": "Block",
              "src": "3626:423:0",
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
                        "id": 219,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 216,
                          "name": "position",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 209,
                          "src": "3641:8:0",
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
                            "id": 217,
                            "name": "latestTax",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 78,
                            "src": "3652:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 218,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3652:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3641:27:0",
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
                      "id": 215,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "3633:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 220,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3633:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 221,
                  "nodeType": "ExpressionStatement",
                  "src": "3633:36:0"
                },
                {
                  "body": {
                    "id": 258,
                    "nodeType": "Block",
                    "src": "3734:111:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 245,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 236,
                              "name": "latestTax",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 78,
                              "src": "3745:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 238,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 237,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 223,
                              "src": "3755:1:0",
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
                            "src": "3745:12:0",
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
                              "id": 239,
                              "name": "latestTax",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 78,
                              "src": "3760:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 244,
                            "indexExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "31",
                                  "id": 242,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3776:1:0",
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
                                  "id": 240,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 223,
                                  "src": "3770:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 241,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "add",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7812,
                                "src": "3770:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 243,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3770:8:0",
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
                            "src": "3760:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3745:34:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 246,
                        "nodeType": "ExpressionStatement",
                        "src": "3745:34:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 256,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 247,
                              "name": "incomeThresholds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 81,
                              "src": "3789:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 249,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 248,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 223,
                              "src": "3806:1:0",
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
                            "src": "3789:19:0",
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
                              "id": 250,
                              "name": "incomeThresholds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 81,
                              "src": "3811:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 255,
                            "indexExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "31",
                                  "id": 253,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3834:1:0",
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
                                  "id": 251,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 223,
                                  "src": "3828:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 252,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "add",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7812,
                                "src": "3828:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 254,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3828:8:0",
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
                            "src": "3811:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3789:48:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 257,
                        "nodeType": "ExpressionStatement",
                        "src": "3789:48:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 226,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 223,
                      "src": "3700:1:0",
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
                          "id": 230,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3725:1:0",
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
                            "id": 227,
                            "name": "latestTax",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 78,
                            "src": "3704:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 228,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3704:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 229,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7787,
                        "src": "3704:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 231,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3704:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3700:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 259,
                  "initializationExpression": {
                    "assignments": [
                      223
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 223,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 295,
                        "src": "3681:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 222,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "3681:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 225,
                    "initialValue": {
                      "argumentTypes": null,
                      "id": 224,
                      "name": "position",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 209,
                      "src": "3690:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3681:17:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 234,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3729:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 233,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 223,
                        "src": "3729:1:0",
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
                    "id": 235,
                    "nodeType": "ExpressionStatement",
                    "src": "3729:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "3676:169:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 268,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3851:42:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 260,
                            "name": "latestTax",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 78,
                            "src": "3858:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 266,
                          "indexExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 264,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3889:1:0",
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
                                  "id": 261,
                                  "name": "latestTax",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 78,
                                  "src": "3868:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                    "typeString": "uint256[] storage ref"
                                  }
                                },
                                "id": 262,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3868:16:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 263,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7787,
                              "src": "3868:20:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 265,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3868:23:0",
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
                          "src": "3858:34:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 267,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "3857:36:0",
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
                  "id": 269,
                  "nodeType": "ExpressionStatement",
                  "src": "3851:42:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 278,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3899:56:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 270,
                            "name": "incomeThresholds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 81,
                            "src": "3906:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 276,
                          "indexExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 274,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3951:1:0",
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
                                  "id": 271,
                                  "name": "incomeThresholds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 81,
                                  "src": "3923:16:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                    "typeString": "uint256[] storage ref"
                                  }
                                },
                                "id": 272,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3923:23:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 273,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7787,
                              "src": "3923:27:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 275,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3923:30:0",
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
                          "src": "3906:48:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 277,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "3905:50:0",
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
                  "id": 279,
                  "nodeType": "ExpressionStatement",
                  "src": "3899:56:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 283,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "3962:18:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 280,
                        "name": "latestTax",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78,
                        "src": "3962:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 282,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3962:16:0",
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
                  "id": 284,
                  "nodeType": "ExpressionStatement",
                  "src": "3962:18:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "3986:25:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 285,
                        "name": "incomeThresholds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 81,
                        "src": "3986:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 287,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3986:23:0",
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
                  "id": 289,
                  "nodeType": "ExpressionStatement",
                  "src": "3986:25:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 291,
                        "name": "position",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 209,
                        "src": "4034:8:0",
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
                      "id": 290,
                      "name": "DeletedTax",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9023,
                      "src": "4023:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4023:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 293,
                  "nodeType": "EmitStatement",
                  "src": "4018:25:0"
                }
              ]
            },
            "documentation": "@notice The government (or a representative) can delete a tax threshold for the Dao\n@param position The position of the tax threshold in the latestTax array",
            "id": 295,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 212,
                    "name": "DELETE_TAX",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 43,
                    "src": "3607:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 213,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 211,
                  "name": "auth",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5258,
                  "src": "3602:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3602:16:0"
              }
            ],
            "name": "deleteTax",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 210,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 209,
                  "name": "position",
                  "nodeType": "VariableDeclaration",
                  "scope": 295,
                  "src": "3584:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 208,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3584:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3583:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 214,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3626:0:0"
            },
            "scope": 698,
            "src": "3565:484:0",
            "stateMutability": "nonpayable",
            "superFunction": 9055,
            "visibility": "public"
          },
          {
            "body": {
              "id": 335,
              "nodeType": "Block",
              "src": "4217:179:0",
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
                        "id": 308,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 305,
                              "name": "_bond",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 297,
                              "src": "4243:5:0",
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
                            "id": 304,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5637,
                            "src": "4232:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view returns (bool)"
                            }
                          },
                          "id": 306,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4232:17:0",
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
                          "id": 307,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4253:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "4232:25:0",
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
                      "id": 303,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "4224:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 309,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4224:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 310,
                  "nodeType": "ExpressionStatement",
                  "src": "4224:34:0"
                },
                {
                  "assignments": [
                    312
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 312,
                      "name": "newBond",
                      "nodeType": "VariableDeclaration",
                      "scope": 336,
                      "src": "4265:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOBond_$8556",
                        "typeString": "contract IDAOBond"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 311,
                        "name": "IDAOBond",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8556,
                        "src": "4265:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOBond_$8556",
                          "typeString": "contract IDAOBond"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 316,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 314,
                        "name": "_bond",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 297,
                        "src": "4293:5:0",
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
                      "id": 313,
                      "name": "IDAOBond",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8556,
                      "src": "4284:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IDAOBond_$8556_$",
                        "typeString": "type(contract IDAOBond)"
                      }
                    },
                    "id": 315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4284:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IDAOBond_$8556",
                      "typeString": "contract IDAOBond"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4265:34:0"
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
                        "id": 322,
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
                              "id": 318,
                              "name": "newBond",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 312,
                              "src": "4314:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IDAOBond_$8556",
                                "typeString": "contract IDAOBond"
                              }
                            },
                            "id": 319,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "getNonce",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8550,
                            "src": "4314:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                              "typeString": "function () view external returns (uint256)"
                            }
                          },
                          "id": 320,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4314:18:0",
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
                          "id": 321,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4336:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4314:23:0",
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
                      "id": 317,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "4306:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 323,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4306:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 324,
                  "nodeType": "ExpressionStatement",
                  "src": "4306:32:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 328,
                        "name": "newBond",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 312,
                        "src": "4356:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOBond_$8556",
                          "typeString": "contract IDAOBond"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IDAOBond_$8556",
                          "typeString": "contract IDAOBond"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 325,
                        "name": "bonds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "4345:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IDAOBond_$8556_$dyn_storage",
                          "typeString": "contract IDAOBond[] storage ref"
                        }
                      },
                      "id": 327,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4345:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_contract$_IDAOBond_$8556_$returns$_t_uint256_$",
                        "typeString": "function (contract IDAOBond) returns (uint256)"
                      }
                    },
                    "id": 329,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4345:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 330,
                  "nodeType": "ExpressionStatement",
                  "src": "4345:19:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 332,
                        "name": "_bond",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 297,
                        "src": "4384:5:0",
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
                      "id": 331,
                      "name": "NewBond",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9005,
                      "src": "4376:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 333,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4376:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 334,
                  "nodeType": "EmitStatement",
                  "src": "4371:19:0"
                }
              ]
            },
            "documentation": "@notice Issue a new bond for this Dao\n@param _bond The address of the smart bond contract",
            "id": 336,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 300,
                    "name": "NEW_BOND",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 48,
                    "src": "4200:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 301,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 299,
                  "name": "auth",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5258,
                  "src": "4195:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4195:14:0"
              }
            ],
            "name": "newBond",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 298,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 297,
                  "name": "_bond",
                  "nodeType": "VariableDeclaration",
                  "scope": 336,
                  "src": "4180:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 296,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4180:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4179:15:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 302,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4217:0:0"
            },
            "scope": 698,
            "src": "4163:233:0",
            "stateMutability": "nonpayable",
            "superFunction": 9060,
            "visibility": "public"
          },
          {
            "body": {
              "id": 453,
              "nodeType": "Block",
              "src": "4751:742:0",
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
                        "id": 357,
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
                          "id": 351,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 349,
                            "name": "latestReportIssuance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 85,
                            "src": "4766:20:0",
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
                            "id": 350,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4790:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "4766:25:0",
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
                          "id": 356,
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
                            "id": 354,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 352,
                              "name": "now",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10054,
                              "src": "4795:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 353,
                              "name": "latestReportIssuance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 85,
                              "src": "4801:20:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "4795:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 355,
                            "name": "quarter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "4825:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4795:37:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "4766:66:0",
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
                      "id": 348,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "4758:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 358,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4758:75:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 359,
                  "nodeType": "ExpressionStatement",
                  "src": "4758:75:0"
                },
                {
                  "assignments": [
                    361
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 361,
                      "name": "inc",
                      "nodeType": "VariableDeclaration",
                      "scope": 454,
                      "src": "4840:20:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IIncomeStatement_$8992",
                        "typeString": "contract IIncomeStatement"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 360,
                        "name": "IIncomeStatement",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8992,
                        "src": "4840:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IIncomeStatement_$8992",
                          "typeString": "contract IIncomeStatement"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 365,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 363,
                        "name": "_income",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 338,
                        "src": "4880:7:0",
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
                      "id": 362,
                      "name": "IIncomeStatement",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8992,
                      "src": "4863:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IIncomeStatement_$8992_$",
                        "typeString": "type(contract IIncomeStatement)"
                      }
                    },
                    "id": 364,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4863:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IIncomeStatement_$8992",
                      "typeString": "contract IIncomeStatement"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4840:48:0"
                },
                {
                  "assignments": [
                    367
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 367,
                      "name": "balance",
                      "nodeType": "VariableDeclaration",
                      "scope": 454,
                      "src": "4894:21:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IBalanceSheet_$7990",
                        "typeString": "contract IBalanceSheet"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 366,
                        "name": "IBalanceSheet",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 7990,
                        "src": "4894:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IBalanceSheet_$7990",
                          "typeString": "contract IBalanceSheet"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 371,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 369,
                        "name": "_balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 340,
                        "src": "4932:8:0",
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
                      "id": 368,
                      "name": "IBalanceSheet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7990,
                      "src": "4918:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IBalanceSheet_$7990_$",
                        "typeString": "type(contract IBalanceSheet)"
                      }
                    },
                    "id": 370,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4918:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IBalanceSheet_$7990",
                      "typeString": "contract IBalanceSheet"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4894:47:0"
                },
                {
                  "assignments": [
                    373
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 373,
                      "name": "cash",
                      "nodeType": "VariableDeclaration",
                      "scope": 454,
                      "src": "4947:23:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ICashflowStatement_$8377",
                        "typeString": "contract ICashflowStatement"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 372,
                        "name": "ICashflowStatement",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8377,
                        "src": "4947:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ICashflowStatement_$8377",
                          "typeString": "contract ICashflowStatement"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 377,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 375,
                        "name": "_cashflow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 342,
                        "src": "4992:9:0",
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
                      "id": 374,
                      "name": "ICashflowStatement",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8377,
                      "src": "4973:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_ICashflowStatement_$8377_$",
                        "typeString": "type(contract ICashflowStatement)"
                      }
                    },
                    "id": 376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4973:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ICashflowStatement_$8377",
                      "typeString": "contract ICashflowStatement"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4947:55:0"
                },
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
                        "id": 385,
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
                              "id": 379,
                              "name": "inc",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 361,
                              "src": "5017:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IIncomeStatement_$8992",
                                "typeString": "contract IIncomeStatement"
                              }
                            },
                            "id": 380,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "getDao",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8841,
                            "src": "5017:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                              "typeString": "function () view external returns (address)"
                            }
                          },
                          "id": 381,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5017:12:0",
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
                              "id": 383,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10181,
                              "src": "5041:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TransparentDao_$698",
                                "typeString": "contract TransparentDao"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_TransparentDao_$698",
                                "typeString": "contract TransparentDao"
                              }
                            ],
                            "id": 382,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5033:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 384,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5033:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "5017:29:0",
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
                      "id": 378,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "5009:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5009:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 387,
                  "nodeType": "ExpressionStatement",
                  "src": "5009:38:0"
                },
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
                        "id": 395,
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
                              "id": 389,
                              "name": "balance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 367,
                              "src": "5061:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IBalanceSheet_$7990",
                                "typeString": "contract IBalanceSheet"
                              }
                            },
                            "id": 390,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "getDao",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7968,
                            "src": "5061:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                              "typeString": "function () view external returns (address)"
                            }
                          },
                          "id": 391,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5061:16:0",
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
                              "id": 393,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10181,
                              "src": "5089:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TransparentDao_$698",
                                "typeString": "contract TransparentDao"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_TransparentDao_$698",
                                "typeString": "contract TransparentDao"
                              }
                            ],
                            "id": 392,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5081:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 394,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5081:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "5061:33:0",
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
                      "id": 388,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "5053:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 396,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5053:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 397,
                  "nodeType": "ExpressionStatement",
                  "src": "5053:42:0"
                },
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
                        "id": 405,
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
                              "id": 399,
                              "name": "cash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 373,
                              "src": "5109:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ICashflowStatement_$8377",
                                "typeString": "contract ICashflowStatement"
                              }
                            },
                            "id": 400,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "getDao",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8187,
                            "src": "5109:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                              "typeString": "function () view external returns (address)"
                            }
                          },
                          "id": 401,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5109:13:0",
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
                              "id": 403,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10181,
                              "src": "5134:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TransparentDao_$698",
                                "typeString": "contract TransparentDao"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_TransparentDao_$698",
                                "typeString": "contract TransparentDao"
                              }
                            ],
                            "id": 402,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5126:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 404,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5126:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "5109:30:0",
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
                      "id": 398,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "5101:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5101:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 407,
                  "nodeType": "ExpressionStatement",
                  "src": "5101:39:0"
                },
                {
                  "assignments": [
                    409
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 409,
                      "name": "newReport",
                      "nodeType": "VariableDeclaration",
                      "scope": 454,
                      "src": "5147:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Report_$69_memory_ptr",
                        "typeString": "struct TransparentDao.Report"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 408,
                        "name": "Report",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 69,
                        "src": "5147:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Report_$69_storage_ptr",
                          "typeString": "struct TransparentDao.Report"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 415,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 411,
                        "name": "_income",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 338,
                        "src": "5180:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 412,
                        "name": "_balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 340,
                        "src": "5189:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 413,
                        "name": "_cashflow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 342,
                        "src": "5199:9:0",
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
                      "id": 410,
                      "name": "Report",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 69,
                      "src": "5173:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Report_$69_storage_ptr_$",
                        "typeString": "type(struct TransparentDao.Report storage pointer)"
                      }
                    },
                    "id": 414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5173:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Report_$69_memory",
                      "typeString": "struct TransparentDao.Report memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5147:62:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 425,
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
                      "id": 418,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 416,
                        "name": "latestReportIssuance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 85,
                        "src": "5220:20:0",
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
                        "id": 417,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5244:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "5220:25:0",
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
                      "id": 424,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 421,
                            "name": "startOfCurrentYear",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 83,
                            "src": "5257:18:0",
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
                            "id": 419,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10054,
                            "src": "5249:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 420,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sub",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7787,
                          "src": "5249:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 422,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5249:27:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 423,
                        "name": "year",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59,
                        "src": "5280:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5249:35:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5220:64:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 430,
                  "nodeType": "IfStatement",
                  "src": "5216:100:0",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 428,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 426,
                        "name": "startOfCurrentYear",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 83,
                        "src": "5292:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 427,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10054,
                        "src": "5313:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5292:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 429,
                    "nodeType": "ExpressionStatement",
                    "src": "5292:24:0"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 431,
                      "name": "latestReportIssuance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 85,
                      "src": "5323:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 432,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10054,
                      "src": "5346:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5323:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 434,
                  "nodeType": "ExpressionStatement",
                  "src": "5323:26:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 435,
                        "name": "reports",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 99,
                        "src": "5356:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Report_$69_storage_$",
                          "typeString": "mapping(uint256 => struct TransparentDao.Report storage ref)"
                        }
                      },
                      "id": 437,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 436,
                        "name": "latestReportIssuance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 85,
                        "src": "5364:20:0",
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
                      "src": "5356:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Report_$69_storage",
                        "typeString": "struct TransparentDao.Report storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 438,
                      "name": "newReport",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 409,
                      "src": "5388:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Report_$69_memory_ptr",
                        "typeString": "struct TransparentDao.Report memory"
                      }
                    },
                    "src": "5356:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Report_$69_storage",
                      "typeString": "struct TransparentDao.Report storage ref"
                    }
                  },
                  "id": 440,
                  "nodeType": "ExpressionStatement",
                  "src": "5356:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 444,
                        "name": "newReport",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 409,
                        "src": "5422:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Report_$69_memory_ptr",
                          "typeString": "struct TransparentDao.Report memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Report_$69_memory_ptr",
                          "typeString": "struct TransparentDao.Report memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 441,
                        "name": "reportsArray",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "5404:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Report_$69_storage_$dyn_storage",
                          "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                        }
                      },
                      "id": 443,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5404:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Report_$69_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct TransparentDao.Report storage ref) returns (uint256)"
                      }
                    },
                    "id": 445,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5404:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 446,
                  "nodeType": "ExpressionStatement",
                  "src": "5404:28:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 448,
                        "name": "_income",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 338,
                        "src": "5458:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 449,
                        "name": "_balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 340,
                        "src": "5467:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 450,
                        "name": "_cashflow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 342,
                        "src": "5477:9:0",
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
                      "id": 447,
                      "name": "StartedReport",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9031,
                      "src": "5444:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 451,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5444:43:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 452,
                  "nodeType": "EmitStatement",
                  "src": "5439:48:0"
                }
              ]
            },
            "documentation": "@notice Start a new quaterly report\n@param _income The address of the income statement contract\n@param _balance The address of the balance sheet contract\n@param _cashflow The address of the cashflow statement contract",
            "id": 454,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 345,
                    "name": "START_REPORT",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 53,
                    "src": "4730:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 346,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 344,
                  "name": "auth",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5258,
                  "src": "4725:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4725:18:0"
              }
            ],
            "name": "startReport",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 343,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 338,
                  "name": "_income",
                  "nodeType": "VariableDeclaration",
                  "scope": 454,
                  "src": "4667:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 337,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4667:7:0",
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
                  "id": 340,
                  "name": "_balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 454,
                  "src": "4684:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 339,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4684:7:0",
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
                  "id": 342,
                  "name": "_cashflow",
                  "nodeType": "VariableDeclaration",
                  "scope": 454,
                  "src": "4702:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 341,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4702:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4666:54:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 347,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4751:0:0"
            },
            "scope": 698,
            "src": "4646:847:0",
            "stateMutability": "nonpayable",
            "superFunction": 9069,
            "visibility": "public"
          },
          {
            "body": {
              "id": 457,
              "nodeType": "Block",
              "src": "5579:2:0",
              "statements": []
            },
            "documentation": "@notice Donate money to this Dao",
            "id": 458,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "donate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 455,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5561:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 456,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5579:0:0"
            },
            "scope": 698,
            "src": "5546:35:0",
            "stateMutability": "payable",
            "superFunction": 9072,
            "visibility": "public"
          },
          {
            "body": {
              "id": 464,
              "nodeType": "Block",
              "src": "5604:13:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 461,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10057,
                        10058
                      ],
                      "referencedDeclaration": 10057,
                      "src": "5606:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 462,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5606:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 463,
                  "nodeType": "ExpressionStatement",
                  "src": "5606:8:0"
                }
              ]
            },
            "documentation": null,
            "id": 465,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 459,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5593:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 460,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5604:0:0"
            },
            "scope": 698,
            "src": "5585:32:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 472,
              "nodeType": "Block",
              "src": "5792:23:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 470,
                    "name": "UOA",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 87,
                    "src": "5806:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 469,
                  "id": 471,
                  "nodeType": "Return",
                  "src": "5799:10:0"
                }
              ]
            },
            "documentation": "@dev Get the unit of account coin address\n@return The address of the coin contract",
            "id": 473,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUOAAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 466,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5759:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 469,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 468,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 473,
                  "src": "5783:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 467,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5783:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5782:9:0"
            },
            "scope": 698,
            "src": "5737:78:0",
            "stateMutability": "view",
            "superFunction": 9093,
            "visibility": "public"
          },
          {
            "body": {
              "id": 539,
              "nodeType": "Block",
              "src": "6223:368:0",
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
                        "id": 486,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 483,
                          "name": "startPosition",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 475,
                          "src": "6238:13:0",
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
                            "id": 484,
                            "name": "bonds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92,
                            "src": "6254:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_contract$_IDAOBond_$8556_$dyn_storage",
                              "typeString": "contract IDAOBond[] storage ref"
                            }
                          },
                          "id": 485,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "6254:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6238:28:0",
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
                      "id": 482,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "6230:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 487,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6230:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 488,
                  "nodeType": "ExpressionStatement",
                  "src": "6230:37:0"
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
                        "id": 496,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 492,
                              "name": "bondsNumber",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 477,
                              "src": "6299:11:0",
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
                              "id": 490,
                              "name": "startPosition",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 475,
                              "src": "6281:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 491,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7812,
                            "src": "6281:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 493,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6281:30:0",
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
                            "id": 494,
                            "name": "bonds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92,
                            "src": "6314:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_contract$_IDAOBond_$8556_$dyn_storage",
                              "typeString": "contract IDAOBond[] storage ref"
                            }
                          },
                          "id": 495,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "6314:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6281:45:0",
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
                      "id": 489,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "6273:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 497,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6273:54:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 498,
                  "nodeType": "ExpressionStatement",
                  "src": "6273:54:0"
                },
                {
                  "assignments": [
                    500
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 500,
                      "name": "debt",
                      "nodeType": "VariableDeclaration",
                      "scope": 540,
                      "src": "6334:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 499,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6334:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 502,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 501,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6349:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6334:16:0"
                },
                {
                  "assignments": [
                    504
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 504,
                      "name": "currentDebt",
                      "nodeType": "VariableDeclaration",
                      "scope": 540,
                      "src": "6356:19:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 503,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6356:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 506,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6378:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6356:23:0"
                },
                {
                  "assignments": [
                    508
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 508,
                      "name": "i",
                      "nodeType": "VariableDeclaration",
                      "scope": 540,
                      "src": "6386:9:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 507,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6386:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 510,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 509,
                    "name": "startPosition",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 475,
                    "src": "6398:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6386:25:0"
                },
                {
                  "body": {
                    "id": 529,
                    "nodeType": "Block",
                    "src": "6421:103:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 517,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 511,
                            "name": "currentDebt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 504,
                            "src": "6430:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 512,
                                  "name": "bonds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 92,
                                  "src": "6444:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_contract$_IDAOBond_$8556_$dyn_storage",
                                    "typeString": "contract IDAOBond[] storage ref"
                                  }
                                },
                                "id": 514,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 513,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 508,
                                  "src": "6450:1:0",
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
                                "src": "6444:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IDAOBond_$8556",
                                  "typeString": "contract IDAOBond"
                                }
                              },
                              "id": 515,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "getTotalDebt",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8540,
                              "src": "6444:21:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                "typeString": "function () view external returns (uint256)"
                              }
                            },
                            "id": 516,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6444:23:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6430:37:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 518,
                        "nodeType": "ExpressionStatement",
                        "src": "6430:37:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 524,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 519,
                            "name": "debt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 500,
                            "src": "6476:4:0",
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
                                "id": 522,
                                "name": "currentDebt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 504,
                                "src": "6492:11:0",
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
                                "id": 520,
                                "name": "debt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 500,
                                "src": "6483:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 521,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7812,
                              "src": "6483:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 523,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6483:21:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6476:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 525,
                        "nodeType": "ExpressionStatement",
                        "src": "6476:28:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 527,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "6513:3:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 526,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 508,
                            "src": "6513:1:0",
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
                        "id": 528,
                        "nodeType": "ExpressionStatement",
                        "src": "6513:3:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 535,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 530,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 508,
                      "src": "6532:1:0",
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
                          "id": 533,
                          "name": "bondsNumber",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 477,
                          "src": "6554:11:0",
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
                          "id": 531,
                          "name": "startPosition",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 475,
                          "src": "6536:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 532,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7812,
                        "src": "6536:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 534,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6536:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6532:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 536,
                  "nodeType": "DoWhileStatement",
                  "src": "6418:150:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 537,
                    "name": "debt",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 500,
                    "src": "6581:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 481,
                  "id": 538,
                  "nodeType": "Return",
                  "src": "6574:11:0"
                }
              ]
            },
            "documentation": "@dev Get the total debt of the bonds issued by this Dao between 2 indices\n@param startPosition The position in the bonds array from which to loop\n@param bondsNumber How many bonds to take into consideration starting from startPosition\n@return The total debt from bondsNumber bonds",
            "id": 540,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBondDebt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 475,
                  "name": "startPosition",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "6149:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 474,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6149:7:0",
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
                  "id": 477,
                  "name": "bondsNumber",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "6172:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 476,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6172:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6148:44:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 481,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 480,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "6214:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 479,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6214:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6213:9:0"
            },
            "scope": 698,
            "src": "6128:463:0",
            "stateMutability": "view",
            "superFunction": 9088,
            "visibility": "public"
          },
          {
            "body": {
              "id": 553,
              "nodeType": "Block",
              "src": "6862:44:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 548,
                          "name": "bonds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92,
                          "src": "6884:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_contract$_IDAOBond_$8556_$dyn_storage",
                            "typeString": "contract IDAOBond[] storage ref"
                          }
                        },
                        "id": 550,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 549,
                          "name": "position",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 542,
                          "src": "6890:8:0",
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
                        "src": "6884:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOBond_$8556",
                          "typeString": "contract IDAOBond"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IDAOBond_$8556",
                          "typeString": "contract IDAOBond"
                        }
                      ],
                      "id": 547,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6876:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 551,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6876:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 546,
                  "id": 552,
                  "nodeType": "Return",
                  "src": "6869:31:0"
                }
              ]
            },
            "documentation": "@dev Get the address of a bond contract from the bonds array\n@param position The position of the bond contract in the array\n@return The address of the smart bond contract",
            "id": 554,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBondAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 543,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 542,
                  "name": "position",
                  "nodeType": "VariableDeclaration",
                  "scope": 554,
                  "src": "6814:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 541,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6814:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6813:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 546,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 545,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 554,
                  "src": "6853:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 544,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6853:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6852:9:0"
            },
            "scope": 698,
            "src": "6790:116:0",
            "stateMutability": "view",
            "superFunction": 9079,
            "visibility": "public"
          },
          {
            "body": {
              "id": 561,
              "nodeType": "Block",
              "src": "7048:31:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 559,
                    "name": "marketPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7996,
                    "src": "7062:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 558,
                  "id": 560,
                  "nodeType": "Return",
                  "src": "7055:18:0"
                }
              ]
            },
            "documentation": "@dev Get the market price of this Dao\n@return The market price",
            "id": 562,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMarketPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 555,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7016:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 558,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 557,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 562,
                  "src": "7040:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 556,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7040:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7039:8:0"
            },
            "scope": 698,
            "src": "6993:86:0",
            "stateMutability": "view",
            "superFunction": 8001,
            "visibility": "public"
          },
          {
            "body": {
              "id": 570,
              "nodeType": "Block",
              "src": "7241:39:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 567,
                      "name": "reportsArray",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 95,
                      "src": "7255:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Report_$69_storage_$dyn_storage",
                        "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                      }
                    },
                    "id": 568,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "7255:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 566,
                  "id": 569,
                  "nodeType": "Return",
                  "src": "7248:26:0"
                }
              ]
            },
            "documentation": "@dev Get the length of the reportsArray\n@return The length of the reports array",
            "id": 571,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getReportsLength",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 563,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7208:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 565,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 571,
                  "src": "7232:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 564,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7232:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7231:9:0"
            },
            "scope": 698,
            "src": "7183:97:0",
            "stateMutability": "view",
            "superFunction": 9103,
            "visibility": "public"
          },
          {
            "body": {
              "id": 596,
              "nodeType": "Block",
              "src": "7637:128:0",
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
                            "id": 582,
                            "name": "reportsArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 95,
                            "src": "7652:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Report_$69_storage_$dyn_storage",
                              "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                            }
                          },
                          "id": 584,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 583,
                            "name": "position",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 573,
                            "src": "7665:8:0",
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
                          "src": "7652:22:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Report_$69_storage",
                            "typeString": "struct TransparentDao.Report storage ref"
                          }
                        },
                        "id": 585,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "income",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 64,
                        "src": "7652:29:0",
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
                            "id": 586,
                            "name": "reportsArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 95,
                            "src": "7683:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Report_$69_storage_$dyn_storage",
                              "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                            }
                          },
                          "id": 588,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 587,
                            "name": "position",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 573,
                            "src": "7696:8:0",
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
                          "src": "7683:22:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Report_$69_storage",
                            "typeString": "struct TransparentDao.Report storage ref"
                          }
                        },
                        "id": 589,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 66,
                        "src": "7683:30:0",
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
                            "id": 590,
                            "name": "reportsArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 95,
                            "src": "7727:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Report_$69_storage_$dyn_storage",
                              "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                            }
                          },
                          "id": 592,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 591,
                            "name": "position",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 573,
                            "src": "7740:8:0",
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
                          "src": "7727:22:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Report_$69_storage",
                            "typeString": "struct TransparentDao.Report storage ref"
                          }
                        },
                        "id": 593,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "cashflow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 68,
                        "src": "7727:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "id": 594,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "7651:108:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$",
                      "typeString": "tuple(address,address,address)"
                    }
                  },
                  "functionReturnParameters": 581,
                  "id": 595,
                  "nodeType": "Return",
                  "src": "7644:115:0"
                }
              ]
            },
            "documentation": "@dev Get the financial reports addresses from a specific reportsArray position\n@param position The position of the reportsArray array\n@return The 3 addresses corresponding to the income statement, balance sheet and cashflow statement",
            "id": 597,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getReportAtPosition",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 574,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 573,
                  "name": "position",
                  "nodeType": "VariableDeclaration",
                  "scope": 597,
                  "src": "7571:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 572,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7571:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7570:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 581,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 576,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 597,
                  "src": "7610:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 575,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7610:7:0",
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
                  "id": 578,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 597,
                  "src": "7619:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 577,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7619:7:0",
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
                  "id": 580,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 597,
                  "src": "7628:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 579,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7628:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7609:27:0"
            },
            "scope": 698,
            "src": "7542:223:0",
            "stateMutability": "view",
            "superFunction": 9114,
            "visibility": "public"
          },
          {
            "body": {
              "id": 606,
              "nodeType": "Block",
              "src": "7931:36:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 603,
                        "name": "daoCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89,
                        "src": "7953:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                          "typeString": "contract IDAOCoin"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                          "typeString": "contract IDAOCoin"
                        }
                      ],
                      "id": 602,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "7945:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7945:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 601,
                  "id": 605,
                  "nodeType": "Return",
                  "src": "7938:23:0"
                }
              ]
            },
            "documentation": "@dev Get the address of the official Dao coin\n@return The address of the coin address",
            "id": 607,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getCoinAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7898:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 601,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 600,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 607,
                  "src": "7922:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 599,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7922:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7921:9:0"
            },
            "scope": 698,
            "src": "7875:92:0",
            "stateMutability": "view",
            "superFunction": 9119,
            "visibility": "public"
          },
          {
            "body": {
              "id": 626,
              "nodeType": "Block",
              "src": "8152:103:0",
              "statements": [
                {
                  "assignments": [
                    613
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 613,
                      "name": "decimals",
                      "nodeType": "VariableDeclaration",
                      "scope": 627,
                      "src": "8159:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 612,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8159:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 617,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 614,
                        "name": "daoCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89,
                        "src": "8178:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                          "typeString": "contract IDAOCoin"
                        }
                      },
                      "id": 615,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getDecimals",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8576,
                      "src": "8178:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                        "typeString": "function () view external returns (uint256)"
                      }
                    },
                    "id": 616,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8178:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8159:40:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 624,
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
                          "id": 618,
                          "name": "daoCoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89,
                          "src": "8213:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                            "typeString": "contract IDAOCoin"
                          }
                        },
                        "id": 619,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "totalSupply",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9450,
                        "src": "8213:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                          "typeString": "function () view external returns (uint256)"
                        }
                      },
                      "id": 620,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8213:21:0",
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
                      "id": 623,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 621,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8237:2:0",
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
                        "id": 622,
                        "name": "decimals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 613,
                        "src": "8241:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "8237:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8213:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 611,
                  "id": 625,
                  "nodeType": "Return",
                  "src": "8206:43:0"
                }
              ]
            },
            "documentation": "@dev Get the number of coins issued in the official Dao coin contract\n@return The amounf of coins issued",
            "id": 627,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getCoinsAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 608,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8119:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 610,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 627,
                  "src": "8143:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 609,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8143:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8142:9:0"
            },
            "scope": 698,
            "src": "8096:159:0",
            "stateMutability": "view",
            "superFunction": 9098,
            "visibility": "public"
          },
          {
            "body": {
              "id": 635,
              "nodeType": "Block",
              "src": "8419:29:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 633,
                    "name": "latestTax",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 78,
                    "src": "8433:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 632,
                  "id": 634,
                  "nodeType": "Return",
                  "src": "8426:16:0"
                }
              ]
            },
            "documentation": "@dev Get the latestTax array\n@return The array having the taxes applied to this Dao",
            "id": 636,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLatestTax",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 628,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8384:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 632,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 631,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 636,
                  "src": "8408:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 629,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8408:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 630,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "8408:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8407:11:0"
            },
            "scope": 698,
            "src": "8363:85:0",
            "stateMutability": "view",
            "superFunction": 9125,
            "visibility": "public"
          },
          {
            "body": {
              "id": 644,
              "nodeType": "Block",
              "src": "8632:36:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 642,
                    "name": "incomeThresholds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 81,
                    "src": "8646:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 641,
                  "id": 643,
                  "nodeType": "Return",
                  "src": "8639:23:0"
                }
              ]
            },
            "documentation": "@dev Get the income threshold for which taxes will be applied\n@return The incomeThresholds array",
            "id": 645,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getIncomeThresholds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 637,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8597:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 641,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 640,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 645,
                  "src": "8621:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 638,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8621:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 639,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "8621:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8620:11:0"
            },
            "scope": 698,
            "src": "8569:99:0",
            "stateMutability": "view",
            "superFunction": 9149,
            "visibility": "public"
          },
          {
            "body": {
              "id": 665,
              "nodeType": "Block",
              "src": "8848:75:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "id": 658,
                        "name": "SET_COIN",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33,
                        "src": "8863:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 659,
                        "name": "ADD_TAX",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38,
                        "src": "8873:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 660,
                        "name": "DELETE_TAX",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "8882:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 661,
                        "name": "NEW_BOND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "8894:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 662,
                        "name": "START_REPORT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53,
                        "src": "8904:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "id": 663,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8862:55:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bytes32_$_t_bytes32_$_t_bytes32_$_t_bytes32_$_t_bytes32_$",
                      "typeString": "tuple(bytes32,bytes32,bytes32,bytes32,bytes32)"
                    }
                  },
                  "functionReturnParameters": 657,
                  "id": 664,
                  "nodeType": "Return",
                  "src": "8855:62:0"
                }
              ]
            },
            "documentation": "@dev Get the Aragon roles from this contract\n@return All Aragon roles",
            "id": 666,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getRoles",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 646,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8779:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 657,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 648,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "8803:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 647,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8803:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 650,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "8812:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 649,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8812:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 652,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "8821:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 651,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8821:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 654,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "8830:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 653,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8830:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 656,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "8839:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 655,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8839:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8802:45:0"
            },
            "scope": 698,
            "src": "8762:161:0",
            "stateMutability": "view",
            "superFunction": 9143,
            "visibility": "public"
          },
          {
            "body": {
              "id": 696,
              "nodeType": "Block",
              "src": "9075:174:0",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 674,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 671,
                        "name": "latestTax",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78,
                        "src": "9086:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 672,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "9086:16:0",
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
                      "id": 673,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9105:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "9086:20:0",
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
                      "id": 683,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 680,
                          "name": "latestTax",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78,
                          "src": "9157:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 681,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "9157:16:0",
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
                        "id": 682,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9177:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "9157:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 689,
                    "nodeType": "IfStatement",
                    "src": "9153:55:0",
                    "trueBody": {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 685,
                              "name": "TAX_TYPE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 73,
                              "src": "9192:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_TAX_TYPE_$73_$",
                                "typeString": "type(enum TransparentDao.TAX_TYPE)"
                              }
                            },
                            "id": 686,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "SIMPLE",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "9192:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_TAX_TYPE_$73",
                              "typeString": "enum TransparentDao.TAX_TYPE"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_enum$_TAX_TYPE_$73",
                              "typeString": "enum TransparentDao.TAX_TYPE"
                            }
                          ],
                          "id": 684,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9187:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": "uint"
                        },
                        "id": 687,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9187:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 670,
                      "id": 688,
                      "nodeType": "Return",
                      "src": "9180:28:0"
                    }
                  },
                  "id": 690,
                  "nodeType": "IfStatement",
                  "src": "9082:126:0",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 676,
                            "name": "TAX_TYPE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "9120:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_TAX_TYPE_$73_$",
                              "typeString": "type(enum TransparentDao.TAX_TYPE)"
                            }
                          },
                          "id": 677,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "PROGRESSIVE",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "9120:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_TAX_TYPE_$73",
                            "typeString": "enum TransparentDao.TAX_TYPE"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_enum$_TAX_TYPE_$73",
                            "typeString": "enum TransparentDao.TAX_TYPE"
                          }
                        ],
                        "id": 675,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9115:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 678,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9115:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 670,
                    "id": 679,
                    "nodeType": "Return",
                    "src": "9108:33:0"
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
                          "id": 692,
                          "name": "TAX_TYPE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 73,
                          "src": "9227:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_TAX_TYPE_$73_$",
                            "typeString": "type(enum TransparentDao.TAX_TYPE)"
                          }
                        },
                        "id": 693,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberName": "NO_TAX",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "9227:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_TAX_TYPE_$73",
                          "typeString": "enum TransparentDao.TAX_TYPE"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_TAX_TYPE_$73",
                          "typeString": "enum TransparentDao.TAX_TYPE"
                        }
                      ],
                      "id": 691,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9222:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": "uint"
                    },
                    "id": 694,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9222:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 670,
                  "id": 695,
                  "nodeType": "Return",
                  "src": "9215:28:0"
                }
              ]
            },
            "documentation": "@dev Get the type of tax applied to this Dao\n@return The tax type for this Dao",
            "id": 697,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTaxType",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 667,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9045:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 669,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 697,
                  "src": "9069:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 668,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "9069:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9068:6:0"
            },
            "scope": 698,
            "src": "9026:223:0",
            "stateMutability": "view",
            "superFunction": 9130,
            "visibility": "public"
          }
        ],
        "scope": 699,
        "src": "849:8403:0"
      }
    ],
    "src": "0:9253:0"
  },
  "legacyAST": {
    "absolutePath": "/home/stefan/Work/TransparentDao/contracts/accounting/dao/TransparentDao.sol",
    "exportedSymbols": {
      "TransparentDao": [
        698
      ]
    },
    "id": 699,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "contracts/utils/Forwarder.sol",
        "file": "contracts/utils/Forwarder.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 9428,
        "src": "25:39:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IDAOCoin.sol",
        "file": "contracts/interfaces/IDAOCoin.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 8578,
        "src": "66:43:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IDAOBond.sol",
        "file": "contracts/interfaces/IDAOBond.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 8557,
        "src": "110:43:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/ITransparentDao.sol",
        "file": "contracts/interfaces/ITransparentDao.sol",
        "id": 5,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 9151,
        "src": "155:50:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IIncomeStatement.sol",
        "file": "contracts/interfaces/IIncomeStatement.sol",
        "id": 6,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 8993,
        "src": "207:51:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/IBalanceSheet.sol",
        "file": "contracts/interfaces/IBalanceSheet.sol",
        "id": 7,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 7991,
        "src": "259:48:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "contracts/interfaces/ICashflowStatement.sol",
        "file": "contracts/interfaces/ICashflowStatement.sol",
        "id": 8,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 8378,
        "src": "308:53:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/apps/AragonApp.sol",
        "file": "@aragon/os/contracts/apps/AragonApp.sol",
        "id": 9,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 5347,
        "src": "363:49:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/lib/math/SafeMath.sol",
        "file": "@aragon/os/contracts/lib/math/SafeMath.sol",
        "id": 10,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 7835,
        "src": "413:52:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/common/IsContract.sol",
        "file": "@aragon/os/contracts/common/IsContract.sol",
        "id": 11,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 5639,
        "src": "466:52:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/acl/ACL.sol",
        "file": "@aragon/os/contracts/acl/ACL.sol",
        "id": 12,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 4431,
        "src": "520:42:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/apps/AppProxyUpgradeable.sol",
        "file": "@aragon/os/contracts/apps/AppProxyUpgradeable.sol",
        "id": 13,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 5157,
        "src": "563:59:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/factory/EVMScriptRegistryFactory.sol",
        "file": "@aragon/os/contracts/factory/EVMScriptRegistryFactory.sol",
        "id": 14,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 7047,
        "src": "623:67:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/factory/DAOFactory.sol",
        "file": "@aragon/os/contracts/factory/DAOFactory.sol",
        "id": 15,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 6940,
        "src": "691:53:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/kernel/Kernel.sol",
        "file": "@aragon/os/contracts/kernel/Kernel.sol",
        "id": 16,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 7597,
        "src": "745:48:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@aragon/os/contracts/kernel/KernelProxy.sol",
        "file": "@aragon/os/contracts/kernel/KernelProxy.sol",
        "id": 17,
        "nodeType": "ImportDirective",
        "scope": 699,
        "sourceUnit": 7679,
        "src": "794:53:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 18,
              "name": "IsContract",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5638,
              "src": "876:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IsContract_$5638",
                "typeString": "contract IsContract"
              }
            },
            "id": 19,
            "nodeType": "InheritanceSpecifier",
            "src": "876:10:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 20,
              "name": "ITransparentDao",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9150,
              "src": "888:15:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ITransparentDao_$9150",
                "typeString": "contract ITransparentDao"
              }
            },
            "id": 21,
            "nodeType": "InheritanceSpecifier",
            "src": "888:15:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 22,
              "name": "Forwarder",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9427,
              "src": "905:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Forwarder_$9427",
                "typeString": "contract Forwarder"
              }
            },
            "id": 23,
            "nodeType": "InheritanceSpecifier",
            "src": "905:9:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 24,
              "name": "AragonApp",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5346,
              "src": "916:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AragonApp_$5346",
                "typeString": "contract AragonApp"
              }
            },
            "id": 25,
            "nodeType": "InheritanceSpecifier",
            "src": "916:9:0"
          }
        ],
        "contractDependencies": [
          4849,
          5218,
          5346,
          5359,
          5492,
          5512,
          5610,
          5638,
          5671,
          5718,
          5915,
          6325,
          6352,
          7618,
          8002,
          8690,
          9150,
          9427
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 698,
        "linearizedBaseContracts": [
          698,
          5346,
          4849,
          6325,
          7618,
          6352,
          5915,
          9427,
          8690,
          9150,
          5638,
          5492,
          5512,
          5359,
          5671,
          5610,
          5718,
          5218,
          8002
        ],
        "name": "TransparentDao",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 28,
            "libraryName": {
              "contractScope": null,
              "id": 26,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7834,
              "src": "937:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$7834",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "931:27:0",
            "typeName": {
              "id": 27,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "950:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": true,
            "id": 33,
            "name": "SET_COIN",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "988:56:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 29,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "988:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "5345545f434f494e",
                  "id": 31,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1033:10:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_5a1a50fb94165ce5dd18fccb67b879ecd6d16fff79715d4f509e4f833a17d4c6",
                    "typeString": "literal_string \"SET_COIN\""
                  },
                  "value": "SET_COIN"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_5a1a50fb94165ce5dd18fccb67b879ecd6d16fff79715d4f509e4f833a17d4c6",
                    "typeString": "literal_string \"SET_COIN\""
                  }
                ],
                "id": 30,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 10046,
                "src": "1023:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                  "typeString": "function () pure returns (bytes32)"
                }
              },
              "id": 32,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1023:21:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 38,
            "name": "ADD_TAX",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1048:54:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 34,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1048:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "4144445f544158",
                  "id": 36,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1092:9:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_35040e44eafa9c12e3623d9e2e8d4c4e06ab58d428986025cf6ee428819bf496",
                    "typeString": "literal_string \"ADD_TAX\""
                  },
                  "value": "ADD_TAX"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_35040e44eafa9c12e3623d9e2e8d4c4e06ab58d428986025cf6ee428819bf496",
                    "typeString": "literal_string \"ADD_TAX\""
                  }
                ],
                "id": 35,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 10046,
                "src": "1082:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                  "typeString": "function () pure returns (bytes32)"
                }
              },
              "id": 37,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1082:20:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 43,
            "name": "DELETE_TAX",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1106:60:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 39,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1106:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "44454c4554455f544158",
                  "id": 41,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1153:12:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_95f7607988a3a1937d2c5b88b1029cd1d053aeec2812965d1a90d6d06850e00b",
                    "typeString": "literal_string \"DELETE_TAX\""
                  },
                  "value": "DELETE_TAX"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_95f7607988a3a1937d2c5b88b1029cd1d053aeec2812965d1a90d6d06850e00b",
                    "typeString": "literal_string \"DELETE_TAX\""
                  }
                ],
                "id": 40,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 10046,
                "src": "1143:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                  "typeString": "function () pure returns (bytes32)"
                }
              },
              "id": 42,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1143:23:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 48,
            "name": "NEW_BOND",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1170:56:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 44,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1170:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "4e45575f424f4e44",
                  "id": 46,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1215:10:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_387342245717bca068dcbe24da575e5f97c77ec8d2e52297fd9999b0ec8c8cc4",
                    "typeString": "literal_string \"NEW_BOND\""
                  },
                  "value": "NEW_BOND"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_387342245717bca068dcbe24da575e5f97c77ec8d2e52297fd9999b0ec8c8cc4",
                    "typeString": "literal_string \"NEW_BOND\""
                  }
                ],
                "id": 45,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 10046,
                "src": "1205:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                  "typeString": "function () pure returns (bytes32)"
                }
              },
              "id": 47,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1205:21:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 53,
            "name": "START_REPORT",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1230:64:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 49,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1230:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "53544152545f5245504f5254",
                  "id": 51,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1279:14:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_8afdc3299a201604203c1620e057ec6dae69cc30f2e4acd2ea833e7d59fa4797",
                    "typeString": "literal_string \"START_REPORT\""
                  },
                  "value": "START_REPORT"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_8afdc3299a201604203c1620e057ec6dae69cc30f2e4acd2ea833e7d59fa4797",
                    "typeString": "literal_string \"START_REPORT\""
                  }
                ],
                "id": 50,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 10046,
                "src": "1269:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                  "typeString": "function () pure returns (bytes32)"
                }
              },
              "id": 52,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1269:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 56,
            "name": "quarter",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1314:28:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1314:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "32313336",
              "id": 55,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1332:10:0",
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
            "id": 59,
            "name": "year",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1346:25:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 57,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1346:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "38353434",
              "id": 58,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1361:10:0",
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
            "id": 62,
            "name": "fiatRepresentation",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1376:39:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 60,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1376:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "555320444f4c4c4152",
              "id": 61,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1404:11:0",
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
            "id": 69,
            "members": [
              {
                "constant": false,
                "id": 64,
                "name": "income",
                "nodeType": "VariableDeclaration",
                "scope": 69,
                "src": "1454:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 63,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1454:7:0",
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
                "id": 66,
                "name": "balance",
                "nodeType": "VariableDeclaration",
                "scope": 69,
                "src": "1475:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 65,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1475:7:0",
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
                "id": 68,
                "name": "cashflow",
                "nodeType": "VariableDeclaration",
                "scope": 69,
                "src": "1497:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 67,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1497:7:0",
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
            "scope": 698,
            "src": "1433:86:0",
            "visibility": "public"
          },
          {
            "canonicalName": "TransparentDao.TAX_TYPE",
            "id": 73,
            "members": [
              {
                "id": 70,
                "name": "NO_TAX",
                "nodeType": "EnumValue",
                "src": "1553:6:0"
              },
              {
                "id": 71,
                "name": "SIMPLE",
                "nodeType": "EnumValue",
                "src": "1561:6:0"
              },
              {
                "id": 72,
                "name": "PROGRESSIVE",
                "nodeType": "EnumValue",
                "src": "1569:11:0"
              }
            ],
            "name": "TAX_TYPE",
            "nodeType": "EnumDefinition",
            "src": "1538:43:0"
          },
          {
            "constant": false,
            "id": 75,
            "name": "taxT",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1585:13:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_enum$_TAX_TYPE_$73",
              "typeString": "enum TransparentDao.TAX_TYPE"
            },
            "typeName": {
              "contractScope": null,
              "id": 74,
              "name": "TAX_TYPE",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 73,
              "src": "1585:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_enum$_TAX_TYPE_$73",
                "typeString": "enum TransparentDao.TAX_TYPE"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 78,
            "name": "latestTax",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1658:19:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 76,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1658:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 77,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1658:9:0",
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
            "id": 81,
            "name": "incomeThresholds",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1681:26:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 79,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1681:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 80,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1681:9:0",
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
            "id": 83,
            "name": "startOfCurrentYear",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1740:26:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 82,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1740:7:0",
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
            "id": 85,
            "name": "latestReportIssuance",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1770:28:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 84,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1770:7:0",
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
            "id": 87,
            "name": "UOA",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1843:11:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 86,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1843:7:0",
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
            "id": 89,
            "name": "daoCoin",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1902:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IDAOCoin_$8577",
              "typeString": "contract IDAOCoin"
            },
            "typeName": {
              "contractScope": null,
              "id": 88,
              "name": "IDAOCoin",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8577,
              "src": "1902:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                "typeString": "contract IDAOCoin"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 92,
            "name": "bonds",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1923:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_contract$_IDAOBond_$8556_$dyn_storage",
              "typeString": "contract IDAOBond[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 90,
                "name": "IDAOBond",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 8556,
                "src": "1923:8:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IDAOBond_$8556",
                  "typeString": "contract IDAOBond"
                }
              },
              "id": 91,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1923:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_contract$_IDAOBond_$8556_$dyn_storage_ptr",
                "typeString": "contract IDAOBond[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 95,
            "name": "reportsArray",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1943:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Report_$69_storage_$dyn_storage",
              "typeString": "struct TransparentDao.Report[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 93,
                "name": "Report",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 69,
                "src": "1943:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Report_$69_storage_ptr",
                  "typeString": "struct TransparentDao.Report"
                }
              },
              "id": 94,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1943:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Report_$69_storage_$dyn_storage_ptr",
                "typeString": "struct TransparentDao.Report[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 99,
            "name": "reports",
            "nodeType": "VariableDeclaration",
            "scope": 698,
            "src": "1969:34:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Report_$69_storage_$",
              "typeString": "mapping(uint256 => struct TransparentDao.Report)"
            },
            "typeName": {
              "id": 98,
              "keyType": {
                "id": 96,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1977:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1969:26:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Report_$69_storage_$",
                "typeString": "mapping(uint256 => struct TransparentDao.Report)"
              },
              "valueType": {
                "contractScope": null,
                "id": 97,
                "name": "Report",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 69,
                "src": "1988:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Report_$69_storage_ptr",
                  "typeString": "struct TransparentDao.Report"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 141,
              "nodeType": "Block",
              "src": "2396:205:0",
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
                        "id": 119,
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
                          "id": 113,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 109,
                            "name": "_unitOfAccount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 101,
                            "src": "2413:14:0",
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
                                "id": 111,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2439:1:0",
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
                              "id": 110,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2431:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 112,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2431:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2413:28:0",
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
                          "id": 118,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 115,
                                "name": "_unitOfAccount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 101,
                                "src": "2456:14:0",
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
                              "id": 114,
                              "name": "isContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5637,
                              "src": "2445:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                "typeString": "function (address) view returns (bool)"
                              }
                            },
                            "id": 116,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2445:26:0",
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
                            "id": 117,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2475:4:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "2445:34:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "2413:66:0",
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
                      "id": 108,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "2405:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 120,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2405:75:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 121,
                  "nodeType": "ExpressionStatement",
                  "src": "2405:75:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 122,
                      "name": "daoCoin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 89,
                      "src": "2493:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                        "typeString": "contract IDAOCoin"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 124,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2512:1:0",
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
                        "id": 123,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2504:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 125,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2504:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2493:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 133,
                  "nodeType": "IfStatement",
                  "src": "2489:55:0",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 131,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 127,
                        "name": "daoCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89,
                        "src": "2516:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOCoin_$8577",
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
                            "id": 129,
                            "name": "_daoCoin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 103,
                            "src": "2535:8:0",
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
                          "id": 128,
                          "name": "IDAOCoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8577,
                          "src": "2526:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IDAOCoin_$8577_$",
                            "typeString": "type(contract IDAOCoin)"
                          }
                        },
                        "id": 130,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2526:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                          "typeString": "contract IDAOCoin"
                        }
                      },
                      "src": "2516:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                        "typeString": "contract IDAOCoin"
                      }
                    },
                    "id": 132,
                    "nodeType": "ExpressionStatement",
                    "src": "2516:28:0"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 134,
                      "name": "UOA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 87,
                      "src": "2553:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 135,
                      "name": "_unitOfAccount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 101,
                      "src": "2559:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2553:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "2553:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 138,
                      "name": "initialized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5595,
                      "src": "2582:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2582:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 140,
                  "nodeType": "ExpressionStatement",
                  "src": "2582:13:0"
                }
              ]
            },
            "documentation": "@notice Initialize the contract as described in the Aragon docs\n@param _unitOfAccount The UOA crypto-coin that is used to do accounting (the revenues/expenses are denoted in this coin when shown on the front-end)\n@param _daoCoin The address of the ERC-20 contract",
            "id": 142,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 106,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 105,
                  "name": "onlyInit",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5542,
                  "src": "2387:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2387:8:0"
              }
            ],
            "name": "initialize",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 101,
                  "name": "_unitOfAccount",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "2316:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 100,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2316:7:0",
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
                  "id": 103,
                  "name": "_daoCoin",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "2362:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2362:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2315:64:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2396:0:0"
            },
            "scope": 698,
            "src": "2296:305:0",
            "stateMutability": "nonpayable",
            "superFunction": 9038,
            "visibility": "public"
          },
          {
            "body": {
              "id": 178,
              "nodeType": "Block",
              "src": "2764:153:0",
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
                        "id": 157,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 152,
                              "name": "daoCoin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 89,
                              "src": "2787:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                                "typeString": "contract IDAOCoin"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                                "typeString": "contract IDAOCoin"
                              }
                            ],
                            "id": 151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2779:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2779:16:0",
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
                              "id": 155,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2807:1:0",
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
                            "id": 154,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2799:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 156,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2799:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2779:30:0",
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
                      "id": 150,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "2771:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 158,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2771:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 159,
                  "nodeType": "ExpressionStatement",
                  "src": "2771:39:0"
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
                        "id": 165,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 162,
                              "name": "_coin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 144,
                              "src": "2835:5:0",
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
                            "id": 161,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5637,
                            "src": "2824:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view returns (bool)"
                            }
                          },
                          "id": 163,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2824:17:0",
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
                          "id": 164,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2845:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "2824:25:0",
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
                      "id": 160,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "2816:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2816:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 167,
                  "nodeType": "ExpressionStatement",
                  "src": "2816:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 172,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 168,
                      "name": "daoCoin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 89,
                      "src": "2857:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$8577",
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
                          "id": 170,
                          "name": "_coin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 144,
                          "src": "2876:5:0",
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
                        "id": 169,
                        "name": "IDAOCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8577,
                        "src": "2867:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IDAOCoin_$8577_$",
                          "typeString": "type(contract IDAOCoin)"
                        }
                      },
                      "id": 171,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2867:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                        "typeString": "contract IDAOCoin"
                      }
                    },
                    "src": "2857:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                      "typeString": "contract IDAOCoin"
                    }
                  },
                  "id": 173,
                  "nodeType": "ExpressionStatement",
                  "src": "2857:25:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 175,
                        "name": "_coin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 144,
                        "src": "2905:5:0",
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
                      "id": 174,
                      "name": "SetDaoCoin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9013,
                      "src": "2894:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 176,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2894:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 177,
                  "nodeType": "EmitStatement",
                  "src": "2889:22:0"
                }
              ]
            },
            "documentation": "@notice Set the official Dao coin\n@param _coin The address of the ERC-20 contract",
            "id": 179,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 147,
                    "name": "SET_COIN",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 33,
                    "src": "2747:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 148,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 146,
                  "name": "auth",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5258,
                  "src": "2742:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2742:14:0"
              }
            ],
            "name": "setDaoCoin",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 144,
                  "name": "_coin",
                  "nodeType": "VariableDeclaration",
                  "scope": 179,
                  "src": "2727:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2727:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2726:15:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 149,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2764:0:0"
            },
            "scope": 698,
            "src": "2707:210:0",
            "stateMutability": "nonpayable",
            "superFunction": 9043,
            "visibility": "public"
          },
          {
            "body": {
              "id": 206,
              "nodeType": "Block",
              "src": "3263:121:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 192,
                        "name": "percentage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 181,
                        "src": "3285:10:0",
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
                        "id": 189,
                        "name": "latestTax",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78,
                        "src": "3270:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 191,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3270:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3270:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 194,
                  "nodeType": "ExpressionStatement",
                  "src": "3270:26:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 198,
                        "name": "threshold",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 183,
                        "src": "3325:9:0",
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
                        "id": 195,
                        "name": "incomeThresholds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 81,
                        "src": "3303:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 197,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3303:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3303:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 200,
                  "nodeType": "ExpressionStatement",
                  "src": "3303:32:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 202,
                        "name": "percentage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 181,
                        "src": "3356:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 203,
                        "name": "threshold",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 183,
                        "src": "3368:9:0",
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
                      "id": 201,
                      "name": "AddedTax",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9019,
                      "src": "3347:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3347:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 205,
                  "nodeType": "EmitStatement",
                  "src": "3342:36:0"
                }
              ]
            },
            "documentation": "@notice The government (or a representative) can add a tax threshold for the Dao\n@param percentage Percentage of tax charged from gross revenues\n@param threshold Threshold of revenues that the Dao needs to cross in order to pay a certain tax",
            "id": 207,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 186,
                    "name": "ADD_TAX",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 38,
                    "src": "3247:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 187,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 185,
                  "name": "auth",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5258,
                  "src": "3242:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3242:13:0"
              }
            ],
            "name": "addTax",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 181,
                  "name": "percentage",
                  "nodeType": "VariableDeclaration",
                  "scope": 207,
                  "src": "3203:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 180,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3203:7:0",
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
                  "id": 183,
                  "name": "threshold",
                  "nodeType": "VariableDeclaration",
                  "scope": 207,
                  "src": "3223:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 182,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3223:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3202:39:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 188,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3263:0:0"
            },
            "scope": 698,
            "src": "3187:197:0",
            "stateMutability": "nonpayable",
            "superFunction": 9050,
            "visibility": "public"
          },
          {
            "body": {
              "id": 294,
              "nodeType": "Block",
              "src": "3626:423:0",
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
                        "id": 219,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 216,
                          "name": "position",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 209,
                          "src": "3641:8:0",
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
                            "id": 217,
                            "name": "latestTax",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 78,
                            "src": "3652:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 218,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3652:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3641:27:0",
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
                      "id": 215,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "3633:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 220,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3633:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 221,
                  "nodeType": "ExpressionStatement",
                  "src": "3633:36:0"
                },
                {
                  "body": {
                    "id": 258,
                    "nodeType": "Block",
                    "src": "3734:111:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 245,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 236,
                              "name": "latestTax",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 78,
                              "src": "3745:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 238,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 237,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 223,
                              "src": "3755:1:0",
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
                            "src": "3745:12:0",
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
                              "id": 239,
                              "name": "latestTax",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 78,
                              "src": "3760:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 244,
                            "indexExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "31",
                                  "id": 242,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3776:1:0",
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
                                  "id": 240,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 223,
                                  "src": "3770:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 241,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "add",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7812,
                                "src": "3770:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 243,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3770:8:0",
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
                            "src": "3760:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3745:34:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 246,
                        "nodeType": "ExpressionStatement",
                        "src": "3745:34:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 256,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 247,
                              "name": "incomeThresholds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 81,
                              "src": "3789:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 249,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 248,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 223,
                              "src": "3806:1:0",
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
                            "src": "3789:19:0",
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
                              "id": 250,
                              "name": "incomeThresholds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 81,
                              "src": "3811:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 255,
                            "indexExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "31",
                                  "id": 253,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3834:1:0",
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
                                  "id": 251,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 223,
                                  "src": "3828:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 252,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "add",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7812,
                                "src": "3828:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 254,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3828:8:0",
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
                            "src": "3811:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3789:48:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 257,
                        "nodeType": "ExpressionStatement",
                        "src": "3789:48:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 226,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 223,
                      "src": "3700:1:0",
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
                          "id": 230,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3725:1:0",
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
                            "id": 227,
                            "name": "latestTax",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 78,
                            "src": "3704:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 228,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3704:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 229,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7787,
                        "src": "3704:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 231,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3704:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3700:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 259,
                  "initializationExpression": {
                    "assignments": [
                      223
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 223,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 295,
                        "src": "3681:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 222,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "3681:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 225,
                    "initialValue": {
                      "argumentTypes": null,
                      "id": 224,
                      "name": "position",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 209,
                      "src": "3690:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3681:17:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 234,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3729:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 233,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 223,
                        "src": "3729:1:0",
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
                    "id": 235,
                    "nodeType": "ExpressionStatement",
                    "src": "3729:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "3676:169:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 268,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3851:42:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 260,
                            "name": "latestTax",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 78,
                            "src": "3858:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 266,
                          "indexExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 264,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3889:1:0",
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
                                  "id": 261,
                                  "name": "latestTax",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 78,
                                  "src": "3868:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                    "typeString": "uint256[] storage ref"
                                  }
                                },
                                "id": 262,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3868:16:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 263,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7787,
                              "src": "3868:20:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 265,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3868:23:0",
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
                          "src": "3858:34:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 267,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "3857:36:0",
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
                  "id": 269,
                  "nodeType": "ExpressionStatement",
                  "src": "3851:42:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 278,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3899:56:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 270,
                            "name": "incomeThresholds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 81,
                            "src": "3906:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 276,
                          "indexExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 274,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3951:1:0",
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
                                  "id": 271,
                                  "name": "incomeThresholds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 81,
                                  "src": "3923:16:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                    "typeString": "uint256[] storage ref"
                                  }
                                },
                                "id": 272,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3923:23:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 273,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7787,
                              "src": "3923:27:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 275,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3923:30:0",
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
                          "src": "3906:48:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 277,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "3905:50:0",
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
                  "id": 279,
                  "nodeType": "ExpressionStatement",
                  "src": "3899:56:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 283,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "3962:18:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 280,
                        "name": "latestTax",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78,
                        "src": "3962:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 282,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3962:16:0",
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
                  "id": 284,
                  "nodeType": "ExpressionStatement",
                  "src": "3962:18:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "3986:25:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 285,
                        "name": "incomeThresholds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 81,
                        "src": "3986:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 287,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3986:23:0",
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
                  "id": 289,
                  "nodeType": "ExpressionStatement",
                  "src": "3986:25:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 291,
                        "name": "position",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 209,
                        "src": "4034:8:0",
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
                      "id": 290,
                      "name": "DeletedTax",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9023,
                      "src": "4023:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4023:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 293,
                  "nodeType": "EmitStatement",
                  "src": "4018:25:0"
                }
              ]
            },
            "documentation": "@notice The government (or a representative) can delete a tax threshold for the Dao\n@param position The position of the tax threshold in the latestTax array",
            "id": 295,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 212,
                    "name": "DELETE_TAX",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 43,
                    "src": "3607:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 213,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 211,
                  "name": "auth",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5258,
                  "src": "3602:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3602:16:0"
              }
            ],
            "name": "deleteTax",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 210,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 209,
                  "name": "position",
                  "nodeType": "VariableDeclaration",
                  "scope": 295,
                  "src": "3584:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 208,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3584:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3583:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 214,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3626:0:0"
            },
            "scope": 698,
            "src": "3565:484:0",
            "stateMutability": "nonpayable",
            "superFunction": 9055,
            "visibility": "public"
          },
          {
            "body": {
              "id": 335,
              "nodeType": "Block",
              "src": "4217:179:0",
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
                        "id": 308,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 305,
                              "name": "_bond",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 297,
                              "src": "4243:5:0",
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
                            "id": 304,
                            "name": "isContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5637,
                            "src": "4232:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view returns (bool)"
                            }
                          },
                          "id": 306,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4232:17:0",
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
                          "id": 307,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4253:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "4232:25:0",
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
                      "id": 303,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "4224:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 309,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4224:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 310,
                  "nodeType": "ExpressionStatement",
                  "src": "4224:34:0"
                },
                {
                  "assignments": [
                    312
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 312,
                      "name": "newBond",
                      "nodeType": "VariableDeclaration",
                      "scope": 336,
                      "src": "4265:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDAOBond_$8556",
                        "typeString": "contract IDAOBond"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 311,
                        "name": "IDAOBond",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8556,
                        "src": "4265:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOBond_$8556",
                          "typeString": "contract IDAOBond"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 316,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 314,
                        "name": "_bond",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 297,
                        "src": "4293:5:0",
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
                      "id": 313,
                      "name": "IDAOBond",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8556,
                      "src": "4284:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IDAOBond_$8556_$",
                        "typeString": "type(contract IDAOBond)"
                      }
                    },
                    "id": 315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4284:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IDAOBond_$8556",
                      "typeString": "contract IDAOBond"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4265:34:0"
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
                        "id": 322,
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
                              "id": 318,
                              "name": "newBond",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 312,
                              "src": "4314:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IDAOBond_$8556",
                                "typeString": "contract IDAOBond"
                              }
                            },
                            "id": 319,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "getNonce",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8550,
                            "src": "4314:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                              "typeString": "function () view external returns (uint256)"
                            }
                          },
                          "id": 320,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4314:18:0",
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
                          "id": 321,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4336:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4314:23:0",
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
                      "id": 317,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "4306:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 323,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4306:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 324,
                  "nodeType": "ExpressionStatement",
                  "src": "4306:32:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 328,
                        "name": "newBond",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 312,
                        "src": "4356:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOBond_$8556",
                          "typeString": "contract IDAOBond"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IDAOBond_$8556",
                          "typeString": "contract IDAOBond"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 325,
                        "name": "bonds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "4345:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IDAOBond_$8556_$dyn_storage",
                          "typeString": "contract IDAOBond[] storage ref"
                        }
                      },
                      "id": 327,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4345:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_contract$_IDAOBond_$8556_$returns$_t_uint256_$",
                        "typeString": "function (contract IDAOBond) returns (uint256)"
                      }
                    },
                    "id": 329,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4345:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 330,
                  "nodeType": "ExpressionStatement",
                  "src": "4345:19:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 332,
                        "name": "_bond",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 297,
                        "src": "4384:5:0",
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
                      "id": 331,
                      "name": "NewBond",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9005,
                      "src": "4376:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 333,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4376:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 334,
                  "nodeType": "EmitStatement",
                  "src": "4371:19:0"
                }
              ]
            },
            "documentation": "@notice Issue a new bond for this Dao\n@param _bond The address of the smart bond contract",
            "id": 336,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 300,
                    "name": "NEW_BOND",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 48,
                    "src": "4200:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 301,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 299,
                  "name": "auth",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5258,
                  "src": "4195:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4195:14:0"
              }
            ],
            "name": "newBond",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 298,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 297,
                  "name": "_bond",
                  "nodeType": "VariableDeclaration",
                  "scope": 336,
                  "src": "4180:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 296,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4180:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4179:15:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 302,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4217:0:0"
            },
            "scope": 698,
            "src": "4163:233:0",
            "stateMutability": "nonpayable",
            "superFunction": 9060,
            "visibility": "public"
          },
          {
            "body": {
              "id": 453,
              "nodeType": "Block",
              "src": "4751:742:0",
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
                        "id": 357,
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
                          "id": 351,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 349,
                            "name": "latestReportIssuance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 85,
                            "src": "4766:20:0",
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
                            "id": 350,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4790:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "4766:25:0",
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
                          "id": 356,
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
                            "id": 354,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 352,
                              "name": "now",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10054,
                              "src": "4795:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 353,
                              "name": "latestReportIssuance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 85,
                              "src": "4801:20:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "4795:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 355,
                            "name": "quarter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "4825:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4795:37:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "4766:66:0",
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
                      "id": 348,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "4758:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 358,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4758:75:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 359,
                  "nodeType": "ExpressionStatement",
                  "src": "4758:75:0"
                },
                {
                  "assignments": [
                    361
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 361,
                      "name": "inc",
                      "nodeType": "VariableDeclaration",
                      "scope": 454,
                      "src": "4840:20:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IIncomeStatement_$8992",
                        "typeString": "contract IIncomeStatement"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 360,
                        "name": "IIncomeStatement",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8992,
                        "src": "4840:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IIncomeStatement_$8992",
                          "typeString": "contract IIncomeStatement"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 365,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 363,
                        "name": "_income",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 338,
                        "src": "4880:7:0",
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
                      "id": 362,
                      "name": "IIncomeStatement",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8992,
                      "src": "4863:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IIncomeStatement_$8992_$",
                        "typeString": "type(contract IIncomeStatement)"
                      }
                    },
                    "id": 364,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4863:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IIncomeStatement_$8992",
                      "typeString": "contract IIncomeStatement"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4840:48:0"
                },
                {
                  "assignments": [
                    367
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 367,
                      "name": "balance",
                      "nodeType": "VariableDeclaration",
                      "scope": 454,
                      "src": "4894:21:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IBalanceSheet_$7990",
                        "typeString": "contract IBalanceSheet"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 366,
                        "name": "IBalanceSheet",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 7990,
                        "src": "4894:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IBalanceSheet_$7990",
                          "typeString": "contract IBalanceSheet"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 371,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 369,
                        "name": "_balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 340,
                        "src": "4932:8:0",
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
                      "id": 368,
                      "name": "IBalanceSheet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7990,
                      "src": "4918:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IBalanceSheet_$7990_$",
                        "typeString": "type(contract IBalanceSheet)"
                      }
                    },
                    "id": 370,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4918:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IBalanceSheet_$7990",
                      "typeString": "contract IBalanceSheet"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4894:47:0"
                },
                {
                  "assignments": [
                    373
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 373,
                      "name": "cash",
                      "nodeType": "VariableDeclaration",
                      "scope": 454,
                      "src": "4947:23:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ICashflowStatement_$8377",
                        "typeString": "contract ICashflowStatement"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 372,
                        "name": "ICashflowStatement",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8377,
                        "src": "4947:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ICashflowStatement_$8377",
                          "typeString": "contract ICashflowStatement"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 377,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 375,
                        "name": "_cashflow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 342,
                        "src": "4992:9:0",
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
                      "id": 374,
                      "name": "ICashflowStatement",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8377,
                      "src": "4973:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_ICashflowStatement_$8377_$",
                        "typeString": "type(contract ICashflowStatement)"
                      }
                    },
                    "id": 376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4973:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ICashflowStatement_$8377",
                      "typeString": "contract ICashflowStatement"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4947:55:0"
                },
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
                        "id": 385,
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
                              "id": 379,
                              "name": "inc",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 361,
                              "src": "5017:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IIncomeStatement_$8992",
                                "typeString": "contract IIncomeStatement"
                              }
                            },
                            "id": 380,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "getDao",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8841,
                            "src": "5017:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                              "typeString": "function () view external returns (address)"
                            }
                          },
                          "id": 381,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5017:12:0",
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
                              "id": 383,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10181,
                              "src": "5041:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TransparentDao_$698",
                                "typeString": "contract TransparentDao"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_TransparentDao_$698",
                                "typeString": "contract TransparentDao"
                              }
                            ],
                            "id": 382,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5033:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 384,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5033:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "5017:29:0",
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
                      "id": 378,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "5009:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5009:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 387,
                  "nodeType": "ExpressionStatement",
                  "src": "5009:38:0"
                },
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
                        "id": 395,
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
                              "id": 389,
                              "name": "balance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 367,
                              "src": "5061:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IBalanceSheet_$7990",
                                "typeString": "contract IBalanceSheet"
                              }
                            },
                            "id": 390,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "getDao",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7968,
                            "src": "5061:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                              "typeString": "function () view external returns (address)"
                            }
                          },
                          "id": 391,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5061:16:0",
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
                              "id": 393,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10181,
                              "src": "5089:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TransparentDao_$698",
                                "typeString": "contract TransparentDao"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_TransparentDao_$698",
                                "typeString": "contract TransparentDao"
                              }
                            ],
                            "id": 392,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5081:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 394,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5081:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "5061:33:0",
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
                      "id": 388,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "5053:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 396,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5053:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 397,
                  "nodeType": "ExpressionStatement",
                  "src": "5053:42:0"
                },
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
                        "id": 405,
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
                              "id": 399,
                              "name": "cash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 373,
                              "src": "5109:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ICashflowStatement_$8377",
                                "typeString": "contract ICashflowStatement"
                              }
                            },
                            "id": 400,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "getDao",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8187,
                            "src": "5109:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                              "typeString": "function () view external returns (address)"
                            }
                          },
                          "id": 401,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5109:13:0",
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
                              "id": 403,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10181,
                              "src": "5134:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TransparentDao_$698",
                                "typeString": "contract TransparentDao"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_TransparentDao_$698",
                                "typeString": "contract TransparentDao"
                              }
                            ],
                            "id": 402,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5126:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 404,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5126:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "5109:30:0",
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
                      "id": 398,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "5101:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5101:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 407,
                  "nodeType": "ExpressionStatement",
                  "src": "5101:39:0"
                },
                {
                  "assignments": [
                    409
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 409,
                      "name": "newReport",
                      "nodeType": "VariableDeclaration",
                      "scope": 454,
                      "src": "5147:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Report_$69_memory_ptr",
                        "typeString": "struct TransparentDao.Report"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 408,
                        "name": "Report",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 69,
                        "src": "5147:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Report_$69_storage_ptr",
                          "typeString": "struct TransparentDao.Report"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 415,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 411,
                        "name": "_income",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 338,
                        "src": "5180:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 412,
                        "name": "_balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 340,
                        "src": "5189:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 413,
                        "name": "_cashflow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 342,
                        "src": "5199:9:0",
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
                      "id": 410,
                      "name": "Report",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 69,
                      "src": "5173:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Report_$69_storage_ptr_$",
                        "typeString": "type(struct TransparentDao.Report storage pointer)"
                      }
                    },
                    "id": 414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5173:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Report_$69_memory",
                      "typeString": "struct TransparentDao.Report memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5147:62:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 425,
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
                      "id": 418,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 416,
                        "name": "latestReportIssuance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 85,
                        "src": "5220:20:0",
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
                        "id": 417,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5244:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "5220:25:0",
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
                      "id": 424,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 421,
                            "name": "startOfCurrentYear",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 83,
                            "src": "5257:18:0",
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
                            "id": 419,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10054,
                            "src": "5249:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 420,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sub",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7787,
                          "src": "5249:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 422,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5249:27:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 423,
                        "name": "year",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59,
                        "src": "5280:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5249:35:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5220:64:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 430,
                  "nodeType": "IfStatement",
                  "src": "5216:100:0",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 428,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 426,
                        "name": "startOfCurrentYear",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 83,
                        "src": "5292:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 427,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10054,
                        "src": "5313:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5292:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 429,
                    "nodeType": "ExpressionStatement",
                    "src": "5292:24:0"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 431,
                      "name": "latestReportIssuance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 85,
                      "src": "5323:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 432,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10054,
                      "src": "5346:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5323:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 434,
                  "nodeType": "ExpressionStatement",
                  "src": "5323:26:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 435,
                        "name": "reports",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 99,
                        "src": "5356:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Report_$69_storage_$",
                          "typeString": "mapping(uint256 => struct TransparentDao.Report storage ref)"
                        }
                      },
                      "id": 437,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 436,
                        "name": "latestReportIssuance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 85,
                        "src": "5364:20:0",
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
                      "src": "5356:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Report_$69_storage",
                        "typeString": "struct TransparentDao.Report storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 438,
                      "name": "newReport",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 409,
                      "src": "5388:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Report_$69_memory_ptr",
                        "typeString": "struct TransparentDao.Report memory"
                      }
                    },
                    "src": "5356:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Report_$69_storage",
                      "typeString": "struct TransparentDao.Report storage ref"
                    }
                  },
                  "id": 440,
                  "nodeType": "ExpressionStatement",
                  "src": "5356:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 444,
                        "name": "newReport",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 409,
                        "src": "5422:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Report_$69_memory_ptr",
                          "typeString": "struct TransparentDao.Report memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Report_$69_memory_ptr",
                          "typeString": "struct TransparentDao.Report memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 441,
                        "name": "reportsArray",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "5404:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Report_$69_storage_$dyn_storage",
                          "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                        }
                      },
                      "id": 443,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5404:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Report_$69_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct TransparentDao.Report storage ref) returns (uint256)"
                      }
                    },
                    "id": 445,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5404:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 446,
                  "nodeType": "ExpressionStatement",
                  "src": "5404:28:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 448,
                        "name": "_income",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 338,
                        "src": "5458:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 449,
                        "name": "_balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 340,
                        "src": "5467:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 450,
                        "name": "_cashflow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 342,
                        "src": "5477:9:0",
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
                      "id": 447,
                      "name": "StartedReport",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9031,
                      "src": "5444:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 451,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5444:43:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 452,
                  "nodeType": "EmitStatement",
                  "src": "5439:48:0"
                }
              ]
            },
            "documentation": "@notice Start a new quaterly report\n@param _income The address of the income statement contract\n@param _balance The address of the balance sheet contract\n@param _cashflow The address of the cashflow statement contract",
            "id": 454,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 345,
                    "name": "START_REPORT",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 53,
                    "src": "4730:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 346,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 344,
                  "name": "auth",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5258,
                  "src": "4725:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4725:18:0"
              }
            ],
            "name": "startReport",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 343,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 338,
                  "name": "_income",
                  "nodeType": "VariableDeclaration",
                  "scope": 454,
                  "src": "4667:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 337,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4667:7:0",
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
                  "id": 340,
                  "name": "_balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 454,
                  "src": "4684:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 339,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4684:7:0",
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
                  "id": 342,
                  "name": "_cashflow",
                  "nodeType": "VariableDeclaration",
                  "scope": 454,
                  "src": "4702:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 341,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4702:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4666:54:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 347,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4751:0:0"
            },
            "scope": 698,
            "src": "4646:847:0",
            "stateMutability": "nonpayable",
            "superFunction": 9069,
            "visibility": "public"
          },
          {
            "body": {
              "id": 457,
              "nodeType": "Block",
              "src": "5579:2:0",
              "statements": []
            },
            "documentation": "@notice Donate money to this Dao",
            "id": 458,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "donate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 455,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5561:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 456,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5579:0:0"
            },
            "scope": 698,
            "src": "5546:35:0",
            "stateMutability": "payable",
            "superFunction": 9072,
            "visibility": "public"
          },
          {
            "body": {
              "id": 464,
              "nodeType": "Block",
              "src": "5604:13:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 461,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10057,
                        10058
                      ],
                      "referencedDeclaration": 10057,
                      "src": "5606:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 462,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5606:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 463,
                  "nodeType": "ExpressionStatement",
                  "src": "5606:8:0"
                }
              ]
            },
            "documentation": null,
            "id": 465,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 459,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5593:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 460,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5604:0:0"
            },
            "scope": 698,
            "src": "5585:32:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 472,
              "nodeType": "Block",
              "src": "5792:23:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 470,
                    "name": "UOA",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 87,
                    "src": "5806:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 469,
                  "id": 471,
                  "nodeType": "Return",
                  "src": "5799:10:0"
                }
              ]
            },
            "documentation": "@dev Get the unit of account coin address\n@return The address of the coin contract",
            "id": 473,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUOAAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 466,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5759:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 469,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 468,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 473,
                  "src": "5783:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 467,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5783:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5782:9:0"
            },
            "scope": 698,
            "src": "5737:78:0",
            "stateMutability": "view",
            "superFunction": 9093,
            "visibility": "public"
          },
          {
            "body": {
              "id": 539,
              "nodeType": "Block",
              "src": "6223:368:0",
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
                        "id": 486,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 483,
                          "name": "startPosition",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 475,
                          "src": "6238:13:0",
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
                            "id": 484,
                            "name": "bonds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92,
                            "src": "6254:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_contract$_IDAOBond_$8556_$dyn_storage",
                              "typeString": "contract IDAOBond[] storage ref"
                            }
                          },
                          "id": 485,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "6254:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6238:28:0",
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
                      "id": 482,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "6230:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 487,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6230:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 488,
                  "nodeType": "ExpressionStatement",
                  "src": "6230:37:0"
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
                        "id": 496,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 492,
                              "name": "bondsNumber",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 477,
                              "src": "6299:11:0",
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
                              "id": 490,
                              "name": "startPosition",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 475,
                              "src": "6281:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 491,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7812,
                            "src": "6281:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 493,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6281:30:0",
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
                            "id": 494,
                            "name": "bonds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92,
                            "src": "6314:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_contract$_IDAOBond_$8556_$dyn_storage",
                              "typeString": "contract IDAOBond[] storage ref"
                            }
                          },
                          "id": 495,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "6314:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6281:45:0",
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
                      "id": 489,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10055,
                        10056
                      ],
                      "referencedDeclaration": 10055,
                      "src": "6273:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 497,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6273:54:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 498,
                  "nodeType": "ExpressionStatement",
                  "src": "6273:54:0"
                },
                {
                  "assignments": [
                    500
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 500,
                      "name": "debt",
                      "nodeType": "VariableDeclaration",
                      "scope": 540,
                      "src": "6334:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 499,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6334:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 502,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 501,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6349:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6334:16:0"
                },
                {
                  "assignments": [
                    504
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 504,
                      "name": "currentDebt",
                      "nodeType": "VariableDeclaration",
                      "scope": 540,
                      "src": "6356:19:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 503,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6356:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 506,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6378:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6356:23:0"
                },
                {
                  "assignments": [
                    508
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 508,
                      "name": "i",
                      "nodeType": "VariableDeclaration",
                      "scope": 540,
                      "src": "6386:9:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 507,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6386:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 510,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 509,
                    "name": "startPosition",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 475,
                    "src": "6398:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6386:25:0"
                },
                {
                  "body": {
                    "id": 529,
                    "nodeType": "Block",
                    "src": "6421:103:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 517,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 511,
                            "name": "currentDebt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 504,
                            "src": "6430:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 512,
                                  "name": "bonds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 92,
                                  "src": "6444:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_contract$_IDAOBond_$8556_$dyn_storage",
                                    "typeString": "contract IDAOBond[] storage ref"
                                  }
                                },
                                "id": 514,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 513,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 508,
                                  "src": "6450:1:0",
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
                                "src": "6444:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IDAOBond_$8556",
                                  "typeString": "contract IDAOBond"
                                }
                              },
                              "id": 515,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "getTotalDebt",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8540,
                              "src": "6444:21:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                "typeString": "function () view external returns (uint256)"
                              }
                            },
                            "id": 516,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6444:23:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6430:37:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 518,
                        "nodeType": "ExpressionStatement",
                        "src": "6430:37:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 524,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 519,
                            "name": "debt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 500,
                            "src": "6476:4:0",
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
                                "id": 522,
                                "name": "currentDebt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 504,
                                "src": "6492:11:0",
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
                                "id": 520,
                                "name": "debt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 500,
                                "src": "6483:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 521,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7812,
                              "src": "6483:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 523,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6483:21:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6476:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 525,
                        "nodeType": "ExpressionStatement",
                        "src": "6476:28:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 527,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "6513:3:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 526,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 508,
                            "src": "6513:1:0",
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
                        "id": 528,
                        "nodeType": "ExpressionStatement",
                        "src": "6513:3:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 535,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 530,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 508,
                      "src": "6532:1:0",
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
                          "id": 533,
                          "name": "bondsNumber",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 477,
                          "src": "6554:11:0",
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
                          "id": 531,
                          "name": "startPosition",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 475,
                          "src": "6536:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 532,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7812,
                        "src": "6536:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 534,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6536:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6532:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 536,
                  "nodeType": "DoWhileStatement",
                  "src": "6418:150:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 537,
                    "name": "debt",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 500,
                    "src": "6581:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 481,
                  "id": 538,
                  "nodeType": "Return",
                  "src": "6574:11:0"
                }
              ]
            },
            "documentation": "@dev Get the total debt of the bonds issued by this Dao between 2 indices\n@param startPosition The position in the bonds array from which to loop\n@param bondsNumber How many bonds to take into consideration starting from startPosition\n@return The total debt from bondsNumber bonds",
            "id": 540,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBondDebt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 475,
                  "name": "startPosition",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "6149:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 474,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6149:7:0",
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
                  "id": 477,
                  "name": "bondsNumber",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "6172:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 476,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6172:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6148:44:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 481,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 480,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "6214:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 479,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6214:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6213:9:0"
            },
            "scope": 698,
            "src": "6128:463:0",
            "stateMutability": "view",
            "superFunction": 9088,
            "visibility": "public"
          },
          {
            "body": {
              "id": 553,
              "nodeType": "Block",
              "src": "6862:44:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 548,
                          "name": "bonds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92,
                          "src": "6884:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_contract$_IDAOBond_$8556_$dyn_storage",
                            "typeString": "contract IDAOBond[] storage ref"
                          }
                        },
                        "id": 550,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 549,
                          "name": "position",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 542,
                          "src": "6890:8:0",
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
                        "src": "6884:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOBond_$8556",
                          "typeString": "contract IDAOBond"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IDAOBond_$8556",
                          "typeString": "contract IDAOBond"
                        }
                      ],
                      "id": 547,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6876:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 551,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6876:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 546,
                  "id": 552,
                  "nodeType": "Return",
                  "src": "6869:31:0"
                }
              ]
            },
            "documentation": "@dev Get the address of a bond contract from the bonds array\n@param position The position of the bond contract in the array\n@return The address of the smart bond contract",
            "id": 554,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBondAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 543,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 542,
                  "name": "position",
                  "nodeType": "VariableDeclaration",
                  "scope": 554,
                  "src": "6814:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 541,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6814:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6813:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 546,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 545,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 554,
                  "src": "6853:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 544,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6853:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6852:9:0"
            },
            "scope": 698,
            "src": "6790:116:0",
            "stateMutability": "view",
            "superFunction": 9079,
            "visibility": "public"
          },
          {
            "body": {
              "id": 561,
              "nodeType": "Block",
              "src": "7048:31:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 559,
                    "name": "marketPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7996,
                    "src": "7062:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 558,
                  "id": 560,
                  "nodeType": "Return",
                  "src": "7055:18:0"
                }
              ]
            },
            "documentation": "@dev Get the market price of this Dao\n@return The market price",
            "id": 562,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMarketPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 555,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7016:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 558,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 557,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 562,
                  "src": "7040:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 556,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7040:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7039:8:0"
            },
            "scope": 698,
            "src": "6993:86:0",
            "stateMutability": "view",
            "superFunction": 8001,
            "visibility": "public"
          },
          {
            "body": {
              "id": 570,
              "nodeType": "Block",
              "src": "7241:39:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 567,
                      "name": "reportsArray",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 95,
                      "src": "7255:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Report_$69_storage_$dyn_storage",
                        "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                      }
                    },
                    "id": 568,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "7255:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 566,
                  "id": 569,
                  "nodeType": "Return",
                  "src": "7248:26:0"
                }
              ]
            },
            "documentation": "@dev Get the length of the reportsArray\n@return The length of the reports array",
            "id": 571,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getReportsLength",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 563,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7208:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 565,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 571,
                  "src": "7232:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 564,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7232:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7231:9:0"
            },
            "scope": 698,
            "src": "7183:97:0",
            "stateMutability": "view",
            "superFunction": 9103,
            "visibility": "public"
          },
          {
            "body": {
              "id": 596,
              "nodeType": "Block",
              "src": "7637:128:0",
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
                            "id": 582,
                            "name": "reportsArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 95,
                            "src": "7652:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Report_$69_storage_$dyn_storage",
                              "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                            }
                          },
                          "id": 584,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 583,
                            "name": "position",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 573,
                            "src": "7665:8:0",
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
                          "src": "7652:22:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Report_$69_storage",
                            "typeString": "struct TransparentDao.Report storage ref"
                          }
                        },
                        "id": 585,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "income",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 64,
                        "src": "7652:29:0",
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
                            "id": 586,
                            "name": "reportsArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 95,
                            "src": "7683:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Report_$69_storage_$dyn_storage",
                              "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                            }
                          },
                          "id": 588,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 587,
                            "name": "position",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 573,
                            "src": "7696:8:0",
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
                          "src": "7683:22:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Report_$69_storage",
                            "typeString": "struct TransparentDao.Report storage ref"
                          }
                        },
                        "id": 589,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 66,
                        "src": "7683:30:0",
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
                            "id": 590,
                            "name": "reportsArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 95,
                            "src": "7727:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Report_$69_storage_$dyn_storage",
                              "typeString": "struct TransparentDao.Report storage ref[] storage ref"
                            }
                          },
                          "id": 592,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 591,
                            "name": "position",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 573,
                            "src": "7740:8:0",
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
                          "src": "7727:22:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Report_$69_storage",
                            "typeString": "struct TransparentDao.Report storage ref"
                          }
                        },
                        "id": 593,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "cashflow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 68,
                        "src": "7727:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "id": 594,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "7651:108:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$",
                      "typeString": "tuple(address,address,address)"
                    }
                  },
                  "functionReturnParameters": 581,
                  "id": 595,
                  "nodeType": "Return",
                  "src": "7644:115:0"
                }
              ]
            },
            "documentation": "@dev Get the financial reports addresses from a specific reportsArray position\n@param position The position of the reportsArray array\n@return The 3 addresses corresponding to the income statement, balance sheet and cashflow statement",
            "id": 597,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getReportAtPosition",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 574,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 573,
                  "name": "position",
                  "nodeType": "VariableDeclaration",
                  "scope": 597,
                  "src": "7571:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 572,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7571:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7570:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 581,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 576,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 597,
                  "src": "7610:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 575,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7610:7:0",
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
                  "id": 578,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 597,
                  "src": "7619:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 577,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7619:7:0",
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
                  "id": 580,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 597,
                  "src": "7628:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 579,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7628:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7609:27:0"
            },
            "scope": 698,
            "src": "7542:223:0",
            "stateMutability": "view",
            "superFunction": 9114,
            "visibility": "public"
          },
          {
            "body": {
              "id": 606,
              "nodeType": "Block",
              "src": "7931:36:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 603,
                        "name": "daoCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89,
                        "src": "7953:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                          "typeString": "contract IDAOCoin"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                          "typeString": "contract IDAOCoin"
                        }
                      ],
                      "id": 602,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "7945:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7945:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 601,
                  "id": 605,
                  "nodeType": "Return",
                  "src": "7938:23:0"
                }
              ]
            },
            "documentation": "@dev Get the address of the official Dao coin\n@return The address of the coin address",
            "id": 607,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getCoinAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7898:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 601,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 600,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 607,
                  "src": "7922:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 599,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7922:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7921:9:0"
            },
            "scope": 698,
            "src": "7875:92:0",
            "stateMutability": "view",
            "superFunction": 9119,
            "visibility": "public"
          },
          {
            "body": {
              "id": 626,
              "nodeType": "Block",
              "src": "8152:103:0",
              "statements": [
                {
                  "assignments": [
                    613
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 613,
                      "name": "decimals",
                      "nodeType": "VariableDeclaration",
                      "scope": 627,
                      "src": "8159:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 612,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8159:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 617,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 614,
                        "name": "daoCoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89,
                        "src": "8178:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                          "typeString": "contract IDAOCoin"
                        }
                      },
                      "id": 615,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getDecimals",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8576,
                      "src": "8178:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                        "typeString": "function () view external returns (uint256)"
                      }
                    },
                    "id": 616,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8178:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8159:40:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 624,
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
                          "id": 618,
                          "name": "daoCoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89,
                          "src": "8213:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IDAOCoin_$8577",
                            "typeString": "contract IDAOCoin"
                          }
                        },
                        "id": 619,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "totalSupply",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9450,
                        "src": "8213:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                          "typeString": "function () view external returns (uint256)"
                        }
                      },
                      "id": 620,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8213:21:0",
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
                      "id": 623,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 621,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8237:2:0",
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
                        "id": 622,
                        "name": "decimals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 613,
                        "src": "8241:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "8237:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8213:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 611,
                  "id": 625,
                  "nodeType": "Return",
                  "src": "8206:43:0"
                }
              ]
            },
            "documentation": "@dev Get the number of coins issued in the official Dao coin contract\n@return The amounf of coins issued",
            "id": 627,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getCoinsAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 608,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8119:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 610,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 627,
                  "src": "8143:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 609,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8143:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8142:9:0"
            },
            "scope": 698,
            "src": "8096:159:0",
            "stateMutability": "view",
            "superFunction": 9098,
            "visibility": "public"
          },
          {
            "body": {
              "id": 635,
              "nodeType": "Block",
              "src": "8419:29:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 633,
                    "name": "latestTax",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 78,
                    "src": "8433:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 632,
                  "id": 634,
                  "nodeType": "Return",
                  "src": "8426:16:0"
                }
              ]
            },
            "documentation": "@dev Get the latestTax array\n@return The array having the taxes applied to this Dao",
            "id": 636,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLatestTax",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 628,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8384:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 632,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 631,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 636,
                  "src": "8408:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 629,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8408:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 630,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "8408:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8407:11:0"
            },
            "scope": 698,
            "src": "8363:85:0",
            "stateMutability": "view",
            "superFunction": 9125,
            "visibility": "public"
          },
          {
            "body": {
              "id": 644,
              "nodeType": "Block",
              "src": "8632:36:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 642,
                    "name": "incomeThresholds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 81,
                    "src": "8646:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 641,
                  "id": 643,
                  "nodeType": "Return",
                  "src": "8639:23:0"
                }
              ]
            },
            "documentation": "@dev Get the income threshold for which taxes will be applied\n@return The incomeThresholds array",
            "id": 645,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getIncomeThresholds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 637,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8597:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 641,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 640,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 645,
                  "src": "8621:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 638,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8621:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 639,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "8621:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8620:11:0"
            },
            "scope": 698,
            "src": "8569:99:0",
            "stateMutability": "view",
            "superFunction": 9149,
            "visibility": "public"
          },
          {
            "body": {
              "id": 665,
              "nodeType": "Block",
              "src": "8848:75:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "id": 658,
                        "name": "SET_COIN",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33,
                        "src": "8863:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 659,
                        "name": "ADD_TAX",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38,
                        "src": "8873:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 660,
                        "name": "DELETE_TAX",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "8882:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 661,
                        "name": "NEW_BOND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "8894:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 662,
                        "name": "START_REPORT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53,
                        "src": "8904:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "id": 663,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8862:55:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bytes32_$_t_bytes32_$_t_bytes32_$_t_bytes32_$_t_bytes32_$",
                      "typeString": "tuple(bytes32,bytes32,bytes32,bytes32,bytes32)"
                    }
                  },
                  "functionReturnParameters": 657,
                  "id": 664,
                  "nodeType": "Return",
                  "src": "8855:62:0"
                }
              ]
            },
            "documentation": "@dev Get the Aragon roles from this contract\n@return All Aragon roles",
            "id": 666,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getRoles",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 646,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8779:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 657,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 648,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "8803:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 647,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8803:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 650,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "8812:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 649,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8812:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 652,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "8821:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 651,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8821:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 654,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "8830:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 653,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8830:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 656,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "8839:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 655,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8839:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8802:45:0"
            },
            "scope": 698,
            "src": "8762:161:0",
            "stateMutability": "view",
            "superFunction": 9143,
            "visibility": "public"
          },
          {
            "body": {
              "id": 696,
              "nodeType": "Block",
              "src": "9075:174:0",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 674,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 671,
                        "name": "latestTax",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78,
                        "src": "9086:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 672,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "9086:16:0",
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
                      "id": 673,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9105:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "9086:20:0",
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
                      "id": 683,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 680,
                          "name": "latestTax",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78,
                          "src": "9157:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 681,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "9157:16:0",
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
                        "id": 682,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9177:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "9157:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 689,
                    "nodeType": "IfStatement",
                    "src": "9153:55:0",
                    "trueBody": {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 685,
                              "name": "TAX_TYPE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 73,
                              "src": "9192:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_TAX_TYPE_$73_$",
                                "typeString": "type(enum TransparentDao.TAX_TYPE)"
                              }
                            },
                            "id": 686,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "SIMPLE",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "9192:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_TAX_TYPE_$73",
                              "typeString": "enum TransparentDao.TAX_TYPE"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_enum$_TAX_TYPE_$73",
                              "typeString": "enum TransparentDao.TAX_TYPE"
                            }
                          ],
                          "id": 684,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9187:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": "uint"
                        },
                        "id": 687,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9187:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 670,
                      "id": 688,
                      "nodeType": "Return",
                      "src": "9180:28:0"
                    }
                  },
                  "id": 690,
                  "nodeType": "IfStatement",
                  "src": "9082:126:0",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 676,
                            "name": "TAX_TYPE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "9120:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_TAX_TYPE_$73_$",
                              "typeString": "type(enum TransparentDao.TAX_TYPE)"
                            }
                          },
                          "id": 677,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "PROGRESSIVE",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "9120:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_TAX_TYPE_$73",
                            "typeString": "enum TransparentDao.TAX_TYPE"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_enum$_TAX_TYPE_$73",
                            "typeString": "enum TransparentDao.TAX_TYPE"
                          }
                        ],
                        "id": 675,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9115:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 678,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9115:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 670,
                    "id": 679,
                    "nodeType": "Return",
                    "src": "9108:33:0"
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
                          "id": 692,
                          "name": "TAX_TYPE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 73,
                          "src": "9227:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_TAX_TYPE_$73_$",
                            "typeString": "type(enum TransparentDao.TAX_TYPE)"
                          }
                        },
                        "id": 693,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberName": "NO_TAX",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "9227:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_TAX_TYPE_$73",
                          "typeString": "enum TransparentDao.TAX_TYPE"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_TAX_TYPE_$73",
                          "typeString": "enum TransparentDao.TAX_TYPE"
                        }
                      ],
                      "id": 691,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9222:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": "uint"
                    },
                    "id": 694,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9222:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 670,
                  "id": 695,
                  "nodeType": "Return",
                  "src": "9215:28:0"
                }
              ]
            },
            "documentation": "@dev Get the type of tax applied to this Dao\n@return The tax type for this Dao",
            "id": 697,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTaxType",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 667,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9045:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 669,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 697,
                  "src": "9069:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 668,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "9069:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9068:6:0"
            },
            "scope": 698,
            "src": "9026:223:0",
            "stateMutability": "view",
            "superFunction": 9130,
            "visibility": "public"
          }
        ],
        "scope": 699,
        "src": "849:8403:0"
      }
    ],
    "src": "0:9253:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "1545348294485": {
      "events": {},
      "links": {},
      "address": "0xa49b7b3c45ff9481da6dbab17dae78a229a4b4ae",
      "transactionHash": "0xd38f712009811a10bca374392cb509f2178b039453ec004fa5fdd779355c1d6e"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-20T23:25:47.281Z"
}

module.exports = {

  transparentDao

}
