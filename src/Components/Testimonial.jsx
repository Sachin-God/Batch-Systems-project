import React, { useRef } from 'react'
import next_btn from '../assets/next-icon.png'
import back_btn from '../assets/back-icon.png'
import user1 from '../assets/user1.jpeg'

export default function Testimonial() {
    const slider = useRef();
    let translatex = 0;

    const slideBackward = () => {
        if (translatex < 0) {
            translatex += 25;
        }
        slider.current.style.transform = `translateX(${translatex}%)`
    }

    const slideForward = () => {
        if (translatex > -50) {
            translatex -= 25;
        }
        slider.current.style.transform = `translateX(${translatex}%)`;
    }
    return (
        <div className='w-screen px-6 md:px-12 pb-8 mt-5 dark:text-white'>
            <h1 className='text-4xl md:text-6xl text-center font-bold uppercase -mb-10'>Testimonials</h1>
            <div class="mt-20 mx-auto px-10 sm:px-20 relative">
                <img class="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 sm:p-4 w-9 sm:w-12 h-auto rounded-full cursor-pointer bg-blue-800" src={next_btn} alt="" onClick={slideForward} />
                <img class="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 sm:p-4 w-9 sm:w-12 h-auto rounded-full cursor-pointer bg-blue-800" src={back_btn} alt="" onClick={slideBackward} />
                <div class="overflow-hidden">
                    <ul class="flex w-[200%] transition-transform duration-500 " ref={slider}>
                        <li class="list-none w-full sm:w-1/2 p-2 sm:p-5">
                            <div class="shadow-md p-4 sm:p-10 rounded-lg text-gray-600 leading-relaxed">
                                <div class="flex items-center mb-2 sm:mb-5 text-xs sm:text-sm">
                                    <img src={user1} class="w-10 h-10 sm:w-16 sm:h-16 rounded-full mr-1 sm:mr-2" />
                                    <div>
                                        <h3 class="text-md sm:text-lg dark:text-white">Malika</h3>
                                        <span>Lebanon</span>
                                    </div>
                                </div>
                                <p class="text-xs sm:text-sm dark:text-white">the Best App. Excellent Features</p>
                            </div>
                        </li>
                        <li class="list-none w-full sm:w-1/2 p-2 sm:p-5">
                            <div class="shadow-md p-4 sm:p-10 rounded-lg text-gray-600 leading-relaxed">
                                <div class="flex items-center mb-2 sm:mb-5 text-xs sm:text-sm">
                                    <img src={user1} class="w-10 h-10 sm:w-16 sm:h-16 rounded-full mr-1 sm:mr-2" />
                                    <div>
                                        <h3 class="text-md sm:text-lg dark:text-white">Malika</h3>
                                        <span>Lebanon</span>
                                    </div>
                                </div>
                                <p class="text-xs sm:text-sm dark:text-white">the Best App. Excellent Features</p>
                            </div>
                        </li>
                        <li class="list-none w-full sm:w-1/2 p-2 sm:p-5">
                            <div class="shadow-md p-4 sm:p-10 rounded-lg text-gray-600 leading-relaxed">
                                <div class="flex items-center mb-2 sm:mb-5 text-xs sm:text-sm">
                                    <img src={user1} class="w-10 h-10 sm:w-16 sm:h-16 rounded-full mr-1 sm:mr-2" />
                                    <div>
                                        <h3 class="text-md sm:text-lg dark:text-white">Malika</h3>
                                        <span>Lebanon</span>
                                    </div>
                                </div>
                                <p class="text-xs sm:text-sm dark:text-white">the Best App. Excellent Features</p>
                            </div>
                        </li>
                        <li class="list-none w-full sm:w-1/2 p-2 sm:p-5">
                            <div class="shadow-md p-4 sm:p-10 rounded-lg text-gray-600 leading-relaxed">
                                <div class="flex items-center mb-2 sm:mb-5 text-xs sm:text-sm">
                                    <img src={user1} class="w-10 h-10 sm:w-16 sm:h-16 rounded-full mr-1 sm:mr-2" />
                                    <div>
                                        <h3 class="text-md sm:text-lg dark:text-white">Malika</h3>
                                        <span>Lebanon</span>
                                    </div>
                                </div>
                                <p class="text-xs sm:text-sm dark:text-white">the Best App. Excellent Features</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    )
}
