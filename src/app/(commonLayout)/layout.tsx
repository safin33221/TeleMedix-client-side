import { Footer } from "@/components/shared/Footer";
import { PublicNavbar } from "@/components/shared/Publicnavbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav>
                <PublicNavbar />
            </nav>
            <main>

                {children}
            </main>

            <Footer />
        </div>
    );
};
