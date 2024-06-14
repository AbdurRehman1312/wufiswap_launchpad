import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import React from 'react'
import * as images from "../../assets"
import StatusCard from "@/components/StatusCard/StatusCard"
import ProgressBar from "@/components/ProgressBar/ProgressBar"
import AllocationCard from "@/components/AllocationCard/AllocationCard"
import Description from "@/components/Description/Description"

const Farm = () => {

  return (
    <>
      <div className="px-5 lg:px-[93px] pt-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80vh]">Project</TableHead>
              <TableHead className="text-center text-nowrap">Funding goal</TableHead>
              <TableHead className="text-center text-nowrap">Max allocation</TableHead>
              <TableHead className="text-center text-nowrap">Release date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody >
            <TableRow className= "bg-[#36373a]">
              <TableCell className="font-medium rounded-s-[20px] "><div className="flex flex-col sm:flex-row sm:items-center  sm:gap-6 gap-3">
                <img src={images.ethlogo} alt="" className="w-24 h-24" />
                <div>
                  <h1 className="text-2xl">Ethereum</h1>
                  <p className="text-gray-500 text-base mt-1">Lorem ipsum dolor sin amet lorem ipsum dolor sin amet lorem ipsum </p>
                </div>
              </div></TableCell>
              <TableCell className="text-lg text-center text-nowrap">
                $350,000
              </TableCell>
              <TableCell className="text-lg text-center">1000</TableCell>
              <TableCell className="text-lg text-center rounded-e-[20px] text-nowrap">May 15th 2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="pt-12 flex justify-between flex-col md:flex-row gap-5 ">
          <div className="rounded-[20px] border_gradient lg:w-[50%]">
            <img src={images.ethimg} alt="" className=" w-full rounded-[20px]" />
          </div>
          <div className="lg:w-[50%] w-full">
            <StatusCard />
          </div>
        </div>
        <div className="pt-10">
          <h1 className="text-xl">Status overview</h1>
        <ProgressBar  />
        </div>
        <div className="pt-20">
          <Description />
        </div>
        
      </div>

    </>
  )
}

export default Farm