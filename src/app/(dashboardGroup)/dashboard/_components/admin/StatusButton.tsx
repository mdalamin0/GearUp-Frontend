"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { IUser } from "@/types/type";
import { updateUserStatus } from "../../_actions/admin/updateUserStatus";

type StatusButtonProps = {
  user: IUser;
};

const StatusButton = ({ user }: StatusButtonProps) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleStatusUpdate = () => {
    const status = user.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE";

    startTransition(async () => {
      try {
        const res = await updateUserStatus(user.id, status);

        if (res.success) {
          toast.success(res.message);
          router.refresh();
        } else {
          toast.error(res.message);
        }
      } catch {
        toast.error("Something went wrong");
      }
    });
  };

  if (user.status === "ACTIVE") {
    return (
      <Button
        size="sm"
        variant="destructive"
        disabled={isPending}
        onClick={handleStatusUpdate}
      >
        {isPending ? "Suspending..." : "Suspend"}
      </Button>
    );
  }

  return (
    <Button size="sm" disabled={isPending} onClick={handleStatusUpdate}>
      {isPending ? "Activating..." : "Activate"}
    </Button>
  );
};

export default StatusButton;
