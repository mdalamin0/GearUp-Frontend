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

       <div className="flex min-w-0 flex-1 flex-col lg:ml-72">
         <DashboardNavbar user={user} />

         <main className="min-w-0 flex-1 p-6 lg:p-8">{children}</main>
       </div>
     </div>
   );
};

export default DashboardLayout;
