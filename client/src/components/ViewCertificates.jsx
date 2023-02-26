import React from 'react'
import cert from "../assets/certificate.svg"
import blueTick from "../assets/blueTick.png"

export default function ViewCertificates() {

  let VerifiedCertItem=({id})=>{
    return(
      <div>
          <div className="relative w-full">
            <img src={blueTick} width="30px" alt="" className='absolute top-10 right-3'/>
            <img src={cert}  className="w-full"/>
          </div>
        <div>{id}</div>
      </div>
    )
  }

  let UnverifiedCertItem=({id})=>{
    return(
      <div>
        <div className='relative w-full'>
          <img src={cert} className="w-full"/>
          <div>{id}</div>
        </div>
      </div>
    )
  }

  return (
    <div className=''>
      <div className='flex grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 px-5'>
        {["1", "2", "3", "4", "5", "6"].map((ver_cert_id) => {
          return (
            <VerifiedCertItem id={ver_cert_id}/>
          )
        })}
      </div>
      <br />
      <div className='flex grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 px-5'>
        {["1", "2", "3", "4", "5", "6"].map((unver_cert_id) => {
          return (
            <UnverifiedCertItem id={unver_cert_id}/>
          )
        })}
      </div>
    </div>
  )
}
