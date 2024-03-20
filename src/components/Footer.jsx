import React from 'react'
import Image from 'next/image'
import SenseiLogo from "../Images/Main logo.svg"

const Footer = () => {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className="h-80 w-full bg-[#2C3D68] rounded-bl-none rounded-[60px] pt-10 px-20">
            <div className="flex flex-row  gap-16">
                <div className="">
                    <Image
                        src={SenseiLogo}
                        alt='senseilogo'
                        className="h-40 w-40"
                    />
                    <div className="text-sm text-slate-200">
                        <h4 className="mb-4">96659 52556</h4>
                        <h5>connect@sensei.org.in</h5>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl text-white font-semibold w-44  mt-10">
                        Life-Skills Education
                    </h1>
                </div>
                <div>
                    <div className="flex flex-row gap-44 text-sm leading-7 mt-10 ml-44 font-light">
                        <div className="text-[#FF8B13] ">
                            <h2>About</h2>
                            <h2>Growers</h2>
                            <h2>Merchants</h2>
                            <h2>Partners</h2>
                            <h2>Contact</h2>
                        </div>
                        <div className="text-white">
                            <h2>Facebook</h2>
                            <h2>Twitter</h2>
                            <h2>Linkedin</h2>
                            <h2>Instagram</h2>
                        </div>
                    </div>
                    <p className="text-white mt-8 font-extralight ml-44">
                        © {year} SAARK Edu. Pvt. Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Footer