"use client";

import { UserInfo } from "@/types/user";
import { useEffect, useState } from "react";
import { Bell, Menu, Search } from "lucide-react";
import { UserDropdown } from "./UserDropdown";

import {
    Sheet,
    SheetContent, SheetTrigger
} from "@/components/ui/sheet";
import DashboardMobileSideBar from "./DashboardMobileSideBar";
import { NavSection } from "@/types/dashboard/dashboard.interface";
interface DashboardNavbarContentProps {
    userInfo: UserInfo;
    navItems: NavSection[];
    dashboardHome: string

}

export default function DashboardNavbarContent({
    userInfo,
    navItems,
    dashboardHome


}: DashboardNavbarContentProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const checkSmallScreen = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkSmallScreen()
        window.addEventListener("resize", checkSmallScreen)
        return () => {
            window.removeEventListener("resize", checkSmallScreen)
        }
    }, [])
    return (
        <header className="w-full h-16 border-b bg-white flex items-center px-6">
            <div className="flex items-center justify-end w-full gap-6">
                <Sheet open={isMobile && isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger><Menu /></SheetTrigger>
                    <SheetContent side="left">
                        <DashboardMobileSideBar userInfo={userInfo} navItems={navItems} dashboardHome={dashboardHome} />
                    </SheetContent>
                </Sheet>
                {/* search Bar */}
                <div className="flex items-center w-full max-w-md border rounded-md px-3 py-2 bg-gray-50">
                    <Search className="w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="ml-2 w-full bg-transparent outline-none text-sm"
                    />
                </div>

                {/* notification */}
                <div className="relative">
                    <button
                        className="relative p-2 rounded-full hover:bg-gray-100"
                        onClick={() => setIsOpen(!open)}
                    >
                        <Bell className="w-5 h-5 text-gray-600" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md border p-2 text-sm">
                            <p>No new notifications</p>
                        </div>
                    )}
                </div>

                {/* UserDropdown */}
                <UserDropdown userInfo={userInfo} />

            </div>
        </header>
    );
}




