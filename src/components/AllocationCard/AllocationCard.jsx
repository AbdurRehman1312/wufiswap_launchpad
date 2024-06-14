import React from 'react'
import * as images from "../../assets"
import Button from '../Button/Button'
const AllocationCard = () => {
  return (
    <>
     <div className='bg_table px-8 h-[255px] md:h-[223px] lg:h-[255px]  rounded-[20px] flex justify-center items-center'>
      <div className='w-full'>
           
          <div className='flex flex-col items-center gap-5 mt-5'>
            <h1 className='text-2xl '>Your $MUTT allocation</h1>
            <div className='flex items-center gap-1'><img src={images.astrodog} alt="" className='w-7 h-7' /><span className='text-lg text-gray-400'>50,000</span></div>
            <Button name={"Claim $MUTT"} style={"px-16"}/>
          </div>
      </div>
     </div>
    </>
  )
}

export default AllocationCard