import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";

import { resolve } from "path";

import { config as dotenvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import { NetworkUserConfig } from "hardhat/types";

dotenvConfig({ path: resolve(__dirname, "./.env") });

const chainIds = {
    goerli: 5,
    hardhat: 31337,
    kovan: 42,
    mainnet: 1,
    rinkeby: 4,
    ropsten: 3,
    tsc: 97,
    bsc: 56,
    fuji: 43113,
    avx: 43114,
};

// Ensure that we have all the environment variables we need.
const privateKey = process.env.PRIVATE_KEY ?? "NO_PRIVATE_KEY";
// Make sure node is setup on Alchemy website
const alchemyApiKey = process.env.ALCHEMY_API_KEY ?? "NO_ALCHEMY_API_KEY";

function getChainConfig(network: keyof typeof chainIds): NetworkUserConfig {
    const url = network == "tsc" ? `https://data-seed-prebsc-1-s1.binance.org:8545/` : `https://bsc-dataseed.binance.org/`;  
    // const url = network == "tsc" ? `https://bsc.getblock.io/testnet/?api_key=59c06b33-57f6-49b2-9485-c6f096a8f09d`:`https://eth-${network}.alchemyapi.io/v2/${alchemyApiKey}`;
    // const url = network == "tsc" ? `https://bsc.getblock.io/testnet/?api_key=59c06b33-57f6-49b2-9485-c6f096a8f09d`:`https://eth-${network}.alchemyapi.io/v2/${alchemyApiKey}`;
    // const url = `https://eth-${network}.alchemyapi.io/v2/${alchemyApiKey}`;
    return {
        accounts: [`${privateKey}`],
        chainId: chainIds[network],
        // gas: 3000000000,
        // gasPrice: 800000000000,
        // blockGasLimit: 80000000000000,
        blockGasLimit: 80000000000000000,
        // gas: 300000000000,
        // gasPrice: 8000000000000,
        gasPrice: 20e9,
        gas: 25e6,
        url,
    };
}

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    gasReporter: {
        currency: "USD",
        enabled: process.env.REPORT_GAS ? true : false,
        excludeContracts: [],
        src: "./contracts",
    },
    networks: {
        hardhat: {
            forking: {
                url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`,
            },
            //accounts: {
            //    mnemonic,
            //},
            chainId: chainIds.hardhat,
        },
        testnet: {
            url: "https://data-seed-prebsc-1-s2.binance.org:8545",
            chainId: 97,
            // gas: 2100000,
            gas: 2100000,
            gasPrice: 8000000000,
            accounts: {mnemonic: process.env.MNEMONIC},
        },
        tsc: getChainConfig("tsc"),
        avx: {
            chainId: 43114, 
            url: "https://api.avax.network/ext/bc/C/rpc",
            etherscan: {apiKey: "F1IPETUPDDVI6XNCEVXNUBS8323ZMNBSUK"},
            accounts: [`${privateKey}`],
            gasPrice: 25e9,
            gas: 25e6,
            blockGasLimit: 80000000000000000,
        },
        fuji: {
            chainId: 43113,
            url: "https://api.avax-test.network/ext/bc/C/rpc",
            accounts: [`${privateKey}`],
            gasPrice: 25e9,
            gas: 25e6,
            blockGasLimit: 80000000000000000,
        },
        bsc: {
            url: "https://bsc-dataseed.binance.org/",
            accounts: [`${privateKey}`],
            chainId: 56,
            // gas: 3000000000,
            // gasPrice: 800000000000,
            // blockGasLimit: 80000000000000,
            blockGasLimit: 80000000000000000,
            // gas: 300000000000,
            // gasPrice: 8000000000000,
            gasPrice: 20e9,
            gas: 25e6,
            etherscan: {apiKey: "F1IPETUPDDVI6XNCEVXNUBS8323ZMNBSUK"}
            // url: "ZD8K7QVDY32C6T9EVKV5XCKPQXVZG8JM6Q"
        },
        // Uncomment for testing.
        // rinkeby: getChainConfig("rinkeby"),
        // ropsten: getChainConfig("ropsten"),
    },
    // etherscan: {
    //     bsc: "ZD8K7QVDY32C6T9EVKV5XCKPQXVZG8JM6Q",
    //     avalanche: "F1IPETUPDDVI6XNCEVXNUBS8323ZMNBSUK",
    // },
    paths: {
        artifacts: "./artifacts",
        cache: "./cache",
        sources: "./contracts",
        tests: "./test",
        deploy: "./scripts/deploy",
        deployments: "./deployments",
    },
    solidity: {
        compilers: [
            {
                version: "0.8.10",
                settings: {
                    metadata: {
                        bytecodeHash: "none",
                    },
                    optimizer: {
                        enabled: true,
                        runs: 800,
                    },
                },
            },
            {
                version: "0.7.5",
                settings: {
                    metadata: {
                        bytecodeHash: "none",
                    },
                    optimizer: {
                        enabled: true,
                        runs: 800,
                    },
                },
            },
            {
                version: "0.5.16",
            },
        ],
        settings: {
            outputSelection: {
                "*": {
                    "*": ["storageLayout"],
                },
            },
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        daoMultisig: {
            // mainnet
            // 1: "0x245cc372C84B3645Bf0Ffe6538620B04a217988B",
            1: "0xa25f813Db58418069b63B66FeF20EA97139C5280",
            97: "0xa25f813Db58418069b63B66FeF20EA97139C5280",
        },
    },
    typechain: {
        outDir: "types",
        target: "ethers-v5",
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
};

export default config;
