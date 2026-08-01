import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentSuccessPage = () => {
  
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-3xl border bg-background p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto mb-6 size-20 text-green-600" />

        <h1 className="text-3xl font-bold">Payment Successful</h1>

        <p className="mt-3 text-muted-foreground">
          Your payment has been completed successfully. Your rental order is now
          confirmed.
        </p>

        <div className="mt-8 space-y-3">
          <Button asChild className="w-full h-11 rounded-xl">
            <Link href="/dashboard/customer/orders">
              View My Rentals
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>

          <Button variant="outline" asChild className="w-full h-11 rounded-xl">
            <Link href="/dashboard/customer/payment-history">Payment History</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default PaymentSuccessPage;
