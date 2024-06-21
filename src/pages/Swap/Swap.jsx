import React from 'react'
import TokenCard from '../../components/TokenCard/TokenCard'
import FundedProjects from '@/components/FundedProjects/FundedProjects'


const tokenlist = [
    {
        token: "Private Sale",
        img: "mutt",
        muttlogo: "muttlogo",
        fund: "Funding Goal",
        fundAmount: "$350,000",
        maxAllocation: "Max Allocation",
        max: "0.1 DOGE",
        btn: "Participate",
        title: "Mutt",
        desc: "The first memecoin of the Laika system.The first space puppy. ",
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
            </section>
        </>
    )
}

export default Swap