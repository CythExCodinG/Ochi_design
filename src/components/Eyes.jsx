import React, { useEffect, useState } from 'react'

const Eyes = () => {

  const [angle, setAngle] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;

      let deltax = x - window.innerWidth / 2;
      let deltay = y - window.innerHeight / 2;

      let angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
      setAngle(angle - 180);
    })
  })


  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.6" className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-15'>
          <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
            <div className='relative w-2/3 bg-zinc-900 rounded-full h-2/3'>
              <div style={{ transform: `rotate(${angle}deg)` }} className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 line w-full h-10'>
                <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
              </div>
            </div>
          </div>
          <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
            <div className='relative w-2/3 bg-zinc-900 rounded-full h-2/3'>
              <div style={{ transform: `rotate(${angle}deg)` }} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 line w-full h-10'>
                <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes