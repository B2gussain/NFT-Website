import React from 'react'

const CtaSection = () => {
  return (
    <div className="from-[#ADD824]/80 to-[#1C3603]/20 bg-gradient-to-br flex py-4 px-4 gap-0 md:gap-10 lg:gap-30 justify-center items-center ">
        <div className=''>
            <h2 className='text-2xl sm:text-3xl font-bold'>Join The<br/>NFT Marketplace</h2>
            <button className='mt-2 py-2 px-6 w-auto border-2 border-white rounded-lg'>LET's START</button>
        </div>
        <div><img src="/images/ex2-bg.png" className='h-60 filter saturate-[1.6] drop-shadow-2xl ' alt="" /></div>


    </div>
  )
}

export default CtaSection