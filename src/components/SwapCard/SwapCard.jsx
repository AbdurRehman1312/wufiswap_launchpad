import React, { useState } from 'react'
import * as images from "../../assets"
import Button from '../Button/Button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const SwapCard = ({ toggleCard, setActivePhase }) => {
    const [coins, setCoins] = useState([
        { id: 'dogecoin', name: 'Doge', image: images.dogecoin },
        { id: 'usdt', name: 'USDT', image: images.usdt },
    ]);

    const [selectedOption1, setSelectedOption1] = useState(coins[0].id);
    const [selectedOption2, setSelectedOption2] = useState(coins[1].id);

    const swapCoins = () => {
        // Swap the coins in the array to reflect the new order
        setCoins(prevCoins => [prevCoins[1], prevCoins[0]]);
        // Swap the selected options to match the new coin order
        setSelectedOption1(selectedOption2);
        setSelectedOption2(selectedOption1);
    };

    const getCoin = (id) => {
        // Retrieve the coin object by its id from the current coin state
        return coins.find(coin => coin.id === id);
    }

    return (
        <div className='border_gradient rounded-[20px] '>
            <div className=' bg_table px-8 py-5 rounded-[20px]'>
                {/* From Section */}
                <div className='bg_sales  flex justify-between items-end py-5 px-5 rounded-[20px] shadow-xl'>
                    <div className='flex flex-col items-start gap-1'>
                        <h1 className='text-base text-gray-400 '>From</h1>
                        <input type="number"
                            className=" bg_sales text-xl appearance-none border-0 focus:outline-none w-[50%]" placeholder='0' />

                    </div>
                    <Select value={selectedOption1} onValueChange={setSelectedOption1}>
                        <SelectTrigger className=" w-[130px] sm:w-[100px] ">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {coins.map(coin => (
                                    <SelectItem key={coin.id} value={coin.id}>
                                        <div className="flex items-center text-xs sm:text-base gap-2">
                                            <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                                            <span>{coin.name}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Swap Button */}
                <div className='flex justify-center py-5'>
                    <button onClick={swapCoins}><img src={images.downArrow} alt="Swap" className='w-4 h-3' /></button>
                </div>

                {/* To Section */}
                <div className='bg_sales  flex justify-between items-end py-5 px-5 rounded-[20px] shadow-xl'>
                    <div className='flex flex-col items-start gap-1'>
                        <h1 className='text-base text-gray-400 '>To</h1>
                        <input type="number"
                            className=" bg_sales text-xl appearance-none border-0 focus:outline-none w-[50%]" placeholder='0' />

                    </div>
                    <Select value={selectedOption2} onValueChange={setSelectedOption2}>
                        <SelectTrigger className="w-[130px] sm:w-[100px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {coins.map(coin => (
                                    <SelectItem key={coin.id} value={coin.id}>
                                        <div className="flex items-center text-xs sm:text-base gap-2">
                                            <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                                            <span>{coin.name}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Footer */}
                <div className='pt-7 flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between'>
                    <div className='bg_sales w-full lg:w-[53%] text-center p-3 rounded-xl shadow-xl'>
                        <h1 className='text-sm xl:text-base  text-white text-nowrap'>Max allocation: 0.1 DOGE</h1>
                    </div>
                    <Button name={"Connect wallet"} style={" w-full lg:w-[45%] justify-center "} onClick={() => {
                        toggleCard();
                        setActivePhase((prev) => prev + 2); // Example of advancing phase on action
                    }} />
                </div>

            </div>
        </div>
    )
}

export default SwapCard
