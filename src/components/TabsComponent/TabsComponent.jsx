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
            <div className='py-10 md:px-10 px-4'>
                <h1 className='text-2xl mb-10'>Farm</h1>
                <Tabs defaultValue="live" onValueChange={(value) => setActiveTab(value)} className="">
                    <div className='flex items-center flex-wrap md:flex-nowrap justify-between gap-6 md:gap-5'>
                        <div className='flex items-center md:flex-nowrap flex-wrap md:justify-center justify-start gap-3 md:gap-10'>
                            <TabsList>
                                <TabsTrigger value="live" isActive={activeTab === "live"} className="rounded-[20px]">Live</TabsTrigger>
                                <TabsTrigger value="finished" isActive={activeTab === "finished"} className="rounded-[20px]">Finished</TabsTrigger>
                            </TabsList>
                            <Select>
                                <SelectTrigger className="w-[30%]">
                                    <SelectValue placeholder="Farm Types" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Type 1</SelectItem>
                                    <SelectItem value="2">Type 2</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="flex items-center space-x-2">
                                <Switch id="staked-only" />
                                <Label htmlFor="staked-only" className="text-nowrap">Staked Only</Label>
                            </div>
                        </div>

                        <div className='flex items-center justify-center sm:justify-start md:gap-2 lg:gap-10'>
                            <Select>
                                <SelectTrigger className="w-[50%]">
                                    <SelectValue placeholder="Sort By" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Hot">Hot</SelectItem>
                                    <SelectItem value="cold">Cold</SelectItem>
                                </SelectContent>
                            </Select>
                            <input type="number" className=" bg-[#1d1d1d] text-base appearance-none border-0 focus:outline-none w-[100%] py-3 px-5 rounded-[30px]" placeholder='Search Farms' />
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