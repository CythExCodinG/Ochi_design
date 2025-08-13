import React from 'react'
import { GoDotFill } from "react-icons/go";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full bg-[#cdea68] px-20 py-15' >
      <h1 className='border-b-[1px] border-zinc-800 pb-10 text-[3vw] w-3/4 leading-[3vw] -tracking-[2px] text-zinc-800'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>
      <div className='flex gap-5 mt-10'>
        <div className='w-1/2'>
          <h1 className='text-[3vw] leading-[3vw] -tracking-[2px] text-zinc-800'>How We Can Help :</h1>
          <div className='mt-10 px-8 py-5 text-[0.8vw] text-white bg-zinc-800 w-1/4 rounded-full flex items-center justify-between'>
            <p className='uppercase p-1'>Read More</p>
            <span className='text-[1.5vw]'>
              <GoDotFill />
            </span>
          </div>
        </div>
        <div className='image h-[30vw]  object-cover w-1.5/3  rounded-2xl overflow-hidden'>
          <img className='h-full w-full' src="images/image.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About