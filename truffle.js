var HDWalletProvider = require("truffle-hdwallet-provider");

//ADD YOUR OWN MNEMONIC (and keep it secret so don't push it to a repo)

var mnemonic = "";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      from: "0x6259ac218eed8caf47e26246d7e13c1df70165f2",
      gas: 7950000
    },

    rinkeby: {
        provider: function() {
          return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/")
        },
        network_id: 4,
        gas: 7000000
    },

    ropsten: {
        provider: function() {
          return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/")
        },
        network_id: 3,
        gas: 7000000
    }

  },

  mocha: {
    enableTimeouts: false
  }

};
