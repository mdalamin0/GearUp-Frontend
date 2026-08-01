import Link from "next/link";
import { Ban } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentCancelPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-3xl border bg-background p-8 text-center shadow-sm">
        <Ban className="mx-auto mb-6 size-20 text-orange-500" />

        <h1 className="text-3xl font-bold">Payment Cancelled</h1>

        <p className="mt-3 text-muted-foreground">
          Your payment was cancelled. You can complete the payment later from
          your rental orders.
        </p>

        <div className="mt-8 space-y-3">
          <Button asChild className="w-full h-11 rounded-xl">
            <Link href="/dashboard/customer/orders">Go To My Rentals</Link>
          </Button>

          <Button variant="outline" asChild className="w-full h-11 rounded-xl">
            <Link href="/gear">Continue Browsing</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default PaymentCancelPage;
