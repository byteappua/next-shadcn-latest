"use client";
import { ChevronDown, Home, Plus } from "lucide-react";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

import LogoutBtn from "./logout-button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarFooter,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupAction,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
];
const examples = [
  {
    title: "authentication",
    url: "/examples/authentication",
  },
  {
    title: "cards",
    url: "/examples/cards",
  },
  {
    title: "dashboard",
    url: "/examples/dashboard",
  },
  {
    title: "forms",
    url: "/examples/forms",
  },
  {
    title: "mail",
    url: "/examples/mail",
  },
  {
    title: "music",
    url: "/examples/music",
  },
  {
    title: "playground",
    url: "/examples/playground",
  },
  {
    title: "tasks",
    url: "/examples/tasks",
  },
  {
    title: "tradingview",
    url: "/examples/tradingview",
  },
];
const component_view = [
  {
    title: "accordion",
    url: "/component-view/accordion",
  },
  {
    title: "alert",
    url: "/component-view/alert",
  },
  {
    title: "alert-dialog",
    url: "/component-view/alert-dialog",
  },
  {
    title: "aspect-ratio",
    url: "/component-view/aspect-ratio",
  },
  {
    title: "avatar",
    url: "/component-view/avatar",
  },
  {
    title: "badge",
    url: "/component-view/badge",
  },
  {
    title: "breadcrumb",
    url: "/component-view/breadcrumb",
  },
  {
    title: "tooltip",
    url: "/component-view/tooltip",
  },
];
const dataview = [
  {
    title: "price_cflip",
    url: "/dataview/index/price_cflip",
  },
  {
    title: "d3demo",
    url: "/dataview/demo",
  },
  {
    title: "kline",
    url: "/dataview/kline",
  },
  {
    title: "threedemo",
    url: "/dataview/three/demo",
  },
];
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="gap-0">
        <SidebarGroup className="p-0">
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="font-bold text-lg">
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon /> <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup className="p-0">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="!pl-2 p-0 !font-bold !text-sidebar-primary !text-lg">
                <Label className="font-bold text-foreground">examples</Label>
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="gap-0">
                  {examples.map((item) => (
                    <SidebarMenuItem key={item.title} className="text-lg font-bold">
                      <SidebarMenuButton asChild>
                        <Link href={item.url} className="!p-0 !pl-4 !h-5">
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup className="p-0">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="!pl-2 p-0 !font-bold !text-sidebar-primary !text-lg">
                <Label className="font-bold text-foreground">component</Label>
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="gap-0">
                  {component_view.map((item) => (
                    <SidebarMenuItem key={item.title} className="text-lg font-bold">
                      <SidebarMenuButton asChild>
                        <Link href={item.url} className="!p-0 !pl-4 !h-5">
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup className="p-0">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="!pl-2 p-0 !font-bold !text-sidebar-primary !text-lg">
                <Label className="font-bold text-foreground">dataview</Label>
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="gap-0">
                  {dataview.map((item) => (
                    <SidebarMenuItem key={item.title} className="text-lg font-bold">
                      <SidebarMenuButton asChild>
                        <Link href={item.url} className="!p-0 !pl-4 !h-5">
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction title="Add Project" onClick={() => console.log("helo")}>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar>
                    <AvatarImage src="/avatars/shadcn.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogoutBtn size="sm" clsN="h-6 px-1 w-full" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
