"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HomeIcon, LogOut } from "lucide-react";

import { cn } from "@/lib/utils";
import { NavbarProps } from "@/types/type";
import { sidebarMenuItems } from "../_config/sidebarMenuItems";
import { Button } from "@/components/ui/button";
import { logout } from "@/services/logout";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const DashboardSidebar = ({ user }: NavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const role = user.data?.role as keyof typeof sidebarMenuItems;

  const navItems = sidebarMenuItems[role];

  const handleLogout = async () => {
    await logout();
    toast.success("User logged out successfully!");
    router.push("/auth/login");
  };

  return (
    <aside className="hidden w-72 shrink-0 border-r bg-background lg:flex lg:flex-col">
      {/* User */}

      <div className="border-b px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
            {user.data.name.charAt(0).toUpperCase()}
          </div>

          <div className="overflow-hidden">
            <h3 className="truncate font-semibold">{user.data.name}</h3>

            <p className="mt-1 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-primary w-fit">
              {user.data.role}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-5">
        {navItems.map((item) => {
          const active =
            pathname === item.href ;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
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
        <Separator></Separator>
        <Link
          href={"/"}
          className="flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-foreground text-muted-foreground hover:bg-muted"
        >
          {" "}
          <HomeIcon size={18} /> Back to Home
        </Link>
      </nav>

      {/* Bottom */}

      <div className="border-t p-5 space-y-4">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start gap-3 text-destructive hover:text-destructive"
        >
          <LogOut size={18} />
          Logout
        </Button>

        <div className=" text-xs text-muted-foreground">GearUp v1.0</div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
