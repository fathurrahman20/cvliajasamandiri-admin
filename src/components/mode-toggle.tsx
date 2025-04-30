import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
// import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    // <SidebarMenu>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <SidebarMenuItem>
            <SidebarMenuButton> */}
        <div className="flex items-center mt-2">
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          {/* <span className="ml-2 capitalize">Theme: {theme}</span> */}
        </div>
        {/* </SidebarMenuButton> */}
        {/* </SidebarMenuItem> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    // {/* </SidebarMenu> */}
  );
}
