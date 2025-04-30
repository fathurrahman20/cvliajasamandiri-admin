import {
  AudioWaveform,
  BookOpenText,
  Building2,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  Map,
  PieChart,
  Settings2,
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
      icon: Home,
      isActive: true,
      items: [
        {
          title: "Hero Section",
          url: "/hero",
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
      icon: BookOpenText,
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
      icon: Building2,
      items: [
        {
          title: "Profil Perusahaan",
          url: "/about-us",
        },
        {
          title: "Layanan Kami",
          url: "/our-service",
        },
        {
          title: "Keunggulan Kami",
          url: "/our-advantage",
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
          url: "/requirement",
        },
        {
          title: "Peraturan Rental",
          url: "/regulation",
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
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
