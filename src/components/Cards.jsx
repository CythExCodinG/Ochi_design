import React from 'react'

const Cards = () => {
  return (
    <div className='w-full p-20 bg-zinc-800 h-screen flex justify-center items-center'>
      <div className='container w-full h-full flex gap-15 justify-betwee items-center '>
        <div className="relative cards w-1/2 h-[50vh] rounded-2xl bg-[#034d43] flex justify-center items-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute text-white px-1 py-2 rounded-full border-2 w-1/4 bottom-6 left-6'>&copy;2019-2020</button>
        </div>
        <div className="cards w-1/2 h-[50vh] rounded-2xl flex gap-10">
          <div className='relative w-1/2 bg-[#212121] h-full rounded-2xl flex justify-center items-center'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute text-white px-1 py-2 rounded-full border-2 w-1/2 bottom-6 left-6'>5.0 Rating</button>
          </div>
          <div className='relative w-1/2 bg-[#212121] h-full rounded-2xl flex justify-center items-center'>
            <img className='w-1/4 h-1/4' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute text-white px-1 py-2 rounded-full border-2 w-1/2 bottom-6 left-6'>Alumini</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards