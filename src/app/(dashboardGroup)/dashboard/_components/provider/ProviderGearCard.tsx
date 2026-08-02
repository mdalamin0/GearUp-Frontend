"use client"

import Image from "next/image";
import { Loader2, Pencil, Trash2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IGear } from "@/types/type";
import { toast } from "sonner";
import { deleteGear } from "../../_actions/provider/deleteGear";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  gear: IGear;
};

const ProviderGearCard = ({ gear }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const image = gear.image.startsWith("http")
    ? gear.image
    : `https://${gear.image}`;

      const handleGearDelete = async () => {
        try {
          setLoading(true);
          await deleteGear(gear.id);
          toast.success("Gear Deleted successfully");
          router.refresh();
        } catch (error) {
          if (
            error instanceof Error &&
            error.message.includes("Foreign key constraint")
          ) {
            toast.error(
              "This gear cannot be deleted because it has rental orders.",
            );
          } else {
            toast.error(
              error instanceof Error ? error.message : "Something went wrong",
            );
          }
        } finally {
          setLoading(false);
        }
      };

  return (
    <Card className="overflow-hidden rounded-2xl">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={gear.title}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      <CardContent className="space-y-4 p-5">
        <div>
          <h3 className="line-clamp-1 text-lg font-semibold">{gear.title}</h3>

          <p className="text-sm text-muted-foreground">{gear.category.name}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-muted-foreground">Price</p>

            <p className="font-medium">${gear.rentalPrice}/day</p>
          </div>

          <div>
            <p className="text-muted-foreground">Stock</p>

            <Badge variant={gear.stock > 0 ? "default" : "destructive"}>
              {gear.stock}
            </Badge>
          </div>

          <div className="col-span-2">
            <p className="mb-1 text-muted-foreground">Featured</p>

            <Badge variant={gear.isFeatured ? "default" : "secondary"}>
              {gear.isFeatured ? "Yes" : "No"}
            </Badge>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button variant="outline" className="flex-1">
            <Pencil className="mr-1 size-4" />
            Edit
          </Button>

          <Button
            disabled={loading}
            onClick={handleGearDelete}
            variant="destructive"
            className="flex-1"
          >
            {loading ? (
              <>
                <Loader2 className="size-4 mr-1 animate-spin" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 className="size-4 mr-1" />{" "}
                Delete
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProviderGearCard;
