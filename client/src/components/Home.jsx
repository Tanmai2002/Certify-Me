import React, { useContext, useState } from 'react'
import certificate_logo from "../assets/certificate.svg"

import { CertificateContext } from '../context/CertificateContext'
import IssuerTab from './IssuerTab';
import Organisations from './Organisations';
import RequestTab from './RequestTab';
import VerifyCertificate from './VerifyCertificate';

export default function Home() {
  const {CurrentAccount}=useContext(CertificateContext);
  const [requestTab,setRequestTab]=useState(0);
  const tabStyle='flex w-full items-center justify-center cursor-pointer p-3 '
  const selectionStyle="bg-blue-300 text-black shadow-md z-10"


  const {connectWallet}=useContext(CertificateContext);
  return (
    <div className='flex flex-col items-center justify-center'>
      {CurrentAccount?<div className='flex w-2/3 text-white flex-col h-full mx-10 md:mx-52 justify-center items-center m-4 my-6 bg-blue-700 rounded-2xl'>
        <div className='flex w-full justify-center items-cent'>
          <div className={`${tabStyle} rounded-tl-2xl ${requestTab==0?selectionStyle:""}`} onClick={()=>setRequestTab(0)}>
            Issue a Certificate
          </div>
          <div  className={`${tabStyle}  ${requestTab==1?selectionStyle:''}`} onClick={()=>setRequestTab(1)}>
            Request a Certificate
            
          </div>
          <div  className={`${tabStyle} rounded-tr-2xl ${requestTab==2?selectionStyle:''}`} onClick={()=>setRequestTab(2)}>
            Verify a Certificate
            
          </div>

        </div>

       
      <div className='bg-blue-300 p-2 flex w-full items-center justify-center  rounded-b-2xl'>
      { requestTab==1?<RequestTab/>:requestTab==0?<IssuerTab/>:<VerifyCertificate/>
        
      }
      </div>
    
      </div>: <div className='flex flex-col-reverse sm:flex-row w-full h-full justify-center items-center'>
        <div className= ' flex flex-col w-full m-5 md:mt-12 items-center'>
           <div className='flex text-blue text-4xl sm:text-5xl items-center justify-center h-36'>
            Certify yourself Now
            
           </div>
           <button type='button' className='flex justify-center itmes center rounded-2xl bg-blue-700 text-white p-2 w-3/4 hover:scale-110 hover:bg-blue-800' onClick={()=>connectWallet()}>
                Connect Now
            </button>
        </div>
        <div className='flex justify-center items-center w-full'>
          <img src={certificate_logo} alt="certificate_logo" className='w-52 md:w-96' />
        </div>
        
    </div>}
    <Organisations/>
    </div>
  )
}
