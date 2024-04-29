"use client";

import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "nextjs13-progress";
import { useAuthState } from "react-firebase-hooks/auth";
import { usePathname } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT, authRoutes, publicRoutes } from "@/utils/routes";

interface AuthMiddlewareProps {
    children: React.ReactNode;
}

const AuthMiddleware = ({ children }: AuthMiddlewareProps) => {

    const [user, loading, error] = useAuthState(auth);

    const router = useRouter();
    const pathname = usePathname();

    const isAuthRoute = authRoutes.includes(pathname);
    const isPublicRoute = publicRoutes.includes(pathname);

    useEffect(() => {
        if (!loading) {
            if (user) {
                if (pathname === "/auth/login") {
                    router.push(DEFAULT_LOGIN_REDIRECT);
                    return;
                }
            } else {
                console.log("user is null");
                if (!isPublicRoute && !isAuthRoute) {
                    router.push("/auth/login");
                    return
                }
            }
        }
    }, [user, loading, router]);

    return (
        <div>
            {children}
        </div>
    )
}
export default AuthMiddleware;