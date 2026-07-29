import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <section className="section mb-16">
      <div className="container">
        <div className="overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground md:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Ready for Your Next Adventure?
            </h2>

            <p className="mt-6 text-lg leading-8 text-primary-foreground/85">
              Discover premium outdoor and sports equipment from trusted
              providers. Rent what you need, when you need it, and enjoy every
              adventure without the cost of ownership.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="h-12">
                <Link href="/gear">
                  Browse Gear
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/register">Become a Provider</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
