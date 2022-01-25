// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.7.5;

import "./interfaces/IERC20.sol";
import "./interfaces/IBEP20.sol";

import "./libraries/SafeERC20.sol";
import "./types/Ownable.sol";

import "./aBONK.sol";

contract BONKSwap is Ownable {
  /*  ========== STATE VARIABLES ========== */
  address public aBONK = 0x81D7A0Cd230772ffdB6D72Ee8F4235C2a1680eF4;
  address public stableToken = 0xd586E7F844cEa2F87f50152665BCbc2C279D8d70;
  address public testToken = 0x001aDC93dbC0107ADba1Ea16dB4aD3260d92E4D6;
  mapping(address => uint256) public balances;

  /*  ========== EVENTS ========== */
  event Donate(address token, uint256 amount);
  event Exchange(uint256 amount, address to, uint256 bonkAmount);
  event ReturnTokens();
  event TransferToken(address token, address to, uint256 amount);
  event SetStableToken(address token);
  event SetAlphaToken(address token);
  event SetTestToken(address token);

  /**
    @notice emits event with get balances for token
    @param _token address
    @return uint256 
  */
  function getBalances(address _token) public view returns (uint256) {
    uint256 totalSupply = ERC20(_token).balanceOf(address(this));
    return totalSupply;
  }

  /**
    @notice emits event with donate token to contract
    @param _token address
    @param _amount uint256
  */
  function donate(address _token, uint256 _amount) public {
    // Approve First
    IERC20(_token).approve(address(this), _amount);
    IERC20(_token).transferFrom(msg.sender, address(this), _amount);
    emit Donate(_token, _amount);
  }

  /**
    @notice emits exchange stable token to aBONK
    @param _token address
    @param _amount uint256
  */
  function exchange(address _token, uint256 _amount) public returns (bool) {
    require(_amount > 0, "You cannot exchange zero");

    // Check if it got this address
    if (_token == stableToken || _token == testToken) {
      uint256 totalSupply = IERC20(aBONK).balanceOf(address(this));

      // Check supply
      if (totalSupply >= _amount) {
        // add the deposited tokens into existing balance
        balances[msg.sender] += _amount;
        uint256 bonkAmount = _amount / 5 ;
        // transfer the tokens from the sender to this contract
        IERC20(_token).approve(address(this), _amount);
        IERC20(_token).transferFrom(msg.sender, address(this), _amount);

        // transfer aBONK back to sender from the contract
        IERC20(aBONK).approve(address(this), bonkAmount);
        IERC20(aBONK).transferFrom(address(this), msg.sender, bonkAmount);

        emit Exchange(_amount, msg.sender, bonkAmount);
        return true;
      }
    }
    return false;
  }

  /**
    @notice emits transfer token to address
    @param _token address
    @param _to address
    @param _amount uint256
  */
  function transferToken(
    address _token,
    address _to,
    uint256 _amount
  ) public onlyOwner {
    uint256 totalSupply = IERC20(_token).balanceOf(address(this));
    if (totalSupply >= _amount) {
      // Approve token then transfer
      IERC20(_token).approve(address(this), _amount);
      IERC20(_token).transferFrom(address(this), _to, _amount);
      emit TransferToken(_token, _to, _amount);
    }
  }

  /**
    @notice set stable token address
    @param _token address
  */
  function setStableToken(address _token) public onlyOwner {
    stableToken = _token;
    emit SetStableToken(_token);
  }

  /**
    @notice set alpha token address
    @param _token address
  */  
  function setAlphaToken(address _token) public onlyOwner {
    aBONK = _token;
    emit SetAlphaToken(_token);    
  }

  /**
    @notice set test token address
    @param _token address 
  */
  function setTestToken(address _token) public onlyOwner {
    testToken = _token;
    emit SetTestToken(_token);
  }

}
