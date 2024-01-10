import Navbar from '@/components/heading-components/Navbar'
import MainDashboard from '@/components/pages/MainDashboard'
import Sidebar from '@/components/shared/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen flex-col ">
    <Navbar />
    <div className='h-full flex'>
    <Sidebar />
  <MainDashboard />


    </div>
    </main>
  )
}
