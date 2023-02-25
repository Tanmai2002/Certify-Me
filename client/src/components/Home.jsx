import React, { useContext } from 'react'
import certificate_logo from "../assets/certificate.svg"
import { CertificateContext } from '../context/CertificateContext'

export default function Home() {
  const {connectWallet}=useContext(CertificateContext);
  return (
    <div className='flex w-full h-full justify-center items-center'>
        <div className= ' flex flex-col w-full m-5 mt-12 items-center'>
           <div className='flex text-blue text-4xl items-center justify-center h-36'>
            Certify yourself Now
            
           </div>
           <button type='button' className='flex justify-center itmes center rounded-2xl bg-blue-700 text-white p-2 w-3/4' onClick={()=>connectWallet()}>
                Connect Now
            </button>
        </div>
        <div className='flex justify-center items-center w-full'>
          <img src={certificate_logo} alt="certificate_logo" className='w-96' />
        </div>
    </div>
  )
}
