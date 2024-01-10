"use client"
import CopyIcon from '../icons/CopyIcon'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { OverviewChart } from '../shared/OverviewChart'
import { useState } from 'react'
const MainDashboard = () => {
    const [selectedPeriod, setSelectedPeriod] = useState<String>("seven")
    return (
        <section className='border-b   border-brandgray w-full py-3 px-4'>
            <div className='px-6 py-4 border-b  w-full'>
                <h3 className='font-bold font-mono'>
                    Online Payments
                </h3>
            </div>
            <div className='px-6 py-5'>
                <Card>
                    <CardHeader>
                        <CardTitle className='text-[#8F8E8E] text-[14px]'>ACCOUNT DETAILS</CardTitle>
                        <CardDescription className='text-base font-medium'>STERING BANK</CardDescription>
                    </CardHeader>
                    <CardContent className='flex justify-between w-full'>
                    <p className='font-bold text-md md:text-lg '>8000000000</p>
                        <div className='flex border-md items-center text-base  gap-1 bg-[#9F56D433] p-[2px] md:p-1 rounded-lg  text-[#9F56D4]'>
                            <CopyIcon />
                            <h3>Copy</h3>

                        </div>
                    </CardContent>
                    
                </Card>
                
            </div>

            <div className='border-[#E4E4E7] bg-[#FAFAFA] space-y-5 flex flex-col px-6 py-5 border shadow-md rounded-md'>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-8 items-center  w-full'>
                    <h1 className='font-semibold font-mono text-[#71717A]'>Showing data for </h1>
                    <select onChange={(e) => setSelectedPeriod(e.target.value)} className='bg-white shadow-md text-[#71717A] font-semibold border-[#DADAE7] border rounded-md p-2' name="" id="">
                        <option value="seven">7 Days</option>
                        <option value="today">Today</option>
                        <option value="thirty">30 Days</option>
                    </select>
                    </div>

                    <div className='hidden md:flex gap-4 w-full font-serif justify-end text-[#000000]'>
                    <button className={selectedPeriod === "today" ? "bg-[#00C6FB0F] p-2 cursor-pointer" : ""} onClick={() => setSelectedPeriod("today")}>Today</button>
                    <button className={selectedPeriod === "seven" ? "bg-[#00C6FB0F] p-2 cursor-pointer" : ""} onClick={() => setSelectedPeriod("seven")}>Last 7 Days</button>
                    <button className={selectedPeriod === "thirty" ? "bg-[#00C6FB0F] p-2 cursor-pointer" : ""} onClick={() => setSelectedPeriod("thirty")}>Last 30 Days</button>
                    </div>

                    <div>

                    </div>
                </div>
                <div className='bg-white rounded-md shadow-md px-5 py-4'>
                    <div className='flex gap-2 items-center'>
                        <h2 className='font-bold text-lg '>Revenue</h2>
                        <p className='hidden md:inline-block font-mono'> <span className='text-[#6DC27F]'>+0.00%</span> vs Last 7 days</p>
                    </div>
                    <div className='hidden font-mono md:flex  gap-2 py-4'>
                        <h3 className='font-bold text-xl'>₦0.00</h3>
                        <p >in total value</p>
                    </div>
                <OverviewChart />
                </div>


            </div>

        </section>
    )
}

export default MainDashboard