import { getHomeStats } from "@/app/(publicGroup)/_actions/home/getHomeStats";
import Image from "next/image";

const HeroImage = async() => {
  const { totalProviders, completedRentals } = await getHomeStats();
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl" />

      {/* Main Image */}

      <div className="overflow-hidden rounded-3xl border bg-card shadow-2xl">
        <Image
          src="/images/hero/hero.png"
          alt="Sports and Outdoor Gear"
          width={700}
          height={700}
          priority
          className="h-full w-full object-cover"
        />
      </div>

      {/* Floating Card */}

      <div className="absolute -left-5 -top-6 hidden rounded-2xl border bg-background/90 px-5 py-4 shadow-xl backdrop-blur md:block">
        <p className="text-sm text-muted-foreground">Trusted Providers</p>

        <h3 className="text-xl font-bold text-primary">{totalProviders}+</h3>
      </div>

      {/* Floating Card */}

      <div className="absolute -bottom-6 -right-5 hidden rounded-2xl border bg-background/90 px-5 py-4 shadow-xl backdrop-blur md:block">
        <p className="text-sm text-muted-foreground">Rentals Completed</p>

        <h3 className="text-xl font-bold text-primary">{completedRentals}+</h3>
      </div>
    </div>
  );
};

export default HeroImage;
