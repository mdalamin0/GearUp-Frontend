import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TGearDetails } from "@/types/type";
import { CheckCircle2, Package, Star } from "lucide-react";

const GearInfo = ({gear}: TGearDetails) => {
  return (
    <div className="section space-y-6">
      {/* Category */}
      <Badge className="rounded-full px-4 py-1">{gear.category.name}</Badge>

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
          {gear.title}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="size-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-foreground">4.8</span>
            <span>(124 Reviews)</span>
          </div>

          <Separator orientation="vertical" className="h-4" />

          <div className="flex items-center gap-1">
            <Package className="size-4" />
            <span>Brand: {gear.brand}</span>
          </div>
        </div>
      </div>

      {/* Price */}
      <div>
        <h2 className="text-4xl font-bold text-primary">
          ${gear.rentalPrice}
          <span className="ml-2 text-lg font-normal text-muted-foreground">
            / day
          </span>
        </h2>
      </div>

      {/* Stock */}
      <div className="flex items-center gap-2 rounded-xl border bg-muted/30 px-4 py-3">
        <CheckCircle2 className="size-5 text-green-600" />

        <div>
          <p className="font-medium text-green-700">In Stock</p>

          <p className="text-sm text-muted-foreground">{gear.stock} items available</p>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Description</h3>

        <p className="leading-7 text-muted-foreground">
          {gear.description}
        </p>
      </div>
    </div>
  );
};

export default GearInfo;
