import React from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import strap from '../assets/strap.png'
import mobile from '../assets/mobile.png'


export default function Hero() {
    return (
        <div id='hero' className='flex flex-col-reverse md:flex-row px-4 md:px-8 w-screen items-center h-auto md:h-screen mt-4 md:mt-16'>
            <div className='w-full md:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col dark:text-white'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>
                    Make The Best Financial Decisions
                </h1>
                <p className='text-base md:text-lg lg:text-xl mt-5 '>
                    Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
                </p>
                <div className='flex gap-5 mt-5'>
                    <button className='flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 text-sm md:text-lg bg-red-600 text-white font-semibold rounded-md border hover:border-red-600 hover:text-red-600 hover:bg-transparent transition duration-300 ease-in-out'>Get started <FaArrowRight/></button>
                    <button className='flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 text-sm md:text-lg text-red-600 font-semibold rounded-md border border-red-600 hover:bg-red-600 hover:text-white transition duration-300 ease-in-out'><FaCirclePlay /> Watch Video</button>
                </div>
                <img src={strap} className='hidden lg:block'/>
            </div>
            <div className='w-full md:w-1/2 p-2 md:p-4 lg:p-6 flex items-center justify-center mt-4'>
                <img src={mobile} alt='Financial Decisions' className='w-full h-auto max-w-lg hover:scale-105 duration-300' />
            </div>
        </div>


    )
}
