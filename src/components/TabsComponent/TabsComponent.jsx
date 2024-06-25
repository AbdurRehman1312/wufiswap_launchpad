import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TableComponent from '../TableComponent/TableComponent'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState("live");
    return (
        <>
            <div className='py-10'>

                <Tabs defaultValue="live" onValueChange={(value) => setActiveTab(value)} className="">
                    <div className='flex items-center flex-wrap justify-around gap-6 md:gap-5'>
                        <div className='flex items-center flex-wrap justify-center sm:justify-start gap-3 md:gap-10'>
                        <div className='flex flex-col gap-1'>
                        <h1 className='text-base'>Filter By</h1>
                        <TabsList>
                            <TabsTrigger value="live" isActive={activeTab === "live"} className="rounded-l-[20px]">Live</TabsTrigger>
                            <TabsTrigger value="finished" isActive={activeTab === "finished"} className="rounded-r-[20px]">Finished</TabsTrigger>
                        </TabsList>
                        </div>
                        <DropdownMenu >
                            <DropdownMenuTrigger className='bg-[#36373a] py-2 px-4 rounded-[30px] mt-6'>Farm Types</DropdownMenuTrigger>
                            <DropdownMenuContent className='bg-[#36373a] border-0'>
                                <DropdownMenuItem>Type 1</DropdownMenuItem>
                                <DropdownMenuItem>Type 2</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <div className="flex items-center space-x-2 mt-6">
                            <Switch id="staked-only" />
                            <Label htmlFor="staked-only">Staked Only</Label>
                        </div>
                        </div>
                       
                       <div className='flex items-center flex-wrap gap-4 justify-center sm:justify-start md:gap-10'>
                       <div className='flex flex-col gap-1'>
                        <h1 className='text-base'>Sort By</h1>
                            <Select>
                                <SelectTrigger className="w-[90px]">
                                    <SelectValue placeholder="Hot" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Hot">Hot</SelectItem>
                                    <SelectItem value="cold">Cold</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-base'>Search</h1>
                            <input type="number" className=" bg-[#5a5d60] text-base appearance-none border-0 focus:outline-none w-[100%] py-2 px-4 rounded-[30px]" placeholder='Search Farms' />
                        </div>
                       </div>
                       

                    </div>
                    <TabsContent value="live" ><TableComponent /></TabsContent>
                    <TabsContent value="finished"><TableComponent /></TabsContent>
                </Tabs>

            </div>
        </>


    )
}

export default TabsComponent