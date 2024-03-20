"use client"

import Image from 'next/image'
import React from 'react'

import Navbar from "@/components/Navbar";

import GreenBg from "../Images/herosectionbg.png"
import Wiresframe from "../Images/herosectionwire.png"
import Bulb from "../Images/bulb.svg"
import Smile from "../Images/smileflower.svg"
import Hearts from "../Images/hearts.svg"
import Thumbs from "../Images/thumbsup.svg"
import Puzzle from "../Images/puzzlepieces.svg"
import BigSmile from "../Images/bigsmile.svg"
import DropdownArrow from "../Images/downarrow.svg"
import Portal from "../Images/portal.svg"
import Phones from "../Images/phones.png"

const HeroSection = () => {
    return (
        <div className="w-full h-[707px] relative z-10 flex flex-col">
            <Navbar />
            <Image
                src={GreenBg}
                alt="Green BG"
                className="w-full h-full absolute rounded-bl-[60px] rounded-br-[60px] border-b-2 border-black"
            />
            <Image
                src={Wiresframe}
                alt='wireframe'
                className='absolute w-full h-full opacity-25'
            />
            <div className='absolute w-full h-full opacity-20'>
                <Image
                    src={Bulb}
                    alt='bulb avg'
                    className='absolute w-[104px] h-[140px] top-11'
                />
                <Image
                    src={Smile}
                    alt='smile avg'
                    className='absolute w-[123px] h-[120px] top-8 right-[150px]'
                />
                <Image
                    src={Hearts}
                    alt='hearts avg'
                    className='absolute w-[96px] h-[80px] top-24 right-[511px]'
                />
                <Image
                    src={Thumbs}
                    alt='thumbs avg'
                    className='absolute w-[189px] h-[287px] -bottom-12 right-[21px]'
                />
                <Image
                    src={Puzzle}
                    alt='puzzle avg'
                    className='absolute w-[167px] h-[207px] -bottom-12 left-[653px]'
                />
                <Image
                    src={BigSmile}
                    alt='bigsmile avg'
                    className='absolute w-[350px] h-[230px] bottom-0 left-0'
                />
            </div>
            <div className='flex items-center justify-between w-[75%] mx-auto mt-48 z-20'>
                <div className='w-[720px] h-[300px] flex flex-col gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-Nunito text-7xl font-bold leading-tight tracking-wide'>
                            India&apos;s 1st Life-Skill Education Platform
                        </h1>
                        <h3 className='italic font-NunitoSans text-4xl'>
                            With Strategic Growth
                        </h3>
                    </div>
                    <div className='w-[579px] h-14 flex gap-3 relative'>
                        <select name="class" className='w-40 h-12 font-NunitoSans text-lg font-semibold text-black flex items-center bg-white rounded-xl outline-none cursor-pointer appearance-none px-2'>
                            <option value="">
                                <span className='font-NunitoSans'>Enter Class</span>
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <Image
                            src={DropdownArrow}
                            alt='arrow'
                            className='absolute left-32 top-[17px] cursor-pointer'
                        />
                        <div className='w-[242px] h-12 rounded-xl font-NunitoSans text-lg font-semibold text-black flex items-center gap-2 px-6 py-3 bg-white'>
                            <span>+91</span>
                            <span>
                                <input type="tel" name="phoneNumber" className='w-full outline-none bg-white' />
                            </span>
                        </div>
                        <button className='rounded-[40px] px-8 py-4 bg-[#F8BF3B] text-[#2C3D68] font-Nunito font-bold'>Buy NOW</button>
                    </div>
                </div>
                <div className='w-[445px] h-[451px] relative'>
                    <Image
                        src={Portal}
                        alt='portal'
                        className='absolute w-[445px] h-[393px] fade-in'
                    />
                    <Image
                        src={Phones}
                        alt='phones'
                        className='absolute left-10 w-[353px] h-[404px] fadeInBounceOut'
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection