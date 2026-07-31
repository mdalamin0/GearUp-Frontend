"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { sidebarMenuItems } from "../_config/sidebarMenuItems";

type Props = {
  role: keyof typeof sidebarMenuItems;
};

const DashboardMenu = ({ role }: Props) => {
  const pathname = usePathname();

  const navItems = sidebarMenuItems[role];

  return (
    <nav className="space-y-2">
      {navItems.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(item.href + "/");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <item.icon size={18} />

            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default DashboardMenu;
