// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.7.5;

interface IOHMERC20 {
    function burnFrom(address account_, uint256 amount_) external;
}