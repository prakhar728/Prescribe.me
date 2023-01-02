// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Prescribe{

    struct prescriptionForm{
        uint256 datePrescribed;
        bytes32 place;
        bytes32 hash;
    }

    struct history{
        uint256 dateVisited;
        bytes32 place;
        bytes32  comments;
    }

    mapping (address=>history[]) public medicalHistory;
    mapping (address=> prescriptionForm[]) public prescriptions;
    mapping (uint256 => prescriptionForm) public uniquePrescriptions;

    function  markVisit(
        bytes32  _place,
        bytes32  _comments,
        address patient
    ) public {
        medicalHistory[patient].push(history(block.timestamp,_place,_comments));
    }

    function showAllVisits(address patient) view public returns(history[] memory) {
        return medicalHistory[patient];
    }
    function addPrescription(
        bytes32  _place,
        bytes32  _hash,
        address patient

    ) external {
        markVisit(_place,"",patient);
        prescriptions[patient].push(prescriptionForm(block.timestamp,_place,_hash));
    }
    
    function viewPrescriptions() external view returns(prescriptionForm[] memory){
        return prescriptions[msg.sender];
    }

    function viewHistory(
        uint256 _uid
    ) public view returns( prescriptionForm memory) {
       return uniquePrescriptions[_uid];
    }
}