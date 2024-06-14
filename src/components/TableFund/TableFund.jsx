import React from 'react'
import * as images from "../../assets"
const projects = [
    {
        name: 'Ethereum',
        type: 'Token Sale',
        participants: 125,
        rasied: '$80,000',
        price: '$0.2568',
        img: images.ethlogo,
        ath: "+654%",
        launch: 'May 15th 2024',
    },
    {
        name: 'Laika',
        type: 'Token Sale',
        participants: 125,
        rasied: '$80,000',
        price: '$0.2568',
        img: images.ethlogo,
        ath: "+654%",
        launch: 'May 15th 2024',
    },
]
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
const TableFund = () => {
    return (
        <section className="">
            <h1 className='text-2xl'>Funded Projects</h1>
            <div className="overflow-hidden md:rounded-lg">
                <table className="min-w-full">
                    <thead className="">
                        <tr>
                            {
                                tableHead.map((head) => (
                                    <th
                                        scope="col"
                                        className=" py-3.5 text-left text-sm font-normal text-gray-400"
                                    >
                                        {head.name}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody className="">
                        {projects.map((project) => (
                            <div className='border_gradient'>
                                <tr key={project.name} className='bg-[#36373A] w-full '>
                                    <td className="whitespace-nowrap  py-8 px-4 rounded-l-[20px]">
                                        <div className='flex items-center gap-3'>
                                            <img src={project.img} alt="" className='w-10' />
                                            <span className='text-sm'>{project.name}</span>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap py-8 text-sm">
                                        <span className=" uppercase">{project.type}</span>
                                    </td>
                                    <td className="whitespace-nowrap  py-8 text-sm">
                                        <span className=''>{project.participants}</span>
                                    </td>
                                    <td className="whitespace-nowrap  py-8 text-sm ">
                                        <span className=''>{project.rasied}</span>
                                    </td>
                                    <td className="whitespace-nowrap  py-8 text-sm ">
                                        <span className=''>{project.price}</span>
                                    </td>
                                    <td className="whitespace-nowrap  py-8 text-sm ">
                                        <span className='text-green-400'>{project.ath}</span>
                                    </td>
                                    <td className="whitespace-nowrap  py-8 text-sm rounded-r-[20px]">
                                        <span className=''>{project.launch}</span>
                                    </td>
                                </tr>
                            </div>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default TableFund