import React, {useState} from 'react'
import { TableCell, TableRow } from "@/components/ui/table";
import * as images from "../../assets"
import Button from '../Button/Button'
const CollapseComponent = ({coinName}) => {
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
        <TableRow className="bg-[#36373a] w-full ">
            <TableCell colSpan={2} className="rounded-s-[20px] ">
                <div className='text-base lg:text-xl flex flex-col items-center gap-4'>
                    <button className='text-[#27c05e] tracking-wider'>Add {coinName}</button>
                    <a href="" className='flex items-start text-[#27c05e] gap-2 tracking-wider'><span>See Pair Info</span><img src={images.window} alt="" className='w-6' /></a>
                    <button className='flex items-center text-[#27c05e] gap-2 tracking-wider'><span>View Contract</span><img src={images.eye} alt="" className='w-7' /></button>
                </div>
            </TableCell>
            <TableCell colSpan={2} className="">
                    <div className='border rounded-[20px] py-16 px-7 flex flex-col items-start gap-4'>
                        <div>
                            <h1 className='text-base lg:text-xl'><span className='text-[#e1479a]'>PEPE</span> EARNED</h1>
                        </div>
                        <div className='flex items-center gap-10 w-full'>
                            <input
                                type="number"
                                className="bg-[#5a5d60] text-base lg:text-xl appearance-none border-0 focus:outline-none w-[100%] py-2 px-5 rounded-[30px]"
                                placeholder='0 USD'
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            <Button
                                name={"Harvest"}
                                style={"py-3 justify-center"}
                                onClick={() => console.log('Button clicked')}
                                disabled={!inputValue}  // Button will be disabled if inputValue is empty
                            />
                        </div>
                    </div>
                </TableCell>
            <TableCell colSpan={5} className="rounded-e-[20px] ">
            <div className='border rounded-[20px] py-10 px-7 flex flex-col items-center gap-4'>
            <div>
            <h1 className='text-base lg:text-xl'>Enter Amount</h1>
            <input type="number" className=" bg-[#5a5d60] text-base lg:text-xl appearance-none border-0 focus:outline-none w-[100%] py-2 px-5 mt-3 rounded-[30px]" placeholder='0 LP' />
            </div>
            <Button name={"Stake Amount"} style={" py-3 justify-center "} onClick={renderPopup}/>
             
            </div>
            </TableCell>
          </TableRow>

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