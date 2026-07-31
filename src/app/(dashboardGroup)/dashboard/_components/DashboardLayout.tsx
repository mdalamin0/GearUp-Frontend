import { getMe } from "@/services/getMe";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  const user = await getMe();

  if (!user?.success) return null;

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar user={user} />

      <div className="flex flex-1 flex-col">
        <DashboardNavbar user={user} />

        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
