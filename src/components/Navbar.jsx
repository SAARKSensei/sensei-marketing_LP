"use client"

import Image from 'next/image'
import React from 'react'
import SenseiLogo from "../Images/Main logo.svg"

const Navbar = () => {
    return (
        <div className='flex items-center justify-between absolute top-10 w-3/4 left-0 right-0 mx-auto bg-[#2C3D68] rounded-[40px] pl-6 p-2 z-50'>
            <Image
                src={SenseiLogo}
                alt='Sensei logo'
                className='w-28 h-14'
            />
            <div className='flex gap-10 font-Nunito text-lg'>
                <p className=''>About Us</p>
                <p className=''>Parent</p>
                <p className=''>Why Us</p>
                <p className=''>Curriculum</p>
            </div>
            <div className='flex gap-3 h-[59px] items-center font-Nunito'>
                <button className='rounded-[40px] px-8 py-4 border-2 border-[#F8BF3B] text-[#F8BF3B] text-xl font-bold'>Login</button>
                <button className='rounded-[40px] px-8 py-4 bg-[#F8BF3B] text-[#2C3D68] font-bold'>Buy NOW</button>
            </div>
        </div>
    )
}

export default Navbar