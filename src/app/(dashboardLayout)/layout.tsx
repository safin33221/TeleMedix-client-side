import DashboardNavbar from "@/components/module/dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/module/dashboard/DashboardSidebar";
import { getCookies } from "@/services/auth/tokenHandler";

interface CommonDashboardLayoutProps {
  children: React.ReactNode;
}

export default async function CommonDashboardLayout({
  children,
}: CommonDashboardLayoutProps) {
  const accessToken = await getCookies("accessToken");

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        {/* Navbar */}
        <DashboardNavbar />

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

