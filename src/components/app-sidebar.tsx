import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Hero Section",
          url: "#",
        },
        {
          title: "FAQ",
          url: "#",
        },
        {
          title: "Bottom Section",
          url: "#",
        },
        {
          title: "Footer",
          url: "/footer",
        },
      ],
    },
    {
      title: "Katalog",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Brand",
          url: "#",
        },
        {
          title: "Mobil",
          url: "#",
        },
      ],
    },
    {
      title: "Tentang Kami",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Profil Perusahaan",
          url: "#",
        },
        {
          title: "Layanan Kami",
          url: "#",
        },
        {
          title: "Keunggulan Kami",
          url: "#",
        },
      ],
    },
    {
      title: "Syarat & Aturan",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Persyaratan Rental",
          url: "#",
        },
        {
          title: "Peraturan Rental",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <ModeToggle />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
