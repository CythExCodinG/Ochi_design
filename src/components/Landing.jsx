import { motion } from 'motion/react'
import React from 'react'
import { FaArrowRight } from "react-icons/fa"

const Landing = () => {
  return (

    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full bg-zinc-900 text-white pt-1'>
      <div className='textstructure mt-52 px-20'>

        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => (
          <div className='masker flex items-center overflow-hidden'>
            {index === 1 && (<motion.div initial={{ width: "0vw" }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='w-[9vw] bg-white'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDpK0yOzkeQcX2liZaqEzrZ4A_qnm-hGsZQ&s" alt="" />
            </motion.div>)}
            <h1 className='text-[7vw] leading-[6.5vw] -tracking-[6px] font-semibold'>{item}</h1>
          </div>
        ))}

      </div>

      <div className='border-t-[1px] border-zinc-800 mt-36 flex items-center justify-between px-12 py-5'>
        {["Presentation and storytelling agency", "For innovation teams and global brands", "START THE PROJECT"].map((item, index) => (
          index === 2 ? (<div key={index} className='text-md  p-1.5 flex items-center gap-2'>
            <div className='rounded-full border-[1px] p-1.5'>{item}</div>
            <div><FaArrowRight className='text-zinc-200 text-[35px] border-zinc-200 border-[1px] rounded-full p-1 -rotate-45' /></div>
          </div>) : (<a key={index} href="" className='text-md capitalize font-semibold '>{item}</a>)
        ))}
      </div>
    </div>
  )
}

export default Landing