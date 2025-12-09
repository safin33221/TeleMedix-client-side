import LogoutBtn from "@/components/shared/LogoutBtn";
import { getCookies } from "@/services/auth/tokenHandler";

export default async function CommonDashboardLayout({ children }: { children: React.ReactNode }) {
    const accessToken = await getCookies("accessToken")
    return (
        <div>
            {accessToken &&
                <LogoutBtn />
            }
            {children}
        </div>
    );
};
