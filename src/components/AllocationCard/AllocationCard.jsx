import React from 'react'
import * as images from "../../assets"
import Button from '../Button/Button'
const AllocationCard = () => {
  return (
    <>
     <div className=' border_gradient p-3 w-full rounded-[20px] flex justify-center items-center'>
      <div className='w-full bg_table rounded-[20px] px-8 py-24'>
           
          <div className='flex flex-col items-center gap-5 mt-5'>
            <h1 className='text-2xl text-nowrap'>Your $MUTT allocation</h1>
            <div className='flex items-center gap-1'><img src={images.astrodog} alt="" className='w-7 h-7' /><span className='text-lg text-gray-400'>50,000</span></div>
            <Button name={"Claim $MUTT"} style={"px-16"}/>
          </div>
      </div>
     </div>
    </>
  )
}

export default AllocationCard