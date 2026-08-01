import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IGear } from "@/types/type";

type GearCardProps = {
  gear: IGear;
};

const GearCard = ({ gear }: GearCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}

      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={gear.image}
          alt={gear.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {gear.isFeatured && (
          <Badge className="absolute left-3 top-3">⭐ Featured</Badge>
        )}

        <Badge
          variant={gear.stock > 0 ? "default" : "destructive"}
          className="absolute right-3 top-3"
        >
          {gear.stock > 0 ? "Available" : "Out of Stock"}
        </Badge>
      </div>

      {/* Content */}

      <div className="space-y-5 p-5">
        <div className="flex justify-between items-center">
          <Badge variant="secondary">{gear.category.name}</Badge>
          <Badge variant="outline">Brand: {gear.brand}</Badge>
        </div>

        <div>
          <h3 className="line-clamp-1 text-xl font-semibold">{gear.title}</h3>

          <div className="mt-2 flex items-center gap-1">
            <Star className="size-4 fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-medium">{gear.averageRating}</span>

            <span className="text-sm text-muted-foreground">({gear.reviewCount} Reviews)</span>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <h4 className="text-2xl font-bold text-primary">
            ${gear.rentalPrice}
            <span className="ml-1 text-sm font-normal text-muted-foreground">
              /day
            </span>
          </h4>
        </div>


          <Button disabled={gear.stock === 0} asChild className="w-full">
            <Link href={`gear/${gear.id}`}>
              Rent Now
              <ArrowRight className=" size-4" />
            </Link>
          </Button>
      </div>
    </article>
  );
};



export default GearCard;
