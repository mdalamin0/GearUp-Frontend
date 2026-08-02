
import { getAllUsers } from "../../_actions/admin/getAllUsers";
import UserCard from "../../_components/admin/UserCard";
import UsersTable from "../../_components/admin/UsersTable";
import { IUser } from "@/types/type";
import SearchInput from "@/components/shared/SearchInput";
import UsersFilters from "../../_components/admin/UsersFilters";
import GearPagination from "@/app/(publicGroup)/_components/gear/GearPagination";

const UsersPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = await searchParams;

  const users = await getAllUsers({ query });
  const meta = users.data.meta;
  const start = (meta.page - 1) * meta.limit + 1;
  const end = Math.min(meta.page * meta.limit, meta.total);

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
          <SearchInput placeholder="Search by name or email..."></SearchInput>
        </div>

        {/* Filters */}

        <div className="flex flex-col gap-3 sm:flex-row">
          {/* Role */}
          <UsersFilters></UsersFilters>
        </div>
      </div>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {start}–{end}
          </span>{" "}
          of <span className="font-semibold text-foreground">{meta.total}</span>{" "}
          users
        </p>
      </div>

      {/* Desktop */}

      <div className="hidden lg:block">
        <UsersTable users={users.data.data} />
      </div>

      {/* Mobile */}

      <div className="grid gap-4 lg:hidden">
        {users.data.data.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {users.data.data.map((user: IUser) => (
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

      {meta.totalPage > 1 && (
        <GearPagination currentPage={meta.page} totalPages={meta.totalPage} />
      )}
    </div>
  );
};

export default UsersPage;
