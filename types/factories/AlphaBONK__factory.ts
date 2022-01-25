/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AlphaBONK, AlphaBONKInterface } from "../AlphaBONK";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604080518082018252600a815269416c70686120424f4e4b60b01b60208083019190915282518084018452600581526461424f4e4b60d81b91810191909152600080546001600160a01b03191633178082559351929391926012928592859285926001600160a01b031691907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a38251620000b8906005906020860190620002a1565b508151620000ce906006906020850190620002a1565b5060f81b7fff000000000000000000000000000000000000000000000000000000000000001660805250506000546200012193506001600160a01b031691506a295be96e64066972000000905062000127565b6200034d565b6001600160a01b03821662000183576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b62000191600083836200023a565b620001ad816004546200023f60201b6200092f1790919060201c565b6004556001600160a01b038216600090815260026020908152604090912054620001e29183906200092f6200023f821b17901c565b6001600160a01b03831660008181526002602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b6000828201838110156200029a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620002d9576000855562000324565b82601f10620002f457805160ff191683800117855562000324565b8280016001018555821562000324579182015b828111156200032457825182559160200191906001019062000307565b506200033292915062000336565b5090565b5b8082111562000332576000815560010162000337565b60805160f81c6110186200036b600039806105ca52506110186000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c806346f68ee9116100b25780638da5cb5b11610081578063a457c2d711610066578063a457c2d714610365578063a9059cbb14610391578063dd62ed3e146103bd57610136565b80638da5cb5b1461030b57806395d89b411461035d57610136565b806346f68ee9146102e5578063481c6a751461030b5780635a96ac0a1461032f57806370a082311461033757610136565b806323b872dd1161010957806339509351116100ee578063395093511461027057806340c10f191461029c57806342966c68146102c857610136565b806323b872dd1461021c578063313ce5671461025257610136565b806306fdde031461013b578063089208d8146101b8578063095ea7b3146101c257806318160ddd14610202575b600080fd5b6101436103eb565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017d578181015183820152602001610165565b50505050905090810190601f1680156101aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101c0610481565b005b6101ee600480360360408110156101d857600080fd5b506001600160a01b038135169060200135610543565b604080519115158252519081900360200190f35b61020a610559565b60408051918252519081900360200190f35b6101ee6004803603606081101561023257600080fd5b506001600160a01b0381358116916020810135909116906040013561055f565b61025a6105c8565b6040805160ff9092168252519081900360200190f35b6101ee6004803603604081101561028657600080fd5b506001600160a01b0381351690602001356105ec565b6101c0600480360360408110156102b257600080fd5b506001600160a01b038135169060200135610622565b6101c0600480360360208110156102de57600080fd5b503561068f565b6101c0600480360360208110156102fb57600080fd5b50356001600160a01b031661069c565b610313610763565b604080516001600160a01b039092168252519081900360200190f35b6101c0610772565b61020a6004803603602081101561034d57600080fd5b50356001600160a01b031661082c565b610143610847565b6101ee6004803603604081101561037b57600080fd5b506001600160a01b0381351690602001356108a8565b6101ee600480360360408110156103a757600080fd5b506001600160a01b0381351690602001356108f7565b61020a600480360360408110156103d357600080fd5b506001600160a01b0381358116916020013516610904565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104775780601f1061044c57610100808354040283529160200191610477565b820191906000526020600020905b81548152906001019060200180831161045a57829003601f168201915b5050505050905090565b6000546001600160a01b031633146104e0576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d908390a36000805473ffffffffffffffffffffffffffffffffffffffff19908116909155600180549091169055565b6000610550338484610990565b50600192915050565b60045490565b600061056c848484610a7c565b6105be84336105b985604051806060016040528060288152602001610f55602891396001600160a01b038a1660009081526003602090815260408083203384529091529020549190610bd9565b610990565b5060019392505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b3360008181526003602090815260408083206001600160a01b038716845290915281205490916105509185906105b9908661092f565b6000546001600160a01b03163314610681576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61068b8282610c70565b5050565b6106993382610d62565b50565b6000546001600160a01b031633146106fb576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a36001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b6001546001600160a01b031633146107bb5760405162461bcd60e51b8152600401808060200182810382526022815260200180610f336022913960400191505060405180910390fd5b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b03841617909155169055565b6001600160a01b031660009081526002602052604090205490565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104775780601f1061044c57610100808354040283529160200191610477565b600061055033846105b985604051806060016040528060258152602001610fe7602591393360009081526003602090815260408083206001600160a01b038d1684529091529020549190610bd9565b6000610550338484610a7c565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b600082820183811015610989576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b0383166109d55760405162461bcd60e51b8152600401808060200182810382526024815260200180610fc36024913960400191505060405180910390fd5b6001600160a01b038216610a1a5760405162461bcd60e51b8152600401808060200182810382526022815260200180610eeb6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260036020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610ac15760405162461bcd60e51b8152600401808060200182810382526025815260200180610f9e6025913960400191505060405180910390fd5b6001600160a01b038216610b065760405162461bcd60e51b8152600401808060200182810382526023815260200180610ea66023913960400191505060405180910390fd5b610b11838383610e5e565b610b4e81604051806060016040528060268152602001610f0d602691396001600160a01b0386166000908152600260205260409020549190610bd9565b6001600160a01b038085166000908152600260205260408082209390935590841681522054610b7d908261092f565b6001600160a01b0380841660008181526002602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610c685760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c2d578181015183820152602001610c15565b50505050905090810190601f168015610c5a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b038216610ccb576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610cd760008383610e5e565b600454610ce4908261092f565b6004556001600160a01b038216600090815260026020526040902054610d0a908261092f565b6001600160a01b03831660008181526002602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b038216610da75760405162461bcd60e51b8152600401808060200182810382526021815260200180610f7d6021913960400191505060405180910390fd5b610db382600083610e5e565b610df081604051806060016040528060228152602001610ec9602291396001600160a01b0385166000908152600260205260409020549190610bd9565b6001600160a01b038316600090815260026020526040902055600454610e169082610e63565b6004556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b505050565b600061098983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610bd956fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63654f776e61626c653a206d757374206265206e6577206f776e657220746f2070756c6c45524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa164736f6c6343000705000a";

export class AlphaBONK__factory extends ContractFactory {
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
  ): Promise<AlphaBONK> {
    return super.deploy(overrides || {}) as Promise<AlphaBONK>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AlphaBONK {
    return super.attach(address) as AlphaBONK;
  }
  connect(signer: Signer): AlphaBONK__factory {
    return super.connect(signer) as AlphaBONK__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlphaBONKInterface {
    return new utils.Interface(_abi) as AlphaBONKInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AlphaBONK {
    return new Contract(address, _abi, signerOrProvider) as AlphaBONK;
  }
}
