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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </head>
      <body>
        <MainLayout>
          <>{children}</>
        </MainLayout>
      </body>
    </html>
  );
}
