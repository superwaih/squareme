"use client"
import React, { PropsWithChildren } from 'react'
import Navbar from '../heading-components/Navbar'
import Sidebar from './Sidebar'
import { usePathname, useRouter } from 'next/navigation'
import { ArrowDown, ArrowDownAz } from 'lucide-react'

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <main className="flex h-screen flex-col ">
      {
        pathname === "/" ?
          (
            <Navbar />

          ) :
          (
            <>
              <div className="hidden sm:inline-block">
                <Navbar />
              </div>
              <div className="inline-block cursor-pointer hover:underline sm:hidden border-b py-6 px-4">
                <div onClick={() => router.back()} className="flex gap-3 items-center">
                  <ArrowDown className="rotate-90" />
                  <p className="capitalize font-semibold">
                    {pathname.replace(/\//g, "")}
                  </p>
                </div>
              </div>

            </>


          )
      }
    
      <div className='h-full flex'>
        <Sidebar />
        {children}


      </div>
    </main>
  )
}

export default DashboardLayout