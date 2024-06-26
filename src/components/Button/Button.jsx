import React from 'react';
import * as images from "../../assets";

const Button = ({ name, style, img, onClick, disabled }) => {
    return (
        <button
            type='button'
            className={`bg_gradient flex items-center gap-3 py-2 px-6 text-sm lg:text-base text-nowrap rounded-full shadow-lg hover:opacity-80 disabled:opacity-50 ${style}`}
            onClick={onClick}
            disabled={disabled} // Use the disabled prop
        >
            {name}
            {img && <img src={images[img]} alt="" className='w-5' />}
        </button>
    );
};

export default Button;
