"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { createPayment } from "@/app/(paymentGroup)/payment/_actions/createPayment";

type Props = {
  orderId: string;
  title: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
};

const PaymentButton = ({ orderId, title, variant = "default" }: Props) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      const payment = await createPayment(orderId);

      window.location.href = payment.PayementUrl;
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to initiate payment.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      size="sm"
      variant={variant}
      disabled={loading}
      onClick={handlePayment}
    >
      {loading ? "Redirecting..." : title}
    </Button>
  );
};

export default PaymentButton;
