import React from 'react'


function Footer() {
  return (
    <div>
        <div className='text-white bg-zinc-800 h-64 flex  gap-28  justify-center '>
            <div className='flex flex-col mt-10'>
            <p className='font-bold '>Developer Directory</p>
            <p>Connecting developers around the world.</p>
            </div>
            <div className='mt-10'>
                <p className='font-bold'>Quick Links</p>
                <a><p>Home</p></a>
                <a><p>Developers</p></a>
                <a><p>About</p></a>
                <a><p>Contact</p></a>

            </div>
            <div className='mt-10'>
                <p className='font-bold'>Rosourses</p>
                <a><p>Privacy Policy</p></a>
                <a><p>Terms & Conditions</p></a>
            </div>
            <div className='mt-10'>
                <p className='font-bold'>Follow Us</p>
                <a><p>GitHub</p></a>
                <a><p>LinkedIn</p></a>
                <a><p>Twitter</p></a>
                <a><p>Instagram</p></a>
            </div>
        </div>
        <div className='text-white bg-zinc-900 h-16 flex justify-center items-center '>
            <p>© 2026 Developer Directory | Made with ❤️ by Narmada</p>

        </div>
    </div>
    
  )
}

export default Footer