"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  LogOut,
  Menu,
  SettingsIcon,
  UserRound,
} from "lucide-react";

import { ModeToggle } from "@/components/shared/navbar/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavbarProps } from "@/types/type";
import { toast } from "sonner";
import { logout } from "@/services/logout";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Browse Gear", href: "/gear" },
  { label: "About", href: "/about" },
];
const userMenuItems = [
  { label: "Dashboard", icon: LayoutDashboard, action: "dashboard" },
  { label: "Settings", icon: SettingsIcon, action: "settings" },
];

const Navbar = ({ user }: NavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);


  const handleUserMenuAction = async (action: string) => {
    if (action === "dashboard") {
      if (user.data.role === "CUSTOMER") {
        router.push("/dashboard/customer");
      } else if (user.data.role === "PROVIDER") {
        router.push("/dashboard/provider");
      } else if (user.data.role === "ADMIN") {
        router.push("/dashboard/admin");
      }
      return;
    }

    if (action === "logout") {
      await logout();
      toast.success("User logged out successfully!");
      router.push("/auth/login");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-primary"
        >
          GearUp
        </Link>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right */}

        <div className="flex items-center gap-2">
          <ModeToggle />

          <div className="hidden items-center gap-2 lg:flex">
            {user.success ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline">
                    <UserRound className="size-5" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuLabel>
                    <span className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-foreground">
                        {user.data?.name}
                      </span>
                      <span className="text-xs font-normal text-muted-foreground">
                        {user.data?.email}
                      </span>
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {userMenuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <DropdownMenuItem
                          key={item.action}
                          onClick={() => handleUserMenuAction(item.action)}
                        >
                          <Icon />
                          <span>{item.label}</span>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      variant="destructive"
                      onClick={async () => {
                        await handleUserMenuAction("logout");
                      }}
                    >
                      <LogOut />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>

                <Button asChild>
                  <Link href="/auth/register">Register</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile */}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button size="icon" variant="outline">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 ">
              <SheetHeader>
                <SheetTitle className="text-left text-primary ">
                  GearUp
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-1 px-3 ">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-4 border-t pt-4">
                  {user.success ? (
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        onClick={() => {
                          router.push("/dashboard");
                          setOpen(false);
                        }}
                      >
                        Dashboard
                      </Button>

                      <Button
                        variant="destructive"
                        onClick={async () => {
                          await handleUserMenuAction("logout");
                        }}
                      >
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Button asChild>
                        <Link href="/auth/login" onClick={() => setOpen(false)}>
                          Login
                        </Link>
                      </Button>

                      <Button variant="outline" asChild>
                        <Link
                          href="/auth/register"
                          onClick={() => setOpen(false)}
                        >
                          Register
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
