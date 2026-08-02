"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { CalendarDays, Mail, Shield } from "lucide-react";

import StatusButton from "./StatusButton";
import { IUser } from "@/types/type";

type UserCardProps = {
  user: IUser;
};

const UserCard = ({ user }: UserCardProps) => {
  console.log(user);
  return (
    <Card className="overflow-hidden">
      <CardContent className="space-y-5 p-5">
        {/* Name */}

        <div>
          <h3 className="text-lg font-semibold">{user.name}</h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="size-4" />
            <span>{user.email}</span>
          </div>
        </div>

        {/* Role & Status */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="size-4 text-muted-foreground" />

            <Badge variant="secondary">{user.role}</Badge>
          </div>

          <Badge variant={user.status === "ACTIVE" ? "default" : "destructive"}>
            {user.status}
          </Badge>
        </div>

        {/* Joined */}

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="size-4" />

          <span>
            Joined {new Date(user.createdAt).toLocaleDateString("en-GB")}
          </span>
        </div>

        {/* Action */}

        <StatusButton user={user} />
      </CardContent>
    </Card>
  );
};

export default UserCard;
