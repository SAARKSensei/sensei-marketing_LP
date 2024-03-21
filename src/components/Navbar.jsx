"use client"

import Image from 'next/image'
import React from 'react'
import SenseiLogo from "../Images/Main logo.svg"
import Button from './Button'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between absolute top-10 w-3/4 left-0 right-0 mx-auto bg-[#2C3D68] rounded-[40px] pl-6 p-2 z-50'>
            <Link href={"https://sensei.org.in/"}>
                <Image
                    src={SenseiLogo}
                    alt='Sensei logo'
                    className='w-28 h-14 cursor-pointer'
                />
            </Link>
            <div className='flex gap-10 font-Nunito text-lg'>
                <Link href={"https://sensei.org.in/about-us/"}>
                    <p className=''>About Us</p>
                </Link>
                <p className=''>Parent</p>
                <p className=''>Why Us</p>
                <p className=''>Curriculum</p>
            </div>
            <div className='flex gap-3 h-[59px] items-center font-Nunito'>
                <button className='hidden rounded-[40px] px-8 py-4 border-2 border-[#F8BF3B] text-[#F8BF3B] text-xl font-bold'>Login</button>
                <Button text={"Buy NOW"} />
            </div>
        </div>
    )
}

export default Navbar