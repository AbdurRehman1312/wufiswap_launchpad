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

const SwapCard = () => {
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
        <div className='bg_table px-8 py-8  rounded-[20px] flex justify-center items-center'>
            <div className='w-full'>
                {/* From Section */}
                <div className='bg_sales w-full flex justify-between items-end py-5 px-5 rounded-[20px] shadow-xl'>
                    <div className='flex flex-col items-start gap-1'>
                        <h1 className='text-base text-gray-400 '>From</h1>
                        <input type="number"
                            className=" bg_sales text-xl appearance-none border-0 focus:outline-none" value={0} />

                    </div>
                    <Select value={selectedOption1} onValueChange={setSelectedOption1}>
                        <SelectTrigger className="w-[100px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {coins.map(coin => (
                                    <SelectItem key={coin.id} value={coin.id}>
                                        <div className="flex items-center text-base gap-2">
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
                    <button onClick={swapCoins}><img src={images.downArrow} alt="Swap" className='w-4 h-3'/></button>
                </div>

                {/* To Section */}
                <div className='bg_sales w-full flex justify-between items-end py-5 px-5 rounded-[20px] shadow-xl'>
                    <div className='flex flex-col items-start gap-1'>
                        <h1 className='text-base text-gray-400 '>To</h1>
                        <input type="number"
                            className=" bg_sales text-xl appearance-none border-0 focus:outline-none" value={0} />

                    </div>
                    <Select value={selectedOption2} onValueChange={setSelectedOption2}>
                        <SelectTrigger className="w-[100px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {coins.map(coin => (
                                    <SelectItem key={coin.id} value={coin.id}>
                                        <div className="flex items-center text-base gap-2">
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
                <div className='pt-7 flex justify-between'>
                    <div className='bg_sales w-[45%] text-center p-3 rounded-xl shadow-xl'>
                        <h1 className='text-base text-white '>Max allocation: 0.1 DOGE</h1>
                    </div>
                    <Button name={"Connect wallet"} style={" w-[45%] justify-center"} />
                </div>
                
            </div>
        </div>
    )
}

export default SwapCard
