const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with account: " + deployer.address);
    
    // const BUSD = "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7";
    
    const ABONK = await ethers.getContractFactory('AlphaBONK');
    const abonk = await ABONK.deploy();

    const TESTTOKEN = await ethers.getContractFactory('TestToken');
    const test = await TESTTOKEN.deploy();

    // const BONKSWAP = await ethers.getContractFactory('BONKSwap');
    // const bonkswap = await BONKSWAP.deploy(abonk.address, BUSD, test.address);

    console.log("ABONK : ", abonk.address);
    console.log("Test Token : ", test.address);
    // console.log("SWAP : ", bonkswap.address);
}

main()
    .then(() => process.exit())
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });