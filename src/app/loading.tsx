import { LoaderCircle } from "lucide-react";

const GlobalLoader = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/15 blur-xl" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-border bg-card shadow-lg">
            <LoaderCircle
              className="h-11 w-11 animate-spin text-primary"
              strokeWidth={2.5}
            />
          </div>
        </div>

        {/* Brand */}

        <h2 className="mt-8 bg-gradient-to-r from-primary to-emerald-500 bg-clip-text heading text-transparent">
          GearUp
        </h2>

        <p className="mt-2 sub-heading">
          Preparing your experience...
        </p>
      </div>
    </section>
  );
};

export default GlobalLoader ;
