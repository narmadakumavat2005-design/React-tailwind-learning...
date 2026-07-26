import React from 'react'
import { Home, Bell, User, Search ,MessageSquareText} from "lucide-react";

function Navbar() {
  return (
    <div className='bg-zinc-900 h-18  flex justify-between  items-center px-10 py-5 shadow-md text-white border-b border-zinc-700'>

        <h1 className='text-2xl font-bold text-blue-500'>ReactCards</h1>
        <ul className='flex  font-medium gap-18'>
            <a><li className='cursor-pointer hover:text-blue-400 transition'>Home</li></a>
            <a><li className='cursor-pointer hover:text-blue-400 transition'>Developers</li></a>
            <a><li className='cursor-pointer hover:text-blue-400 transition'>About us</li></a>
            <a><li className='cursor-pointer hover:text-blue-400 transition'>Contact us</li></a>
            
         </ul>
            <div className='flex items-center gap-8'>
        <MessageSquareText className="cursor-pointer hover:text-blue-400 transition" />
        <User className="cursor-pointer hover:text-blue-400 transition" />

         <button className='bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold transition'>Login</button>
         </div>
    </div>
  )
}

export default Navbar