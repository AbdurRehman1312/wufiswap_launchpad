import React, { useState } from 'react'
import * as images from "../../assets"
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const links = [
    {
        name: 'Swap',
        to: '/'
    },
    {
        name: 'Farm',
        to: '/farm'
    },
    {
        name: 'Launchpad',
        to: '/launchpad'
    }

]
const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <header>
                <div className=' px-5 py-3 flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link to='/'>
                            <img src={images.logo} alt="" className='w-20' />
                        </Link>
                        <ul className='list-none text-white lg:flex hidden'>
                            {
                                links.map((link, index) => (
                                    <li key={index} className='inline-block mx-4'>
                                        <Link to={link.to}>{link.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Button name={"Connect Wallet"} img={"wallet"} style={"lg:flex hidden"} />
                        <button type='button' className='bg-gray-600 py-[15px] px-6 rounded-full justify-center items-center lg:flex hidden'>
                            <img src={images.dots} className='w-5' alt="" />
                        </button>
                    </div>
                    <div className="lg:hidden flex justify-end items-center">
                        <img
                            src={toggle ? images.close : images.menu}
                            alt="menu"
                            className="w-[28px] h-[28px] object-contain"
                            onClick={() => setToggle((prev) => !prev)}
                        />
                    </div>
                    {toggle && (
                        <div className="lg:hidden absolute top-[13.5vh] md:top-[14vh] right-0 w-full px-1 z-[100]">
                            <div className="p-6 bg-gray-600 shadow-2xl mx-4 my-2 rounded-xl sidebar">
                                <ul className=' items-center gap-5 flex flex-col justify-center'>
                                    {
                                        links.map((link, index) => (
                                            <li key={index} className='inline-block mx-4'>
                                                <Link to={link.to} onClick={() => setToggle(false)}>{link.name}</Link>
                                            </li>
                                        ))
                                    }
                                    <li>
                                        <Button name={"Connect Wallet"} img={"wallet"} style={"lg:hidden flex"} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header