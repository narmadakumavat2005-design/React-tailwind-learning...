import React from 'react'

function Card(props) {
  return (
    <div className='w-72 bg-zinc-800 rounded-xl p-6 text-white shadow-lg hover:scale-105 transition-all duration-300 border border-blue-600'>
        <img
        src={props.img}
        alt={props.name}
        className='w-24 h-24 rounded-full object-cover mx-auto border-2 border-blue-500'/>

        <h2 className='text-2xl font-bold text-center mt-4'>{props.name}</h2>
   
        <p className='text-center text-gray-400 mt-2'>{props.profession}</p>
        <p className='text-center text-gray-400 mt-2'>{props.company}</p>
        <p className='text-center text-gray-400 mt-2'>{props.location}</p>
        <p className='text-center text-gray-400 mt-2'>{props. experience}  Experience</p>
        <div className='flex flex-co gap-5'>
        <button className='w-full mt-6 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold'>Follow</button>
          <button className='w-full mt-6 bg-zinc-600 hover:bg-zinc-800 py-2 rounded-lg font-semibold'>Mesasage</button>
        </div>
    </div>
  )
}

export default Card