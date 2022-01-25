/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BONKSwap, BONKSwapInterface } from "../BONKSwap";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Donate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bonkAmount",
        type: "uint256",
      },
    ],
    name: "Exchange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipPulled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipPushed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ReturnTokens",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SetAlphaToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SetStableToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SetTestToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferToken",
    type: "event",
  },
  {
    inputs: [],
    name: "aBONK",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "donate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "exchange",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "getBalances",
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
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pullManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner_",
        type: "address",
      },
    ],
    name: "pushManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "setAlphaToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "setStableToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "setTestToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stableToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "testToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600280546001600160a01b03199081167381d7a0cd230772ffdb6d72ee8f4235c2a1680ef41790915560038054821673d586e7f844cea2f87f50152665bcbc2c279d8d7017905560048054909116721adc93dbc0107adba1ea16db4ad3260d92e4d617905534801561007557600080fd5b50600080546001600160a01b03191633178082556040516001600160a01b039190911691907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a3610f0c806100ce6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80635a96ac0a11610097578063c84aae1711610066578063c84aae171461023d578063db1bc87b14610263578063e69d849d14610289578063f5537ede146102b557610100565b80635a96ac0a146102255780636895179d1461022d5780638da5cb5b146101f7578063a9d75b2b1461023557610100565b806346f68ee9116100d357806346f68ee9146101ad57806347f0f3f5146101d3578063481c6a75146101f75780635a3cbc8b146101ff57610100565b8063045d038914610105578063089208d81461014557806327e235e31461014f57806343c7130114610187575b600080fd5b6101316004803603604081101561011b57600080fd5b506001600160a01b0381351690602001356102eb565b604080519115158252519081900360200190f35b61014d61065f565b005b6101756004803603602081101561016557600080fd5b50356001600160a01b0316610714565b60408051918252519081900360200190f35b61014d6004803603602081101561019d57600080fd5b50356001600160a01b0316610726565b61014d600480360360208110156101c357600080fd5b50356001600160a01b03166107d9565b6101db610893565b604080516001600160a01b039092168252519081900360200190f35b6101db6108a2565b61014d6004803603602081101561021557600080fd5b50356001600160a01b03166108b1565b61014d610964565b6101db610a11565b6101db610a20565b6101756004803603602081101561025357600080fd5b50356001600160a01b0316610a2f565b61014d6004803603602081101561027957600080fd5b50356001600160a01b0316610ab2565b61014d6004803603604081101561029f57600080fd5b506001600160a01b038135169060200135610b65565b61014d600480360360608110156102cb57600080fd5b506001600160a01b03813581169160208101359091169060400135610ca9565b6000808211610341576040805162461bcd60e51b815260206004820152601860248201527f596f752063616e6e6f742065786368616e6765207a65726f0000000000000000604482015290519081900360640190fd5b6003546001600160a01b038481169116148061036a57506004546001600160a01b038481169116145b1561065557600254604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156103ba57600080fd5b505afa1580156103ce573d6000803e3d6000fd5b505050506040513d60208110156103e457600080fd5b5051905082811061065357336000908152600560208181526040808420805488019055805163095ea7b360e01b8152306004820152602481018890529051928704936001600160a01b0389169363095ea7b3936044808501949193918390030190829087803b15801561045657600080fd5b505af115801561046a573d6000803e3d6000fd5b505050506040513d602081101561048057600080fd5b5050604080516323b872dd60e01b81523360048201523060248201526044810186905290516001600160a01b038716916323b872dd9160648083019260209291908290030181600087803b1580156104d757600080fd5b505af11580156104eb573d6000803e3d6000fd5b505050506040513d602081101561050157600080fd5b50506002546040805163095ea7b360e01b81523060048201526024810184905290516001600160a01b039092169163095ea7b3916044808201926020929091908290030181600087803b15801561055757600080fd5b505af115801561056b573d6000803e3d6000fd5b505050506040513d602081101561058157600080fd5b5050600254604080516323b872dd60e01b81523060048201523360248201526044810184905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b1580156105dd57600080fd5b505af11580156105f1573d6000803e3d6000fd5b505050506040513d602081101561060757600080fd5b50506040805185815233602082015280820183905290517fd3f82ae0d1038b8d165a11b1a6a6fd1984e86f46053ca91209cfde3168210aff9181900360600190a1600192505050610659565b505b5060005b92915050565b6000546001600160a01b031633146106be576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d908390a3600080546001600160a01b0319908116909155600180549091169055565b60056020526000908152604090205481565b6000546001600160a01b03163314610785576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600280546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f3b4eb3fc85891ebc928ae5ee3dd24931fc9de2cbd1b8c3e0fb7b9bcfca14e6869181900360200190a150565b6000546001600160a01b03163314610838576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6002546001600160a01b031681565b6000546001600160a01b031690565b6000546001600160a01b03163314610910576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600480546001600160a01b0383166001600160a01b0319909116811790915560408051918252517fe208c2ed625a4f3469434af900e6d6ba824ca2e063cc6e9b7cc1c10cab1e5c119181900360200190a150565b6001546001600160a01b031633146109ad5760405162461bcd60e51b8152600401808060200182810382526022815260200180610ede6022913960400191505060405180910390fd5b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a360018054600080546001600160a01b03199081166001600160a01b03841617909155169055565b6004546001600160a01b031681565b6003546001600160a01b031681565b600080826001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610a7f57600080fd5b505afa158015610a93573d6000803e3d6000fd5b505050506040513d6020811015610aa957600080fd5b50519392505050565b6000546001600160a01b03163314610b11576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600380546001600160a01b0383166001600160a01b0319909116811790915560408051918252517fd54957d43bfccc59e985b6fadd7662791d33a46b2a0a565ae92e48f8c398c51d9181900360200190a150565b6040805163095ea7b360e01b81523060048201526024810183905290516001600160a01b0384169163095ea7b39160448083019260209291908290030181600087803b158015610bb457600080fd5b505af1158015610bc8573d6000803e3d6000fd5b505050506040513d6020811015610bde57600080fd5b5050604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b038416916323b872dd9160648083019260209291908290030181600087803b158015610c3557600080fd5b505af1158015610c49573d6000803e3d6000fd5b505050506040513d6020811015610c5f57600080fd5b5050604080516001600160a01b03841681526020810183905281517f0553260a2e46b0577270d8992db02d30856ca880144c72d6e9503760946aef13929181900390910190a15050565b6000546001600160a01b03163314610d08576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000836001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610d5757600080fd5b505afa158015610d6b573d6000803e3d6000fd5b505050506040513d6020811015610d8157600080fd5b50519050818110610ed7576040805163095ea7b360e01b81523060048201526024810184905290516001600160a01b0386169163095ea7b39160448083019260209291908290030181600087803b158015610ddb57600080fd5b505af1158015610def573d6000803e3d6000fd5b505050506040513d6020811015610e0557600080fd5b5050604080516323b872dd60e01b81523060048201526001600160a01b038581166024830152604482018590529151918616916323b872dd916064808201926020929091908290030181600087803b158015610e6057600080fd5b505af1158015610e74573d6000803e3d6000fd5b505050506040513d6020811015610e8a57600080fd5b5050604080516001600160a01b0380871682528516602082015280820184905290517f3844b7075ed6e7d4b61342769cb2b1b325cba410a62932affaa90aee247dadf59181900360600190a15b5050505056fe4f776e61626c653a206d757374206265206e6577206f776e657220746f2070756c6ca164736f6c6343000705000a";

export class BONKSwap__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BONKSwap> {
    return super.deploy(overrides || {}) as Promise<BONKSwap>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BONKSwap {
    return super.attach(address) as BONKSwap;
  }
  connect(signer: Signer): BONKSwap__factory {
    return super.connect(signer) as BONKSwap__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BONKSwapInterface {
    return new utils.Interface(_abi) as BONKSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BONKSwap {
    return new Contract(address, _abi, signerOrProvider) as BONKSwap;
  }
}