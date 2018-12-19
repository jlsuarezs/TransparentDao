var balanceSheet = {
  "contractName": "BalanceSheet",
  "abi": [
    {
      "inputs": [
        {
          "name": "_dao",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_asset",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "SetAssets",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_liabilities",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "SetLiabilities",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_equity",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "SetEquity",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_asset",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "setAssets",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_liabilities",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "setLiabilities",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_equity",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "setEquity",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getMarginOfSafety",
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
      "name": "getAcidTestResult",
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
      "inputs": [
        {
          "name": "_asset",
          "type": "string"
        }
      ],
      "name": "getAsset",
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
      "inputs": [
        {
          "name": "_liability",
          "type": "string"
        }
      ],
      "name": "getLiability",
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
      "inputs": [
        {
          "name": "_equity",
          "type": "string"
        }
      ],
      "name": "getEquity",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405262271c80600055624e3900600155627555806002556301d5560060035534801561002d57600080fd5b50604051602080610b308339810180604052810190808051906020019092919050505080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504260048190555050610a88806100a86000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630ce9334b1461009357806331496821146101105780635a9b66d71461018d57806367fc01fa1461020057806391017d421461022b578063aa389c7e1461029e578063cd5286d014610311578063ee7e66661461038e575b600080fd5b34801561009f57600080fd5b506100fa600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506103b9565b6040518082815260200191505060405180910390f35b34801561011c57600080fd5b50610177600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061042e565b6040518082815260200191505060405180910390f35b34801561019957600080fd5b506101fe600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001909291905050506104a3565b005b34801561020c57600080fd5b50610215610661565b6040518082815260200191505060405180910390f35b34801561023757600080fd5b5061029c600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050610666565b005b3480156102aa57600080fd5b5061030f600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050610824565b005b34801561031d57600080fd5b50610378600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506109e2565b6040518082815260200191505060405180910390f35b34801561039a57600080fd5b506103a3610a57565b6040518082815260200191505060405180910390f35b60006007826040518082805190602001908083835b6020831015156103f357805182526020820191506020810190506020830392506103ce565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b60006008826040518082805190602001908083835b6020831015156104685780518252602082019150602081019050602083039250610443565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104ff57600080fd5b6000603c6018603c80600454420381151561051657fe5b0481151561052057fe5b0481151561052a57fe5b0481151561053457fe5b049050600254811115151561054857600080fd5b816006846040518082805190602001908083835b602083101515610581578051825260208201915060208101905060208303925061055c565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055507f710243991929910d356d0abcb8194c0a8fc7b9f81e9fd02d4164d009a091d77b83836040518080602001838152602001828103825284818151815260200191508051906020019080838360005b83811015610621578082015181840152602081019050610606565b50505050905090810190601f16801561064e5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1505050565b600090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106c257600080fd5b6000603c6018603c8060045442038115156106d957fe5b048115156106e357fe5b048115156106ed57fe5b048115156106f757fe5b049050600254811115151561070b57600080fd5b816006846040518082805190602001908083835b602083101515610744578051825260208201915060208101905060208303925061071f565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055507fa78c87c3a8b077758fcb9720389b4895816e3e3ad54d1c0577c40e753518e0d283836040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156107e45780820151818401526020810190506107c9565b50505050905090810190601f1680156108115780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561088057600080fd5b6000603c6018603c80600454420381151561089757fe5b048115156108a157fe5b048115156108ab57fe5b048115156108b557fe5b04905060025481111515156108c957600080fd5b816006846040518082805190602001908083835b60208310151561090257805182526020820191506020810190506020830392506108dd565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055507fca60e43b2b8ded54860fefe655159e0c656dc9076b570ec28d18092ec4453b9483836040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156109a2578082015181840152602081019050610987565b50505050905090810190601f1680156109cf5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1505050565b60006006826040518082805190602001908083835b602083101515610a1c57805182526020820191506020810190506020830392506109f7565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b6000905600a165627a7a72305820344184da0c2268178eeeea2ef6c924db62347600ceab2dc13d01c38f8af6570d0029",
  "deployedBytecode": "0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630ce9334b1461009357806331496821146101105780635a9b66d71461018d57806367fc01fa1461020057806391017d421461022b578063aa389c7e1461029e578063cd5286d014610311578063ee7e66661461038e575b600080fd5b34801561009f57600080fd5b506100fa600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506103b9565b6040518082815260200191505060405180910390f35b34801561011c57600080fd5b50610177600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061042e565b6040518082815260200191505060405180910390f35b34801561019957600080fd5b506101fe600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001909291905050506104a3565b005b34801561020c57600080fd5b50610215610661565b6040518082815260200191505060405180910390f35b34801561023757600080fd5b5061029c600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050610666565b005b3480156102aa57600080fd5b5061030f600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050610824565b005b34801561031d57600080fd5b50610378600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506109e2565b6040518082815260200191505060405180910390f35b34801561039a57600080fd5b506103a3610a57565b6040518082815260200191505060405180910390f35b60006007826040518082805190602001908083835b6020831015156103f357805182526020820191506020810190506020830392506103ce565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b60006008826040518082805190602001908083835b6020831015156104685780518252602082019150602081019050602083039250610443565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104ff57600080fd5b6000603c6018603c80600454420381151561051657fe5b0481151561052057fe5b0481151561052a57fe5b0481151561053457fe5b049050600254811115151561054857600080fd5b816006846040518082805190602001908083835b602083101515610581578051825260208201915060208101905060208303925061055c565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055507f710243991929910d356d0abcb8194c0a8fc7b9f81e9fd02d4164d009a091d77b83836040518080602001838152602001828103825284818151815260200191508051906020019080838360005b83811015610621578082015181840152602081019050610606565b50505050905090810190601f16801561064e5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1505050565b600090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106c257600080fd5b6000603c6018603c8060045442038115156106d957fe5b048115156106e357fe5b048115156106ed57fe5b048115156106f757fe5b049050600254811115151561070b57600080fd5b816006846040518082805190602001908083835b602083101515610744578051825260208201915060208101905060208303925061071f565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055507fa78c87c3a8b077758fcb9720389b4895816e3e3ad54d1c0577c40e753518e0d283836040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156107e45780820151818401526020810190506107c9565b50505050905090810190601f1680156108115780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561088057600080fd5b6000603c6018603c80600454420381151561089757fe5b048115156108a157fe5b048115156108ab57fe5b048115156108b557fe5b04905060025481111515156108c957600080fd5b816006846040518082805190602001908083835b60208310151561090257805182526020820191506020810190506020830392506108dd565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055507fca60e43b2b8ded54860fefe655159e0c656dc9076b570ec28d18092ec4453b9483836040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156109a2578082015181840152602081019050610987565b50505050905090810190601f1680156109cf5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1505050565b60006006826040518082805190602001908083835b602083101515610a1c57805182526020820191506020810190506020830392506109f7565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b6000905600a165627a7a72305820344184da0c2268178eeeea2ef6c924db62347600ceab2dc13d01c38f8af6570d0029",
  "sourceMap": "75:2421:44:-;;;150:9;134:25;;183:10;163:30;;215:10;197:28;;244:10;229:25;;1336:71;8:9:-1;5:2;;;30:1;27;20:12;5:2;1336:71:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1375:4;1369:3;;:10;;;;;;;;;;;;;;;;;;1398:3;1386:9;:15;;;;1336:71;75:2421;;;;;;",
  "deployedSourceMap": "75:2421:44:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2261:121;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2261:121:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2386:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2386:107:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1411:155;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1411:155:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1932:66;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1932:66:44;;;;;;;;;;;;;;;;;;;;;;;1757:158;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1757:158:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1570:183;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1570:183:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2153:104;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2153:104:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2002:147;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2002:147:44;;;;;;;;;;;;;;;;;;;;;;;2261:121;2323:6;2345:19;2365:10;2345:31;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2345:31:44;;;;;;;;;;;;;;;;;;;;;;2338:38;;2261:121;;;:::o;2386:107::-;2442:6;2464:14;2479:7;2464:23;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2464:23:44;;;;;;;;;;;;;;;;;;;;;;2457:30;;2386:107;;;:::o;1411:155::-;1187:3;;;;;;;;;;;1173:17;;:10;:17;;;1165:26;;;;;;;;1234:11;1283:2;1278;1273;1268;1255:9;;1249:3;:15;1248:22;;;;;;;;:27;;;;;;;;:32;;;;;;;;:37;;;;;;;;1234:51;;1310:7;;1300:6;:17;;1292:26;;;;;;;;1517:6;1492:14;1507:6;1492:22;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1492:22:44;;;;;;;;;;;;;;;;;;;;;:31;;;;1535:25;1545:6;1553;1535:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1535:25:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1197:1;1411:155;;:::o;1932:66::-;1982:6;1932:66;:::o;1757:158::-;1187:3;;;;;;;;;;;1173:17;;:10;:17;;;1165:26;;;;;;;;1234:11;1283:2;1278;1273;1268;1255:9;;1249:3;:15;1248:22;;;;;;;;:27;;;;;;;;:32;;;;;;;;:37;;;;;;;;1234:51;;1310:7;;1300:6;:17;;1292:26;;;;;;;;1865:6;1839:14;1854:7;1839:23;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1839:23:44;;;;;;;;;;;;;;;;;;;;;:32;;;;1883:26;1893:7;1902:6;1883:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1883:26:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1197:1;1757:158;;:::o;1570:183::-;1187:3;;;;;;;;;;;1173:17;;:10;:17;;;1165:26;;;;;;;;1234:11;1283:2;1278;1273;1268;1255:9;;1249:3;:15;1248:22;;;;;;;;:27;;;;;;;;:32;;;;;;;;:37;;;;;;;;1234:51;;1310:7;;1300:6;:17;;1292:26;;;;;;;;1693:6;1662:14;1677:12;1662:28;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1662:28:44;;;;;;;;;;;;;;;;;;;;;:37;;;;1711:36;1726:12;1740:6;1711:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1711:36:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1197:1;1570:183;;:::o;2153:104::-;2207:6;2229:14;2244:6;2229:22;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2229:22:44;;;;;;;;;;;;;;;;;;;;;;2222:29;;2153:104;;;:::o;2002:147::-;2052:6;2002:147;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport \"contracts/interfaces/IBalanceSheet.sol\";\n\ncontract BalanceSheet is IBalanceSheet {\n\n  //Constants\n\n  uint256 month = 712 hours;\n  uint256 twoMonths = 1424 hours;\n  uint256 quarter = 2136 hours;\n  uint256 year = 8544 hours;\n\n/*\n  //Assets\n\n  int256 cash;\n\n  int256 marketableSecurities;\n\n  int256 accountsReceivable;\n\n  int256 inventory;\n\n  int256 prepaidExpenses;\n\n  int256 longTermExpenses;\n\n  int256 fixedAssets;\n\n  int256 intangibleAssets;\n\n  int256 shortTermInvestments;\n\n  int256 totalShortTermAssets;\n\n  int256 totalLongTermAssets;\n\n  int256 totalAssets;\n\n  //Liabilities\n\n  int256 currentPortionLongTermDebt;\n\n  int256 bankIndebtedness;\n\n  int256 interestPayable;\n\n  int256 wages;\n\n  int256 dividentsPayable;\n\n  int256 longTermDebt;\n\n  int256 totalLiabilities;\n\n  //Equity\n\n  uint256 retainedEarnings;\n\n  uint256 commonCoins;\n\n  uint256 treasuryStock;\n\n  uint256 commonEquity;\n\n  uint256 bookValue;\n\n*/\n\n  //Misscellanous\n\n  uint256 startTime;\n\n  address dao;\n\n  mapping(string => int256) detailedAssets;\n  mapping(string => int256) detailedLiabilities;\n  mapping(string => int256) detailedEquity;\n\n  modifier onlyDAO {\n\n    require(msg.sender == dao);\n    _;\n\n  }\n\n  modifier inQuarter {\n\n    uint _hours = (now - startTime) / 60 / 60 / 24 / 60;\n\n    require(_hours <= quarter);\n\n    _;\n\n  }\n\n  constructor(address _dao) {\n\n    dao = _dao;\n\n    startTime = now;\n\n  }\n\n  function setAssets(string _asset, int256 amount) public onlyDAO inQuarter {\n\n    detailedAssets[_asset] = amount;\n\n    emit SetAssets(_asset, amount);\n\n  }\n\n  function setLiabilities(string _liabilities, int256 amount) public onlyDAO inQuarter {\n\n    detailedAssets[_liabilities] = amount;\n\n    emit SetLiabilities(_liabilities, amount);\n\n  }\n\n  function setEquity(string _equity, int256 amount) public onlyDAO inQuarter {\n\n    detailedAssets[_equity] = amount;\n\n    emit SetEquity(_equity, amount);\n\n  }\n\n  //GETTERS\n\n  function getMarginOfSafety() public view returns (int256) {\n\n\n\n  }\n\n  function getAcidTestResult() public view returns (int256) {\n\n    //(cash + accounts receivable + short term investments) / current liabilities\n\n  }\n\n  function getAsset(string _asset) public view returns (int256) {\n\n    return detailedAssets[_asset];\n\n  }\n\n  function getLiability(string _liability) public view returns (int256) {\n\n    return detailedLiabilities[_liability];\n\n  }\n\n  function getEquity(string _equity) public view returns (int256) {\n\n    return detailedEquity[_equity];\n\n  }\n\n}\n",
  "sourcePath": "contracts/accounting/statements/BalanceSheet.sol",
  "ast": {
    "absolutePath": "contracts/accounting/statements/BalanceSheet.sol",
    "exportedSymbols": {
      "BalanceSheet": [
        16238
      ]
    },
    "id": 16239,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16039,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:44"
      },
      {
        "absolutePath": "contracts/interfaces/IBalanceSheet.sol",
        "file": "contracts/interfaces/IBalanceSheet.sol",
        "id": 16040,
        "nodeType": "ImportDirective",
        "scope": 16239,
        "sourceUnit": 18829,
        "src": "25:48:44",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 16041,
              "name": "IBalanceSheet",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 18828,
              "src": "100:13:44",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IBalanceSheet_$18828",
                "typeString": "contract IBalanceSheet"
              }
            },
            "id": 16042,
            "nodeType": "InheritanceSpecifier",
            "src": "100:13:44"
          }
        ],
        "contractDependencies": [
          18828
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 16238,
        "linearizedBaseContracts": [
          16238,
          18828
        ],
        "name": "BalanceSheet",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 16045,
            "name": "month",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "134:25:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16043,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "134:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "373132",
              "id": 16044,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "150:9:44",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2563200_by_1",
                "typeString": "int_const 2563200"
              },
              "value": "712"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 16048,
            "name": "twoMonths",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "163:30:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16046,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "163:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31343234",
              "id": 16047,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "183:10:44",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5126400_by_1",
                "typeString": "int_const 5126400"
              },
              "value": "1424"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 16051,
            "name": "quarter",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "197:28:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16049,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "197:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "32313336",
              "id": 16050,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "215:10:44",
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
            "id": 16054,
            "name": "year",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "229:25:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16052,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "229:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "38353434",
              "id": 16053,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "244:10:44",
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
            "id": 16056,
            "name": "startTime",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "965:17:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16055,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "965:7:44",
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
            "id": 16058,
            "name": "dao",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "987:11:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 16057,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "987:7:44",
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
            "id": 16062,
            "name": "detailedAssets",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "1003:40:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
              "typeString": "mapping(string => int256)"
            },
            "typeName": {
              "id": 16061,
              "keyType": {
                "id": 16059,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1011:6:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "1003:25:44",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                "typeString": "mapping(string => int256)"
              },
              "valueType": {
                "id": 16060,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "1021:6:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 16066,
            "name": "detailedLiabilities",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "1047:45:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
              "typeString": "mapping(string => int256)"
            },
            "typeName": {
              "id": 16065,
              "keyType": {
                "id": 16063,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1055:6:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "1047:25:44",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                "typeString": "mapping(string => int256)"
              },
              "valueType": {
                "id": 16064,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "1065:6:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 16070,
            "name": "detailedEquity",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "1096:40:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
              "typeString": "mapping(string => int256)"
            },
            "typeName": {
              "id": 16069,
              "keyType": {
                "id": 16067,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1104:6:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "1096:25:44",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                "typeString": "mapping(string => int256)"
              },
              "valueType": {
                "id": 16068,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "1114:6:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16080,
              "nodeType": "Block",
              "src": "1158:46:44",
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
                        "id": 16076,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 16073,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22464,
                            "src": "1173:3:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 16074,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1173:10:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 16075,
                          "name": "dao",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16058,
                          "src": "1187:3:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1173:17:44",
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
                      "id": 16072,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        22467,
                        22468
                      ],
                      "referencedDeclaration": 22467,
                      "src": "1165:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16077,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1165:26:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16078,
                  "nodeType": "ExpressionStatement",
                  "src": "1165:26:44"
                },
                {
                  "id": 16079,
                  "nodeType": "PlaceholderStatement",
                  "src": "1197:1:44"
                }
              ]
            },
            "documentation": null,
            "id": 16081,
            "name": "onlyDAO",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 16071,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1158:0:44"
            },
            "src": "1141:63:44",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16105,
              "nodeType": "Block",
              "src": "1227:105:44",
              "statements": [
                {
                  "assignments": [
                    16084
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16084,
                      "name": "_hours",
                      "nodeType": "VariableDeclaration",
                      "scope": 16106,
                      "src": "1234:11:44",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16083,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1234:4:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16097,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 16096,
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
                      "id": 16094,
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
                        "id": 16092,
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
                          "id": 16090,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 16087,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 16085,
                                  "name": "now",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 22466,
                                  "src": "1249:3:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 16086,
                                  "name": "startTime",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 16056,
                                  "src": "1255:9:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1249:15:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 16088,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1248:17:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3630",
                            "id": 16089,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1268:2:44",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_60_by_1",
                              "typeString": "int_const 60"
                            },
                            "value": "60"
                          },
                          "src": "1248:22:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3630",
                          "id": 16091,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1273:2:44",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_60_by_1",
                            "typeString": "int_const 60"
                          },
                          "value": "60"
                        },
                        "src": "1248:27:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3234",
                        "id": 16093,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1278:2:44",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_24_by_1",
                          "typeString": "int_const 24"
                        },
                        "value": "24"
                      },
                      "src": "1248:32:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3630",
                      "id": 16095,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1283:2:44",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_60_by_1",
                        "typeString": "int_const 60"
                      },
                      "value": "60"
                    },
                    "src": "1248:37:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1234:51:44"
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
                        "id": 16101,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 16099,
                          "name": "_hours",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16084,
                          "src": "1300:6:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 16100,
                          "name": "quarter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16051,
                          "src": "1310:7:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1300:17:44",
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
                      "id": 16098,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        22467,
                        22468
                      ],
                      "referencedDeclaration": 22467,
                      "src": "1292:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1292:26:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16103,
                  "nodeType": "ExpressionStatement",
                  "src": "1292:26:44"
                },
                {
                  "id": 16104,
                  "nodeType": "PlaceholderStatement",
                  "src": "1325:1:44"
                }
              ]
            },
            "documentation": null,
            "id": 16106,
            "name": "inQuarter",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 16082,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1227:0:44"
            },
            "src": "1208:124:44",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16119,
              "nodeType": "Block",
              "src": "1362:45:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16111,
                      "name": "dao",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16058,
                      "src": "1369:3:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16112,
                      "name": "_dao",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16108,
                      "src": "1375:4:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1369:10:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 16114,
                  "nodeType": "ExpressionStatement",
                  "src": "1369:10:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16115,
                      "name": "startTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16056,
                      "src": "1386:9:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16116,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22466,
                      "src": "1398:3:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1386:15:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 16118,
                  "nodeType": "ExpressionStatement",
                  "src": "1386:15:44"
                }
              ]
            },
            "documentation": null,
            "id": 16120,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16108,
                  "name": "_dao",
                  "nodeType": "VariableDeclaration",
                  "scope": 16120,
                  "src": "1348:12:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16107,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1348:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1347:14:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16110,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1362:0:44"
            },
            "scope": 16238,
            "src": "1336:71:44",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16142,
              "nodeType": "Block",
              "src": "1485:81:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 16131,
                        "name": "detailedAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16062,
                        "src": "1492:14:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                          "typeString": "mapping(string memory => int256)"
                        }
                      },
                      "id": 16133,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 16132,
                        "name": "_asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16122,
                        "src": "1507:6:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1492:22:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16134,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16124,
                      "src": "1517:6:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1492:31:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 16136,
                  "nodeType": "ExpressionStatement",
                  "src": "1492:31:44"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16138,
                        "name": "_asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16122,
                        "src": "1545:6:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16139,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16124,
                        "src": "1553:6:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 16137,
                      "name": "SetAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18763,
                      "src": "1535:9:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                        "typeString": "function (string memory,int256)"
                      }
                    },
                    "id": 16140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1535:25:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16141,
                  "nodeType": "EmitStatement",
                  "src": "1530:30:44"
                }
              ]
            },
            "documentation": null,
            "id": 16143,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 16127,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16126,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16081,
                  "src": "1467:7:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1467:7:44"
              },
              {
                "arguments": null,
                "id": 16129,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16128,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16106,
                  "src": "1475:9:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1475:9:44"
              }
            ],
            "name": "setAssets",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16122,
                  "name": "_asset",
                  "nodeType": "VariableDeclaration",
                  "scope": 16143,
                  "src": "1430:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16121,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1430:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16124,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16143,
                  "src": "1445:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16123,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1445:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1429:30:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16130,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1485:0:44"
            },
            "scope": 16238,
            "src": "1411:155:44",
            "stateMutability": "nonpayable",
            "superFunction": 18782,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16165,
              "nodeType": "Block",
              "src": "1655:98:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16158,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 16154,
                        "name": "detailedAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16062,
                        "src": "1662:14:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                          "typeString": "mapping(string memory => int256)"
                        }
                      },
                      "id": 16156,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 16155,
                        "name": "_liabilities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16145,
                        "src": "1677:12:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1662:28:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16157,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16147,
                      "src": "1693:6:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1662:37:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 16159,
                  "nodeType": "ExpressionStatement",
                  "src": "1662:37:44"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16161,
                        "name": "_liabilities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16145,
                        "src": "1726:12:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16162,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16147,
                        "src": "1740:6:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 16160,
                      "name": "SetLiabilities",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18769,
                      "src": "1711:14:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                        "typeString": "function (string memory,int256)"
                      }
                    },
                    "id": 16163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1711:36:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16164,
                  "nodeType": "EmitStatement",
                  "src": "1706:41:44"
                }
              ]
            },
            "documentation": null,
            "id": 16166,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 16150,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16149,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16081,
                  "src": "1637:7:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1637:7:44"
              },
              {
                "arguments": null,
                "id": 16152,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16151,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16106,
                  "src": "1645:9:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1645:9:44"
              }
            ],
            "name": "setLiabilities",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16148,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16145,
                  "name": "_liabilities",
                  "nodeType": "VariableDeclaration",
                  "scope": 16166,
                  "src": "1594:19:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16144,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1594:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16147,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16166,
                  "src": "1615:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16146,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1615:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1593:36:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16153,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1655:0:44"
            },
            "scope": 16238,
            "src": "1570:183:44",
            "stateMutability": "nonpayable",
            "superFunction": 18789,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16188,
              "nodeType": "Block",
              "src": "1832:83:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 16177,
                        "name": "detailedAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16062,
                        "src": "1839:14:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                          "typeString": "mapping(string memory => int256)"
                        }
                      },
                      "id": 16179,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 16178,
                        "name": "_equity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16168,
                        "src": "1854:7:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1839:23:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16180,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16170,
                      "src": "1865:6:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1839:32:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 16182,
                  "nodeType": "ExpressionStatement",
                  "src": "1839:32:44"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16184,
                        "name": "_equity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16168,
                        "src": "1893:7:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16185,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16170,
                        "src": "1902:6:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 16183,
                      "name": "SetEquity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18775,
                      "src": "1883:9:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                        "typeString": "function (string memory,int256)"
                      }
                    },
                    "id": 16186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1883:26:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16187,
                  "nodeType": "EmitStatement",
                  "src": "1878:31:44"
                }
              ]
            },
            "documentation": null,
            "id": 16189,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 16173,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16172,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16081,
                  "src": "1814:7:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1814:7:44"
              },
              {
                "arguments": null,
                "id": 16175,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16174,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16106,
                  "src": "1822:9:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1822:9:44"
              }
            ],
            "name": "setEquity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16168,
                  "name": "_equity",
                  "nodeType": "VariableDeclaration",
                  "scope": 16189,
                  "src": "1776:14:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16167,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1776:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16170,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16189,
                  "src": "1792:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16169,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1792:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1775:31:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16176,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1832:0:44"
            },
            "scope": 16238,
            "src": "1757:158:44",
            "stateMutability": "nonpayable",
            "superFunction": 18796,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16194,
              "nodeType": "Block",
              "src": "1990:8:44",
              "statements": []
            },
            "documentation": null,
            "id": 16195,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMarginOfSafety",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16190,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1958:2:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16192,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16195,
                  "src": "1982:6:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16191,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1982:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1981:8:44"
            },
            "scope": 16238,
            "src": "1932:66:44",
            "stateMutability": "view",
            "superFunction": 18801,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16200,
              "nodeType": "Block",
              "src": "2060:89:44",
              "statements": []
            },
            "documentation": null,
            "id": 16201,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAcidTestResult",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16196,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2028:2:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16199,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16198,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16201,
                  "src": "2052:6:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16197,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2052:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2051:8:44"
            },
            "scope": 16238,
            "src": "2002:147:44",
            "stateMutability": "view",
            "superFunction": 18806,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16212,
              "nodeType": "Block",
              "src": "2215:42:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 16208,
                      "name": "detailedAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16062,
                      "src": "2229:14:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                        "typeString": "mapping(string memory => int256)"
                      }
                    },
                    "id": 16210,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 16209,
                      "name": "_asset",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16203,
                      "src": "2244:6:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2229:22:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 16207,
                  "id": 16211,
                  "nodeType": "Return",
                  "src": "2222:29:44"
                }
              ]
            },
            "documentation": null,
            "id": 16213,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAsset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16203,
                  "name": "_asset",
                  "nodeType": "VariableDeclaration",
                  "scope": 16213,
                  "src": "2171:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16202,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2171:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2170:15:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16207,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16206,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16213,
                  "src": "2207:6:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16205,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2207:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2206:8:44"
            },
            "scope": 16238,
            "src": "2153:104:44",
            "stateMutability": "view",
            "superFunction": 18813,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16224,
              "nodeType": "Block",
              "src": "2331:51:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 16220,
                      "name": "detailedLiabilities",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16066,
                      "src": "2345:19:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                        "typeString": "mapping(string memory => int256)"
                      }
                    },
                    "id": 16222,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 16221,
                      "name": "_liability",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16215,
                      "src": "2365:10:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2345:31:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 16219,
                  "id": 16223,
                  "nodeType": "Return",
                  "src": "2338:38:44"
                }
              ]
            },
            "documentation": null,
            "id": 16225,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLiability",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16216,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16215,
                  "name": "_liability",
                  "nodeType": "VariableDeclaration",
                  "scope": 16225,
                  "src": "2283:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16214,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2283:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2282:19:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16218,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16225,
                  "src": "2323:6:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16217,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2323:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2322:8:44"
            },
            "scope": 16238,
            "src": "2261:121:44",
            "stateMutability": "view",
            "superFunction": 18820,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16236,
              "nodeType": "Block",
              "src": "2450:43:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 16232,
                      "name": "detailedEquity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16070,
                      "src": "2464:14:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                        "typeString": "mapping(string memory => int256)"
                      }
                    },
                    "id": 16234,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 16233,
                      "name": "_equity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16227,
                      "src": "2479:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2464:23:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 16231,
                  "id": 16235,
                  "nodeType": "Return",
                  "src": "2457:30:44"
                }
              ]
            },
            "documentation": null,
            "id": 16237,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getEquity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16227,
                  "name": "_equity",
                  "nodeType": "VariableDeclaration",
                  "scope": 16237,
                  "src": "2405:14:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16226,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2405:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2404:16:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16231,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16230,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16237,
                  "src": "2442:6:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16229,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2442:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2441:8:44"
            },
            "scope": 16238,
            "src": "2386:107:44",
            "stateMutability": "view",
            "superFunction": 18827,
            "visibility": "public"
          }
        ],
        "scope": 16239,
        "src": "75:2421:44"
      }
    ],
    "src": "0:2497:44"
  },
  "legacyAST": {
    "absolutePath": "contracts/accounting/statements/BalanceSheet.sol",
    "exportedSymbols": {
      "BalanceSheet": [
        16238
      ]
    },
    "id": 16239,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16039,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:44"
      },
      {
        "absolutePath": "contracts/interfaces/IBalanceSheet.sol",
        "file": "contracts/interfaces/IBalanceSheet.sol",
        "id": 16040,
        "nodeType": "ImportDirective",
        "scope": 16239,
        "sourceUnit": 18829,
        "src": "25:48:44",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 16041,
              "name": "IBalanceSheet",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 18828,
              "src": "100:13:44",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IBalanceSheet_$18828",
                "typeString": "contract IBalanceSheet"
              }
            },
            "id": 16042,
            "nodeType": "InheritanceSpecifier",
            "src": "100:13:44"
          }
        ],
        "contractDependencies": [
          18828
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 16238,
        "linearizedBaseContracts": [
          16238,
          18828
        ],
        "name": "BalanceSheet",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 16045,
            "name": "month",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "134:25:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16043,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "134:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "373132",
              "id": 16044,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "150:9:44",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2563200_by_1",
                "typeString": "int_const 2563200"
              },
              "value": "712"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 16048,
            "name": "twoMonths",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "163:30:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16046,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "163:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31343234",
              "id": 16047,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "183:10:44",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5126400_by_1",
                "typeString": "int_const 5126400"
              },
              "value": "1424"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 16051,
            "name": "quarter",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "197:28:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16049,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "197:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "32313336",
              "id": 16050,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "215:10:44",
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
            "id": 16054,
            "name": "year",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "229:25:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16052,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "229:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "38353434",
              "id": 16053,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "244:10:44",
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
            "id": 16056,
            "name": "startTime",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "965:17:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16055,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "965:7:44",
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
            "id": 16058,
            "name": "dao",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "987:11:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 16057,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "987:7:44",
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
            "id": 16062,
            "name": "detailedAssets",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "1003:40:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
              "typeString": "mapping(string => int256)"
            },
            "typeName": {
              "id": 16061,
              "keyType": {
                "id": 16059,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1011:6:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "1003:25:44",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                "typeString": "mapping(string => int256)"
              },
              "valueType": {
                "id": 16060,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "1021:6:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 16066,
            "name": "detailedLiabilities",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "1047:45:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
              "typeString": "mapping(string => int256)"
            },
            "typeName": {
              "id": 16065,
              "keyType": {
                "id": 16063,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1055:6:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "1047:25:44",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                "typeString": "mapping(string => int256)"
              },
              "valueType": {
                "id": 16064,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "1065:6:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 16070,
            "name": "detailedEquity",
            "nodeType": "VariableDeclaration",
            "scope": 16238,
            "src": "1096:40:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
              "typeString": "mapping(string => int256)"
            },
            "typeName": {
              "id": 16069,
              "keyType": {
                "id": 16067,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1104:6:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "1096:25:44",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                "typeString": "mapping(string => int256)"
              },
              "valueType": {
                "id": 16068,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "1114:6:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16080,
              "nodeType": "Block",
              "src": "1158:46:44",
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
                        "id": 16076,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 16073,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22464,
                            "src": "1173:3:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 16074,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1173:10:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 16075,
                          "name": "dao",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16058,
                          "src": "1187:3:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1173:17:44",
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
                      "id": 16072,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        22467,
                        22468
                      ],
                      "referencedDeclaration": 22467,
                      "src": "1165:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16077,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1165:26:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16078,
                  "nodeType": "ExpressionStatement",
                  "src": "1165:26:44"
                },
                {
                  "id": 16079,
                  "nodeType": "PlaceholderStatement",
                  "src": "1197:1:44"
                }
              ]
            },
            "documentation": null,
            "id": 16081,
            "name": "onlyDAO",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 16071,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1158:0:44"
            },
            "src": "1141:63:44",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16105,
              "nodeType": "Block",
              "src": "1227:105:44",
              "statements": [
                {
                  "assignments": [
                    16084
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16084,
                      "name": "_hours",
                      "nodeType": "VariableDeclaration",
                      "scope": 16106,
                      "src": "1234:11:44",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16083,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1234:4:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16097,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 16096,
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
                      "id": 16094,
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
                        "id": 16092,
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
                          "id": 16090,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 16087,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 16085,
                                  "name": "now",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 22466,
                                  "src": "1249:3:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 16086,
                                  "name": "startTime",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 16056,
                                  "src": "1255:9:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1249:15:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 16088,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1248:17:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3630",
                            "id": 16089,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1268:2:44",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_60_by_1",
                              "typeString": "int_const 60"
                            },
                            "value": "60"
                          },
                          "src": "1248:22:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3630",
                          "id": 16091,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1273:2:44",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_60_by_1",
                            "typeString": "int_const 60"
                          },
                          "value": "60"
                        },
                        "src": "1248:27:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3234",
                        "id": 16093,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1278:2:44",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_24_by_1",
                          "typeString": "int_const 24"
                        },
                        "value": "24"
                      },
                      "src": "1248:32:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3630",
                      "id": 16095,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1283:2:44",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_60_by_1",
                        "typeString": "int_const 60"
                      },
                      "value": "60"
                    },
                    "src": "1248:37:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1234:51:44"
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
                        "id": 16101,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 16099,
                          "name": "_hours",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16084,
                          "src": "1300:6:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 16100,
                          "name": "quarter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16051,
                          "src": "1310:7:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1300:17:44",
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
                      "id": 16098,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        22467,
                        22468
                      ],
                      "referencedDeclaration": 22467,
                      "src": "1292:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1292:26:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16103,
                  "nodeType": "ExpressionStatement",
                  "src": "1292:26:44"
                },
                {
                  "id": 16104,
                  "nodeType": "PlaceholderStatement",
                  "src": "1325:1:44"
                }
              ]
            },
            "documentation": null,
            "id": 16106,
            "name": "inQuarter",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 16082,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1227:0:44"
            },
            "src": "1208:124:44",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16119,
              "nodeType": "Block",
              "src": "1362:45:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16111,
                      "name": "dao",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16058,
                      "src": "1369:3:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16112,
                      "name": "_dao",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16108,
                      "src": "1375:4:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1369:10:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 16114,
                  "nodeType": "ExpressionStatement",
                  "src": "1369:10:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16115,
                      "name": "startTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16056,
                      "src": "1386:9:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16116,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22466,
                      "src": "1398:3:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1386:15:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 16118,
                  "nodeType": "ExpressionStatement",
                  "src": "1386:15:44"
                }
              ]
            },
            "documentation": null,
            "id": 16120,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16108,
                  "name": "_dao",
                  "nodeType": "VariableDeclaration",
                  "scope": 16120,
                  "src": "1348:12:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16107,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1348:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1347:14:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16110,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1362:0:44"
            },
            "scope": 16238,
            "src": "1336:71:44",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16142,
              "nodeType": "Block",
              "src": "1485:81:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 16131,
                        "name": "detailedAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16062,
                        "src": "1492:14:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                          "typeString": "mapping(string memory => int256)"
                        }
                      },
                      "id": 16133,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 16132,
                        "name": "_asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16122,
                        "src": "1507:6:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1492:22:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16134,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16124,
                      "src": "1517:6:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1492:31:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 16136,
                  "nodeType": "ExpressionStatement",
                  "src": "1492:31:44"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16138,
                        "name": "_asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16122,
                        "src": "1545:6:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16139,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16124,
                        "src": "1553:6:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 16137,
                      "name": "SetAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18763,
                      "src": "1535:9:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                        "typeString": "function (string memory,int256)"
                      }
                    },
                    "id": 16140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1535:25:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16141,
                  "nodeType": "EmitStatement",
                  "src": "1530:30:44"
                }
              ]
            },
            "documentation": null,
            "id": 16143,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 16127,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16126,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16081,
                  "src": "1467:7:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1467:7:44"
              },
              {
                "arguments": null,
                "id": 16129,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16128,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16106,
                  "src": "1475:9:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1475:9:44"
              }
            ],
            "name": "setAssets",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16122,
                  "name": "_asset",
                  "nodeType": "VariableDeclaration",
                  "scope": 16143,
                  "src": "1430:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16121,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1430:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16124,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16143,
                  "src": "1445:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16123,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1445:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1429:30:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16130,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1485:0:44"
            },
            "scope": 16238,
            "src": "1411:155:44",
            "stateMutability": "nonpayable",
            "superFunction": 18782,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16165,
              "nodeType": "Block",
              "src": "1655:98:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16158,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 16154,
                        "name": "detailedAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16062,
                        "src": "1662:14:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                          "typeString": "mapping(string memory => int256)"
                        }
                      },
                      "id": 16156,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 16155,
                        "name": "_liabilities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16145,
                        "src": "1677:12:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1662:28:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16157,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16147,
                      "src": "1693:6:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1662:37:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 16159,
                  "nodeType": "ExpressionStatement",
                  "src": "1662:37:44"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16161,
                        "name": "_liabilities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16145,
                        "src": "1726:12:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16162,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16147,
                        "src": "1740:6:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 16160,
                      "name": "SetLiabilities",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18769,
                      "src": "1711:14:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                        "typeString": "function (string memory,int256)"
                      }
                    },
                    "id": 16163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1711:36:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16164,
                  "nodeType": "EmitStatement",
                  "src": "1706:41:44"
                }
              ]
            },
            "documentation": null,
            "id": 16166,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 16150,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16149,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16081,
                  "src": "1637:7:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1637:7:44"
              },
              {
                "arguments": null,
                "id": 16152,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16151,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16106,
                  "src": "1645:9:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1645:9:44"
              }
            ],
            "name": "setLiabilities",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16148,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16145,
                  "name": "_liabilities",
                  "nodeType": "VariableDeclaration",
                  "scope": 16166,
                  "src": "1594:19:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16144,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1594:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16147,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16166,
                  "src": "1615:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16146,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1615:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1593:36:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16153,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1655:0:44"
            },
            "scope": 16238,
            "src": "1570:183:44",
            "stateMutability": "nonpayable",
            "superFunction": 18789,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16188,
              "nodeType": "Block",
              "src": "1832:83:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 16177,
                        "name": "detailedAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16062,
                        "src": "1839:14:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                          "typeString": "mapping(string memory => int256)"
                        }
                      },
                      "id": 16179,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 16178,
                        "name": "_equity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16168,
                        "src": "1854:7:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1839:23:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16180,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16170,
                      "src": "1865:6:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1839:32:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 16182,
                  "nodeType": "ExpressionStatement",
                  "src": "1839:32:44"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16184,
                        "name": "_equity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16168,
                        "src": "1893:7:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16185,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16170,
                        "src": "1902:6:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 16183,
                      "name": "SetEquity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18775,
                      "src": "1883:9:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                        "typeString": "function (string memory,int256)"
                      }
                    },
                    "id": 16186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1883:26:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16187,
                  "nodeType": "EmitStatement",
                  "src": "1878:31:44"
                }
              ]
            },
            "documentation": null,
            "id": 16189,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 16173,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16172,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16081,
                  "src": "1814:7:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1814:7:44"
              },
              {
                "arguments": null,
                "id": 16175,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16174,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16106,
                  "src": "1822:9:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1822:9:44"
              }
            ],
            "name": "setEquity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16168,
                  "name": "_equity",
                  "nodeType": "VariableDeclaration",
                  "scope": 16189,
                  "src": "1776:14:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16167,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1776:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16170,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16189,
                  "src": "1792:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16169,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1792:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1775:31:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16176,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1832:0:44"
            },
            "scope": 16238,
            "src": "1757:158:44",
            "stateMutability": "nonpayable",
            "superFunction": 18796,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16194,
              "nodeType": "Block",
              "src": "1990:8:44",
              "statements": []
            },
            "documentation": null,
            "id": 16195,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMarginOfSafety",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16190,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1958:2:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16192,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16195,
                  "src": "1982:6:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16191,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1982:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1981:8:44"
            },
            "scope": 16238,
            "src": "1932:66:44",
            "stateMutability": "view",
            "superFunction": 18801,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16200,
              "nodeType": "Block",
              "src": "2060:89:44",
              "statements": []
            },
            "documentation": null,
            "id": 16201,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAcidTestResult",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16196,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2028:2:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16199,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16198,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16201,
                  "src": "2052:6:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16197,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2052:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2051:8:44"
            },
            "scope": 16238,
            "src": "2002:147:44",
            "stateMutability": "view",
            "superFunction": 18806,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16212,
              "nodeType": "Block",
              "src": "2215:42:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 16208,
                      "name": "detailedAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16062,
                      "src": "2229:14:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                        "typeString": "mapping(string memory => int256)"
                      }
                    },
                    "id": 16210,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 16209,
                      "name": "_asset",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16203,
                      "src": "2244:6:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2229:22:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 16207,
                  "id": 16211,
                  "nodeType": "Return",
                  "src": "2222:29:44"
                }
              ]
            },
            "documentation": null,
            "id": 16213,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAsset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16203,
                  "name": "_asset",
                  "nodeType": "VariableDeclaration",
                  "scope": 16213,
                  "src": "2171:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16202,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2171:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2170:15:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16207,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16206,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16213,
                  "src": "2207:6:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16205,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2207:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2206:8:44"
            },
            "scope": 16238,
            "src": "2153:104:44",
            "stateMutability": "view",
            "superFunction": 18813,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16224,
              "nodeType": "Block",
              "src": "2331:51:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 16220,
                      "name": "detailedLiabilities",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16066,
                      "src": "2345:19:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                        "typeString": "mapping(string memory => int256)"
                      }
                    },
                    "id": 16222,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 16221,
                      "name": "_liability",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16215,
                      "src": "2365:10:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2345:31:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 16219,
                  "id": 16223,
                  "nodeType": "Return",
                  "src": "2338:38:44"
                }
              ]
            },
            "documentation": null,
            "id": 16225,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLiability",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16216,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16215,
                  "name": "_liability",
                  "nodeType": "VariableDeclaration",
                  "scope": 16225,
                  "src": "2283:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16214,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2283:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2282:19:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16218,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16225,
                  "src": "2323:6:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16217,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2323:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2322:8:44"
            },
            "scope": 16238,
            "src": "2261:121:44",
            "stateMutability": "view",
            "superFunction": 18820,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16236,
              "nodeType": "Block",
              "src": "2450:43:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 16232,
                      "name": "detailedEquity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16070,
                      "src": "2464:14:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                        "typeString": "mapping(string memory => int256)"
                      }
                    },
                    "id": 16234,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 16233,
                      "name": "_equity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16227,
                      "src": "2479:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2464:23:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 16231,
                  "id": 16235,
                  "nodeType": "Return",
                  "src": "2457:30:44"
                }
              ]
            },
            "documentation": null,
            "id": 16237,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getEquity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16227,
                  "name": "_equity",
                  "nodeType": "VariableDeclaration",
                  "scope": 16237,
                  "src": "2405:14:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16226,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2405:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2404:16:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 16231,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16230,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16237,
                  "src": "2442:6:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16229,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2442:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2441:8:44"
            },
            "scope": 16238,
            "src": "2386:107:44",
            "stateMutability": "view",
            "superFunction": 18827,
            "visibility": "public"
          }
        ],
        "scope": 16239,
        "src": "75:2421:44"
      }
    ],
    "src": "0:2497:44"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-09T17:44:15.388Z"
}

module.exports = {

  balanceSheet

}
