import React from 'react'

export default function Loader() {
  return (
    <div className='flex justify-center items-center py-3 '>
      <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500'></div>
    </div>
  )
}
