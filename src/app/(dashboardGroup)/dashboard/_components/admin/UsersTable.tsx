"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

import StatusButton from "./StatusButton";
import { IUser } from "@/types/type";


type UsersTableProps = {
  users: IUser[];
};

const UsersTable = ({ users }: UsersTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">{user.name}</p>

                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </TableCell>

                <TableCell>
                  <Badge variant="secondary">{user.role}</Badge>
                </TableCell>

                <TableCell>
                  <Badge
                    variant={
                      user.status === "ACTIVE" ? "default" : "destructive"
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  {new Date(user.createdAt).toLocaleDateString("en-GB")}
                </TableCell>

                <TableCell className="text-right">
                  <StatusButton user={user} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={5}
                className="h-40 text-center text-muted-foreground"
              >
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersTable;
