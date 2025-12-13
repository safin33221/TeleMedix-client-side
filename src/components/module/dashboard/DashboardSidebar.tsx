import { getUserInfo } from "@/services/auth/getUserInfo";
import DashboardSideBarContent from "./DashboardSideBarContent";
import { UserInfo } from "@/types/user";
import { getDefaultDashboardRoute, UserRole } from "@/lib/auth-utils";
import { NavSection } from "@/types/dashboard/dashboard.interface";
import { getNavItemsByRole } from "@/lib/navItems.config";

export default async function DashboardSidebar() {
    const userInfo = (await getUserInfo()) as UserInfo
    const navItems: NavSection[] = getNavItemsByRole(userInfo.role as UserRole)
    const dashboardHome = getDefaultDashboardRoute(userInfo.role as UserRole)
    return <DashboardSideBarContent userInfo={userInfo} navItems={navItems} dashboardHome={dashboardHome} />
};
