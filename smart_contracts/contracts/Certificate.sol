// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.13;

contract Certificate{
struct Certif{
    address issuing_org_addr;
    address reciever_addr;
    string issued_for;
    string design_doc;
    uint Date;
    uint validity;
}

event Newcertificate(uint certif_id,address issuing_org,address reciever_addr,string issued_for,string design_doc,uint Date,uint validity);

Certif[] public certificates;

function verify_certificate(uint Id_recieved,address _sender,address _reciever,string calldata _issued_for,string calldata _design_doc,uint _Date,uint _validity) public view returns(bool){

    Certif memory t=certificates[Id_recieved];
    return (t.issuing_org_addr==_sender && t.reciever_addr==_reciever && keccak256(abi.encodePacked(t.issued_for))==keccak256(abi.encodePacked(_issued_for)) && keccak256(abi.encodePacked(t.design_doc))==keccak256(abi.encodePacked(_design_doc)) && t.Date==_Date && t.validity==_validity);
}

function create_certificate(address _reciever,string memory _purpose,string memory _design_file,uint _date,uint _validity) public returns(uint){
    certificates.push(Certif(msg.sender,_reciever,_purpose,_design_file,_date,_validity));
    uint id=certificates.length -1;
    emit Newcertificate(id,msg.sender ,_reciever,_purpose, _design_file, _date, _validity);
    return (id);
}

function view_all_certificate(address _reciever_addr)public view returns(Certif[] memory) {
uint resultCount;

    for (uint i = 0; i < certificates.length; i++) {
        if (certificates[i].reciever_addr == _reciever_addr) {
            resultCount++;  
        }
    }

    Certif[] memory result = new Certif[](resultCount);  
    uint256 j;

    for (uint i = 0; i < certificates.length; i++) {
        if (certificates[i].reciever_addr == _reciever_addr) {
            result[j] = certificates[i];  
            j++;
        }
    }

    return result; 
}

function view_all_certificate_sent(address _sender_addr)public view returns(Certif[] memory) {
    uint resultCount;

    for (uint i = 0; i < certificates.length; i++) {
        if (certificates[i].issuing_org_addr == _sender_addr) {
            resultCount++;  
        }
    }

    Certif[] memory result = new Certif[](resultCount);  
    uint256 j;

    for (uint i = 0; i < certificates.length; i++) {
        if (certificates[i].issuing_org_addr == _sender_addr) {
            result[j] = certificates[i];  
            j++;
        }
    }
    return result; 
}

}
