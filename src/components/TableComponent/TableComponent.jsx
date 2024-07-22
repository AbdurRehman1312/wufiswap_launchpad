import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableRow, TableHeader, TableHead
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
      swap_coin: "DOGE-LAIKA LP",
      percent: "0.01%",
      earned: "0",
      apr_orignal: "91.59%",
      apr_cut: "80.34%",
      staked_liquidity: "10275.38",
      multiplier: "13.4x",
      available: "0",
      staked: "0",
      viewCount: 100,
      image: images.laikacoins1
    },
  ];

  const [toggles, setToggles] = useState(links.reduce((acc, link) => ({ ...acc, [link.id]: false }), {}));

  const toggleRow = (id) => {
    setToggles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full">
      <div className="rounded-md">
        <Table className="border-separate border-spacing-y-[2em]">
          <TableHeader>
            <TableRow className="bg-transparent">
              <TableHead className="text-center text-base lg:text-lg">Pool</TableHead>
              <TableHead className="text-center text-base lg:text-lg">Earned</TableHead>
              <TableHead className="text-center text-base lg:text-lg">APR</TableHead>
              <TableHead className="text-center text-base lg:text-lg">Total Staked</TableHead>
              <TableHead className="text-center text-base lg:text-lg">Available</TableHead>
              <TableHead className="text-center text-base lg:text-lg">Staked</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              links.map((link) => (
                <Collapsible key={link.id} asChild>
                  <>
                    <CollapsibleTrigger asChild>
                      <TableRow className="cursor-pointer br_gradient">
                        <TableCell className="font-medium text-base lg:text-lg rounded-s-[20px]">
                          <div className='flex items-center justify-center gap-3'>
                            <div className='w-[40px] h-[40px]'>
                              <img src={link.image} alt="" className='w-full h-[100%] object-cover' />
                            </div>
                            <span className='text-base lg:text-lg'>{link.swap_coin}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className=' text-lg lg:text-lg font-medium'>{link.earned} LAIKA</span>
                        </TableCell>
                        <TableCell className="text-center">
                          <p className='text-[#27c05e] text-base lg:text-lg font-semibold'>Up to {link.apr_orignal}</p>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className='text-base lg:text-lg ml-2 xl:ml-0 tracking-wider font-bold'>{link.staked_liquidity} LAIKA LP</span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className='text-lg lg:text-lg font-medium'>{link.available} LAIKA LP</span>
                        </TableCell>
                        <TableCell className="text-center rounded-e-[20px]">
                          <span className='text-lg lg:text-lg font-medium'>{link.staked} LAIKA LP</span>
                        </TableCell>
                      </TableRow>
                    </CollapsibleTrigger>
                    <CollapsibleContent asChild>
                      <TableRow className="">
                        <TableCell colSpan={6} className='p-0 rounded-[20px]'>
                          <CollapseComponent/>
                        </TableCell>
                      </TableRow>
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

export default TableComponent;
