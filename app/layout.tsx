import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { PgliteProvider } from "@/components/pglite-provider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "next.js 15 + shadcn/ui",
  description: "next web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full w-full`}>
        <PgliteProvider>
          <SidebarProvider
            style={
              {
                "--sidebar-width": "6rem",
              } as React.CSSProperties
            }
            className="flex flex-row max-w-full "
          >
            <AppSidebar />
            <SidebarInset className="flex-1 flex flex-col h-full overflow-hidden">
              <header className="flex h-4 shrink-0 items-center gap-2 ">
                <SidebarTrigger />
              </header>
              <div className="flex-1">{children}</div>
            </SidebarInset>
          </SidebarProvider>
        </PgliteProvider>
      </body>
    </html>
  );
}
