/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");
 require("@nomiclabs/hardhat-etherscan");
 require('hardhat-contract-sizer');
 require('dotenv').config()
 
 module.exports = {
   networks: {
    ethmain: {
      url: "https://eth-mainnet.public.blastapi.io",
      chainId: 1,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 4,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 3,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    bnb: {
       url: "https://data-seed-prebsc-2-s2.binance.org:8545",
       chainId: 97,
       accounts: [`${process.env.PRIVATE_KEY}`]
     },
     kovan: {
      url: "https://kovan.infura.io/v3/66184b0d11d84613ae4721803d5a8560",
      chainId: 42,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
     mainbsc: {
       url: "https://bsc-dataseed.binance.org/",
       chainId: 56,
       accounts: [`${process.env.PRIVATE_KEY}`]
     },
     avalancheTest: {
       url: 'https://api.avax-test.network/ext/bc/C/rpc',
       gasPrice: 225000000000,
       chainId: 43113,
       accounts: [`${process.env.PRIVATE_KEY}`]
     },
     avalancheMain: {
       url: 'https://api.avax.network/ext/bc/C/rpc',
       gasPrice: 225000000000,
       chainId: 43114,
       accounts: [`${process.env.PRIVATE_KEY}`]
     }
   },
   etherscan: {
     apiKey: "NURDXE28N6MM9VI216UCSEBZVV5IA7UWSS" // for ether network
    //  apiKey: "N2E5BV7EU18ZEFEMGM8YS5NBPPQH9QJK3Q"   // for bnb network
    // apiKey: "BCT83TFQ1QJ7XPRIVG2V82YVF6SVTRVNDE" // avalanche network
   },
   solidity: {
     version: "0.8.0",
     settings: {
       optimizer: {
         enabled: true,
         runs: 1,
       },
     },
 
   },
   contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    only: [':ERC20$'],
  }
 };
 