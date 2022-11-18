
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gasPrice: "58000000000" ,
      // networkCheckTimeout: 999999,
      WebSockets: true
    },
    
  },
  plugins: ["truffle-contract-size","truffle-plugin-verify"],
  compilers: {
    solc: {
      version: "0.8.13",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "petersburg",
      },
    },
  },
};