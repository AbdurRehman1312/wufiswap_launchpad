import React from 'react'

const SalesDesign = () => {
  return (
    <div className='bg_table px-8 py-10  rounded-[20px] flex justify-center items-center'>
    <div className='w-full'>
         
        <div className='flex flex-col  justify-start gap-5 '>
          <div className='bg_sales w-full flex justify-between py-5 px-5 rounded-[20px] shadow-xl'>
            <h1 className='text-sm '>Sale price</h1>
            <h1 className='text-sm '>1 = $0.028</h1>
          </div>
          <div className='bg_sales w-full flex justify-between items-center py-5 px-5 rounded-[20px] shadow-xl'>
            <h1 className='text-sm '>Sale Start Time</h1>
            <div className='flex flex-col items-end gap-1'>
            <h1 className='text-sm '>June 12th 2024</h1>
            <h1 className='text-xs text-gray-400 '>2:00 PM - UTC</h1>
            </div>   
          </div>
          <div className='bg_sales w-full flex justify-between items-center py-5 px-5 rounded-[20px] shadow-xl'>
            <h1 className='text-sm '>Sale End Time</h1>
            <div className='flex flex-col items-end gap-1'>
            <h1 className='text-sm '>June 13th 2024</h1>
            <h1 className='text-xs text-gray-400 '>9:00 AM - UTC</h1>
            </div>   
          </div>
          <div className='bg_sales w-full flex justify-between items-center py-5 px-5 rounded-[20px] shadow-xl'>
            <h1 className='text-sm '>Token Distribution Time</h1>
            <div className='flex flex-col items-end gap-1'>
            <h1 className='text-sm '>June 13th 2024</h1>
            <h1 className='text-xs text-gray-400 '>10:00 AM - UTC</h1>
            </div>   
          </div>
          <div className='bg_sales w-full flex justify-between py-5 px-5 rounded-[20px] shadow-xl'>
            <h1 className='text-sm '>Initial Market Cap</h1>
            <h1 className='text-sm '>$1,657,906</h1>
          </div>
          <div className='bg_sales w-full flex justify-between py-5 px-5 rounded-[20px] shadow-xl'>
            <h1 className='text-sm '>Initial Token Circulation</h1>
            <h1 className='text-sm '>59,210,915</h1>
          </div>
        </div>
    </div>
   </div>
  )
}

export default SalesDesign