import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { CONTRACTS } from "../constants";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    // Deployment
    const alphaBONKDeployment = await deployments.get(CONTRACTS.aBONK);
    const BUSD = "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7";
    const testDeployment = await deployments.get(CONTRACTS.TestToken);

    console.log('Deployer address : ', deployer);
    await deploy(CONTRACTS.BONKSwap, {
        from: deployer,
        args: [
            alphaBONKDeployment.address, BUSD, testDeployment.address
        ],
        log: true,
    });
};

func.tags = [CONTRACTS.BONKSwap, "BONKSwap"];
export default func;