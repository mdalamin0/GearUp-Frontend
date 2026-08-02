"use client";

import { CalendarDays, Package, User } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import StatusBadge from "./StatusBadge";
import ActionButton from "./ActionButton";
import { format } from "date-fns";
import { IProviderOrder } from "../../../types/type";

type OrderCardProps = {
  order: IProviderOrder;
};

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{order.customer.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div>
            <h3 className="font-semibold">{order.customer.name}</h3>

            <p className="text-sm text-muted-foreground">
              {order.customer.email}
            </p>
          </div>
        </div>

        <StatusBadge status={order.status} />
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Gear */}

        <div className="flex items-start gap-3">
          <Package className="mt-0.5 size-5 text-primary" />

          <div>
            <p className="font-medium">{order.gearItem.title}</p>

            <p className="text-sm text-muted-foreground">
              Quantity: {order.quantity}
            </p>
          </div>
        </div>

        {/* Rental */}

        <div className="flex items-start gap-3">
          <CalendarDays className="mt-0.5 size-5 text-primary" />

          <div>
            <p className="font-medium">
              {format(new Date(order.startDate), "dd MMM yyyy")}
            </p>

            <p className="text-sm text-muted-foreground">
              {format(new Date(order.endDate), "dd MMM yyyy")}
            </p>
          </div>
        </div>

        {/* Customer */}

        <div className="flex items-start gap-3">
          <User className="mt-0.5 size-5 text-primary" />

          <div>
            <p className="font-medium">Total Amount</p>

            <p className="text-sm font-semibold text-primary">
              ${order.totalAmount}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="w-full">
          <ActionButton order={order} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default OrderCard;
