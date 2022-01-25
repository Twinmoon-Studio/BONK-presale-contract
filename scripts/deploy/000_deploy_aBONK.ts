import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { CONTRACTS } from "../constants";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    console.log('Deployer address : ', deployer);
    await deploy(CONTRACTS.aBONK, {
        from: deployer,
        log: true,
    });
};

func.tags = [CONTRACTS.aBONK, "aBONK", "alpha"];
export default func;