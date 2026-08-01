import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  value: React.ReactNode;
};

const ProfileInfoCard = ({ icon: Icon, label, value }: Props) => {
  return (
    <div className="rounded-xl border bg-background p-5">
      <div className="mb-3 flex items-center gap-3">
        <Icon className="size-5 text-primary" />

        <h3 className="font-semibold">{label}</h3>
      </div>

      {typeof value === "string" ? <p>{value}</p> : value}
    </div>
  );
};

export default ProfileInfoCard;
