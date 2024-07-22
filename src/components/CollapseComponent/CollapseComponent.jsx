import React, { useState } from 'react'
import { TableCell, TableRow } from "@/components/ui/table";
import * as images from "../../assets"
import Button from '../Button/Button'
const CollapseComponent = ({ coinName }) => {
  const [inputValue, setInputValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const renderPopup = () => {
    setShowPopup(true)
  }
  function closePopup() {
    setShowPopup(false);
    document.body.classList.remove("popup-open");
  }

  const handlePopupClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div className='w-full border_gradient p-2 rounded-[20px]'>
        <div className=' bg-[#36373A] rounded-[20px] flex justify-between py-10 px-12'>
          <div className='w-[30%]'>
            <div className='text-base lg:text-xl flex flex-col items-start gap-5 lg:ps-10'>
              <h1 className='text-base lg:text-2xl'>Links</h1>
              <a href="" className='flex items-center text-gray-400 gap-2 tracking-wider'>
                <span> {">"} Get LAIKA LP</span>
                <img src={images.window} alt="" className='w-4' />
              </a>
              <a href="" className='flex items-center text-gray-400 gap-2 tracking-wider'>
                <span> {">"} See token contract</span>
                <img src={images.window} alt="" className='w-4' />
              </a>
              <button className='flex items-center text-gray-400 gap-2 tracking-wider'>
                <span> {">"} View Contract</span>
                <img src={images.window} alt="" className='w-4' />
              </button>
            </div>
          </div>
          <div className='w-[30%]'>
            <div className='px-7'>
              <div className=''>
                <div className='flex flex-col'>
                  <h1 className='text-base lg:text-2xl'>Stake Your LAIKA</h1>
                  <div className='mt-3'>
                    <h1 className='text-base lg:text-lg text-gray-400'>Enter amount (max : 0 LAIKA)</h1>
                    <input type="number" className=" bg-[#5a5d60] text-base lg:text-xl appearance-none border-0 focus:outline-none w-[70%] py-2 px-5 mt-3 rounded-[10px]" placeholder='0' />
                    <Button name={"Stake"} style={" py-3 px-20 mt-5"} onClick={renderPopup} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[30%]'>
            <div className=' px-7 flex flex-col items-start gap-4'>
              <h1 className='text-base lg:text-2xl'>Your Position</h1>
              <div className='flex items-center justify-between w-full'>
                <h1 className='text-base lg:text-lg text-gray-400'>Token Staked</h1>
                <span className='text-lg lg:text-xl font-medium'>0 LAIKA</span>
              </div>
              <div className='flex items-center justify-between w-full mt-2'>
                <h1 className='text-base lg:text-lg text-gray-400'>Laika Earned</h1>
                <span className='text-lg lg:text-xl font-medium'>0 LAIKA LP</span>
              </div>
              <Button name={"Unstake"} style={" py-3 px-20 mt-2"} onClick={renderPopup} />
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center  z-[100]" onClick={closePopup}>
          <div className="bg-[#191919] py-6 px-7 z-[300] md:w-[40%] rounded-[20px]" onClick={handlePopupClick}>
            <div className="flex flex-col items-center gap-5">

              <h2 className="text-white font-bold text-2xl">Waiting for TX</h2>


              <div role="status">
                <svg aria-hidden="true" class="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-[#e1479a]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CollapseComponent