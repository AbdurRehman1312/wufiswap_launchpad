import React from 'react'
import * as images from "../../assets"
import Button from '../Button/Button'
const TokenCard = ({ fundAmount, maxAllocation, token, title, desc, img, ethlogo, fund, max, btn }) => {
    return (
        <div className='lg:w-[30%] md:w-[40%] border_gradient rounded-[20px]'>
            <div className='py-2 bg-[#1b1b1b] rounded-t-[20px] border_gradient_b'>
                <h1 className='text-center uppercase'>
                    {token}
                </h1>
            </div>
            <div className='relative'>
                <img src={images[img]} alt="" className='w-full object-cover border_gradient2' />
                <img src={images[ethlogo]} alt="" className='absolute bottom-[-16%] left-5 w-20' />
            </div>
            <div className='bg-[#2c2d2f] pt-14 pb-6 px-6 flex flex-col gap-3 rounded-b-[20px]'>
                <h1 className='text-xl'>{title}</h1>
                <p className='text-gray-400'>{desc}</p>
                <div className='flex justify-between items-center'>
                    <h1>{fund}</h1>
                    <p>{fundAmount}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <h1>{maxAllocation}</h1>
                    <p>{max}</p>
                </div>
                <Button name={btn} style={"flex justify-center text-center px-1 w-[70%] mx-auto mt-5"} />
            </div>
        </div>
    )
}

export default TokenCard