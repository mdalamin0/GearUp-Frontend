"use client";

import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { User, Package, CalendarDays, DollarSign, Store } from "lucide-react";
import { IRental } from "../../types/type";



type RentalCardProps = {
  rental: IRental;
};

const RentalCard = ({ rental }: RentalCardProps) => {
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
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{rental.gearItem.title}</CardTitle>

        <p className="text-sm text-muted-foreground">{rental.gearItem.brand}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Customer */}

        <div className="flex justify-between">
          <span className="text-muted-foreground">Customer</span>

          <div className="text-right">
            <p className="font-medium">{rental.customer.name}</p>

            <p className="text-sm text-muted-foreground">
              {rental.customer.email}
            </p>
          </div>
        </div>

        {/* Category */}

        <div className="flex justify-between">
          <span className="text-muted-foreground">Category</span>

          <Badge variant="secondary">{rental.gearItem.category.name}</Badge>
        </div>

        {/* Rental Period */}

        <div className="flex justify-between">
          <span className="text-muted-foreground">Rental</span>

          <div className="text-right text-sm">
            <p>{new Date(rental.startDate).toLocaleDateString("en-GB")}</p>

            <p className="text-muted-foreground">
              {new Date(rental.endDate).toLocaleDateString("en-GB")}
            </p>
          </div>
        </div>

        {/* Quantity */}

        <div className="flex justify-between">
          <span className="text-muted-foreground">Quantity</span>

          <span>{rental.quantity}</span>
        </div>

        {/* Total */}

        <div className="flex justify-between">
          <span className="text-muted-foreground">Total</span>

          <span className="font-semibold">${rental.totalAmount}</span>
        </div>

        {/* Status */}

        <div className="flex justify-between">
          <span className="text-muted-foreground">Status</span>

          <Badge variant={getStatusVariant(rental.status)}>
            {rental.status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default RentalCard;
