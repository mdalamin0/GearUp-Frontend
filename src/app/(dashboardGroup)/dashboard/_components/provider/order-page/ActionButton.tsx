"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { IProviderOrder } from "../../../types/type";
import { updateOrderStatus } from "../../../_actions/provider/updateOrderStatus";
import { useState } from "react";

type ActionButtonProps = {
  order: IProviderOrder;
};

const ActionButton = ({ order }: ActionButtonProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleStatusUpdate = async (status: string) => {
    try {
      setLoading(true);
      await updateOrderStatus(order.id, status);
      toast.success("Order updated successfully");
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };

  if (order.status === "PLACED") {
    return (
      <Button size="sm" disabled={loading} onClick={() => handleStatusUpdate("CONFIRMED")}>
        {loading ? "Updating..." : "Confirm"}
      </Button>
    );
  }

  if (order.status === "CONFIRMED") {
    return (
      <Button size="sm" disabled={loading} onClick={() => handleStatusUpdate("PICKED_UP")}>
        {loading ? "Updating..." : "Mark Picked Up"}
      </Button>
    );
  }

  if (order.status === "PAID") {
    return (
      <Button size="sm" disabled={loading} onClick={() => handleStatusUpdate("PICKED_UP")}>
        {loading ? "Updating..." : "Mark Picked Up"}
      </Button>
    );
  }

  if (order.status === "PICKED_UP") {
    return (
      <Button size="sm" disabled={loading} onClick={() => handleStatusUpdate("RETURNED")}>
        {loading ? "Updating..." : "Mark Returned"}
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
