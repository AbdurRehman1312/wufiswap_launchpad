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

const tableHead = [{
    name: 'Project',
},
{
    name: 'Type',
},
{
    name: 'Participants',
},
{
    name: 'Total raised',
},
{
    name: 'Current price',
},
{
    name: 'ATH since IDO',
},
{
    name: 'Launch date',
}]
const projects = [
    {
        name: 'Laika',
        type: 'TOKEN SALE',
        participants: 680,
        rasied: '$220,000',
        price: 'NA',
        img: images.laika,
        ath: "NA",
        launch: 'Apr 25th 2024',
    },
    {
        name: 'WIWW',
        type: 'TOKEN SALE',
        participants: 320,
        rasied: '$130,000',
        price: '+100%',
        img: images.www,
        ath: "+15,000%",
        launch: 'Feb 6th 2024',
    },
]
const FundedProjects = () => {
    return (
        <section>
            <h1 className='text-2xl'>Funded Projects</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        {
                            tableHead.map((head) => (
                                <TableHead
                                    key={head.name} className="text-nowrap"
                                >
                                    {head.name}
                                </TableHead>
                            ))
                        }
                    </TableRow>
                </TableHeader>
                <TableBody className="">
                    {
                        projects.map((project) => (
                            <TableRow key={project.name} className=''>
                                <TableCell className=" rounded-l-[20px]">
                                    <div className='flex items-center gap-3'>
                                        <img src={project.img} alt="" className='w-10' />
                                        <span>{project.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{project.type}</TableCell>
                                <TableCell>{project.participants}</TableCell>
                                <TableCell>{project.rasied}</TableCell>
                                <TableCell className={project.price === 'NA' ? '' : 'text-green-500'}>{project.price}</TableCell>
                                <TableCell className={project.ath === 'NA' ? '' : 'text-green-500'}>{project.ath}</TableCell>
                                <TableCell className="rounded-r-[20px]">{project.launch}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
    )
}

export default FundedProjects