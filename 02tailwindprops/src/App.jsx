import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">

      <div className='w-96   rounded-3xl bg-gray-700 backdrop-blur-xl border-4 border-blue-600  p-8'>
        <img 
        src="https://plus.unsplash.com/premium_photo-1673002094195-f18084be89ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0fGVufDB8fDB8fHww"
        alt=""
        className='w-32 h-32 rounded-full object-cover mx-auto border-4 border-white'/>
        <h1 className=' text-white text-3xl font-bold text-center mt-6'>Narmada Kumavat</h1>
        <p className='text-gray-300 text-center mt-4 leading-7'>
          Passionate Frontend Developer creating modern and responsive web application.
        </p>
        
        <p className=' text-gray-300 text-center mt-2 '> Frontend Developer</p>
        <p className="text-center text-gray-400 mt-5">
       📍Ahemedabad, India
        </p>
        <div className='flex justify-center gap-3 mt-6'>
          <span className='px-5 py-3 rounded-full bg-violet-500/30 text-white'>
          React</span>
          <span className='px-5 py-3 rounded-full bg-blue-500/30 text-white'>
          Tailwind
          </span>
          <span className='px-5 py-3 rounded-full bg-pink-500/30 text-white'>
          JavaScript</span>
          </div>
          <div className='flex  gap-4 mt-8'>
            <button className='flex-1 bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-full font-semibold transition-all duration-300'>
              Follow
            </button>
            <button className='flex-1 border border-white/20 text-white py-3 rounded-full hover:bg-white/10 transition-all duration-300'>
            Message</button>
          </div>
        
        </div>
    </div>
  )
}

export default App
