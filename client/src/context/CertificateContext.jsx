import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import {  getUser, syncUserProfile } from "../utils/firebaseUtils";
import { contractAddress,contractABI } from "../utils/constants";

const CertificateContext=React.createContext();
const {ethereum} =window;
const getEthereumContract=()=>{
    console.log(ethers);
    const provider=new ethers.BrowserProvider(ethereum);
    const signer=provider.getSigner();
    const certificateContract=new ethers.Contract(contractAddress,contractABI,signer)
    console.log({
        provider,signer,certificateContract
    })
    return certificateContract;
}
const CertificateProvider=({children})=>{
    const [CurrentAccount, setCurrentAccount] = useState("");
    const checkIfWalletConnected=async()=>{
        try {
            if(!ethereum) return alert("Please Install Metamask");
            const accounts=ethereum.request({method:"eth_accounts"});
            if(accounts.length){
                setCurrentAccount(accounts[0]);
                //getAllTransaction();
            }else{
                // console.error(error);
                throw new Error("No Ethereum account found")
            }
            console.log(accounts);
        } catch (er) {
            console.error(er);
        }
    }

    async function connectWallet() {

        if(window.ethereum){
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                if(accounts){
                    syncUserProfile(accounts[0]);
                    console.log(await getUser(accounts[0]));
                    // getEthereumContract()
                    // addCertificate();
                    
                    setCurrentAccount(accounts[0]);
                }else{
                    return alert("Please connect an Accounts")
                }
                console.log(accounts)           
            } catch (error) {
                console.log(error)
            }
        }
    
    }


    async function addCertificate(address="0x1288331A47E02fb7F7bDAE736205a606c550DcF8",msg="First Contract",design="This is temp design",date=15,validtill=18){
        try {
            
            if(ethereum){
                const provider=new ethers.BrowserProvider(ethereum);
                const signer=await provider.getSigner();
                const certificateContract=new ethers.Contract(contractAddress,contractABI,signer)
                // const certificateContract=getEthereumContract();
                console.log(signer);
               
                let id=await certificateContract.create_certificate(
                    address,
                    msg,
                    design,
                    date,validtill

                )
                // let id=await certificateContract.view_all_certificate(address);
                console.log(id);

            }else{
                alert("No account added.Please Connect First")
            }
        } catch (error) {
            console.log(error)
        }
    }

    let getAllCertificate=async (address="0x1288331A47E02fb7F7bDAE736205a606c550DcF8")=>{
        try {
            
            if(ethereum){
                const provider=new ethers.BrowserProvider(ethereum);
                const signer=await provider.getSigner();
                const certificateContract=new ethers.Contract(contractAddress,contractABI,signer)
               
                let id=await certificateContract.view_all_certificate(address);
                console.log(id);

            }
        } catch (error) {
            console.log(error)
        }
    }
    // const connectWallet=async()=>{
    //     console.log("Requesting for eth accounts")
    //     try{
    //         if(!ethereum) return alert("Please install Metamask");
    //         const accounts =await ethereum.request({method: "eth_requestAccounts"});
    //         if(accounts){
    //             setCurrentAccount(accounts[0]);
    //         }else{
    //             return alert("Please connect an Accounts")
    //         }
    //     }catch(error){
    //         console.error(error);
    //         throw new Error("No Ethereum account found")
    //     }
    // }
    useEffect(() => {
      checkIfWalletConnected();
    }, [])

    return <CertificateContext.Provider value={{connectWallet,getAllCertificate,CurrentAccount}}>
        {children}
    </CertificateContext.Provider>
}

export {CertificateProvider,CertificateContext}

