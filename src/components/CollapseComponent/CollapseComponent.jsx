import React from 'react'
import { TableCell, TableRow } from "@/components/ui/table";
import * as images from "../../assets"
import Button from '../Button/Button'
const CollapseComponent = ({coinName}) => {
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
            <TableCell colSpan={7} className="rounded-e-[20px] ">
            <div className='border rounded-[20px] py-10 px-7 flex flex-col items-center gap-4'>
            <div>
            <h1 className='text-base lg:text-xl'>Enter Amount</h1>
            <input type="number" className=" bg-[#5a5d60] text-base lg:text-xl appearance-none border-0 focus:outline-none w-[100%] py-2 px-5 mt-3 rounded-[30px]" placeholder='0 LP' />
            </div>
            <Button name={"Stake Amount"} style={" py-3 justify-center"}/>
             
            </div>
            </TableCell>
          </TableRow>
      </>
    );
}

export default CollapseComponent