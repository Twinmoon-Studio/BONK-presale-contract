// SPDX-License-Identifier: AGPL-3.0
pragma solidity >=0.7.5;

interface IStakingV1 {
    function stake( uint _amount, address _recipient ) external returns ( bool );
    
    function claim( address _recipient ) external;

    function unstake(uint256 _amount, bool _trigger) external;

    function index() external view returns (uint256);
}