import { getUserInfo } from "@/services/auth/getUserInfo";
import DashboardNavbarContent from "./DashboardNavbarContent";
import { UserInfo } from "@/types/user";
import { getDefaultDashboardRoute, UserRole } from "@/lib/auth-utils";
import { NavSection } from "@/types/dashboard/dashboard.interface";
import { getNavItemsByRole } from "@/lib/navItems.config";

export default async function DashboardNavbar() {
    const userInfo = (await getUserInfo()) as UserInfo
    const navItems: NavSection[] = getNavItemsByRole(userInfo.role as UserRole)

    const dashboardHome = getDefaultDashboardRoute(userInfo.role as UserRole)
    return <DashboardNavbarContent userInfo={userInfo} navItems={navItems} dashboardHome={dashboardHome} />
}
