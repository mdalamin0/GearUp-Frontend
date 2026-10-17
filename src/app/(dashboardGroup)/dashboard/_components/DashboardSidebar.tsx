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
    <aside className="fixed inset-y-0 left-0 z-40 hidden h-screen w-72 shrink-0 flex-col overflow-hidden border-r bg-background lg:flex">
      {/* User Profile */}
      <div className="shrink-0 border-b px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
            {user.data.name.charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="truncate font-semibold">{user.data.name}</h3>

            <p className="mt-1 w-fit rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-primary">
              {user.data.role}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="min-h-0 flex-1 space-y-2 overflow-y-auto p-5">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 rounded-full px-5 py-3 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
              )}
            >
              <item.icon size={18} />
              <span>{item.title}</span>
            </Link>
          );
        })}

        <Separator className="!my-4" />

        <Link
          href="/"
          className="flex items-center gap-4 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
        >
          <HomeIcon size={20} />
          <span>Back to Home</span>
        </Link>
      </nav>

      {/* Bottom Actions */}
      <div className="shrink-0 space-y-4 border-t bg-background p-5">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start gap-4 rounded-full px-4 text-destructive hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </Button>

        <div className="px-1 text-xs text-muted-foreground">GearUp v1.0</div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
