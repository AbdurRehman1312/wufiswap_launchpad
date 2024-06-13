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

const Farm = () => {
  return (
    <>
      <div className="container pt-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80vh]">Project</TableHead>
              <TableHead className="text-center">Funding goal</TableHead>
              <TableHead  className="text-center">Max allocation</TableHead>
              <TableHead  className="text-center">Release date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody >
            <TableRow >
              <TableCell className="font-medium"><div className="flex items-center gap-6">
                <img src={images.ethlogo} alt="" className="w-24 h-24" />
                <div>
                  <h1 className="text-2xl">Ethereum</h1>
                  <p className="text-gray-500 text-base mt-1">Lorem ipsum dolor sin amet lorem ipsum dolor sin amet lorem ipsum </p>
                </div>
              </div></TableCell>
              <TableCell className="text-lg text-center">
              $350,000
              </TableCell>
              <TableCell  className="text-lg text-center">1000</TableCell>
              <TableCell   className="text-lg text-center">May 15th 2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="container pt-12 flex ">
         <div className="rounded-lg w-[50%]">
          <img src={images.ethimg} alt="" className="h-80" />
         </div>
         <div className="w-[50%]">
             <StatusCard />
         </div>
      </div>

    </>
  )
}

export default Farm