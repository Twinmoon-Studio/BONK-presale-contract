/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IOHMERC20, IOHMERC20Interface } from "../IOHMERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IOHMERC20__factory {
  static readonly abi = _abi;
  static createInterface(): IOHMERC20Interface {
    return new utils.Interface(_abi) as IOHMERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOHMERC20 {
    return new Contract(address, _abi, signerOrProvider) as IOHMERC20;
  }
}
