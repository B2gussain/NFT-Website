import React from 'react'

const Herosection = () => {
  return (
    <div className='w-full py-10 flex md:flex-row flex-col justify-center item-center '>
      <div className='md:max-w-2xl px-6 flex flex-col gap-6 justify-center items-center md:items-start'>
        <h1 className='text-4xl  md:text-6xl font-bold'>Discover Digital Art</h1>
        <h1 className='text-4xl  md:text-6xl font-bold'> & <span className='from-[#ADD824] to-[#1C3603] bg-gradient-to-br px-2  rounded-xl'>Collect NFT</span></h1>
        <p className='md:text-start text-center from-[#ADD824]/50 via-[white] to-[#1C3603]/50 bg-gradient-to-br bg-clip-text text-transparent'>Welcome To The World Of NFT Art,You Can Buy And Sell Art To Your Heart's Content And Enjoy All The Cool Features From Us.</p>
        <div className='flex gap-4'>
          <button className='from-[#ADD824] to-[#1C3603] bg-gradient-to-br rounded-lg  text-white font-semibold py-4 px-6'>Explore Now</button>
          <button className='  rounded-lg border-[#ADD824] border-2 text-white font-semibold py-4 px-6'>How It Works</button>
        </div>
      </div>
      <div className='flex justify-center items-center mt-6 md:mt-0'> 
        <img src="/images/ex1-bg.png" className='h-100  object-contain filter saturate-[1.4]' alt="" />
      </div>


    </div>
  )
}

export default Herosection