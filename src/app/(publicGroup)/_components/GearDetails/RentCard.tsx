"use client";

import { CalendarDays, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TGearDetails } from "@/types/type";

const RentCard = ({gear}: TGearDetails) => {
  return (
    <Card className="sticky top-24 rounded-3xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Rent This Gear</CardTitle>

        <p className="text-sm text-muted-foreground">
          Select your rental period and quantity.
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Start Date */}

        <div className="space-y-2">
          <Label>Start Date</Label>

          <div className="relative">
            <CalendarDays className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input type="date" className="pl-10 h-11" />
          </div>
        </div>

        {/* End Date */}

        <div className="space-y-2">
          <Label>End Date</Label>

          <div className="relative">
            <CalendarDays className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input type="date" className="pl-10 h-11" />
          </div>
        </div>

        {/* Quantity */}

        <div className="space-y-2">
          <Label>Quantity</Label>

          <div className="flex items-center justify-between rounded-xl border p-2">
            <Button variant="ghost" size="icon">
              <Minus className="size-4" />
            </Button>

            <span className="text-lg font-semibold">1</span>

            <Button variant="ghost" size="icon">
              <Plus className="size-4" />
            </Button>
          </div>
        </div>

        {/* Summary */}

        <div className="rounded-2xl bg-muted/40 p-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span>Price / Day</span>

            <span className="font-medium">${gear.rentalPrice}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span>Days</span>

            <span className="font-medium">0</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span>Quantity</span>

            <span className="font-medium">1</span>
          </div>

          <div className="border-t pt-3 flex items-center justify-between">
            <span className="font-semibold">Total</span>

            <span className="text-xl font-bold text-primary">$0</span>
          </div>
        </div>

        {/* Button */}

        <Button className="h-11 w-full rounded-xl">Rent Now</Button>
      </CardContent>
    </Card>
  );
};

export default RentCard;
