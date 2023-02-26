// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.13;

contract VerifyIssuer{

 struct Institute {
  uint inst_id;
  address inst_addr;
 }
 Institute[] public IssuerList;


 function Verify(uint _id,address _issuerAddr)public view returns(bool){
  for (uint i = 0; i < IssuerList.length; i++) {
        if (IssuerList[i].inst_id == _id && IssuerList[i].inst_addr == _issuerAddr) {
         return (true);
        }
    }
    return(false);
 }

}