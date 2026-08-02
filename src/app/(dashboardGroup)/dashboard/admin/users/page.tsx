import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";



import { getAllUsers } from "../../_actions/admin/getAllUsers";
import UserCard from "../../_components/admin/UserCard";
import UsersTable from "../../_components/admin/UsersTable";
import { IUser } from "@/types/type";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


type SearchParams = Promise<{
  page?: string;
  searchTerm?: string;
}>;

const UsersPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const query = await searchParams;

  const users = await getAllUsers();

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>

        <p className="mt-2 text-muted-foreground">
          Manage platform users, activate or suspend accounts.
        </p>
      </div>

      {/* Search */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}

        <div className="relative w-full max-w-md">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search by name or email..."
            defaultValue={query.searchTerm}
            className="pl-10"
          />
        </div>

        {/* Filters */}

        <div className="flex flex-col gap-3 sm:flex-row">
          {/* Role */}

          <Select defaultValue={query.role || "ALL"}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="ALL">All Roles</SelectItem>
              <SelectItem value="CUSTOMER">Customer</SelectItem>
              <SelectItem value="PROVIDER">Provider</SelectItem>
            </SelectContent>
          </Select>

          {/* Status */}

          <Select defaultValue={query.status || "ALL"}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="ALL">All Status</SelectItem>
              <SelectItem value="ACTIVE">Active</SelectItem>
              <SelectItem value="SUSPENDED">Suspended</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Desktop */}

      <div className="hidden lg:block">
        <UsersTable users={users.data} />
      </div>

      {/* Mobile */}

      <div className="grid gap-4 lg:hidden">
        {users.data.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {users.data.map((user: IUser) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <div className="flex h-72 items-center justify-center rounded-xl border border-dashed text-muted-foreground">
            No users found.
          </div>
        )}
      </div>

      {/* Pagination */}

      {/* {users.meta.totalPage > 1 && <Pagination meta={users.meta} />} */}
    </div>
  );
};

export default UsersPage;
