import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}

          <div>
            <Badge
              variant="secondary"
              className="mb-6 mt- rounded-full px-4 py-1 text-sm"
            >
              🏕 Trusted by Outdoor Enthusiasts
            </Badge>

            <h1 className="heading max-w-xl leading-tight">
              Rent Sports &
              <span className="block text-primary ">Outdoor Gear</span>
              For Your Next Adventure.
            </h1>

            <p className="sub-heading mt-6 max-w-xl">
              Discover premium sports and outdoor equipment from trusted
              providers. Rent instantly, pay securely and enjoy your next
              adventure without buying expensive gear.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/gear">Browse Gear</Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link href="/auth/register">Become a Provider</Link>
              </Button>
            </div>

            <div className="mt-12">
              <HeroStats />
            </div>
          </div>

          {/* Right */}

          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
