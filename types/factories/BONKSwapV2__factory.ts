/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BONKSwapV2, BONKSwapV2Interface } from "../BONKSwapV2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AirDrop",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "airDrop",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "returnTokens",
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
  "0x6080604052600280546001600160a01b031990811673c526cbaf899815a8bcc07fd714129408e3558061179091556003805482167378867bbeef44f2326bf8ddd1941a4439382ef2a71790556004805490911673bd48dc4f50d38098403d8846be121d6bdd70ae3217905534801561007657600080fd5b50600080546001600160a01b03191633178082556040516001600160a01b039190911691907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a3610e43806100cf6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80635a96ac0a11610097578063c84aae1711610066578063c84aae1714610203578063e69d849d14610229578063f5537ede14610255578063f9718fc81461028b576100f5565b80635a96ac0a146101eb5780636895179d146101f35780638da5cb5b146101e3578063a9d75b2b146101fb576100f5565b806327e235e3116100d357806327e235e31461016157806346f68ee91461019957806347f0f3f5146101bf578063481c6a75146101e3576100f5565b8063045d0389146100fa578063089208d81461013a5780631cd965a714610144575b600080fd5b6101266004803603604081101561011057600080fd5b506001600160a01b038135169060200135610293565b604080519115158252519081900360200190f35b6101426105a4565b005b6101426004803603602081101561015a57600080fd5b5035610666565b6101876004803603602081101561017757600080fd5b50356001600160a01b03166107a2565b60408051918252519081900360200190f35b610142600480360360208110156101af57600080fd5b50356001600160a01b03166107b4565b6101c761087b565b604080516001600160a01b039092168252519081900360200190f35b6101c761088a565b610142610899565b6101c7610953565b6101c7610962565b6101876004803603602081101561021957600080fd5b50356001600160a01b0316610971565b6101426004803603604081101561023f57600080fd5b506001600160a01b0381351690602001356109f4565b6101426004803603606081101561026b57600080fd5b506001600160a01b03813581169160208101359091169060400135610b38565b610142610cf1565b6003546000906001600160a01b03848116911614806102bf57506004546001600160a01b038481169116145b1561059a57600254604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561030f57600080fd5b505afa158015610323573d6000803e3d6000fd5b505050506040513d602081101561033957600080fd5b5051905082811061059857336000908152600560209081526040808320805487019055805163095ea7b360e01b81523060048201526024810187905290516001600160a01b0388169363095ea7b393604480850194919392918390030190829087803b1580156103a857600080fd5b505af11580156103bc573d6000803e3d6000fd5b505050506040513d60208110156103d257600080fd5b5050604080516323b872dd60e01b81523360048201523060248201526044810185905290516001600160a01b038616916323b872dd9160648083019260209291908290030181600087803b15801561042957600080fd5b505af115801561043d573d6000803e3d6000fd5b505050506040513d602081101561045357600080fd5b50506002546040805163095ea7b360e01b81523060048201526024810186905290516001600160a01b039092169163095ea7b3916044808201926020929091908290030181600087803b1580156104a957600080fd5b505af11580156104bd573d6000803e3d6000fd5b505050506040513d60208110156104d357600080fd5b5050600254604080516323b872dd60e01b81523060048201523360248201526044810186905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b15801561052f57600080fd5b505af1158015610543573d6000803e3d6000fd5b505050506040513d602081101561055957600080fd5b50506040805184815290517f11d92a0857878af15713bca494b98c6a4b566d1abbb0db6de15370430d4b4ebd9181900360200190a1600191505061059e565b505b5060005b92915050565b6000546001600160a01b03163314610603576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d908390a36000805473ffffffffffffffffffffffffffffffffffffffff19908116909155600180549091169055565b6002546040805163095ea7b360e01b81523060048201526024810184905290516001600160a01b039092169163095ea7b3916044808201926020929091908290030181600087803b1580156106ba57600080fd5b505af11580156106ce573d6000803e3d6000fd5b505050506040513d60208110156106e457600080fd5b5050600254604080516323b872dd60e01b81523060048201523360248201526044810184905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b15801561074057600080fd5b505af1158015610754573d6000803e3d6000fd5b505050506040513d602081101561076a57600080fd5b50506040805182815290517fdef871ef10667e18f9805d444377618f789b5757fe0b2d5f97f9f7b64bf8232b9181900360200190a150565b60056020526000908152604090205481565b6000546001600160a01b03163314610813576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a36001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6002546001600160a01b031681565b6000546001600160a01b031690565b6001546001600160a01b031633146108e25760405162461bcd60e51b8152600401808060200182810382526022815260200180610e156022913960400191505060405180910390fd5b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b03841617909155169055565b6004546001600160a01b031681565b6003546001600160a01b031681565b600080826001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156109c157600080fd5b505afa1580156109d5573d6000803e3d6000fd5b505050506040513d60208110156109eb57600080fd5b50519392505050565b6040805163095ea7b360e01b81523060048201526024810183905290516001600160a01b0384169163095ea7b39160448083019260209291908290030181600087803b158015610a4357600080fd5b505af1158015610a57573d6000803e3d6000fd5b505050506040513d6020811015610a6d57600080fd5b5050604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b038416916323b872dd9160648083019260209291908290030181600087803b158015610ac457600080fd5b505af1158015610ad8573d6000803e3d6000fd5b505050506040513d6020811015610aee57600080fd5b5050604080516001600160a01b03841681526020810183905281517f0553260a2e46b0577270d8992db02d30856ca880144c72d6e9503760946aef13929181900390910190a15050565b6000546001600160a01b03163314610b97576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000836001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610be657600080fd5b505afa158015610bfa573d6000803e3d6000fd5b505050506040513d6020811015610c1057600080fd5b50519050818110610ceb57604080516323b872dd60e01b81523060048201526001600160a01b038581166024830152604482018590529151918616916323b872dd916064808201926020929091908290030181600087803b158015610c7457600080fd5b505af1158015610c88573d6000803e3d6000fd5b505050506040513d6020811015610c9e57600080fd5b5050604080516001600160a01b0380871682528516602082015280820184905290517f3844b7075ed6e7d4b61342769cb2b1b325cba410a62932affaa90aee247dadf59181900360600190a15b50505050565b6000546001600160a01b03163314610d50576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b336000818152600560209081526040808320805490849055600354825163a9059cbb60e01b8152600481019690965260248601829052915190946001600160a01b039092169363a9059cbb93604480850194919392918390030190829087803b158015610dbc57600080fd5b505af1158015610dd0573d6000803e3d6000fd5b505050506040513d6020811015610de657600080fd5b50506040517fead2326457f761d6691c05978b962b1d5563ba5026a65f2b25b71f0e429e682190600090a15056fe4f776e61626c653a206d757374206265206e6577206f776e657220746f2070756c6ca164736f6c6343000705000a";

export class BONKSwapV2__factory extends ContractFactory {
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
  ): Promise<BONKSwapV2> {
    return super.deploy(overrides || {}) as Promise<BONKSwapV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BONKSwapV2 {
    return super.attach(address) as BONKSwapV2;
  }
  connect(signer: Signer): BONKSwapV2__factory {
    return super.connect(signer) as BONKSwapV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BONKSwapV2Interface {
    return new utils.Interface(_abi) as BONKSwapV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BONKSwapV2 {
    return new Contract(address, _abi, signerOrProvider) as BONKSwapV2;
  }
}
