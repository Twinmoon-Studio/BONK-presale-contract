// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.7.5;

import "./types/Divine.sol";

contract AlphaBONK is Divine {

    // We will change to 18 since all STABLE coin is 18
    constructor() Divine("Alpha BONK", "aBONK", 18) {
        _mint(_owner, 50000000000000000000000000); // MINT 50 M
    }
    // constructor() Divine("Alpha BONK", "aBONK", 9) {
    //     _mint(_owner, 50000000000000);
    // }

    function mint(address _account, uint256 _amount) external onlyOwner {
        _mint(_account, _amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}