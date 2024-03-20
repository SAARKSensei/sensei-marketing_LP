"use client"

import React from 'react'

const PricingButtons = ({ text, color }) => {

    let bgcolor;

    if (color) {
        bgcolor = "#fff"
    } else {
        bgcolor = "#F8BF3B"
    }

    return (
        <button className={`rounded-[40px] px-8 py-4 text-lg ${bgcolor} text-[#2C3D68] font-bold`}>{text}</button>
    )
}

export default PricingButtons