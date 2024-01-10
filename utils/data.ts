import AccountsIcon from "@/components/icons/AccountsIcon";
import DashboardIcon from "@/components/icons/DashboardIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import TransactionIcon from "@/components/icons/TransactionIcon";
import TransferIcon from "@/components/icons/TransferIcon";
import WorldIcon from "@/components/icons/WorldIcon";


type SidebarLinksType ={
    id: number;
    title: string;
    href: string;
    Icon: any
}

export const SidebarLinks: SidebarLinksType[] = [
    {
        id: 1,
        title: "Get Started",
        href: "/onboard",
        Icon: WorldIcon
    },
    {
        id: 2,
        title: "Dashboard",
        href: "/",
        Icon: DashboardIcon
    },
    {
        id: 3,
        title: "Accounts",
        href: "/accounts",
        Icon: AccountsIcon
    },
    {
        id: 4,
        title: "Transfers",
        href: "/transfer",
        Icon: TransferIcon
    },
    {
        id: 5,
        title: "Transactions",
        href: "/transactions",
        Icon: TransactionIcon
    },
    {
        id: 6,
        title: "Settings",
        href: "/settings",
        Icon: SettingsIcon
    },
]