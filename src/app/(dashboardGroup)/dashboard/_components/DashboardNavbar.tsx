"use client";

import { Bell } from "lucide-react";
import { NavbarProps } from "@/types/type";
import MobileSidebar from "./MobileSidebar";

const DashboardNavbar = ({ user }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="flex h-16 items-center justify-between px-5 lg:px-8">
        {/* Left */}

        <div className="flex items-center gap-4">
          <MobileSidebar user={user} />

          <div>
            <h1 className="text-xl font-bold">Dashboard</h1>

            <p className="hidden text-sm text-muted-foreground md:block">
              Welcome back, {user.data.name} 👋
            </p>
          </div>
        </div>

        {/* Right */}

        <button className="rounded-xl p-2 hover:bg-muted">
          <Bell size={20} />
        </button>
      </div>
    </header>
  );
};

export default DashboardNavbar;
