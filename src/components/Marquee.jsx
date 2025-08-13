import React from 'react'
import { motion } from "motion/react"

const Marquee = () => {
  return (

    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full border-zinc-800 bg-[#004D43] mt-5 py-2 rounded-ss-4xl rounded-se-4xl overflow-hidden'>
      <div className='border-t-2 border-b-2 mt-5 mb-5 flex items-center gap-8 w-full whitespace-nowrap'>
        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='text-white p-4 font-semibold uppercase text-[26vw] leading-none -tracking-[24px]'>we are ochi </motion.h1>
        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='text-white p-4 font-semibold uppercase text-[26vw] leading-none -tracking-[24px]'>we are ochi </motion.h1>
      </div>
    </div>
  )
}

export default Marquee