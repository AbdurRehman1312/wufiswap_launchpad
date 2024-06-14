import React from 'react'
import { Link } from 'react-router-dom'
import TokenCard from '../../components/TokenCard/TokenCard'
import FundedProjects from '@/components/FundedProjects/FundedProjects'
import TableFund from '@/components/TableFund/TableFund'


const tokenlist = [
    {
        token: "Token Sale",
        img: "ethimg",
        ethlogo: "ethlogo",
        fund: "Funding Goal",
        fundAmount: "$350,000",
        maxAllocation: "Max Allocation",
        max: "0.1 DOGE",
        btn: "Participate",
        title: "Ethereum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellat!",
    },
    {
        token: "Token Sale",
        img: "ethimg",
        ethlogo: "ethlogo",
        fund: "Funding Goal",
        fundAmount: "$350,000",
        maxAllocation: "Max Allocation",
        max: "TBA",
        btn: "Starts on 07.10",
        title: "Ethereum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellat!",
    },
    {
        token: "Token Sale",
        img: "ethimg",
        ethlogo: "ethlogo",
        fund: "Funding Goal",
        fundAmount: "$350,000",
        maxAllocation: "Max Allocation",
        max: "TBA",
        btn: "Starts on 07.20",
        title: "Ethereum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellat!",
    },

]
const Swap = () => {
    return (
        <>
            <section className='px-5 lg:px-[93px] my-5'>
                <h1 className='text-2xl'>Upcoming Launches</h1>
                <div className='flex flex-col md:flex-row flex-wrap justify-between md:justify-center lg:justify-between items-center md:gap-5 gap-10 my-10'>
                    {
                        tokenlist.map((token, index) => (
                            <TokenCard
                                key={index}
                                {...token}
                            />
                        ))
                    }
                </div>
                <FundedProjects />
                {/* <TableFund /> */}
            </section>
        </>
    )
}

export default Swap