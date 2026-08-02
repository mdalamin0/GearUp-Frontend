"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { IProviderOrder } from "../../../types/type";

type ActionButtonProps = {
  order: IProviderOrder;
};

const ActionButton = ({ order }: ActionButtonProps) => {
  const router = useRouter();

  const handleStatusUpdate = async (status: string) => {
    try {
      // await updateOrderStatus(order.id, { status });

      toast.success("Order updated successfully");

      router.refresh();
    } catch {
      toast.error("Failed to update order");
    }
  };

  if (order.status === "PLACED") {
    return (
      <Button size="sm" onClick={() => handleStatusUpdate("CONFIRMED")}>
        Confirm
      </Button>
    );
  }

  if (order.status === "CONFIRMED") {
    return (
      <Button size="sm" onClick={() => handleStatusUpdate("PICKED_UP")}>
        Mark Picked Up
      </Button>
    );
  }

  if (order.status === "PAID") {
    return (
      <Button size="sm" onClick={() => handleStatusUpdate("PICKED_UP")}>
        Mark Picked Up
      </Button>
    );
  }

  if (order.status === "PICKED_UP") {
    return (
      <Button size="sm" onClick={() => handleStatusUpdate("RETURNED")}>
        Mark Returned
      </Button>
    );
  }

  if (order.status === "RETURNED") {
    return (
      <Button size="sm" variant="secondary" disabled>
        Completed
      </Button>
    );
  }

  if (order.status === "FAILED") {
    return (
      <Button size="sm" variant="destructive" disabled>
        Payment Failed
      </Button>
    );
  }

  if (order.status === "CANCELLED") {
    return (
      <Button size="sm" variant="outline" disabled>
        Cancelled
      </Button>
    );
  }

  return null;
};

export default ActionButton;
