import React, { useState } from 'react'
import InputField from './InputField';


export default function VerifyCertificate() {
  const [formData,setFormData]=useState({});
  const handleRequest=()=>{

  }
  
  
  return (
    <div className='flex flex-col w-4/5 my-6 justify-center items-center bg-white rounded-2xl shadow-lg border-none z-10 p-3'>
      <div className='text-blue-900 font-bold text-xl'>Verify a certificate</div>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>
        {["id","address_sender","address_of_receiver","name_of_receiver","design_certificate","date_of_issue","valid_till","content_of_certificate"].map((item,index)=>{
          return <InputField key={item+index} onChangee={(e,item1)=>{
            let data=formData;
            data[item]=e;
            
            setFormData(data)
            console.log(formData)
            
          }} value={formData[item]}
          name={item}
          extraStyles={item=="content_of_certificate"?"col-span-2":""}
          />
        })}

        

      </div>
      <button className='flex mt-12 bg-blue-700 w-52 items-center justify-center p-2 rounded-2xl hover:scale-110' onClick={()=>handleRequest()}>Request</button>


    </div>
  )
}
