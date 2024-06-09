import React from 'react'
import logo from '../assets/logo.png'
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

export default function Footer() {
    return (
        <div className='flex flex-col items-center justify-center px-8  py-5 dark:text-white dark:bg-purple-900 dark:shadow-sm' >
            <div className='flex items-center md:grid md:grid-cols-4 space-x-16 md:space-x-28'>
                <div className='space-y-3'>
                    <img src={logo} className='w-24 md:w-32'/>
                    <h2 className='flex gap-2 items-center text-md md:text-lg '>
                        <IoIosMail color='red' size={24} />
                        help@company.com
                    </h2>
                    <h2 className='flex gap-2 items-center text-md md:text-lg'>
                        <IoCall color='red' size={24} />
                        +91 234-567-8901
                    </h2>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Links</h1>
                    <h2 className='text-xl'>
                        Home
                    </h2>
                    <h2 className='text-xl'>
                        Booking
                    </h2>
                </div>
                <div className='space-y-3 hidden md:inline'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Links</h1>
                    <h2 className='text-xl'>
                        Home
                    </h2>
                    <h2 className='text-xl'>
                        Booking
                    </h2>
                </div>
                <div className='space-y-3 hidden md:inline'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Links</h1>
                    <h2 className='text-xl'>
                        Home
                    </h2>
                    <h2 className='text-xl'>
                        Booking
                    </h2>
                </div>
            </div>
            <h2 className='text-center font-semibold mt-8'>Copyright 2022 Uifry.Com All Rights Reserved</h2>
        </div>
    )
}
