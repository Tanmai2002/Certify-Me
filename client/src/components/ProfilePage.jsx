import React from 'react'

export default function ProfilePage() {
  return (
    <div className="flex-1">

        <form action="">
          <div className="mx-auto max-w-lg md:mt-6">
            <span className="text-black-600 font-bold">Profile Details</span>
          </div>
          <div className="mx-auto max-w-lg md:mt-3">

            <div>
              <span className="px-1 text-sm text-gray-600">First Name</span>
              <input type="text" className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
            </div>
            <div>
              <span className="px-1 text-sm text-gray-600">Last Name</span>
              <input type="text" className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
            </div>
            <div>
              <span className="px-1 text-sm text-gray-600">Email</span>
              <input type="text" className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
            </div>
            <div>
              <span className="px-1 text-sm text-gray-600">Mobile Number</span>
              <input type="text" className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
            </div>
            <button className="mt-3 text-lg font-semibold bg-blue-700 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-blue-800">Save</button>
          </div>
        </form>
    </div>
  )
}
