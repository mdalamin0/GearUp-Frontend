import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
};

const EmptyState = ({
  icon: Icon,
  title,
  description,
  buttonLabel,
  buttonHref,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed bg-background px-6 py-16 text-center">
      <div className="mb-5 rounded-full bg-primary/10 p-4">
        <Icon className="size-10 text-primary" />
      </div>

      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>

      {buttonHref && buttonLabel && (
        <Button asChild className="mt-6 rounded-xl">
          <Link href={buttonHref}>{buttonLabel}</Link>
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
