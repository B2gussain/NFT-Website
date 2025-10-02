import { Disc, FacebookIcon, FactoryIcon, InstagramIcon, TwitchIcon, TwitterIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 py-6 px-6 sm:px-10'>
        <div className='p-4'>
            <h2 className='text-xl font-bold '>About Us</h2>
            <ul className='text-sm text-white/50'>
                <li className='hover:text-[#ADD824] cursor-pointer' >About NFT's</li>
                <li className='hover:text-[#ADD824] cursor-pointer' >Career</li>
                <li className='hover:text-[#ADD824] cursor-pointer' >Community</li>
                <li className='hover:text-[#ADD824] cursor-pointer' >Blog</li>
                <li className='hover:text-[#ADD824] cursor-pointer' >Terms</li>

            </ul>

        </div>
        <div className='p-4'>
            <h2 className='text-xl font-bold '>Links</h2>
            <ul className='text-sm text-white/50'>
                <li className='hover:text-[#ADD824] cursor-pointer'>Rarible API</li>
                <li className='hover:text-[#ADD824] cursor-pointer'>RARI Token</li>
                <li className='hover:text-[#ADD824] cursor-pointer'>Bug Bounty</li>
                <li className='hover:text-[#ADD824] cursor-pointer'>Become A Partner</li>
                <li className='hover:text-[#ADD824] cursor-pointer'>Branding</li>

            </ul>

        </div>
        <div className='p-4'>
            <h2 className='text-xl font-bold '>Resounces</h2>
            <ul className='text-sm text-white/50'>
                <li className='hover:text-[#ADD824] cursor-pointer'>Learn</li>
                <li className='hover:text-[#ADD824] cursor-pointer'>Help Center</li>
                <li className='hover:text-[#ADD824] cursor-pointer '>Platform Status</li>
                <li className='hover:text-[#ADD824] cursor-pointer '>Partners</li>
                <li className='hover:text-[#ADD824] cursor-pointer'>Newsletter</li>

            </ul>

        </div>
        <div className='p-4 '>
            <h2 className='text-xl font-bold '>Community</h2>
            <div className='flex gap-2 mt-2'>
                <FacebookIcon className='hover:text-[#ADD824] cursor-pointer'/>
                <TwitchIcon className='hover:text-[#ADD824] cursor-pointer'/>
                <InstagramIcon className='hover:text-[#ADD824] cursor-pointer'/>
                <TwitterIcon className='hover:text-[#ADD824] cursor-pointer'/>

            </div>
        </div>
    
    </div>
  )
}

export default Footer