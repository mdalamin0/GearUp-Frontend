import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_45%)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%)]" />

      <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
        {/* 404 */}
        <h1 className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-8xl font-extrabold tracking-tight text-transparent md:text-9xl">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-lg text-muted-foreground">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or may have
          been moved. Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/gear">
              <Search className="mr-2 h-4 w-4" />
              Browse Gear
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
