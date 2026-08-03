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
import { IRental } from "../../types/type";



type RentalTableProps = {
  rentals: IRental[];
};

const RentalTable = ({ rentals }: RentalTableProps) => {
  const getStatusVariant = (status: string) => {
    if (status === "PLACED") return "secondary";
    if (status === "CONFIRMED") return "default";
    if (status === "PICKED_UP") return "outline";
    if (status === "RETURNED") return "default";
    if (status === "FAILED") return "destructive";
    if (status === "CANCELLED") return "outline";

    return "secondary";
  };

  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Gear</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Rental Period</TableHead>
            <TableHead>Qty</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rentals.map((rental) => (
            <TableRow key={rental.id}>
              <TableCell>
                <div>
                  <p className="font-medium">{rental.customer.name}</p>

                  <p className="text-sm text-muted-foreground">
                    {rental.customer.email}
                  </p>
                </div>
              </TableCell>

              <TableCell>
                <div>
                  <p className="font-medium">{rental.gearItem.title}</p>

                  <p className="text-sm text-muted-foreground">
                    {rental.gearItem.brand}
                  </p>
                </div>
              </TableCell>

              <TableCell>
                <Badge variant="secondary">
                  {rental.gearItem.category.name}
                </Badge>
              </TableCell>

              <TableCell>
                <div className="text-sm">
                  <p>
                    {new Date(rental.startDate).toLocaleDateString("en-GB")}
                  </p>

                  <p className="text-muted-foreground">
                    to {new Date(rental.endDate).toLocaleDateString("en-GB")}
                  </p>
                </div>
              </TableCell>

              <TableCell>{rental.quantity}</TableCell>

              <TableCell>${rental.totalAmount}</TableCell>

              <TableCell>
                <Badge variant={getStatusVariant(rental.status)}>
                  {rental.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RentalTable;
