"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Menu, UserRound } from "lucide-react";

import { ModeToggle } from "@/components/shared/navbar/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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

const navItems = [
  { label: "Home", href: "/" },
  { label: "Browse Gear", href: "/gear" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  /**
   * TODO:
   * Replace with Auth Context
   */
  // const user = "alamin@gmail.com";
  const user = null;

  const handleLogout = async () => {
    // TODO: Logout API

    router.push("/login");
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
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline">
                    <UserRound className="size-5" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-destructive focus:text-destructive"
                  >
                    <LogOut className="mr-2 size-4" />
                    Logout
                  </DropdownMenuItem>
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
                  {user ? (
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

                      <Button variant="destructive" onClick={handleLogout}>
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
                        <Link href="/auth/register" onClick={() => setOpen(false)}>
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
