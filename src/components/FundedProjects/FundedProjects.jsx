import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import * as images from "../../assets"
const FundedProjects = () => {
    return (
        <section>
            <h1 className='text-2xl'>Funded Projects</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-start">Project</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Participants</TableHead>
                        <TableHead>Total raised</TableHead>
                        <TableHead>Current price</TableHead>
                        <TableHead>ATH since IDO</TableHead>
                        <TableHead>Launch date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="p-2">
                    <TableRow className="">
                        <TableCell className="font-medium rounded-l-[25px]">
                            <div className='flex items-center gap-3'>
                                <img src={images.ethlogo} alt="" className='w-8' />
                                <span>Ethereum</span>
                            </div>
                        </TableCell>
                        <TableCell>Token Sale</TableCell>
                        <TableCell>125</TableCell>
                        <TableCell>$80,000</TableCell>
                        <TableCell>$0.2568</TableCell>
                        <TableCell className="text-green-500">+654%</TableCell>
                        <TableCell className="rounded-r-[25px]">May 15th 2024</TableCell>
                    </TableRow>
                    <TableRow className="">
                        <TableCell className="font-medium rounded-l-[25px]">
                            <div className='flex items-center gap-3'>
                                <img src={images.ethlogo} alt="" className='w-8' />
                                <span>Ethereum</span>
                            </div>
                        </TableCell>
                        <TableCell>Token Sale</TableCell>
                        <TableCell>125</TableCell>
                        <TableCell>$80,000</TableCell>
                        <TableCell>$0.2568</TableCell>
                        <TableCell className="text-green-500">+654%</TableCell>
                        <TableCell className="rounded-r-[25px]">May 15th 2024</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    )
}

export default FundedProjects