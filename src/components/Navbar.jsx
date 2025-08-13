import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-[999] w-full px-8 py-1 flex justify-between items-center backdrop-blur-sm bg-[#0000008c]'>
      <div className='logo w-16 h-16 '>
        <img src="images/image-removebg-preview.png" alt="" />
      </div>
      <div className='links flex gap-6'>
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a key={index} className={`text-lg capitalize font-light ${index === 4 && "ml-32"}`}>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar