import React from 'react'

const Featured = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full bg-zinc-900'>
      <div className='w-full px-15 py-15 border-b-[1px] border-zinc-800'>
        <h1 className='text-[3vw] leading-[3vw] -tracking-[2px] text-zinc-100'>Featured Projects</h1>
      </div>
      <div className='w-full h-full px-10 py-5 '>
        <div className="cardcontainer p-20 flex gap-15">
          <div className=" cards w-1/2 h-[70vh] rounded-2xl ">
            <div className="relative card w-full h-full ">
              <h1 className='absolute z-10 left-full whitespace-nowrap text-[#cdea68] text-[5vw] font-bold tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2'> {"Salience Labs".split(" ").map((item, index) => <span key={index}>{item}</span>)}</h1>
              <img className='object-cover rounded-2xl w-full h-full' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="" />
            </div>
          </div>
          <div className=" cards w-1/2 h-[70vh] rounded-2xl">
            <div className="relative card w-full h-full ">
              <h1 className='absolute right-full z-11 text-[#cdea68] text-[5vw] font-bold tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2'> {"Soma".split(" ").map((item, index) => <span key={index}>{item}</span>)} </h1>
              <img className='object-cover rounded-2xl w-full h-full' src="https://ochi.design/wp-content/uploads/2025/08/Soma_Website_0-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured