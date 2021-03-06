/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface BONKSwapInterface extends ethers.utils.Interface {
  functions: {
    "aBONK()": FunctionFragment;
    "balances(address)": FunctionFragment;
    "donate(address,uint256)": FunctionFragment;
    "exchange(address,uint256)": FunctionFragment;
    "getBalances(address)": FunctionFragment;
    "manager()": FunctionFragment;
    "owner()": FunctionFragment;
    "pullManagement()": FunctionFragment;
    "pushManagement(address)": FunctionFragment;
    "renounceManagement()": FunctionFragment;
    "setAlphaToken(address)": FunctionFragment;
    "setStableToken(address)": FunctionFragment;
    "setTestToken(address)": FunctionFragment;
    "stableToken()": FunctionFragment;
    "testToken()": FunctionFragment;
    "transferToken(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "aBONK", values?: undefined): string;
  encodeFunctionData(functionFragment: "balances", values: [string]): string;
  encodeFunctionData(
    functionFragment: "donate",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exchange",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getBalances", values: [string]): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pullManagement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pushManagement",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceManagement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAlphaToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setStableToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTestToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "stableToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "testToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferToken",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "aBONK", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "donate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pullManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAlphaToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStableToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTestToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stableToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "testToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferToken",
    data: BytesLike
  ): Result;

  events: {
    "Donate(address,uint256)": EventFragment;
    "Exchange(uint256,address,uint256)": EventFragment;
    "OwnershipPulled(address,address)": EventFragment;
    "OwnershipPushed(address,address)": EventFragment;
    "ReturnTokens()": EventFragment;
    "SetAlphaToken(address)": EventFragment;
    "SetStableToken(address)": EventFragment;
    "SetTestToken(address)": EventFragment;
    "TransferToken(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Donate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Exchange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipPulled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipPushed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReturnTokens"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetAlphaToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetStableToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTestToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferToken"): EventFragment;
}

export type DonateEvent = TypedEvent<
  [string, BigNumber] & { token: string; amount: BigNumber }
>;

export type ExchangeEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    amount: BigNumber;
    to: string;
    bonkAmount: BigNumber;
  }
>;

export type OwnershipPulledEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type OwnershipPushedEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type ReturnTokensEvent = TypedEvent<[] & {}>;

export type SetAlphaTokenEvent = TypedEvent<[string] & { token: string }>;

export type SetStableTokenEvent = TypedEvent<[string] & { token: string }>;

export type SetTestTokenEvent = TypedEvent<[string] & { token: string }>;

export type TransferTokenEvent = TypedEvent<
  [string, string, BigNumber] & { token: string; to: string; amount: BigNumber }
>;

export class BONKSwap extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BONKSwapInterface;

  functions: {
    aBONK(overrides?: CallOverrides): Promise<[string]>;

    balances(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    donate(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchange(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBalances(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAlphaToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStableToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTestToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stableToken(overrides?: CallOverrides): Promise<[string]>;

    testToken(overrides?: CallOverrides): Promise<[string]>;

    transferToken(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  aBONK(overrides?: CallOverrides): Promise<string>;

  balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  donate(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchange(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getBalances(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

  manager(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pullManagement(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushManagement(
    newOwner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceManagement(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAlphaToken(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStableToken(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTestToken(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stableToken(overrides?: CallOverrides): Promise<string>;

  testToken(overrides?: CallOverrides): Promise<string>;

  transferToken(
    _token: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    aBONK(overrides?: CallOverrides): Promise<string>;

    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    donate(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    exchange(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getBalances(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pullManagement(overrides?: CallOverrides): Promise<void>;

    pushManagement(newOwner_: string, overrides?: CallOverrides): Promise<void>;

    renounceManagement(overrides?: CallOverrides): Promise<void>;

    setAlphaToken(_token: string, overrides?: CallOverrides): Promise<void>;

    setStableToken(_token: string, overrides?: CallOverrides): Promise<void>;

    setTestToken(_token: string, overrides?: CallOverrides): Promise<void>;

    stableToken(overrides?: CallOverrides): Promise<string>;

    testToken(overrides?: CallOverrides): Promise<string>;

    transferToken(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Donate(address,uint256)"(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    Donate(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    "Exchange(uint256,address,uint256)"(
      amount?: null,
      to?: null,
      bonkAmount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { amount: BigNumber; to: string; bonkAmount: BigNumber }
    >;

    Exchange(
      amount?: null,
      to?: null,
      bonkAmount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { amount: BigNumber; to: string; bonkAmount: BigNumber }
    >;

    "OwnershipPulled(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipPulled(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "OwnershipPushed(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipPushed(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "ReturnTokens()"(): TypedEventFilter<[], {}>;

    ReturnTokens(): TypedEventFilter<[], {}>;

    "SetAlphaToken(address)"(
      token?: null
    ): TypedEventFilter<[string], { token: string }>;

    SetAlphaToken(token?: null): TypedEventFilter<[string], { token: string }>;

    "SetStableToken(address)"(
      token?: null
    ): TypedEventFilter<[string], { token: string }>;

    SetStableToken(token?: null): TypedEventFilter<[string], { token: string }>;

    "SetTestToken(address)"(
      token?: null
    ): TypedEventFilter<[string], { token: string }>;

    SetTestToken(token?: null): TypedEventFilter<[string], { token: string }>;

    "TransferToken(address,address,uint256)"(
      token?: null,
      to?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { token: string; to: string; amount: BigNumber }
    >;

    TransferToken(
      token?: null,
      to?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { token: string; to: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    aBONK(overrides?: CallOverrides): Promise<BigNumber>;

    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    donate(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchange(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getBalances(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAlphaToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStableToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTestToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stableToken(overrides?: CallOverrides): Promise<BigNumber>;

    testToken(overrides?: CallOverrides): Promise<BigNumber>;

    transferToken(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    aBONK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    donate(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchange(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getBalances(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAlphaToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStableToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTestToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stableToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    testToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferToken(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
