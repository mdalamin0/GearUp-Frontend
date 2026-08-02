import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: string;
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <Badge
      className={cn(
        "capitalize",
        status === "PLACED" &&
          "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
        status === "CONFIRMED" && "bg-blue-100 text-blue-700 hover:bg-blue-100",
        status === "PICKED_UP" &&
          "bg-purple-100 text-purple-700 hover:bg-purple-100",
        status === "RETURNED" &&
          "bg-green-100 text-green-700 hover:bg-green-100",
        status === "CANCELLED" && "bg-red-100 text-red-700 hover:bg-red-100",
        status === "FAILED" && "bg-gray-100 text-gray-700 hover:bg-gray-100",
      )}
    >
      {status.replace("_", " ")}
    </Badge>
  );
};

export default StatusBadge;
