import { Metadata } from "next";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default async function ExamplesLayout({ children }: ExamplesLayoutProps) {
  const cookieStore = await cookies();
  const sidebarStatus = cookieStore.get("sidebar:state");
  const defaultSidebarOpen = sidebarStatus ? sidebarStatus.value === "true" : true;
  return (
    <SidebarProvider
      defaultOpen={defaultSidebarOpen}
      style={
        {
          "--sidebar-width": "8rem",
          "--sidebar-width-mobile": "8rem",
        } as React.CSSProperties
      }
    >
      <section className="h-full w-full flex flex-row">
        <AppSidebar />
        <h1>helo</h1>
        <div className="flex-1 overflow-hidden rounded-[0.5rem] border bg-background shadow flex flex-col">
          {children}
        </div>
      </section>
    </SidebarProvider>
  );
}
