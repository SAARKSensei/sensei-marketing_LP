"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import UpArrow from "../Images/uparrow.svg"

const BackToTop = ({ scrolled }) => {
    return (
        <>
            <Link href="#home" className={`fixed bottom-14 right-20 w-[52px] h-[52px] rounded-[50%] bg-[#F8BF3B] items-center justify-center cursor-pointer ${scrolled ? "flex" : "invisible"}`}>
                <Image
                    src={UpArrow}
                    alt="uparrow"
                    className=''
                />
            </Link>
        </>
    )
}

export default BackToTop