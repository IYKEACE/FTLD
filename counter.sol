// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    // State variable to store the counter value
    uint private count;

    // Function to increase the counter
    function increment() public {
        count += 1;
    }

    // Function to decrease the counter
    function decrement() public {
        require(count > 0, "Value cannot be less than zero");
        count -= 1;
    }

    // Function to reset the counter back to zero
    function reset() public {
        count = 0;
    }

    // Function to read the current counter value
    function getCount() public view returns (uint) {
        return count;
    }
}
