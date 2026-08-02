"use client";

import Image from "next/image";
import { Loader2, Pencil, Trash2 } from "lucide-react";

import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IGear } from "@/types/type";
import { useState } from "react";
import { deleteGear } from "../../_actions/provider/deleteGear";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
  gear: IGear;
};

const ProviderGearRow = ({ gear }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
    <TableRow>
      {/* Gear */}

      <TableCell>
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-xl border">
            <Image
              src={image}
              alt={gear.title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="font-semibold">{gear.title}</h3>

            <p className="text-sm text-muted-foreground">
              {gear.category.name}
            </p>
          </div>
        </div>
      </TableCell>

      {/* Price */}

      <TableCell>${gear.rentalPrice}/day</TableCell>

      {/* Stock */}

      <TableCell>
        <Badge variant={gear.stock > 0 ? "default" : "destructive"}>
          {gear.stock}
        </Badge>
      </TableCell>

      {/* Featured */}

      <TableCell>
        <Badge variant={gear.isFeatured ? "default" : "secondary"}>
          {gear.isFeatured ? "Yes" : "No"}
        </Badge>
      </TableCell>

      {/* Actions */}

      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="icon">
            <Pencil className="size-4" />
          </Button>

          <Button
            disabled={loading}
            onClick={handleGearDelete}
            variant="destructive"
            size="icon"
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
              </>
            ) : (
              <Trash2 className="size-4" />
            )}
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ProviderGearRow;
