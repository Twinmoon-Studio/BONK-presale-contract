/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITeller, ITellerInterface } from "../ITeller";

const _abi = [
  {
    inputs: [],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bonder",
        type: "address",
      },
      {
        internalType: "address",
        name: "_principal",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_principalPaid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_payout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expires",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_feo",
        type: "address",
      },
    ],
    name: "newBond",
    outputs: [
      {
        internalType: "uint256",
        name: "index_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bonder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "pendingFor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bonder",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_indexes",
        type: "uint256[]",
      },
    ],
    name: "pendingForIndexes",
    outputs: [
      {
        internalType: "uint256",
        name: "pending_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bonder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "percentVestedFor",
    outputs: [
      {
        internalType: "uint256",
        name: "percentVested_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bonder",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_indexes",
        type: "uint256[]",
      },
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bonder",
        type: "address",
      },
    ],
    name: "redeemAll",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "setFEReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bonder",
        type: "address",
      },
    ],
    name: "totalPendingFor",
    outputs: [
      {
        internalType: "uint256",
        name: "pending_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bonder",
        type: "address",
      },
    ],
    name: "updateIndexesFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITeller__factory {
  static readonly abi = _abi;
  static createInterface(): ITellerInterface {
    return new utils.Interface(_abi) as ITellerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITeller {
    return new Contract(address, _abi, signerOrProvider) as ITeller;
  }
}
