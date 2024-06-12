import React from 'react'
import * as images from "../../assets"
const Button = ({ name, style, img }) => {
    return (
        <button type='button' className={`bg_gradient flex items-center gap-3 py-2 px-6 text-sm lg:text-base text-nowrap rounded-full shadow-lg ${style}`}>
            {name}
            {img && <img src={images[img]} alt="" className='w-5' />}
        </button>
    )
}

export default Button