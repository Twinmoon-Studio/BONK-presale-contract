// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.7.5;

import "./ERC20.sol";
import "./Ownable.sol";

contract Divine is Ownable, ERC20 {
  constructor( string memory name_, string memory symbol_, uint8 decimals_ ) ERC20( name_, symbol_, decimals_ ) {}
}