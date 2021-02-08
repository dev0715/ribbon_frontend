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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IRibbonFactoryInterface extends ethers.utils.Interface {
  functions: {
    "isInstrument(address)": FunctionFragment;
    "getAdapter(string)": FunctionFragment;
    "getAdapters()": FunctionFragment;
    "burnGasTokens()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "isInstrument",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getAdapter", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getAdapters",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "burnGasTokens",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "isInstrument",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAdapter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAdapters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burnGasTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class IRibbonFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IRibbonFactoryInterface;

  functions: {
    isInstrument(
      instrument: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "isInstrument(address)"(
      instrument: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getAdapter(
      protocolName: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getAdapter(string)"(
      protocolName: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getAdapters(
      overrides?: CallOverrides
    ): Promise<{
      adaptersArray: string[];
      0: string[];
    }>;

    "getAdapters()"(
      overrides?: CallOverrides
    ): Promise<{
      adaptersArray: string[];
      0: string[];
    }>;

    burnGasTokens(overrides?: Overrides): Promise<ContractTransaction>;

    "burnGasTokens()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  isInstrument(
    instrument: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "isInstrument(address)"(
    instrument: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getAdapter(protocolName: string, overrides?: CallOverrides): Promise<string>;

  "getAdapter(string)"(
    protocolName: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getAdapters(overrides?: CallOverrides): Promise<string[]>;

  "getAdapters()"(overrides?: CallOverrides): Promise<string[]>;

  burnGasTokens(overrides?: Overrides): Promise<ContractTransaction>;

  "burnGasTokens()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    isInstrument(
      instrument: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isInstrument(address)"(
      instrument: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAdapter(
      protocolName: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getAdapter(string)"(
      protocolName: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getAdapters(overrides?: CallOverrides): Promise<string[]>;

    "getAdapters()"(overrides?: CallOverrides): Promise<string[]>;

    burnGasTokens(overrides?: CallOverrides): Promise<void>;

    "burnGasTokens()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    isInstrument(instrument: string, overrides?: Overrides): Promise<BigNumber>;

    "isInstrument(address)"(
      instrument: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getAdapter(
      protocolName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAdapter(string)"(
      protocolName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAdapters(overrides?: CallOverrides): Promise<BigNumber>;

    "getAdapters()"(overrides?: CallOverrides): Promise<BigNumber>;

    burnGasTokens(overrides?: Overrides): Promise<BigNumber>;

    "burnGasTokens()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    isInstrument(
      instrument: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "isInstrument(address)"(
      instrument: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getAdapter(
      protocolName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAdapter(string)"(
      protocolName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAdapters(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getAdapters()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burnGasTokens(overrides?: Overrides): Promise<PopulatedTransaction>;

    "burnGasTokens()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
