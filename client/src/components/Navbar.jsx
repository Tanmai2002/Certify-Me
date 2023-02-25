import React from 'react'
import logo from "../assets/profileIcon.png"
export default function Navbar() {
  return (
    // <div>Navbarrr</div>
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div>
        <span>

        </span>
      </div>
      <div>
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li>
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="">Home</a>
          </li>
          <li>
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="">View Certificates</a>
          </li>
        </ul>
      </div>
      <div>
        <img src={logo} alt="" width="40px"/>
      </div>
    </div>
  )
}

