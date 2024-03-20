"use client"

import React from 'react'
import Image from 'next/image'
import Button from './Button'

import Parenting from "../Images/parenting.svg"
import Modules from "../Images/modules.svg"
import Gamified from "../Images/gamified.svg"
import Report from "../Images/report.svg"
import Banner1 from "../Images/banner1.svg"
import Banner2 from "../Images/banner2.svg"
import Banner3 from "../Images/banner3.svg"
import OrangeTick from "../Images/orangetick.svg"
import WhiteTick from "../Images/whitetick.svg"
import WhiteCross from "../Images/whitecross.svg"

const Pricing = () => {
    return (
        <div className='w-[90%] h-[1037px] mx-auto flex flex-col items-center gap-6'>
            <div className='w-[720px] h-[131px] my-8 flex flex-col items-center justify-center gap-4'>
                <p className='font-Montserrat font-bold text-[54px] text-[#2C3D68]'>Our Pricing Plans</p>
                <p className='font-Nunito font-medium text-lg text-[#333] text-center'>We offer a personalized and age appropriate Life-skill curriculum in K-12 spectrum catering school kids</p>
            </div>
            <div className='w-full flex items-center justify-center gap-7'>
                <div className='flex flex-col gap-8 mt-4'>
                    <div className='w-[340px] h-[58px] flex items-center'>
                        <Image
                            src={Parenting}
                            alt='parenting'
                            className='mr-4'
                        />
                        <p className='text-[#2C3D68] font-Montserrat font-medium text-lg tracking-tight'>Parenting Solutions</p>
                    </div>
                    <div className='w-[340px] h-[58px] flex items-center'>
                        <Image
                            src={Modules}
                            alt='modules'
                            className='mr-4'
                        />
                        <p className='text-[#2C3D68] font-Montserrat font-medium text-lg tracking-tight'>Downloadable Modules</p>
                    </div>
                    <div className='w-[340px] h-[58px] flex items-center'>
                        <Image
                            src={Gamified}
                            alt='gamified'
                            className='mr-4'
                        />
                        <p className='text-[#2C3D68] font-Montserrat font-medium text-lg tracking-tight'>Gamified Digital Activities</p>
                    </div>
                    <div className='w-[340px] h-[58px] flex items-center'>
                        <Image
                            src={Report}
                            alt='Report'
                            className='mr-4'
                        />
                        <p className='text-[#2C3D68] font-Montserrat font-medium text-lg tracking-tight'>Personalized Life-Skill Report</p>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-5'>
                    <div className=' w-[240px] h-[637px] relative'>
                        <Image
                            src={Banner1}
                            alt='banner1'
                            className='ml-8 -mb-8'
                        />
                        <p className='absolute left-14 top-2 font-Montserrat text-base font-bold text-[#F8BF3B]'>@your Society</p>
                        <div className='w-full h-[628px] flex flex-col items-center justify-center shadow rounded-[10px]'>
                            <div className='w-[195px] h-[109px] flex flex-col items-center justify-between'>
                                <div className='w-full flex flex-col items-center justify-center'>
                                    <p className='font-Montserrat font-medium text-xl text-black line-through'>₹22,499/-</p>
                                    <p className='font-Montserrat font-bold text-3xl gradient-toright'>₹12,624/year</p>
                                </div>
                                <p className='font-Montserrat font-semibold text-sm text-[#919191] text-center'>Easy EMI starting @ ₹1624/- for 9 months</p>
                            </div>
                            <div>
                                <Image
                                    src={OrangeTick}
                                    alt='orangetick'
                                    className='mt-8 mb-[77px]'
                                />
                                <Image
                                    src={OrangeTick}
                                    alt='orangetick'
                                    className='mb-[61px]'
                                />
                                <Image
                                    src={OrangeTick}
                                    alt='orangetick'
                                    className='mb-[56px]'
                                />
                                <Image
                                    src={OrangeTick}
                                    alt='orangetick'
                                    className='mb-[28px]'
                                />
                            </div>
                            <Button text={"Refer & Earn"} />
                        </div>
                    </div>
                    <div className=' w-[240px] h-[637px] relative'>
                        <Image
                            src={Banner2}
                            alt='banner2'
                            className='ml-10 -mb-8'
                        />
                        <p className='absolute left-14 top-2 font-Montserrat text-base font-bold text-[#F8BF3B]'>@your School</p>
                        <div className='w-full h-[628px] flex flex-col items-center justify-center shadow rounded-[10px]'>
                            <div className='w-[195px] h-[109px] flex flex-col items-center justify-between'>
                                <p className='font-Montserrat font-bold text-3xl mt-9 text-center gradient-toright'>Get in touch Now</p>
                            </div>
                            <div>
                                <Image
                                    src={OrangeTick}
                                    alt='orangetick'
                                    className='mt-8 mb-[77px]'
                                />
                                <Image
                                    src={OrangeTick}
                                    alt='orangetick'
                                    className='mb-[61px]'
                                />
                                <Image
                                    src={OrangeTick}
                                    alt='orangetick'
                                    className='mb-[56px]'
                                />
                                <Image
                                    src={OrangeTick}
                                    alt='orangetick'
                                    className='mb-[28px]'
                                />
                            </div>
                            <Button text={"Watch a DEMO"} />
                        </div>
                    </div>
                    <div className=' w-[240px] h-[637px] relative'>
                        <Image
                            src={Banner3}
                            alt='banner3'
                            className='ml-8 -mb-8'
                        />
                        <p className='absolute left-10 top-2 font-Montserrat text-base font-bold text-[#F8BF3B]'>For Young Families</p>
                        <div className='w-full h-[628px] flex flex-col items-center justify-center shadow rounded-[10px] gradient-tobottom'>
                            <div className='w-[195px] h-[109px] flex flex-col items-center justify-between'>
                                <div className='w-full flex flex-col items-center justify-center'>
                                    <p className='font-Montserrat font-medium text-xl line-through'>₹14,4616/-</p>
                                    <p className='font-Montserrat font-bold text-3xl '>₹6,499/year</p>
                                </div>
                                <p className='font-Montserrat font-semibold text-sm text-center'>Easy EMI starting @ ₹1055/- for 9 months</p>
                            </div>
                            <div>
                                <Image
                                    src={WhiteTick}
                                    alt='orangetick'
                                    className='mt-8 mb-[77px]'
                                />
                                <Image
                                    src={WhiteTick}
                                    alt='orangetick'
                                    className='mb-[61px]'
                                />
                                <Image
                                    src={WhiteCross}
                                    alt='orangetick'
                                    className='mb-[56px]'
                                />
                                <Image
                                    src={WhiteCross}
                                    alt='orangetick'
                                    className='mb-[28px]'
                                />
                            </div>
                            <Button text={"Buy NOW"} color={"#fff"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing