import "./globals.css";
import type { Metadata } from "next";
import MainLayout from "@/layouts/MainLayout";

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
      <body>
        <MainLayout>
          <>{children}</>
        </MainLayout>
      </body>
    </html>
  );
}
