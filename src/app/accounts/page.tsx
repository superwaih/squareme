import ExportIcon from '@/components/icons/ExportIcon'
import { AccountsTable } from '@/components/shared/AccountsTable'
import DashboardLayout from '@/components/shared/DashboardLayout'
import { DatePickerWithRange } from '@/components/shared/DateRangePicker'
import React from 'react'

const Accounts = () => {
    return (
        <DashboardLayout>

            <section className='bg-[#FBFBFB] w-full'>
               <div className='py-6 px-8   border-b w-full flex-col flex justify-between'>
               <div className='flex justify-between w-full py-3'>
                    <h3 className='font-semibold'>All Accounts</h3>

                    <div className='border-[#D0D5DD] cursor-pointer flex md:hidden gap-2 border p-2 w-fit h-fit bg-white shadow-md rounded-lg '>
                    <ExportIcon />
                    <span>Export</span>
                </div>
                </div>

                <div className='text-textgray flex gap-2 items-center'>
                    <p>Select Date Range:</p>
                    <DatePickerWithRange />
                </div>

                <div className='border-[#D0D5DD] hidden  cursor-pointer md:flex gap-2 border p-2 w-fit h-fit bg-white shadow-md rounded-lg '>
                    <ExportIcon />
                    <span>Export</span>
                </div>
               </div>
                <AccountsTable />
            {/* <div className='p-6'>Accounts</div> */}

            </section>


        </DashboardLayout>
    )
}

export default Accounts