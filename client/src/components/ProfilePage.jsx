import React from 'react'

export default function ProfilePage() {
  return (
    <div class="flex-1">

        <form action="">
          <div class="mx-auto max-w-lg md:mt-6">
            <span class="text-black-600 font-bold">Profile Details</span>
          </div>
          <div class="mx-auto max-w-lg md:mt-3">

            <div>
              <span class="px-1 text-sm text-gray-600">First Name</span>
              <input type="text" class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
            </div>
            <div>
              <span class="px-1 text-sm text-gray-600">Last Name</span>
              <input type="text" class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
            </div>
            <div>
              <span class="px-1 text-sm text-gray-600">Email</span>
              <input type="text" class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
            </div>
            <div>
              <span class="px-1 text-sm text-gray-600">Mobile Number</span>
              <input type="text" class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
            </div>
            <button class="mt-3 text-lg font-semibold bg-blue-700 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-blue-800">Register</button>
          </div>
        </form>
    </div>
  )
}
