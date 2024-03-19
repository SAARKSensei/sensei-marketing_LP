"use client"

import Image from 'next/image'
import React from 'react'

import Flower1 from "../Images/flowers-1.png"
import Photo from "../Images/DixitPhoto.png"

const Purpose = () => {
    return (
        <div className='w-full h-[512px] flex items-center justify-between'>
            <div className='w-[75%] flex flex-wrap mx-auto'>
                <div className='flex relative w-1/2'>
                    <Image
                        src={Flower1}
                        alt='flower1'
                        className='w-[188px] h-[297px]'
                    />
                    <Image
                        src={Photo}
                        alt='DR. Dixit photo'
                        className='w-[253px] h-[258px] '
                    />
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <div className='flex flex-col gap-2 w-full h-full'>
                        <p className='font-NunitoSans font-semibold italic text-[28px] text-[#2C3D68]'>Our Purpose</p>
                        <p className='font-Montserrat text-5xl text-[#2C3D68] font-semibold tracking-normal'>We provide life-skills education to foster well-rounded development for students.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purpose