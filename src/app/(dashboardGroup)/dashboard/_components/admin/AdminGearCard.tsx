"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Package,
  User,
  FolderOpen,
  DollarSign,
  Boxes,
  Star,
} from "lucide-react";

import { IGear } from "@/types/type";
import FeatureButton from "./FeatureButton";

type GearCardProps = {
  gear: IGear;
};

const AdminGearCard = ({ gear }: GearCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="line-clamp-1 text-lg">{gear.title}</CardTitle>

        <p className="text-sm text-muted-foreground">{gear.brand}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Provider */}

        <div className="flex items-center gap-2 text-sm">
          <User className="size-4 text-muted-foreground" />

          <div>
            <p className="font-medium">{gear.provider.name}</p>

            <p className="text-muted-foreground">{gear.provider.email}</p>
          </div>
        </div>

        {/* Category */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderOpen className="size-4 text-muted-foreground" />

            <span className="text-sm">Category</span>
          </div>

          <Badge variant="secondary">{gear.category.name}</Badge>
        </div>

        {/* Price */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="size-4 text-muted-foreground" />

            <span className="text-sm">Rental Price</span>
          </div>

          <span className="font-semibold">${gear.rentalPrice}</span>
        </div>

        {/* Stock */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Boxes className="size-4 text-muted-foreground" />

            <span className="text-sm">Stock</span>
          </div>

          <Badge variant={gear.stock > 0 ? "default" : "destructive"}>
            {gear.stock > 0 ? `${gear.stock} Available` : "Out of Stock"}
          </Badge>
        </div>

        {/* Featured */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="size-4 text-muted-foreground" />

            <span className="text-sm">Featured</span>
          </div>

          <Badge variant={gear.isFeatured ? "default" : "outline"}>
            {gear.isFeatured ? "⭐ Featured" : "Normal"}
          </Badge>
        </div>

        {/* Action */}

        <div className="mt-2 grid grid-cols-2 gap-2">
          <Button asChild size={"sm"} variant="outline">
            <Link href={`/gear/${gear.id}`}>
              <Package className="mr-2 size-4" />
              View
            </Link>
          </Button>

          <FeatureButton gear={gear} />
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminGearCard;