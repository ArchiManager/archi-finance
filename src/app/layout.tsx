import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/providers/StoreProvider";
import NextSnackbarProvider from "@/providers/NextSnackbarProvider";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArchiFinance",
  description: "Finance Software for Architects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <NextSnackbarProvider>
            <AppRouterCacheProvider>
              {children}
            </AppRouterCacheProvider>
          </NextSnackbarProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
