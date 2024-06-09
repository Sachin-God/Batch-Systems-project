import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Testimonial from './Components/Testimonial'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Pricing from './Components/Pricing'

export default function App() {
  return (
    <div className='dark:bg-gray-900 dark:ease-in-out dark:duration-300 bg-slate-50'>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonial />
      <Footer />
    </div>
  )
}
