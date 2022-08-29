// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract Example {
    uint256 count;

    constructor() {
        count = 0;
    }

    function getCount() public view returns (uint256) {
        return count;
    }

    function setCount() public {
        count++;
    }
}
