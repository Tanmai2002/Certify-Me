import React, { useState } from 'react'
import logo from "../assets/profileIcon.png"
export default function Navbar() {
  const [navVisible, setNavVisible] = useState(true)
  
  return (
    // <div class="container px-4 py-4 md:py-0 mx-auto flex flex-wrap items-center justify-between">
    //   <div>
    //     <span>

    //     </span>
    //   </div>
    //   <div>
    //     <ul class="flex flex-col lg:flex-row list-none ml-auto">
    //       <li>
    //         <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 hover:text-blue-600" href="">Home</a>
    //       </li>
    //       <li>
    //         <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 hover:text-blue-600" href="">View Certificates</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div>
    //     <img src={logo} alt="" width="40px"/>
    //   </div>
    // </div>

    <div>
           <nav
        className="
          flex flex-wrap
          items-center
          justify-end
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
       <div>
          <a href="#">

          </a>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            onClick={()=>setNavVisible(!navVisible)}
            class="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className=" w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-end 
              hidden 
              md:visible
              md:pt-0"
              
          >
            <li>
              <a className="md:p-4 py-2 block text-sm uppercase font-bold leading-snug text-black hover:opacity-75 hover:text-blue-600" href="#"
                >Home</a
              >
            </li>
            <li>
              <a className="md:p-4 py-2 block text-sm uppercase font-bold leading-snug text-black hover:opacity-75 hover:text-blue-600" href="#"
                >View Ceritfictes</a
              >
            </li>
            <li><a href=""><img src={logo} alt="" width="40px"/></a></li>
          </ul>
        </div>
        <div className='flex 
              md:hidden' id='menu2'>
        <ul
            className={`${" pt-4 text-base text-gray-700 md:pt-0 visible z-10 "}${navVisible?"":"hidden"}`}
          >
            <li>
              <a className="md:p-4 py-2 block text-sm uppercase font-bold leading-snug text-black hover:opacity-75 hover:text-blue-600" href="#"
                >Home</a
              >
            </li>
            <li>
              <a className="md:p-4 py-2 block text-sm uppercase font-bold leading-snug text-black hover:opacity-75 hover:text-blue-600" href="#"
                >View Ceritfictes</a
              >
            </li>
            <li><a href=""><img src={logo} alt="" width="40px"/></a></li>
          </ul>
        </div>
    </nav>
    </div>
  )
}

const button = document.querySelector('#menu-button');
