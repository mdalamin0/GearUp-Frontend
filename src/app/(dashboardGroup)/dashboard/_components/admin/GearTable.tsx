"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { IGear } from "@/types/type";
import FeatureButton from "./FeatureButton";



type GearTableProps = {
  gears: IGear[];
};

const GearTable = ({ gears }: GearTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Gear</TableHead>
            <TableHead>Provider</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Featured</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {gears.length > 0 ? (
            gears.map((gear) => (
              <TableRow key={gear.id}>
                {/* Gear */}

                <TableCell>
                  <div>
                    <p className="font-medium">{gear.title}</p>

                    <p className="text-sm text-muted-foreground">
                      {gear.brand}
                    </p>
                  </div>
                </TableCell>

                {/* Provider */}

                <TableCell>
                  <div>
                    <p className="font-medium">{gear.provider.name}</p>

                    <p className="text-sm text-muted-foreground">
                      {gear.provider.email}
                    </p>
                  </div>
                </TableCell>

                {/* Category */}

                <TableCell>
                  <Badge variant="secondary">{gear.category.name}</Badge>
                </TableCell>

                {/* Price */}

                <TableCell>${gear.rentalPrice}</TableCell>

                {/* Stock */}

                <TableCell>
                  <Badge variant={gear.stock > 0 ? "default" : "destructive"}>
                    {gear.stock > 0
                      ? `${gear.stock} Available`
                      : "Out of Stock"}
                  </Badge>
                </TableCell>

                {/* Featured */}

                <TableCell>
                  <Badge variant={gear.isFeatured ? "default" : "outline"}>
                    {gear.isFeatured ? "Featured" : "Normal"}
                  </Badge>
                </TableCell>

                {/* Action */}

                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/gear/${gear.id}`}>View</Link>
                    </Button>

                    <FeatureButton gear={gear} />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-40 text-center text-muted-foreground"
              >
                No gear found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default GearTable;
