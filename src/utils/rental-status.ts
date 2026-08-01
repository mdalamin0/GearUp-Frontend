import { TRentalStatus } from "@/app/(dashboardGroup)/dashboard/types/type";

export const rentalStatusConfig: Record<
  TRentalStatus,
  {
    label: string;
    className: string;
  }
> = {
  PLACED: {
    label: "Placed",
    className: "bg-yellow-100 text-yellow-700 border border-yellow-200",
  },

  CONFIRMED: {
    label: "Confirmed",
    className: "bg-blue-100 text-blue-700 border border-blue-200",
  },

  PAID: {
    label: "Paid",
    className: "bg-purple-100 text-purple-700 border border-purple-200",
  },

  PICKED_UP: {
    label: "Picked Up",
    className: "bg-green-100 text-green-700 border border-green-200",
  },

  RETURNED: {
    label: "Returned",
    className: "bg-gray-100 text-gray-700 border border-gray-200",
  },

  CANCELLED: {
    label: "Cancelled",
    className: "bg-red-100 text-red-700 border border-red-200",
  },

  FAILED: {
    label: "Failed",
    className: "bg-red-100 text-red-700 border border-red-200",
  },
} as const;
