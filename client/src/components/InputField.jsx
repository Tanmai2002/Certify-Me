import React from 'react'

export default function InputField({name,value,onChangee,extraStyles,type="text"}) {
  return (
    <div className={`${'flex  flex-col items-center justify-center w-full px-4 p-3'} ${extraStyles}`}>
        <p className='text-start text-sm text-blue-700 items-start justify-start w-full'>{name.split("_").join(" ")}</p>
        <input placeholder={name.split("_").join(" ")} className=' text-black w-full  bg-transparent border-black border rounded-lg p-2 place-content-center' value={value} type={type} onChange={(e)=>{
            // console.log(e.target.value)
            // onChangee({})
            onChangee(e.target.value)

        }}/>
    </div>
  )
}
