import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableRow,
} from "@/components/ui/table";

import {
  Collapsible, CollapsibleContent, CollapsibleTrigger,
} from "@/components/ui/collapsible";
import CollapseComponent from '../CollapseComponent/CollapseComponent';
import * as images from "../../assets"

const TableComponent = () => {
  const links = [
    {
      id: 1,
      swap_coin: "USDT-BNB LP",
      percent: "0.01%",
      earned: "0",
      apr_orignal: "91.59%",
      apr_cut: "80.34%",
      staked_liquidity: "22,44,539",
      multiplier: "13.4x",
      available: "0",
      staked: "0",
      viewCount: 100,
      image: images.usdt
    },
    {
      id: 2,
      swap_coin: "USDC-BNB LP",
      percent: "0.05%",
      earned: "0",
      apr_orignal: "16.47%",
      apr_cut: "13.98%",
      staked_liquidity: "3,19,16,827",
      multiplier: "33.6x",
      available: "0",
      staked: "0",
      viewCount: 100,
      image: images.usdc
    }
  ];

  const [toggles, setToggles] = useState(links.reduce((acc, link) => ({ ...acc, [link.id]: false }), {}));

  const toggleRow = (id) => {
    setToggles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full sm:px-4">
      <div className="rounded-md ">
        <Table >
          <TableBody>
            {
              links.map((link) => (
                <Collapsible key={link.id} asChild>
                  <>
                    <TableRow className="bg-[#36373a] ">
                      <TableCell className="font-medium text-base lg:text-lg rounded-s-[20px] "><div className='flex items-center gap-3'>
                        <img src={link.image} alt="" className='w-10' />
                        <span>{link.swap_coin}</span></div>
                      </TableCell>
                      <TableCell><h1 className='border inline p-2 rounded-[20px] text-sm lg:text-base tracking-wider'>{link.percent}</h1></TableCell>
                      <TableCell><div className='flex flex-col gap-1'>
                        <span className='text-base lg:text-lg'>Earned</span>
                        <span className='text-gray-400 text-lg lg:text-xl'>{link.earned}</span>
                      </div></TableCell>
                      <TableCell >
                        <div className='flex flex-col gap-1'>
                          <span className='text-base lg:text-lg '>APR</span>
                          <div className='flex items-center gap-2'>
                            <img src={images.rocket} alt="" className='w-5' />
                            <p className='text-[#27c05e] text-base lg:text-lg'>Up to {link.apr_orignal} <span className='line-through text-white ml-1'>{link.apr_cut}</span></p>
                            <button className=' flex-shrink-0'><img src={images.calculator} alt="" className='w-5' /></button>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='flex flex-col gap-1'>
                          <span className='text-base lg:text-lg '>Staked Liquidity</span>
                          <div className='flex items-center gap-2'>
                            <span className='text-base lg:text-lg ml-2 xl:ml-0 tracking-wider'>{link.staked_liquidity} $</span>
                            <button className='ml-2 flex-shrink-0'><img src={images.question} alt="" className='w-6' /></button>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='flex flex-col gap-1'>
                          <span className='text-base lg:text-lg '>Multiplier</span>
                          <div className='flex items-center gap-1'>
                            <span className='text-base lg:text-lg tracking-wider'>{link.multiplier} $</span>
                            <button className='flex-shrink-0'><img src={images.question} alt="" className='w-6 ' /></button>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell><div className='flex flex-col gap-1'>
                        <span className='text-base lg:text-lg'>Available</span>
                        <span className='text-gray-400 text-lg lg:text-xl'>{link.available} LP</span>
                      </div></TableCell>
                      <TableCell><div className='flex flex-col gap-1'>
                        <span className='text-base lg:text-lg'>Staked</span>
                        <span className='text-gray-400 text-lg lg:text-xl'>{link.staked} LP</span>
                      </div></TableCell>
                      <TableCell className="rounded-e-[20px]">
                        <CollapsibleTrigger asChild>
                          <div className='flex justify-center' >
                            <button className='flex-shrink-0' onClick={() => toggleRow(link.id)}>
                            <img
                              src={toggles[link.id] ? images.arrowUp : images.arrowDown}
                              alt="menu"
                              className="w-4"
                            />
                            </button>
                          </div>
                        </CollapsibleTrigger>
                      </TableCell>
                    </TableRow>
                    <CollapsibleContent className='w-full' asChild>
                      <CollapseComponent coinName={link.swap_coin} />
                    </CollapsibleContent>
                  </>
                </Collapsible>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TableComponent