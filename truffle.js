module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "1513650517279" // match any network
    },
    production: {
      host: "bclkshtl2lef.eastus.cloudapp.azure.com",
      port: 8545,
      gas: 2900000,
      network_id: "*" // match any network
    }
  }
};
