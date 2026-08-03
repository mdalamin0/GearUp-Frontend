"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { Loader2, Star, StarOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IGear } from "@/types/type";
import { updateFeaturedStatus } from "../../_actions/admin/updateFeatureStatus";

type FeatureButtonProps = {
  gear: IGear;
};

const FeatureButton = ({ gear }: FeatureButtonProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleFeature = () => {
    startTransition(async () => {
      const res = await updateFeaturedStatus(gear.id, !gear.isFeatured);

      if (res.success) {
        toast.success(res.message);
        router.refresh();
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <Button
      onClick={handleFeature}
      disabled={isPending}
      size="sm"
      variant={gear.isFeatured ? "secondary" : "default"}
    >
      {isPending ? (
        <>
          <Loader2 className="mr-1 size-4 animate-spin" />
          Saving...
        </>
      ) : gear.isFeatured ? (
        <>
          <StarOff className="mr-1 size-4" />
          Remove
        </>
      ) : (
        <>
          <Star className="mr-1 size-4" />
          Feature
        </>
      )}
    </Button>
  );
};

export default FeatureButton;
