import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: number | string;
  icon: LucideIcon;
  description: string;
};

const StatCard = ({ title, value, icon: Icon, description }: Props) => {
  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">{value}</h2>

          <p className="mt-3 text-xs text-muted-foreground">{description}</p>
        </div>

        <div className="rounded-xl bg-primary/10 p-3">
          <Icon className="size-6 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
