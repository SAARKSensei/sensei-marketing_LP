"use client"

import Image from 'next/image'
import React from 'react'

import Flower1 from "../Images/flowers-1.png"
import Photo from "../Images/DixitPhoto.png"
import Flower2 from "../Images/flowers-2.png"

const Purpose = () => {
    return (
        <div className='w-full h-[512px] flex items-center justify-between'>
            <div className='w-[75%] flex flex-wrap mx-auto'>
                <div className='w-1/2 relative flex items-center justify-center'>
                    <Image
                        src={Flower1}
                        alt='flower1'
                        className='absolute w-[188px] h-[297px] z-[300] -top-24 left-2'
                    />
                    <Image
                        src={Flower2}
                        alt='flower2'
                        className='absolute w-[170px] h-[185px] z-[300] -top-24 right-60'
                    />
                    <Image
                        src={Photo}
                        alt='DR. Dixit photo'
                        className='w-[253px] h-[258px] z-[500]'
                    />
                    <div className='w-[237px] h-[133px] flex flex-col gap-1 pl-10 pr-3 py-3 rounded-lg bg-[#F6B0A8] -ml-28 z-[400]'>
                        <p className='font-Nunito text-lg font-bold text-black'>Dr. Aparjita Dixit</p>
                        <p className='font-Nunito text-xs font-normal text-black'>Consultant Clinical Psychologist (RCI) | Mental Health Expert at MANODARPAN | Min of Education (MoE)</p>
                    </div>
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