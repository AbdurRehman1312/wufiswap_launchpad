import React from 'react'
import * as images from "../../assets"
import Button from '../Button/Button'
const StatusCard = () => {
    let status = true
  return (
    <>
     <div className='bg_table px-8 h-[255px] md:h-[223px] lg:h-[255px]  rounded-[20px] flex justify-center items-center'>
      <div className='w-full'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl '>Status</h1>
            {status ? <div className='flex items-center gap-2'><img src={images.close} alt="" className='w-5 h-6' /><span className='text-xl'>non registered</span></div>: <div className='flex items-center gap-2'><img src={images.tick} alt="" className='w-5' /><span className='text-xl'>registered</span></div>}
          </div>
          <div className='flex justify-between mt-5'>
            <h1 className='text-xl '>$WUFI staked</h1>
            {status ? <div className='flex items-center gap-1'><span className='text-xl'>0</span><img src={images.logo} alt="" className='w-7 h-7' /></div>: <div className='flex items-center gap-1'><span className='text-xl'>2000</span><img src={images.logo} alt="" className='w-7 h-7' /></div>}
          </div>
          <div className='flex justify-center mt-5'>
            {status ? <h1 className='text-lg text-gray-400 font-light'>Stake $WUFI to be eligible</h1>: <h1 className='text-lg text-gray-400 font-light'>Stake more $WUFI to increase your allocation</h1>}
          </div>
          <div className='flex justify-center mt-5'>
            <Button name={"Stake $WUFI"} style={"px-16"}/>
          </div>
      </div>
     </div>
    </>
  )
}

export default StatusCard