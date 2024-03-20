"use client"

import Image from 'next/image'
import React from 'react'

import ChoosePlan from "../Images/chooseplan.png"
import ActivityBased from "../Images/activitybased.png"
import LifeSkillReport from "../Images/lifeskillreport.png"
import Button from './Button'

const Works = () => {
    return (
        <div className='w-full h-[742px] flex flex-col items-center justify-center gap-10 px-4 mx-auto'>
            <div className='w-[720px] h-[106px] flex flex-col items-center justify-center gap-4'>
                <h2 className='gradient-toright font-Montserrat font-bold text-[54px]'>How Sensei Works</h2>
                <p className='font-NunitoSans font-normal text-xl'>Discover the steps to enrich your education with us.</p>
            </div>
            <div className='w-[1200px] h-[379px] mx-auto grid grid-cols-3 gap-10'>
                <div className='w-[360px] h-[327px] flex flex-col items-center gap-8'>
                    <Image
                        src={ChoosePlan}
                        alt='chooseskill'
                        className=''
                    />
                    <div className='flex flex-col items-center gap-2'>
                        <p className='font-Montserrat font-semibold text-2xl'>Choose a Plan</p>
                        <p className='font-NunitoSans font-normal text-sm'>Select the program that aligns with your goals.</p>
                    </div>
                </div>
                <div className='w-[360px] h-[327px] flex flex-col items-center gap-8'>
                    <Image
                        src={ActivityBased}
                        alt='activitybased'
                        className=''
                    />
                    <div>
                        <p className='font-Montserrat font-semibold text-2xl'>Activity based Learning</p>
                        <p className='font-NunitoSans font-normal text-sm'>Fun group activities for kids and digital activities for both parents.</p>
                    </div>
                </div>
                <div className='w-[360px] h-[327px] flex flex-col items-center gap-8'>
                    <Image
                        src={LifeSkillReport}
                        alt='lifeskillreport'
                        className=''
                    />
                    <div>
                        <p className='font-Montserrat font-semibold text-2xl'>Personalized Life-skills report</p>
                        <p className='font-NunitoSans font-normal text-sm'>Get strategic growth report of your child, to keep them ready for digital era.</p>
                    </div>
                </div>
            </div>
            <Button text={"Buy NOW"} />
        </div>
    )
}

export default Works