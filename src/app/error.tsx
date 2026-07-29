"use client";

import Link from "next/link";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError = ({ error, reset }: ErrorProps) => {
  console.error(error);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-background" />

      {/* Blue Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      {/* Red Glow */}
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-destructive/10 blur-3xl" />

      <section className="container flex flex-col items-center text-center">
        {/* Icon */}

        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-destructive/20 bg-card shadow-sm">
          <AlertTriangle className="h-11 w-11 text-destructive" />
        </div>

        {/* Title */}

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Something Went Wrong
        </h1>

        {/* Description */}

        <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
          An unexpected error occurred while processing your request. Please try
          again or return to the homepage.
        </p>

        {/* Actions */}

        <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <Button
            size="lg"
            onClick={reset}
            className="min-w-[190px] shadow-lg shadow-primary/20"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>

          <Button asChild variant="outline" size="lg" className="min-w-[190px]">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          If the issue persists, please contact support.
        </p>
      </section>
    </main>
  );
};

export default GlobalError;
