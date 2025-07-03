import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#FA9021]">
      <SidebarContent className="bg-[#FA9021] text-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarGroupLabel className="my-8 flex justify-center">
              <Image
                height={42}
                width={42}
                alt="ic"
                src={"/icon/ic_logo.svg"}
              />
            </SidebarGroupLabel>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="mx-auto mb-4">
                  <SidebarMenuButton asChild>
                    <Tooltip>
                      <TooltipContent>{item.title}</TooltipContent>

                      <TooltipTrigger>
                        <div className="flex items-center justify-center rounded-[10px] bg-white/15 p-[10px]">
                          <a href={item.url}>
                            <item.icon />
                          </a>
                        </div>
                      </TooltipTrigger>
                    </Tooltip>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
