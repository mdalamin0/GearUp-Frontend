"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import { HomeIcon, LogOut, Menu } from "lucide-react";

import { sidebarMenuItems } from "../_config/sidebarMenuItems";
import { NavbarProps } from "@/types/type";
import { logout } from "@/services/logout";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const MobileSidebar = ({ user }: NavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const role = user.data.role as keyof typeof sidebarMenuItems;
  const navItems = sidebarMenuItems[role];

  const handleLogout = async () => {
    await logout()
    toast.success("Logged out successfully");
    router.push("/auth/login");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu size={22} />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-72 p-0">
        {/* User */}

        <div className="border-b p-6">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary font-bold text-white">
              {user.data.name.charAt(0)}
            </div>

            <div>
              <h3 className="font-semibold">{user.data.name}</h3>

              <p className="text-xs text-muted-foreground">{user.data.role}</p>
            </div>
          </div>
        </div>

        {/* Menu */}

        <div className="space-y-2 p-5">
          {navItems.map((item) => {
            const active =
              pathname === item.href ;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-medium transition-all",
                  active ? "bg-primary text-white" : "hover:bg-muted",
                )}
              >
                <item.icon size={18} />

                {item.title}
              </Link>
            );
          })}

          <Separator />

          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-4 py-2 hover:bg-muted"
          >
            <HomeIcon size={18} />
            Back to Home
          </Link>
        </div>

        {/* Bottom */}

        <div className="absolute bottom-0 w-full border-t p-5">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start gap-3 text-destructive"
          >
            <LogOut size={18} />
            Logout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
