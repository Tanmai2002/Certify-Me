import React, { useContext, useEffect, useState } from 'react'
import cert from "../assets/certificate.svg"
import blueTick from "../assets/blueTick.png"
import { CertificateContext } from '../context/CertificateContext';
import { useNavigate } from 'react-router-dom';

export default function ViewCertificates() {

  const [certificates,setCertificates]=useState([]);
  const {getAllCertificate,CurrentAccount} = useContext(CertificateContext)
  let navigate=useNavigate()

  useEffect(() => {
    const xyz=async()=>{
      if(CurrentAccount==""){
        alert("Please Connect An Account");
        navigate("/");
        return;


      }
      
      let res=await getAllCertificate(CurrentAccount);
      console.log(res)
      setCertificates(res)
    }
    xyz()
    
  }, [])
  
  let VerifiedCertItem=({id})=>{
    // console.log(id)
    return(
      <div type={"button"} onClick={
        ()=>{
          alert(`
        From: ${id[0]}
        To: ${id[1]}
        Certification:${id[2]}
        Issue On:${new Date(Number(id[4])).toUTCString()}
        Valid till:${new Date(Number(id[5])).toUTCString()}



        `)
        }
      }>
          <div className="relative w-full">
            <img src={blueTick} width="30px" alt="" className='absolute top-10 right-3'/>
            <img src={cert}  className="w-full"/>
          </div>
       <div className='mx-2'>
       <div className=' text-sm overflow-hidden overflow-ellipsis'>From:{id[0]}</div>
        <div className='text-sm overflow-hidden overflow-ellipsis '>To:{id[1]}</div>
        <div>Issue On:{new Date(Number(id[4])).toUTCString()}</div>
        <div>Valid till:{new Date(Number(id[5])).toUTCString()}</div>
       </div>
      </div>
    )
  }

  let UnverifiedCertItem=({id})=>{
    // console.log(id)
    return(
      <div type={"button"} onClick={
        ()=>{
          alert(`
        From: ${id[0]}
        To: ${id[1]}
        Certification:${id[2]}
        Issue On:${new Date(Number(id[4])).toUTCString()}
        Valid till:${new Date(Number(id[5])).toUTCString()}



        `)
        }
      }>
          <div className="relative w-full">
            {/* <img src={blueTick} width="30px" alt="" className='absolute top-10 right-3'/> */}
            <img src={cert}  className="w-full"/>
          </div>
       <div className='mx-2'>
       <div className=' text-sm overflow-hidden overflow-ellipsis'>From:{id[0]}</div>
        <div className='text-sm overflow-hidden overflow-ellipsis '>To:{id[1]}</div>
        <div>Issue On:{new Date(Number(id[4])).toUTCString()}</div>
        <div>Valid till:{new Date(Number(id[5])).toUTCString()}</div>
       </div>
      </div>
    )
  }

  return (
    <div className=''>
      
        <div className='flex justify-center items-center text-2xl font-bold text-blue-700'> Your Certificates</div>
        <div className='flex my-3 mx-10 text-lg font-semibold'>Verified Certificates</div>
      <div className='grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 px-5'>
        {certificates.map((ver_cert_id) => {
          return (
            <VerifiedCertItem id={ver_cert_id}/>
          )
        })}
      </div>
      <br />
      <div  className='flex my-3 mx-10 text-lg font-semibold'>Certificates</div>
      <div className=' grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 px-5'>
        {certificates.map((unver_cert_id) => {
          return (
            <UnverifiedCertItem id={unver_cert_id}/>
          )
        })}
      </div>
    </div>
  )
}
