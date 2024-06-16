import React from 'react'


const items = [
  {
    title: 'Sale price',
    value: '1 = $0.028'
  },
  {
    title: 'Sale Start Time',
    value: 'June 20th 2024',
    value2: '2:00 PM - UTC'
  },
  {
    title: 'Sale End Time',
    value: 'June 22th 2024',
    value2: '9:00 AM - UTC'
  },
  {
    title: 'Token Distribution Time',
    value: 'June 30th 2024',
    value2: '10:00 AM - UTC'
  },
  {
    title: 'Initial Market Cap',
    value: '$1,657,906'
  },
  {
    title: 'Initial Token Circulation',
    value: '59,210,915'
  }
]
const SalesDesign = () => {
  return (
    <div className='border_gradient p-3 w-full rounded-[20px] flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-5 w-full lg:py-10 py-5 md:px-8 px-5 bg_table rounded-[20px]'>
        {items.map((item, index) => (
          <div key={index} className='bg_sales w-full flex justify-between items-center px-4 h-[60px] py-10 rounded-[20px] shadow-xl'>
            <h1 className='text-sm '>{item.title}</h1>
            <div className='flex flex-col items-end gap-1'>
              <h1 className='text-sm '>{item.value}</h1>
              {item.value2 && <h1 className='text-xs text-gray-400 '>{item.value2}</h1>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SalesDesign