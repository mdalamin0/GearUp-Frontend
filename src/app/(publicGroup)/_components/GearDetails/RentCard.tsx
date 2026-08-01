"use client";

import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { TGearDetails } from "@/types/type";
import { useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import { toast } from "sonner";
import DatePicker from "./DatePicker";
import { createRentalOrder } from "../../_actions/gear/createRentalOrder";
import { createPayment } from "@/app/(paymentGroup)/payment/_actions/createPayment";

const RentCard = ({ gear }: TGearDetails) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days =
    startDate && endDate ? differenceInCalendarDays(endDate, startDate)  : 0;
  const handleStartDate = (date: Date | undefined) => {
    if (!date) return;

    setStartDate(date);

    if (endDate && date > endDate) {
      setEndDate(undefined);
      toast.warning(
        "End date has been cleared because it is earlier than the new start date.",
      );
    }
  };

  const handleEndDate = (date: Date | undefined) => {
    if (!date) return;

    setEndDate(date);
  };

  const total = days * quantity * Number(gear.rentalPrice);

  const handleRentNow = async () => {
    if (!startDate) {
      toast.error("Please select a start date.");
      return;
    }

    if (!endDate) {
      toast.error("Please select an end date.");
      return;
    }

    if (days <= 0) {
      toast.error("Please select a valid rental period.");
      return;
    }
    const payload = {
      gearItemId: gear.id,
      quantity,
      startDate: startDate?.toISOString(),
      endDate: endDate?.toISOString(),
    };

    try {
      setLoading(true);

      // 1. Create Order
      const order = await createRentalOrder(payload);

      // 2. Initiate Payment
      const payment = await createPayment(order.id);

      // 3. Redirect to SSLCommerz
      window.location.href = payment.PayementUrl;
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };

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

          <DatePicker
            date={startDate}
            onChange={handleStartDate}
            placeholder="Select start date"
            disabled={(date) => date < today}
          />
        </div>

        {/* End Date */}
        <div className="space-y-2">
          <Label>End Date</Label>

          <DatePicker
            date={endDate}
            onChange={handleEndDate}
            placeholder="Select end date"
            disabled={(date) =>
              date < today || (startDate ? date <= startDate : true)
            }
          />
        </div>

        {/* Quantity */}

        <div className="space-y-2">
          <Label>Quantity</Label>

          <div className="flex items-center justify-between rounded-xl border p-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                if (quantity === 1) {
                  toast.warning("Minimum quantity is 1");
                  return;
                }

                setQuantity((prev) => prev - 1);
              }}
            >
              <Minus className="size-4" />
            </Button>

            <span className="text-lg font-semibold">{quantity}</span>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                if (quantity >= gear.stock) {
                  toast.error("Insufficient stock available");
                  return;
                }

                setQuantity((prev) => prev + 1);
              }}
            >
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

            <span className="font-medium">{days}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span>Quantity</span>

            <span className="font-medium">{quantity}</span>
          </div>

          <div className="border-t pt-3 flex items-center justify-between">
            <span className="font-semibold">Total</span>

            <span className="text-xl font-bold text-primary">${total}</span>
          </div>
        </div>

        {/* Button */}

        <Button
          disabled={loading}
          onClick={handleRentNow}
          className="h-11 w-full rounded-xl"
        >
          {loading ? "Redirecting..." : "Rent Now"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default RentCard;
