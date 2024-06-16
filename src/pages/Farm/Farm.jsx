import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import React, { useState } from 'react'
import * as images from "../../assets"
import StatusCard from "@/components/StatusCard/StatusCard"
import ProgressBar from "@/components/ProgressBar/ProgressBar"
import AllocationCard from "@/components/AllocationCard/AllocationCard"
import Description from "@/components/Description/Description"
import SwapCard from "@/components/SwapCard/SwapCard"

const Farm = () => {
  const [showStatusCard, setShowStatusCard] = useState(false);
  const [showSwapCard, setShowSwapCard] = useState(true);
  const [activePhase, setActivePhase] = useState(1);

  const toggleStatusCard = () => {
    setShowStatusCard(!showStatusCard);
  };

  const toggleSwapCard = () => {
    setShowSwapCard(!showSwapCard);
  };
  return (
    <>
      <div className="px-5 lg:px-[93px] pt-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80vh]">Project</TableHead>
              <TableHead className="text-center text-nowrap">Funding goal</TableHead>
              <TableHead className="text-center text-nowrap">Max allocation</TableHead>
              <TableHead className="text-center text-nowrap">Listing date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody >
            <TableRow className="bg-[#36373a]">
              <TableCell className="font-medium rounded-s-[20px] "><div className="flex flex-col lg:flex-row lg:items-center items-start  lg:gap-6 gap-3">
                <div className="border_gradient p-1 rounded-[13px]">
                  <img src={images.muttlogo} alt="" className="w-24 h-24 rounded-[10px]" />
                </div>
                <div>
                  <h1 className="text-2xl">Muttnik - $MUTT</h1>
                  <p className="text-gray-400 text-base mt-1">The first memecoin of the Laika system.
                    <br /> The first space puppy. </p>
                </div>
              </div></TableCell>
              <TableCell className="text-lg text-center text-nowrap">
                $350,000
              </TableCell>
              <TableCell className="text-lg text-center">
                <div className="flex items-center justify-center gap-2">
                  <p>10</p>
                  <img src={images.dogecoin} alt="" className="w-6" />
                </div>
              </TableCell>
              <TableCell className="text-lg text-center rounded-e-[20px] text-nowrap">June 30th 2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="pt-12 flex justify-between items-start flex-col md:flex-row gap-5 ">
          <div className="flex flex-col gap-3 lg:w-[45%] w-full">
            <div className="rounded-[20px] border_gradient flex flex-col gap-2">
              <img src={images.muttman} alt="" className=" w-full rounded-[20px]" />
            </div>
            <div className="flex items-center gap-5 mt-3 mx-3">
              <a href="https://x.com/mutt_laika" target="_blank" >
                <img src={images.x} alt="" className="w-5" />
              </a>
              <a href="" target="_blank">
                <img src={images.telegram} alt="" className="w-5" />
              </a>
              <a href="" target="_blank">
                <img src={images.globe} alt="" className="w-5 mx-1" />
              </a>
            </div>
          </div>
          <div className="lg:w-[50%] w-full">
            {showStatusCard ?
              (showSwapCard ? <SwapCard toggleCard={toggleSwapCard} setActivePhase={setActivePhase} /> : <AllocationCard />)
              : <StatusCard toggleCard={toggleStatusCard} setActivePhase={setActivePhase} />
            }
          </div>
        </div>
        <div className="pt-10">
          <h1 className="text-xl">Status overview</h1>
          <ProgressBar activePhase={activePhase} setActivePhase={setActivePhase} />
        </div>
        <div className="pt-20">
          <Description />
        </div>

      </div>

    </>
  )
}

export default Farm