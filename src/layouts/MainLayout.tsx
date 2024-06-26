"use client";
import NextSnackbarProvider from "@/providers/NextSnackbarProvider";
import StoreProvider from "@/providers/StoreProvider";
import DashboardLayout from "./DashboardLayout";
import { usePathname } from "next/navigation";
import { dashboardPaths } from "@/utils/paths";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const pathname = usePathname();

    const renderDashboardLayout = () => {
        return dashboardPaths.includes(pathname);
    }

    return (
        <StoreProvider>
            <NextSnackbarProvider>
                {(renderDashboardLayout()) ? (
                    <DashboardLayout>{children}</DashboardLayout>
                ) : (
                    <>{children}</>
                )}
            </NextSnackbarProvider>
        </StoreProvider>
    );
}
export default MainLayout;