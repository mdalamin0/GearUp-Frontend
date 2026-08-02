import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import StatusBadge from "./StatusBadge";
import ActionButton from "./ActionButton";
import { format } from "date-fns";
import { IProviderOrder } from "../../../types/type";

type OrdersTableProps = {
  orders: IProviderOrder[];
};

const OrdersTable = ({ orders }: OrdersTableProps) => {
  if (!orders.length) {
    return (
      <Card>
        <CardContent className="flex h-72 flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">No Orders Found</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            You haven&apos;t received any rental requests yet.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[260px]">Customer</TableHead>
              <TableHead>Gear</TableHead>
              <TableHead>Rental Period</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                {/* Customer */}

                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {order.customer.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-medium">{order.customer.name}</p>

                      <p className="text-sm text-muted-foreground">
                        {order.customer.email}
                      </p>
                    </div>
                  </div>
                </TableCell>

                {/* Gear */}

                <TableCell>
                  <div>
                    <p className="font-medium">{order.gearItem.title}</p>

                    <p className="text-sm text-muted-foreground">
                      Qty: {order.quantity}
                    </p>
                  </div>
                </TableCell>

                {/* Rental */}

                <TableCell>
                  <div className="text-sm">
                    <p>{format(new Date(order.startDate), "dd MMM yyyy")}</p>

                    <p className="text-muted-foreground">
                      {format(new Date(order.endDate), "dd MMM yyyy")}
                    </p>
                  </div>
                </TableCell>

                {/* Amount */}

                <TableCell>
                  <span className="font-semibold">${order.totalAmount}</span>
                </TableCell>

                {/* Status */}

                <TableCell>
                  <StatusBadge status={order.status} />
                </TableCell>

                {/* Action */}

                <TableCell className="text-right">
                  <ActionButton order={order} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrdersTable;
