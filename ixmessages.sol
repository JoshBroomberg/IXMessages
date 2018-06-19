pragma solidity ^0.4.16;

contract Ownable {
    address public owner;

    constructor () public {
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require (msg.sender == owner);
        _;
    }
}

contract IXMessages is Ownable {
    mapping (address => string) private messages;

    constructor () public {}

    function addMessage(address recipient, string message) public onlyOwner {
        messages[recipient] = message;
    }

    function getMessage() public view returns (string) {
        return messages[msg.sender];
    }
}
