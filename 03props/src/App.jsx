  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from './assets/vite.svg'
  import heroImg from './assets/hero.png'
  import './App.css'
  import Card from './card'

  function App() {
    const data=[{
      img:"https://images.unsplash.com/photo-1773332585956-2d0e8ac80cb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
      name:"Kumavat Narmada",
      profession:"Frontend Developer",
  },
  {
    img:"https://images.unsplash.com/photo-1784571350701-f34a5c6d3cf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
    name:"Naincy rajput",
    profession:"Hacker"
  },
  {
    img:"https://images.unsplash.com/photo-1784538554343-731f08d3dca9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
    name:"Hemanshi patel",
    profession:"Civil engineere"
  }
  ]

    return (
      <div>
        
        <div className='flex flex-col justify-center items-center px-50 py-50 bg-black '>
          <h1 className='justify-center text-white'>Students details</h1>
          {
            data.map((dt)=>{
              return(
              <Card
              img={dt.img}
              name={dt.name}
              profession={dt.profession}/>
              );

            })
          }


        </div>
      
        
      </div>
    )
  }

  export default App
