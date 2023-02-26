import React from 'react'
import djsce_logo from "../assets/djsce.jpg"
export default function Organisations() {
    const GridOrgItem=({orgName,orgPic})=>{
        return (<div className='m-5 flex justify-center flex-col items-center bg-slate-500 rounded-2xl shadow-md hover:scale-125 cursor-pointer'>
            <img src={orgPic} alt={orgName} />
          <div>{orgName}</div>
          
        </div>)
      }
  return (
    <div className='flex flex-col w-full justify-center items-center '>
        <div className='text-4xl'>Trusted by</div>
        <div className='grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 m-3 mt-10'>
            {["IIT","DJSCE","NIT" ,"IIT","DJSCE","NIT"].map((e,index)=>{
                return (
                    <GridOrgItem key={e+index} orgName={e} orgPic={djsce_logo} />
                )
            })}
        </div>

    </div>
  )
}
