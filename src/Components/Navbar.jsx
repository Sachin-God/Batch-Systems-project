import React, { useEffect, useState } from 'react';
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 0) {
              setSticky(true)
          }
          else {
              setSticky(false)
          }
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      }
  }, []);

  return (
    <div className={`flex z-10 bg-slate-50 dark:bg-gray-900 justify-between items-center w-full px-4 py-3 md:px-20 md:py-4 fixed top-0 left-0 ${sticky ? "shadow-md transition-all ease-in-out duration-500" : ""} `}>
      <div className='flex gap-8 items-center'>
        <img src='https://batch-system-ui-fry.vercel.app/dir/images/logo.png' className='w-24 md:w-28'/>
        <ul className='flex gap-2 md:gap-4 dark:text-white'>
            <li className='text-sm md:text-lg hidden  sm:inline font-medium hover:bg-red-400 hover:text-white rounded-md px-2 py-1 transition duration-300 ease-in-out'>Home</li>
            <li className='text-sm md:text-lg hidden sm:inline font-medium hover:bg-red-400 hover:text-white rounded-md px-2 py-1 transition duration-300 ease-in-out'>About us</li>
            <li className='text-sm md:text-lg hidden sm:inline font-medium hover:bg-red-400 hover:text-white rounded-md px-2 py-1 transition duration-300 ease-in-out'>Pricing</li>
            <li className='text-sm md:text-lg hidden sm:inline font-medium hover:bg-red-400 hover:text-white rounded-md px-2 py-1 transition duration-300 ease-in-out'>Features</li>
        </ul>
      </div>
      <div className='flex gap-2 items-center'>
      <DarkModeToggle />
        <button className='px-2 py-2 md:px-4 md:py-2 text-sm md:text-lg bg-black text-white font-semibold rounded-md border border-black hover:text-black hover:bg-transparent transition duration-300 ease-in-out dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white' ><a href='#'>Download</a></button>
      </div>
    </div>
  )
}
