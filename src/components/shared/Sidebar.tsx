"use client"
import React from 'react'
import { SidebarLinks } from '../../../utils/data'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Sidebar = () => {
    
    const pathname = usePathname()
    
    return (
        <div className='max-w-[350px] w-1/4 md:inline-block hidden border-r py-12 h-full border-brandgray'>

            <div className='flex flex-col font-serif space-y-3'>
                {
                    SidebarLinks.map((link) => {
                        const { id, title, href, Icon } = link
                        return (
                            <Link className={
                                pathname === href ? 'text-white bg-brandblue shadow-md' : 'text-gray/50 bg-white'
                            } href={href} key={id}>

                                <div className='flex hover:underline gap-4 py-5  px-4'>
                                    <Icon />

                                    <h3 >{title}</h3>

                                </div>

                            </Link>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Sidebar