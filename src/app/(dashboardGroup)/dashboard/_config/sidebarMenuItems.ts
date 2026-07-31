import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  CreditCard,
  User,
  Users,
  FolderTree,
  ClipboardList,
  PlusCircle,
} from "lucide-react";

export const sidebarMenuItems = {
  CUSTOMER: [
    {
      title: "Dashboard",
      href: "/dashboard/customer",
      icon: LayoutDashboard,
    },
    {
      title: "My Rentals",
      href: "/dashboard/customer/orders",
      icon: ShoppingBag,
    },
    {
      title: "Payment History",
      href: "/dashboard/customer/payments",
      icon: CreditCard,
    },
    {
      title: "Profile",
      href: "/dashboard/customer/profile",
      icon: User,
    },
  ],

  PROVIDER: [
    {
      title: "Dashboard",
      href: "/dashboard/provider",
      icon: LayoutDashboard,
    },
    {
      title: "My Gear",
      href: "/dashboard/provider/gear",
      icon: Package,
    },
    {
      title: "Add Gear",
      href: "/dashboard/provider/gear/new",
      icon: PlusCircle,
    },
    {
      title: "Orders",
      href: "/dashboard/provider/orders",
      icon: ClipboardList,
    },
    {
      title: "Profile",
      href: "/dashboard/provider/profile",
      icon: User,
    },
  ],

  ADMIN: [
    {
      title: "Dashboard",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      href: "/dashboard/admin/users",
      icon: Users,
    },
    {
      title: "Categories",
      href: "/dashboard/admin/categories",
      icon: FolderTree,
    },
    {
      title: "Gear",
      href: "/dashboard/admin/gear",
      icon: Package,
    },
    {
      title: "Rentals",
      href: "/dashboard/admin/rentals",
      icon: ClipboardList,
    },
  ],
};
