"use client";

import * as React from "react";
import { PieChart } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSubButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [],
  navMain: [],
  projects: [],
  routers: [
    {
      name: "tasks",
      url: "/tasks",
      icon: PieChart,
    },
    {
      name: "stock",
      url: "/stock",
      icon: PieChart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {data.teams.length > 0 && (
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>
      )}
      <SidebarContent>
        {data.navMain.length > 0 && <NavMain items={data.navMain} />}
        {data.projects.length > 0 && <NavProjects projects={data.projects} />}
        {data.routers.length > 0 && (
          <SidebarMenu>
            {data.routers?.map((subItem) => (
              <SidebarMenuItem key={subItem.name}>
                <SidebarMenuSubButton asChild>
                  <Link href={subItem.url}>
                    {subItem.icon && <subItem.icon />}
                    {subItem.name}
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        )}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
