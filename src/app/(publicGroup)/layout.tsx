import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";
import Footer from "./_components/home/Footer";
import { getMe } from "@/services/getMe";

const PublicGroupLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getMe();
 
  return (
    <div>
      <Navbar user={user}></Navbar>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default PublicGroupLayout;
