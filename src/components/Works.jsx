"use client"

import React from 'react'

import TextBubble from "../Images/textbubble.svg"
import Image from 'next/image'

const Works = () => {
    return (
        <div className='w-full h-[535px] flex flex-col items-center justify-center gap-10 px-4 mx-auto'>
            <div className='w-[800px] h-[101px] flex flex-col items-center justify-center gap-3'>
                <h2 className='gradient-toright font-Montserrat font-bold text-[54px]'>What Sensei Offers</h2>
                <p className='font-NunitoSans font-semibold text-base'>Learn the benefits of life-skills education.</p>
            </div>
            <div className='w-[1200px] h-[227px] mx-auto grid grid-cols-3 grid-rows-3 gap-x-10 gap-y-28'>
                <div className='w-[337px] h-[89px] flex gap-3'>
                    <Image
                        src={TextBubble}
                        alt='textbubble'
                        className='mb-auto'
                    />
                    <div className='w-[325px] h-[89px] flex flex-col gap-2'>
                        <h3 className='font-NunitoSans font-bold text-2xl'>Activity Based</h3>
                        <p className='font-NunitoSans font-normal text-base'>Courses designed to apply learning in practical settings.</p>
                    </div>
                </div>
                <div className='w-[337px] h-[89px] flex items-center gap-3'>
                    <Image
                        src={TextBubble}
                        alt='textbubble'
                        className='mb-auto'
                    />
                    <div className='w-[325px] h-[89px] flex flex-col gap-2'>
                        <h3 className='font-NunitoSans font-bold text-2xl'>Parenting Solutions</h3>
                        <p className='font-NunitoSans font-normal text-base'>Guidance from experienced life-skills educators.</p>
                    </div>
                </div>
                <div className='w-[337px] h-[89px] flex items-center gap-3'>
                    <Image
                        src={TextBubble}
                        alt='textbubble'
                        className='mb-auto'
                    />
                    <div className='w-[325px] h-[89px] flex flex-col gap-2'>
                        <h3 className='font-NunitoSans font-bold text-2xl'>Secured Identity</h3>
                        <p className='font-NunitoSans font-normal text-base'>Adapt your learning to fit your schedule.</p>
                    </div>
                </div>
                <div className='w-[337px] h-[89px] flex items-center gap-3'>
                    <Image
                        src={TextBubble}
                        alt='textbubble'
                        className='mb-auto'
                    />
                    <div className='w-[325px] h-[89px] flex flex-col gap-2'>
                        <h3 className='font-NunitoSans font-bold text-2xl'>Age Sensitive</h3>
                        <p className='font-NunitoSans font-normal text-base'>Engaging materials that foster deeper understanding.</p>
                    </div>
                </div>
                <div className='w-[337px] h-[89px] flex items-center gap-3'>
                    <Image
                        src={TextBubble}
                        alt='textbubble'
                        className='mb-auto'
                    />
                    <div className='w-[325px] h-[89px] flex flex-col gap-2'>
                        <h3 className='font-NunitoSans font-bold text-2xl'>We say No to Exams</h3>
                        <p className='font-NunitoSans font-normal text-base'>Connect and grow with like-minded peers.</p>
                    </div>
                </div>
                <div className='w-[337px] h-[89px] flex items-center gap-3'>
                    <Image
                        src={TextBubble}
                        alt='textbubble'
                        className='mb-auto'
                    />
                    <div className='w-[325px] h-[89px] flex flex-col gap-2'>
                        <h3 className='font-NunitoSans font-bold text-2xl'>Personalized Life-Skill Report</h3>
                        <p className='font-NunitoSans font-normal text-base'>Monitor your development with ease.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works