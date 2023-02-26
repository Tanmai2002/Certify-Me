import React from 'react'
import cert from "../assets/certificate.svg"

export default function ViewCertificates() {

  let VerifiedCertItem=({id})=>{
    return(
      <div>
        <img src={cert} width="200px" alt="" />
        {/* <div>{id}</div> */}
      </div>
    )
  }

  let UnverifiedCertItem=({id})=>{
    return(
      <div>
        <img src={cert} width="200px" alt="" />
        <div>{id}</div>
      </div>
    )
  }

  return (
    <div className=''>
      <div className='flex grid md:grid-cols-4 grid-cols-2 px-5'>
        {["1", "2", "3", "4", "5", "6"].map((ver_cert_id) => {
          return (
            <UnverifiedCertItem id={ver_cert_id}/>
          )
        })}
      </div>
      <br />
      <div className='flex grid md:grid-cols-4 grid-cols-2 px-5'>
        {["1", "2", "3", "4", "5", "6"].map((unver_cert_id) => {
          return (
            <UnverifiedCertItem id={unver_cert_id}/>
          )
        })}
      </div>
    </div>
  )
}
