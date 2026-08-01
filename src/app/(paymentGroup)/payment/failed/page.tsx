import Link from "next/link";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentFailedPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-3xl border bg-background p-8 text-center shadow-sm">
        <XCircle className="mx-auto mb-6 size-20 text-red-600" />

        <h1 className="text-3xl font-bold">Payment Failed</h1>

        <p className="mt-3 text-muted-foreground">
          We couldn&apos;t process your payment. Please try again.
        </p>

        <div className="mt-8 space-y-3">
          <Button asChild className="w-full h-11 rounded-xl">
            <Link href="/dashboard/customer/orders">Retry Payment</Link>
          </Button>

          <Button variant="outline" asChild className="w-full h-11 rounded-xl">
            <Link href="/">Back Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default PaymentFailedPage;
