/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CrossChainMigrator,
  CrossChainMigratorInterface,
} from "../CrossChainMigrator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_wsOHM",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gOHM",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [],
    name: "clear",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "replenish",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610b71380380610b718339818101604052604081101561003357600080fd5b508051602090910151600080546001600160a01b03191633178082556040516001600160a01b039190911691907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a36001600160a01b0382166100e0576040805162461bcd60e51b815260206004820152601360248201527f5a65726f20616464726573733a2077734f484d00000000000000000000000000604482015290519081900360640190fd5b6001600160601b0319606083901b166080526001600160a01b038116610142576040805162461bcd60e51b81526020600482015260126024820152715a65726f20616464726573733a20674f484d60701b604482015290519081900360640190fd5b606081811b6001600160601b03191660a052608051901c91506001600160a01b03166109d761019a6000398061021a528061044d52806104ee5250806101e5528061037f5280610420528061063652506109d76000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806352efea6e1161005b57806352efea6e146100fe5780635a96ac0a146101065780638da5cb5b146100da578063d163af7b1461010e57610088565b8063089208d81461008d578063454b06081461009757806346f68ee9146100b4578063481c6a75146100da575b600080fd5b610095610116565b005b610095600480360360208110156100ad57600080fd5b50356101d8565b610095600480360360208110156100ca57600080fd5b50356001600160a01b0316610244565b6100e261030b565b604080516001600160a01b039092168252519081900360200190f35b61009561031a565b610095610517565b6100956105d1565b6000546001600160a01b03163314610175576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d908390a36000805473ffffffffffffffffffffffffffffffffffffffff19908116909155600180549091169055565b61020d6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330846106a1565b6102416001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163383610829565b50565b6000546001600160a01b031633146102a3576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a36001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b6000546001600160a01b03163314610379576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610447337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156103ea57600080fd5b505afa1580156103fe573d6000803e3d6000fd5b505050506040513d602081101561041457600080fd5b50516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190610829565b610515337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156104b857600080fd5b505afa1580156104cc573d6000803e3d6000fd5b505050506040513d60208110156104e257600080fd5b50516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190610829565b565b6001546001600160a01b031633146105605760405162461bcd60e51b81526004018080602001828103825260228152602001806109a96022913960400191505060405180910390fd5b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b03841617909155169055565b6000546001600160a01b03163314610630576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610515337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156103ea57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b17815292518251600094606094938a169392918291908083835b6020831061073b5780518252601f19909201916020918201910161071c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461079d576040519150601f19603f3d011682016040523d82523d6000602084013e6107a2565b606091505b50915091508180156107d05750805115806107d057508080602001905160208110156107cd57600080fd5b50515b610821576040805162461bcd60e51b815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000604482015290519081900360640190fd5b505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106108bb5780518252601f19909201916020918201910161089c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461091d576040519150601f19603f3d011682016040523d82523d6000602084013e610922565b606091505b5091509150818015610950575080511580610950575080806020019051602081101561094d57600080fd5b50515b6109a1576040805162461bcd60e51b815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015290519081900360640190fd5b505050505056fe4f776e61626c653a206d757374206265206e6577206f776e657220746f2070756c6ca164736f6c6343000705000a";

export class CrossChainMigrator__factory extends ContractFactory {
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
    _wsOHM: string,
    _gOHM: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CrossChainMigrator> {
    return super.deploy(
      _wsOHM,
      _gOHM,
      overrides || {}
    ) as Promise<CrossChainMigrator>;
  }
  getDeployTransaction(
    _wsOHM: string,
    _gOHM: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_wsOHM, _gOHM, overrides || {});
  }
  attach(address: string): CrossChainMigrator {
    return super.attach(address) as CrossChainMigrator;
  }
  connect(signer: Signer): CrossChainMigrator__factory {
    return super.connect(signer) as CrossChainMigrator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossChainMigratorInterface {
    return new utils.Interface(_abi) as CrossChainMigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainMigrator {
    return new Contract(address, _abi, signerOrProvider) as CrossChainMigrator;
  }
}
