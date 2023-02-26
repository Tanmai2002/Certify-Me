import React, { useContext, useState } from 'react'
import { CertificateContext } from '../context/CertificateContext';
import InputField from './InputField';
import Loader from './Loading';


export default function IssuerTab() {
  const {addCertificate}=useContext(CertificateContext);
  const [issuing,setIssuing]=useState(false);
  const [formData,setFormData]=useState({});
  const handleRequest=async ()=>{
    setIssuing(true);
    try{
      await addCertificate(formData["address_of_receiver"],formData["content_of_certificate"],formData["design_certificate"],formData["date_of_issue"],formData["valid_till"])
      setFormData({})
      alert("Success!")
    }catch(error){
      alert("Error :",error)

    }
    
    window.reload()
    setIssuing(false);
  }
  
  
  return (
    <div className='flex flex-col w-4/5 my-6 justify-center items-center bg-white rounded-2xl shadow-lg border-none z-10 p-3'>
      <div className='text-blue-900 font-bold text-xl'>Issue a certificate</div>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>
        {["address_sender","address_of_receiver","name_of_receiver","design_certificate","date_of_issue","valid_till","content_of_certificate"].map((item,index)=>{

return <div className={`${'flex  flex-col items-center justify-center w-full px-4 p-3'} ${item=="content_of_certificate"?"col-span-2":""}`}>
<p className='text-start text-sm text-blue-700 items-start justify-start w-full'>{item.split("_").join(" ")}</p>
<input
type={(item=="valid_till" || item=="date_of_issue")?"date":"text"}
placeholder={item.split("_").join(" ")} className=' text-black w-full  bg-transparent border-black border rounded-lg p-2 place-content-center' value={formData[item]} onChange={(e)=>{
    let data=formData;
    data[item]=e.target.value;
    
    setFormData(data)
    console.log(formData,data)
    
}}/>
</div>



          // return <InputField key={item+index} onChangee={(e)=>{
            
          // }} 
          // name={item}
          // extraStyles=
          
          // />
        })}

        

      </div>
      {issuing?<Loader/>:<button className='flex mt-12 bg-blue-700 w-52 items-center justify-center p-2 rounded-2xl hover:scale-110' onClick={()=>handleRequest()}>Issue</button>
}

    </div>
  )
}
