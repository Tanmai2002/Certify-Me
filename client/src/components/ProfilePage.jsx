import React, { useContext, useEffect, useState } from 'react'
import { CertificateContext } from '../context/CertificateContext';
import { getUser, updateUser } from '../utils/firebaseUtils';

export default function ProfilePage() {

  const [formD,setformD]=useState({first_name:"",last_name:"",email:"",mobile:""});


  const{ CurrentAccount}=useContext(CertificateContext)
  const onSubmitButton=()=>{
    updateUser(formD,CurrentAccount)
    console.log(formD);
  }
  const handleOnchange=(e)=>{
    setformD({...formD,[e.target.name]:e.target.value});
  }
  
  useEffect(() => {
    if(!CurrentAccount){
      alert("Please Connect Eth account")
      return;
    }
    getUser(CurrentAccount).then((e)=>{
      setformD(e);
    })
  
  }, [])
  


  return (
    <div className="flex-1">

          <div className="mx-auto max-w-lg md:mt-6">
            <span className="text-black-600 font-bold">Profile Details</span>
          </div>
          <div className="mx-auto max-w-lg md:mt-3">

            <div>
              <span className="px-1 text-sm text-gray-600">First Name</span>
              <input value={formD.first_name} type="text" onChange={handleOnchange} name="first_name" className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
            </div>
            <div>
              <span className="px-1 text-sm text-gray-600">Last Name</span>
              <input value={formD.last_name}  onChange={handleOnchange} name="last_name" type="text" className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
            </div>
            <div>
              <span className="px-1 text-sm text-gray-600">Email</span>
              <input  value={formD.email}  onChange={handleOnchange} name="email" type="text" className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
            </div>
            <div>
              <span className="px-1 text-sm text-gray-600">Mobile Number</span>
              <input value={formD.mobile}   onChange={handleOnchange} name="mobile" type="text" className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
            </div>
            <button onClick={onSubmitButton} className="mt-3 text-lg font-semibold bg-blue-700 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-blue-800">Save</button>
          </div>
       
    </div>
  )
}
