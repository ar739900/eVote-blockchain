// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AuthContract {
    struct User {
        string username;
        bytes32 passwordHash; // Hash of the password
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed userAddress, string username);

    function registerUser(
        string memory _username,
        bytes32 _passwordHash
    ) public {
        require(users[msg.sender].passwordHash == 0, "User already registered");
        users[msg.sender] = User(_username, _passwordHash);
        emit UserRegistered(msg.sender, _username);
    }

    function loginUser(bytes32 _passwordHash) public view returns (bool) {
        return users[msg.sender].passwordHash == _passwordHash;
    }
}
