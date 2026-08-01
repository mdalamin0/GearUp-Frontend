import { Mail, User, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProfileInfoCard from "./ProfileInfoCard";

type Props = {
  user: {
    name: string;
    email: string;
    role: string;
    status: string;
  };
};

const ProfileCard = ({ user }: Props) => {
  return (
    <section className="overflow-hidden rounded-2xl border bg-background shadow-sm">
      {/* Top */}

      <div className="border-b p-8 flex flex-col items-center text-center">
        <div className="flex size-24 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <h2 className="mt-5 text-2xl font-semibold">{user.name}</h2>

        <p className="mt-1 text-muted-foreground">{user.email}</p>
      </div>

      {/* Details */}

      <div className="grid gap-5 p-6 md:grid-cols-2">
        <ProfileInfoCard icon={User} label="Full Name" value={user.name} />

        <ProfileInfoCard icon={Mail} label="Email Address" value={user.email} />

        <ProfileInfoCard
          icon={ShieldCheck}
          label="Role"
          value={
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {user.role}
            </span>
          }
        />

        <ProfileInfoCard
          icon={ShieldCheck}
          label="Status"
          value={
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              {user.status}
            </span>
          }
        />
      </div>

      {/* Footer */}

      <div className="border-t p-6 flex justify-end">
        <Button disabled>Edit Profile (Coming Soon)</Button>
      </div>
    </section>
  );
};

export default ProfileCard;
