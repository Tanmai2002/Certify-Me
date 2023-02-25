import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { addUser } from "../utils/firebaseUtils";

const CertificateContext=React.createContext();
const {ethereum} =window;

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
                    setCurrentAccount(accounts[0]);
                    addUser(accounts[0]);
                }else{
                    return alert("Please connect an Accounts")
                }
                console.log(accounts)           
            } catch (error) {
                console.log(error)
            }
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

    return <CertificateContext.Provider value={{connectWallet}}>
        {children}
    </CertificateContext.Provider>
}

export {CertificateProvider,CertificateContext}

