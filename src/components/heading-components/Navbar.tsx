import Image from "next/image"
import Logo from "@/components/icons/Logo.svg"
import NotificationBellIcon from "../icons/NotificationBellIcon"
import { ChevronDown, MenuIcon } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="border-b border-brandgray bg-[] items-center flex justify-between px-8 py-5">
            <div className="md:hidden inline-block">
                <MenuIcon />
            </div>
            
            <div>
                <Image
                    width={128}
                    height={128}
                    src={Logo}
                    alt="Logo"

                />

            </div>

            <div className="flex gap-3  items-center justify-center">
                <NotificationBellIcon />
                <div className="flex gap-2 items-center">
                    <div className="bg-brandgreen cursor-pointer  p-3 text-white rounded-full">GA</div>
                    <ChevronDown className="h-3 w-3 md:inline-block hidden" />
                </div>
            </div>

        </nav>
    )
}

export default Navbar